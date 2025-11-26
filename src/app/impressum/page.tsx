// app/impressum/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum | IB Bauwerksprüfung",
  description:
    "Impressum der IB Bauwerksprüfung UG – Anbieterkennzeichnung nach § 5 TMG.",
};

export default function ImpressumPage() {
  return (
    <main className="section-padding bg-brand-light">
      <div className="container-max max-w-3xl">
        <h1 className="text-3xl sm:text-4xl font-heading font-bold text-neutral-900 mb-6">
          Impressum
        </h1>

        <p className="text-sm text-neutral-500 mb-10">
          Angaben gemäß § 5 TMG und § 18 Abs. 2 MStV.
        </p>

        {/* Anbieter */}
        <section className="mb-10 space-y-2">
          <h2 className="text-xl font-semibold text-neutral-900">
            Verantwortlicher Diensteanbieter
          </h2>
          <p className="text-neutral-800">
            IB Bauwerksprüfung UG (haftungsbeschränkt)
            <br />
            Wolfshöhle 18A
            <br />
            79777 Ühlingen-Birkendorf
            <br />
            Deutschland
          </p>
        </section>

        {/* Kontakt */}
        <section className="mb-10 space-y-2">
          <h2 className="text-xl font-semibold text-neutral-900">Kontakt</h2>
          <p className="text-neutral-800">
            Tel.:{" "}
            <a href="tel:+41762219016" className="text-red-600 hover:underline">
              +41 76 221 90 16
            </a>
            <br />
            E-Mail:{" "}
            <a
              href="mailto:info@ib-bauwerkspruefung.de"
              className="text-red-600 hover:underline"
            >
              info@ib-bauwerkspruefung.de
            </a>
          </p>
        </section>

        {/* Vertretung */}
        <section className="mb-10 space-y-2">
          <h2 className="text-xl font-semibold text-neutral-900">
            Vertretungsberechtigte Person
          </h2>
          <p className="text-neutral-800">
            Geschäftsführer: Igbal Barekzei, M.Eng.
          </p>
        </section>

        {/* Register */}
        <section className="mb-10 space-y-2">
          <h2 className="text-xl font-semibold text-neutral-900">
            Registereintrag
          </h2>
          <p className="text-neutral-800">
            Eingetragen im Handelsregister.
            <br />
            Registergericht: Freiburg i. Breisgau
            <br />
            Registernummer: HRB 733912
          </p>
        </section>

        {/* USt-ID (falls vorhanden; sonst Satz anpassen oder entfernen) */}
        <section className="mb-10 space-y-2">
          <h2 className="text-xl font-semibold text-neutral-900">
            Umsatzsteuer-ID
          </h2>
          <p className="text-neutral-800">
            Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG:
            <br />
            {/* TODO: echte USt-ID eintragen oder Satz entfernen */}
            Wird nachgereicht.
          </p>
        </section>

        {/* Berufsbezeichnung / Aufsichtsbehörde – falls gewünscht */}
        <section className="mb-10 space-y-2">
          <h2 className="text-xl font-semibold text-neutral-900">
            Berufsrechtliche Angaben
          </h2>
          <p className="text-neutral-800 text-sm leading-relaxed">
            Die Tätigkeit der IB Bauwerksprüfung UG umfasst ingenieurtechnische
            Bauwerksprüfungen nach DIN 1076 sowie damit verbundene
            Beratungsleistungen. Es besteht eine Berufshaftpflichtversicherung
            mit angemessener Deckungssumme.
          </p>
        </section>

        {/* Haftungsausschluss */}
        <section className="mb-10 space-y-2">
          <h2 className="text-xl font-semibold text-neutral-900">
            Haftung für Inhalte
          </h2>
          <p className="text-neutral-800 text-sm leading-relaxed">
            Die Inhalte dieser Website wurden mit größter Sorgfalt erstellt. Für
            die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können
            wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir
            gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den
            allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir
            als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder
            gespeicherte fremde Informationen zu überwachen oder nach Umständen
            zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
          </p>
        </section>

        <section className="mb-10 space-y-2">
          <h2 className="text-xl font-semibold text-neutral-900">
            Haftung für Links
          </h2>
          <p className="text-neutral-800 text-sm leading-relaxed">
            Unser Angebot enthält gegebenenfalls Links zu externen Webseiten
            Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können
            wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die
            Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder
            Betreiber der Seiten verantwortlich. Bei bekannt werden von
            Rechtsverletzungen werden wir derartige Links umgehend entfernen.
          </p>
        </section>

        {/* Urheberrecht */}
        <section className="mb-10 space-y-2">
          <h2 className="text-xl font-semibold text-neutral-900">
            Urheberrecht
          </h2>
          <p className="text-neutral-800 text-sm leading-relaxed">
            Die auf dieser Website veröffentlichten Inhalte und Werke
            unterliegen dem deutschen Urheberrecht. Vervielfältigung,
            Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
            Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung des
            jeweiligen Rechteinhabers. Downloads und Kopien dieser Seite sind
            nur für den privaten, nicht kommerziellen Gebrauch gestattet, sofern
            nicht ausdrücklich anders angegeben.
          </p>
        </section>

        {/* Hinweis */}
        <p className="text-[11px] text-neutral-500">
          Hinweis: Dieses Impressum ist eine allgemeine Vorlage und ersetzt
          keine individuelle Rechtsberatung. Bitte lassen Sie den Text im
          Zweifel von einer qualifizierten Rechtsberatung prüfen.
        </p>
      </div>
    </main>
  );
}
