import "./globals.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "IB Bauwerksprüfung – DIN 1076 Prüfungen",
  description:
    "Bauwerksprüfungen nach DIN 1076, ZfPBau, Zustandsbewertung und Dokumentation für kommunale und überörtliche Träger.",
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
