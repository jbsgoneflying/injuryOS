#!/usr/bin/env python3
"""Minimal InjuryOS private-beta signup collector.

Listens on 127.0.0.1:PORT behind nginx and appends each submission as one
JSON line to DATA_FILE. No external dependencies; stdlib only.

Deployed on the droplet at /opt/injuryos-collector/collector.py and run via
the injuryos-collector systemd service. nginx proxies /api/ to this service.
"""

import json
import os
import threading
from datetime import datetime, timezone
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer

HOST = "127.0.0.1"
PORT = int(os.environ.get("INJURYOS_COLLECTOR_PORT", "3939"))
DATA_FILE = os.environ.get(
    "INJURYOS_DATA_FILE", "/opt/injuryos-collector/data/submissions.jsonl"
)
MAX_BODY = 16 * 1024  # 16 KB
FIELD_LIMITS = {
    "name": 200,
    "email": 320,
    "firm": 200,
    "role": 200,
    "notes": 4000,
}

_write_lock = threading.Lock()


def _clean(value, limit):
    if not isinstance(value, str):
        return ""
    return value.strip()[:limit]


class Handler(BaseHTTPRequestHandler):
    server_version = "InjuryOSCollector/1.0"

    def _json(self, code, payload):
        body = json.dumps(payload).encode("utf-8")
        self.send_response(code)
        self.send_header("Content-Type", "application/json")
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        self.wfile.write(body)

    def do_GET(self):
        if self.path == "/api/health":
            self._json(200, {"ok": True})
        else:
            self._json(404, {"ok": False, "error": "not found"})

    def do_POST(self):
        if self.path != "/api/beta-signup":
            self._json(404, {"ok": False, "error": "not found"})
            return

        try:
            length = int(self.headers.get("Content-Length", "0"))
        except ValueError:
            length = 0
        if length <= 0 or length > MAX_BODY:
            self._json(400, {"ok": False, "error": "invalid body"})
            return

        raw = self.rfile.read(length)
        try:
            data = json.loads(raw.decode("utf-8"))
            if not isinstance(data, dict):
                raise ValueError
        except (ValueError, UnicodeDecodeError):
            self._json(400, {"ok": False, "error": "invalid json"})
            return

        record = {k: _clean(data.get(k), lim) for k, lim in FIELD_LIMITS.items()}

        if not record["name"] or "@" not in record["email"]:
            self._json(422, {"ok": False, "error": "name and valid email required"})
            return

        fwd = self.headers.get("X-Forwarded-For", "")
        record["ip"] = fwd.split(",")[0].strip() or self.client_address[0]
        record["ua"] = _clean(self.headers.get("User-Agent", ""), 400)
        record["ts"] = datetime.now(timezone.utc).isoformat()

        line = json.dumps(record, ensure_ascii=False) + "\n"
        try:
            with _write_lock:
                os.makedirs(os.path.dirname(DATA_FILE), exist_ok=True)
                with open(DATA_FILE, "a", encoding="utf-8") as fh:
                    fh.write(line)
        except OSError:
            self._json(500, {"ok": False, "error": "could not save"})
            return

        self._json(200, {"ok": True})

    def log_message(self, *args):
        pass  # keep journald quiet; nginx already logs requests


def main():
    os.makedirs(os.path.dirname(DATA_FILE), exist_ok=True)
    server = ThreadingHTTPServer((HOST, PORT), Handler)
    print(f"InjuryOS collector listening on {HOST}:{PORT} -> {DATA_FILE}")
    server.serve_forever()


if __name__ == "__main__":
    main()
