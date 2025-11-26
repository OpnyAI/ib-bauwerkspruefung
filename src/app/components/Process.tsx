const steps = [
  {
    t: "1. Bestandsaufnahme",
    d: "Sichtung von Bauwerksakten, Unterlagen & Fristen.",
  },
  {
    t: "2. Vor-Ort-Prüfung",
    d: "Prüfung nach DIN 1076 – inkl. Messungen & ZfPBau.",
  },
  {
    t: "3. Auswertung",
    d: "Bewertung nach RI-EBW-PRÜF und geltenden Richtlinien.",
  },
  {
    t: "4. Prüfbericht",
    d: "Dokumentation, Mängelerfassung & Maßnahmenempfehlungen.",
  },
  {
    t: "5. Datenübergabe",
    d: "Aufbereitung für Erhaltungssysteme (z. B. SIB), inkl. Qualitätssicherung.",
  },
];

export default function Process() {
  return (
    <section id="vorgehen" className="section-padding">
      <div className="container-max">
        <h2 className="text-2xl font-semibold text-[#111111]">
          Vorgehensweise
        </h2>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((s) => (
            <div
              key={s.t}
              className="p-5 border border-neutral-200 rounded-xl bg-white"
            >
              <h3 className="font-semibold text-sm text-[#111111]">{s.t}</h3>
              <p className="mt-2 text-xs text-[#1A1A1A]/75">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
