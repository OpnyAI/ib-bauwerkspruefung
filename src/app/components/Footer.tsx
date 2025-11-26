"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-neutral-200 pt-10 pb-28 md:pb-8 mt-8">
      <div className="container-max px-4 sm:px-6 grid gap-8 md:grid-cols-3 text-sm">
        {/* Spalte 1 – Logo + Kurzbeschreibung */}
        <div>
          <div className="flex items-center gap-3 mb-3">
            <Image
              src="/images/logo/logo-icon-light.png"
              alt="IB Bauwerksprüfung Logo"
              width={32}
              height={32}
              className="object-contain"
            />
            <div>
              <p className="font-semibold text-sm">IB Bauwerksprüfung</p>
              <p className="text-xs text-neutral-400">
                Ingenieure · Sachverständige
              </p>
            </div>
          </div>

          <p className="text-xs text-neutral-400 max-w-xs leading-relaxed">
            Bauwerksprüfungen nach DIN 1076, ingenieurtechnische Beurteilungen
            und digitale Dokumentation – Grundlage für belastbare
            Erhaltungsentscheidungen.
          </p>
        </div>

        {/* Spalte 2 – Kontakt */}
        <div>
          <h3 className="text-sm font-semibold mb-3">Kontakt</h3>

          <p className="text-xs text-neutral-200">
            Wolfshöhle 18A
            <br />
            79777 Ühlingen-Birkendorf
          </p>

          <p className="mt-2 text-xs">
            Tel:{" "}
            <a
              href="tel:+41762219016"
              className="text-[#D72638] hover:underline"
            >
              +41 76 221 90 16
            </a>
            <br />
            E-Mail:{" "}
            <a
              href="mailto:info@ib-bauwerkspruefung.de"
              className="text-[#D72638] hover:underline break-all"
            >
              info@ib-bauwerkspruefung.de
            </a>
          </p>

          <p className="mt-2 text-xs text-neutral-400">
            Geschäftsführer: Igbal Barekzei, M.Eng.
          </p>
        </div>

        {/* Spalte 3 – Navigation */}
        <div>
          <h3 className="text-sm font-semibold mb-3">Navigation</h3>

          <div className="flex flex-col gap-1 text-xs">
            <a href="#leistungen" className="hover:text-[#D72638]">
              Leistungen
            </a>
            <a href="#partner" className="hover:text-[#D72638]">
              Partner &amp; Auftraggeber
            </a>
            <a href="#vorgehen" className="hover:text-[#D72638]">
              Vorgehensweise
            </a>
            <a href="#ueber-uns" className="hover:text-[#D72638]">
              Über unser Büro
            </a>
            <a href="#kontakt" className="hover:text-[#D72638]">
              Kontakt
            </a>
          </div>

          <div className="mt-4 flex gap-4 text-xs text-neutral-400">
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="hover:text-[#D72638]"
            >
              Nach oben
            </button>
          </div>

          <div className="mt-4 flex gap-4 text-xs text-neutral-500">
            <a href="/impressum" className="hover:text-[#D72638]">
              Impressum
            </a>
            <a href="/datenschutz" className="hover:text-[#D72638]">
              Datenschutz
            </a>
          </div>
        </div>
      </div>

      {/* Copyright-Zeile */}
      <div className="border-t border-neutral-700 mt-8">
        <div className="container-max px-4 sm:px-6 py-4 flex flex-col md:flex-row items-start md:items-center justify-between text-[11px] text-neutral-500 leading-relaxed">
          <p>
            © {new Date().getFullYear()} IB Bauwerksprüfung UG
            (haftungsbeschränkt)
          </p>
          <p>
            HRB 733912 · Registergericht Freiburg i. Breisgau · St.-Nr.
            20029/00126
          </p>
        </div>
      </div>
    </footer>
  );
}
