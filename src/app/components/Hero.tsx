"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section id="hero" className="section-padding bg-brand-light">
      <div className="container-max grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* --- Linke Seite (Text) --- */}
        <div>
          {/* Badge */}
          <span className="inline-flex items-center gap-2 bg-neutral-900 text-white text-sm sm:text-base font-medium px-5 py-2 rounded-full shadow-sm">
            <span className="w-3 h-3 bg-red-600 rounded-full" />
            Seit 2014 · DIN 1076 Prüfungen
          </span>

          {/* Headline */}
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-[3.35rem] font-heading font-bold text-neutral-900 leading-tight">
            Bauwerksprüfungen nach DIN 1076 für kommunale und überörtliche
            Träger
          </h1>

          {/* Unterzeile */}
          <p className="mt-5 text-lg sm:text-xl text-neutral-700 leading-relaxed">
            Fachgerechte Prüfungen, strukturierte Zustandsbewertungen und
            dokumentierte Empfehlungen – Grundlage für ein sicheres
            Erhaltungsmanagement.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap gap-4">
            {/* Primärer CTA */}
            <a
              href="#kontakt"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-neutral-900 text-white text-base font-medium shadow-sm hover:bg-neutral-800 transition"
            >
              Unverbindliche Anfrage stellen
            </a>

            {/* Sekundärer CTA – jetzt nur noch „Anrufen“ */}
            <a
              href="tel:+41762219016"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-full border border-neutral-400 bg-white text-neutral-900 text-base font-medium shadow-sm hover:border-neutral-700 hover:bg-neutral-100 transition"
            >
              Anrufen
            </a>
          </div>
        </div>

        {/* --- Rechte Seite (Bild) --- */}
        <div className="relative rounded-2xl overflow-hidden shadow-xl h-[340px] sm:h-[420px] lg:h-[480px]">
          <Image
            src="/images/hero/hero-bridge.jpg"
            alt="Moderne Straßenbrücke nach DIN 1076"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
