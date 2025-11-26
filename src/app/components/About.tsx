export default function About() {
  return (
    <section id="ueber-uns" className="section-padding bg-white">
      <div className="container-max grid lg:grid-cols-2 gap-8">
        {/* Linke Seite */}
        <div>
          <h2 className="text-2xl font-semibold text-[#111111]">
            Über unser Ingenieurbüro
          </h2>

          <p className="mt-3 text-sm text-[#1A1A1A]/75">
            Seit 2014 spezialisiert auf zustandsorientierte Bauwerksprüfungen,
            Bewertung, Dokumentation und Datenaufbereitung für Erhaltungssysteme
            nach geltenden Regelwerken.
          </p>

          <div className="mt-6 p-4 border border-neutral-200 rounded-xl bg-[#F9FAFB]">
            <h3 className="font-semibold text-[#111111] text-sm">
              Geschäftsführer
            </h3>
            <p className="text-sm text-[#1A1A1A]/75 mt-1">
              Igbal Barekzei, M.Eng.
              <br />
              VFIB-Bauwerksprüfer · DIN 1076
            </p>
          </div>

          <div className="mt-4 p-4 border border-neutral-200 rounded-xl bg-[#F9FAFB]">
            <h3 className="font-semibold text-[#111111] text-sm">Standort</h3>
            <p className="text-sm text-[#1A1A1A]/75 mt-1">
              Wolfshöhle 18A
              <br />
              79777 Ühlingen-Birkendorf
            </p>
          </div>
        </div>

        {/* Rechte Seite */}
        <div className="p-5 border border-neutral-200 rounded-xl bg-[#F9FAFB] text-sm text-[#1A1A1A]/80">
          <h3 className="font-semibold text-[#111111] text-sm">
            Qualitätsverständnis
          </h3>

          <p className="mt-2">
            Fachgerechte und nachvollziehbare Bauwerksprüfung bildet die
            Grundlage für sichere und belastbare Erhaltungsentscheidungen. Dazu
            gehören eine strukturierte Zustandsaufnahme, klare
            Bewertungskriterien und eine dokumentierte Ableitung von
            Maßnahmenempfehlungen.
          </p>

          <p className="mt-3">
            Unsere Prüfberichte werden nach den Vorgaben der DIN 1076 sowie der
            zugehörigen Richtlinien erstellt und so aufbereitet, dass sie
            unmittelbar für Erhaltungsplanung, Budgetierung und Abstimmungen mit
            Behörden genutzt werden können. Dadurch entsteht eine belastbare
            Entscheidungsgrundlage über den gesamten Lebenszyklus der Bauwerke.
          </p>

          <p className="mt-3">
            Neben der reinen Befundaufnahme legen wir großen Wert auf
            Transparenz: Jede Bewertung ist nachvollziehbar hergeleitet,
            Fotodokumentationen sind klar strukturiert und Empfehlungen werden
            anhand anerkannter Kriterien priorisiert.
          </p>
        </div>
      </div>
    </section>
  );
}
