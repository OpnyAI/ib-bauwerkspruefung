import "./globals.css";

export const metadata = {
  title: "IB Bauwerksprüfung – DIN 1076 Prüfungen",
  description:
    "Bauwerksprüfungen nach DIN 1076, ZfPBau, Zustandsbewertung und Dokumentation für kommunale und überörtliche Träger.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
