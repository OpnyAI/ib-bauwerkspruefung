// app/api/contact/route.ts
import { NextRequest, NextResponse } from "next/server";

const MIN_FILL_TIME_MS = 3000; // mind. 3 Sekunden zum Ausfüllen

const SPAM_KEYWORDS = [
  "casino",
  "viagra",
  "porn",
  "crypto",
  "bitcoin",
  "loan",
  "forex",
];

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const {
      name,
      email,
      phone, // neu: Telefonnummer (optional)
      message,
      company, // Honeypot
      startedAt, // Timestamp (ms)
    } = body ?? {};

    // 1) Basis-Validierung (Name, E-Mail, Nachricht Pflicht)
    if (
      !name ||
      typeof name !== "string" ||
      !email ||
      typeof email !== "string" ||
      !message ||
      typeof message !== "string"
    ) {
      return NextResponse.json(
        { error: "Ungültige Eingabedaten." },
        { status: 400 }
      );
    }

    // Optional: Phone-Typ absichern (wenn vorhanden)
    if (phone && typeof phone !== "string") {
      return NextResponse.json(
        { error: "Ungültige Telefonnummer." },
        { status: 400 }
      );
    }

    // 2) Honeypot-Feld: Wenn ausgefüllt -> Spam
    if (typeof company === "string" && company.trim().length > 0) {
      // Kein Fehler nach außen, einfach "OK" vortäuschen
      return NextResponse.json({ ok: true }, { status: 200 });
    }

    // 3) Zeitbasierter Check: zu schnell ausgefüllt -> Spam
    const startedAtNumber = Number(startedAt);
    if (!Number.isNaN(startedAtNumber)) {
      const diff = Date.now() - startedAtNumber;
      if (diff < MIN_FILL_TIME_MS) {
        return NextResponse.json({ ok: true }, { status: 200 });
      }
    }

    // 4) Simple Spam-Heuristiken
    const lowerMessage = message.toLowerCase();

    // Viele Links?
    const linkMatches = lowerMessage.match(/https?:\/\//g);
    if (linkMatches && linkMatches.length > 3) {
      return NextResponse.json({ ok: true }, { status: 200 });
    }

    // Spam-Keywords?
    if (SPAM_KEYWORDS.some((kw) => lowerMessage.includes(kw))) {
      return NextResponse.json({ ok: true }, { status: 200 });
    }

    // 5) Hier würdest du die Mail verschicken (SMTP, Resend, etc.)
    // ------------------------------------------------------------
    // Beispiel: placeholder – hier kannst du später deinen Mailversand einbauen
    console.log("Neue Kontaktanfrage:", {
      name,
      email,
      phone,
      message,
    });

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (error) {
    console.error("Fehler im Kontakt-Endpoint:", error);
    return NextResponse.json(
      { error: "Fehler beim Senden der Nachricht." },
      { status: 500 }
    );
  }
}
