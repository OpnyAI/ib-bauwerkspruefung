import "./globals.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "IB Bauwerksprüfung – DIN 1076 Prüfungen",
  description:
    "Bauwerksprüfungen nach DIN 1076, ZfPBau, Zustandsbewertung und Dokumentation für kommunale und überörtliche Träger.",
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
