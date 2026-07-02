import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "InjuryOS | AI-Native Case Acquisition Infrastructure",
  description:
    "InjuryOS connects demand capture, intake, attribution, follow-up, and signed-case feedback for plaintiff injury firms.",
  metadataBase: new URL("https://injuryos.io"),
  openGraph: {
    title: "InjuryOS | AI-Native Case Acquisition Infrastructure",
    description:
      "InjuryOS connects demand capture, intake, attribution, follow-up, and signed-case feedback for plaintiff injury firms.",
    url: "https://injuryos.io",
    siteName: "InjuryOS",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "InjuryOS | AI-Native Case Acquisition Infrastructure",
    description:
      "InjuryOS connects demand capture, intake, attribution, follow-up, and signed-case feedback for plaintiff injury firms.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full">
        <div className="ambient-bg" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
