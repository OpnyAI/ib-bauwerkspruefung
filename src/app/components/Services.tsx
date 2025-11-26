const items = [
  {
    title: "Bauwerksprüfungen nach DIN 1076",
    list: [
      "HP, EP, SP",
      "Zustandsbewertung nach RI-EBW-PRÜF",
      "Prüfberichte & Bauwerksakten",
    ],
  },
  {
    title: "Ingenieurtechnische Beurteilung",
    list: [
      "Schadensklassifizierung",
      "Instandhaltungsmaßnahmen",
      "Schadensursachen & Restnutzungsdauer",
    ],
  },
  {
    title: "Zerstörungsfreie Prüfverfahren",
    list: [
      "Bewehrungsortung",
      "Betonüberdeckung",
      "Riss-, Feuchte- & Materialdiagnostik",
    ],
  },
  {
    title: "Dokumentation & Digitalisierung",
    list: [
      "Digitale Prüfberichte",
      "Strukturierte Mängelerfassung",
      "Erhaltungssystem-Aufbereitung",
    ],
  },
  {
    title: "SIB-Bauwerke",
    list: [
      "Datenaufnahme & Pflege",
      "Prüfergebnisse nach SIB-Schema",
      "Integration von Zustandsdaten",
    ],
  },
  {
    title: "Begleitung von Erhaltungsmaßnahmen",
    list: [
      "Fachtechnische Beratung",
      "Ausschreibung & Planung",
      "Qualitätssicherung",
    ],
  },
];

export default function Services() {
  return (
    <section id="leistungen" className="section-padding bg-white">
      <div className="container-max">
        <h2 className="text-2xl font-semibold text-[#111111]">
          Leistungen im Überblick
        </h2>

        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {items.map((s) => (
            <div
              key={s.title}
              className="p-5 border border-neutral-200 rounded-xl bg-[#F9FAFB]"
            >
              <h3 className="text-lg font-semibold text-[#111111]">
                {s.title}
              </h3>
              <ul className="text-sm text-[#1A1A1A]/75 mt-3 space-y-1">
                {s.list.map((l) => (
                  <li key={l}>• {l}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
