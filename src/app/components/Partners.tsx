import Image from "next/image";

const partners = [
  {
    name: "IGS Ingenieure",
    subtitle: "Weimar",
    logo: "/partners/igs-weimar.png",
  },
  {
    name: "Bechert und Partner",
    subtitle: "Prof. Dr.-Ing. Heinrich Bechert",
    logo: "/partners/bechert-partner.png",
  },
  {
    name: "SWECO",
    subtitle: "Frankfurt",
    logo: "/partners/sweco-frankfurt.png",
  },
  {
    name: "Stadtwerke München",
    subtitle: "Öffentlicher Auftraggeber",
    logo: "/partners/stadtwerke-muenchen.png",
  },
  {
    name: "Freistaat Sachsen",
    subtitle: "Öffentlicher Auftraggeber",
    logo: "/partners/freistaat-sachsen.png",
  },
  {
    name: "VFIB",
    subtitle: "Verein für Ingenieure der Bauwerksprüfung",
    logo: "/partners/vfib.png",
  },
];

export default function Partners() {
  const items = [...partners, ...partners];

  return (
    <section className="section-padding bg-[#F5F5F4]" id="partner">
      <div className="container-max">
        <h2 className="text-3xl font-semibold text-[#111]">
          Partner & Auftraggeber
        </h2>
        <p className="mt-3 text-base text-[#1A1A1A]/70 max-w-2xl">
          Eine Auswahl an Ingenieurbüros, Unternehmen und öffentlichen Trägern,
          mit denen wir erfolgreich zusammenarbeiten.
        </p>

        <div className="partner-slider border border-[#1A1A1A]/15 rounded-2xl bg-white mt-10 py-10">
          <div className="partner-track gap-20 px-10">
            {items.map((p, i) => (
              <div key={i} className="flex items-center gap-6 min-w-[260px]">
                {/* Logo-Box – deutlich größer */}
                <div className="relative h-20 w-48 border border-[#1A1A1A]/15 rounded-lg bg-white overflow-hidden flex items-center justify-center">
                  <Image
                    src={p.logo}
                    alt={p.name}
                    fill
                    sizes="220px"
                    className="object-contain p-3"
                  />
                </div>

                {/* Text rechts daneben */}
                <div className="flex flex-col">
                  <p className="text-base font-semibold text-[#111]">
                    {p.name}
                  </p>
                  <p className="text-sm text-[#1A1A1A]/60">{p.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="text-xs text-[#1A1A1A]/50 mt-4">
          Logos dienen der Illustration bestehender Zusammenarbeit. Rechte an
          allen Marken liegen bei den jeweiligen Unternehmen.
        </p>
      </div>
    </section>
  );
}
