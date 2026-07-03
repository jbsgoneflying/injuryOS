# InjuryOS deployment

Static site (Next.js `output: "export"`) served by nginx from `/var/www/injuryos`
on the droplet, with a tiny Python collector for private-beta signups.

## Frontend deploy (after code changes)

```bash
npm run build
rsync -az --delete -e "ssh -i ~/.ssh/versefold_deploy" out/ root@165.245.143.2:/var/www/injuryos/
```

## Private-beta signup collector

- `collector.py` -> installed at `/opt/injuryos-collector/collector.py`
- `injuryos-collector.service` -> installed at `/etc/systemd/system/injuryos-collector.service`
- Listens on `127.0.0.1:3939`; nginx proxies `location /api/` to it.
- Submissions are appended as JSON lines to
  `/opt/injuryos-collector/data/submissions.jsonl`.

### Install / update the service

```bash
scp -i ~/.ssh/versefold_deploy deploy/collector.py root@165.245.143.2:/opt/injuryos-collector/collector.py
scp -i ~/.ssh/versefold_deploy deploy/injuryos-collector.service root@165.245.143.2:/etc/systemd/system/injuryos-collector.service
ssh -i ~/.ssh/versefold_deploy root@165.245.143.2 'systemctl daemon-reload && systemctl restart injuryos-collector'
```

### Read submissions

```bash
ssh -i ~/.ssh/versefold_deploy root@165.245.143.2 'cat /opt/injuryos-collector/data/submissions.jsonl'
```

Each line looks like:

```json
{"name":"...","email":"...","firm":"...","role":"...","notes":"...","ip":"...","ua":"...","ts":"..."}
```

> This is intentionally lightweight (flat JSONL file, no database). Swap in a
> real datastore / form pipeline before running meaningful traffic.
