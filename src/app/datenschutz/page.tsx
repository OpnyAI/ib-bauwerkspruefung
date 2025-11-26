// app/datenschutz/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutzerklärung | IB Bauwerksprüfung",
  description:
    "Informationen zum Datenschutz der IB Bauwerksprüfung UG gemäß DSGVO.",
};

export default function DatenschutzPage() {
  return (
    <main className="section-padding bg-brand-light">
      <div className="container-max max-w-3xl">
        <h1 className="text-3xl sm:text-4xl font-heading font-bold text-neutral-900 mb-6">
          Datenschutzerklärung
        </h1>

        <p className="text-sm text-neutral-500 mb-10">
          Diese Datenschutzerklärung informiert Sie über die Verarbeitung
          personenbezogener Daten beim Besuch dieser Website gemäß den Vorgaben
          der Datenschutz-Grundverordnung (DSGVO).
        </p>

        {/* Verantwortlicher */}
        <section className="mb-10 space-y-2">
          <h2 className="text-xl font-semibold text-neutral-900">
            1. Verantwortlicher
          </h2>
          <p className="text-neutral-800 text-sm leading-relaxed">
            Verantwortlich für die Datenverarbeitung auf dieser Website ist:
            <br />
            <br />
            IB Bauwerksprüfung UG (haftungsbeschränkt)
            <br />
            Wolfshöhle 18A
            <br />
            79777 Ühlingen-Birkendorf
            <br />
            Deutschland
            <br />
            <br />
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

        {/* Hosting */}
        <section className="mb-10 space-y-2">
          <h2 className="text-xl font-semibold text-neutral-900">
            2. Hosting der Website
          </h2>
          <p className="text-neutral-800 text-sm leading-relaxed">
            Diese Website wird bei einem externen Dienstleister gehostet. Die
            personenbezogenen Daten, die auf dieser Website erfasst werden,
            werden auf den Servern des Hosters verarbeitet. Dies umfasst
            insbesondere IP-Adressen, Meta- und Kommunikationsdaten, Logdateien,
            Webseitenzugriffe und sonstige Daten, die über einen Browser
            übermittelt werden.
            <br />
            <br />
            Der Einsatz des Hosters erfolgt auf Grundlage von Art. 6 Abs. 1 lit.
            f DSGVO. Wir haben ein berechtigtes Interesse an einer sicheren und
            effizienten Bereitstellung dieser Website. Sofern eine entsprechende
            Einwilligung abgefragt wird, erfolgt die Verarbeitung ausschließlich
            auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO; die Einwilligung ist
            jederzeit widerrufbar.
          </p>
        </section>

        {/* Server-Logfiles */}
        <section className="mb-10 space-y-2">
          <h2 className="text-xl font-semibold text-neutral-900">
            3. Server-Logfiles
          </h2>
          <p className="text-neutral-800 text-sm leading-relaxed">
            Beim Aufruf dieser Website werden durch Ihren Browser automatisch
            bestimmte Informationen an den Server übermittelt und in sogenannten
            Server-Logfiles gespeichert. Dies sind insbesondere:
          </p>
          <ul className="list-disc list-inside text-neutral-800 text-sm leading-relaxed mt-2">
            <li>IP-Adresse des anfragenden Endgeräts</li>
            <li>Datum und Uhrzeit des Zugriffs</li>
            <li>Name und URL der abgerufenen Datei</li>
            <li>Website, von der aus der Zugriff erfolgt (Referrer-URL)</li>
            <li>verwendeter Browser und ggf. Betriebssystem</li>
          </ul>
          <p className="text-neutral-800 text-sm leading-relaxed mt-2">
            Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f
            DSGVO. Unser berechtigtes Interesse liegt in der technischen
            Bereitstellung der Website, der Gewährleistung von Stabilität und
            Sicherheit sowie der Fehleranalyse. Eine Zusammenführung dieser
            Daten mit anderen Datenquellen erfolgt nicht. Die Logfiles werden in
            der Regel nach kurzer Zeit automatisch gelöscht.
          </p>
        </section>

        {/* Kontaktformular */}
        <section className="mb-10 space-y-2" id="kontaktformular-datenschutz">
          <h2 className="text-xl font-semibold text-neutral-900">
            4. Kontaktaufnahme per Formular oder E-Mail
          </h2>
          <p className="text-neutral-800 text-sm leading-relaxed">
            Wenn Sie uns über das Kontaktformular oder per E-Mail eine Anfrage
            senden, werden die von Ihnen angegebenen Daten (
            <strong>Name, E-Mail-Adresse, Telefonnummer, Nachricht</strong>) zum
            Zweck der Bearbeitung Ihrer Anfrage und für den Fall von
            Anschlussfragen gespeichert.
          </p>
          <p className="text-neutral-800 text-sm leading-relaxed">
            Rechtsgrundlage für die Verarbeitung ist Art. 6 Abs. 1 lit. b DSGVO,
            sofern Ihre Anfrage auf den Abschluss oder die Durchführung eines
            Vertrags gerichtet ist. In allen anderen Fällen erfolgt die
            Verarbeitung auf Grundlage unseres berechtigten Interesses an der
            Bearbeitung von Anfragen (Art. 6 Abs. 1 lit. f DSGVO).
          </p>
          <p className="text-neutral-800 text-sm leading-relaxed">
            Die im Rahmen der Kontaktaufnahme anfallenden Daten verbleiben bei
            uns, bis der Zweck der Speicherung entfällt (z.&nbsp;B. nach
            abgeschlossener Bearbeitung der Anfrage) oder Sie uns zur Löschung
            auffordern, sofern keine gesetzlichen Aufbewahrungspflichten
            entgegenstehen.
          </p>
        </section>

        {/* Anti-Spam-Maßnahmen im Formular */}
        <section className="mb-10 space-y-2">
          <h2 className="text-xl font-semibold text-neutral-900">
            5. Schutz vor Spam-Anfragen
          </h2>
          <p className="text-neutral-800 text-sm leading-relaxed">
            Um unser Kontaktformular vor automatisierten Spam-Anfragen zu
            schützen, setzen wir technische Schutzmechanismen ein (z.&nbsp;B.
            zeitbasierte Prüfungen und nicht sichtbare Eingabefelder, die von
            automatisierten Bots typischerweise ausgefüllt werden). Diese
            Mechanismen werten ausschließlich die Formularnutzung aus und dienen
            nicht der Profilbildung.
          </p>
          <p className="text-neutral-800 text-sm leading-relaxed">
            Die Verarbeitung beruht auf Art. 6 Abs. 1 lit. f DSGVO. Unser
            berechtigtes Interesse liegt in der Absicherung der
            Kontaktmöglichkeiten und dem Schutz unserer Systeme vor Missbrauch.
          </p>
        </section>

        {/* Cookies (falls keine aktiv genutzt: neutral halten) */}
        <section className="mb-10 space-y-2">
          <h2 className="text-xl font-semibold text-neutral-900">
            6. Cookies und ähnliche Technologien
          </h2>
          <p className="text-neutral-800 text-sm leading-relaxed">
            Derzeit ist die Website so ausgelegt, dass keine Tracking-Cookies
            oder vergleichbare Technologien zu Marketing- oder Analysezwecken
            eingesetzt werden. Sofern zukünftig zusätzliche Dienste eingebunden
            werden (z.&nbsp;B. Analysewerkzeuge, eingebettete Karten oder
            externe Medien), wird diese Datenschutzerklärung entsprechend
            erweitert und – falls erforderlich – ein Einwilligungsbanner
            integriert.
          </p>
        </section>

        {/* Rechte der betroffenen Personen */}
        <section className="mb-10 space-y-2">
          <h2 className="text-xl font-semibold text-neutral-900">
            7. Ihre Rechte als betroffene Person
          </h2>
          <p className="text-neutral-800 text-sm leading-relaxed">
            Sie haben im Rahmen der gesetzlichen Bestimmungen jederzeit das
            Recht auf:
          </p>
          <ul className="list-disc list-inside text-neutral-800 text-sm leading-relaxed mt-2">
            <li>
              Auskunft über die bei uns gespeicherten personenbezogenen Daten
            </li>
            <li>Berichtigung unrichtiger oder Vervollständigung Ihrer Daten</li>
            <li>
              Löschung Ihrer Daten, sofern dem keine Aufbewahrungspflichten
              entgegenstehen
            </li>
            <li>Einschränkung der Verarbeitung</li>
            <li>
              Widerspruch gegen die Verarbeitung aus Gründen Ihrer besonderen
              Situation
            </li>
            <li>
              Übertragung der von Ihnen bereitgestellten Daten
              (Datenportabilität)
            </li>
          </ul>
          <p className="text-neutral-800 text-sm leading-relaxed mt-2">
            Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie
            sich jederzeit über die oben angegebenen Kontaktdaten an uns wenden.
          </p>
        </section>

        {/* Beschwerderecht */}
        <section className="mb-10 space-y-2">
          <h2 className="text-xl font-semibold text-neutral-900">
            8. Beschwerderecht bei der Aufsichtsbehörde
          </h2>
          <p className="text-neutral-800 text-sm leading-relaxed">
            Sie haben zudem das Recht, sich bei einer
            Datenschutzaufsichtsbehörde über die Verarbeitung Ihrer
            personenbezogenen Daten zu beschweren. Zuständig ist in der Regel
            die Aufsichtsbehörde des Bundeslandes, in dem unser Unternehmen
            seinen Sitz hat.
          </p>
        </section>

        {/* Speicherfristen */}
        <section className="mb-10 space-y-2">
          <h2 className="text-xl font-semibold text-neutral-900">
            9. Speicherdauer
          </h2>
          <p className="text-neutral-800 text-sm leading-relaxed">
            Sofern in dieser Datenschutzerklärung keine speziellere
            Speicherdauer genannt wird, verbleiben personenbezogene Daten bei
            uns, bis der Zweck der Verarbeitung entfällt oder Sie von Ihren
            Rechten (z.&nbsp;B. Löschung, Widerspruch) Gebrauch machen und keine
            gesetzlichen Aufbewahrungspflichten entgegenstehen.
          </p>
        </section>

        {/* Stand */}
        <p className="text-[11px] text-neutral-500">
          Stand: {new Date().getFullYear()} – Diese Datenschutzerklärung ist
          eine allgemeine Vorlage und ersetzt keine individuelle Rechtsberatung.
          Bitte lassen Sie den Text im Zweifel durch eine qualifizierte
          datenschutzrechtliche Beratung prüfen.
        </p>
      </div>
    </main>
  );
}
