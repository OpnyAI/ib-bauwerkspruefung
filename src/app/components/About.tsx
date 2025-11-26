export default function About() {
  return (
    <section id="ueber-uns" className="section-padding bg-white">
      <div className="container-max grid lg:grid-cols-2 gap-8">
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
        </div>
      </div>
    </section>
  );
}
