export default function TrustSection() {
  return (
    <section className="section-padding">
      <div className="container-max grid sm:grid-cols-3 gap-6">
        <div className="p-4 border border-neutral-200 rounded-xl bg-white">
          <h3 className="font-semibold text-sm text-[#111111]">
            Anerkannte Befähigung
          </h3>
          <p className="mt-2 text-xs text-[#1A1A1A]/70">
            VFIB-Mitgliedschaft · Prüfungen HP, EP, SP nach DIN 1076.
          </p>
        </div>

        <div className="p-4 border border-neutral-200 rounded-xl bg-white">
          <h3 className="font-semibold text-sm text-[#111111]">
            Methodisch gesichert
          </h3>
          <p className="mt-2 text-xs text-[#1A1A1A]/70">
            Nachvollziehbare Prozesse für belastbare Erhaltungsentscheidungen.
          </p>
        </div>

        <div className="p-4 border border-neutral-200 rounded-xl bg-white">
          <h3 className="font-semibold text-sm text-[#111111]">
            Fokus auf Erhaltungssysteme
          </h3>
          <p className="mt-2 text-xs text-[#1A1A1A]/70">
            Aufbereitung der Prüfdaten für SIB-Bauwerke &amp; digitale Systeme.
          </p>
        </div>
      </div>
    </section>
  );
}
