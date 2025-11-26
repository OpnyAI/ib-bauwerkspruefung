"use client";

import { useEffect, useState } from "react";

export default function MobileCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const hero = document.getElementById("hero");

    // Fallback: wenn kein Hero gefunden wird, einfach ab gewisser Scrollhöhe anzeigen
    if (!hero || !("IntersectionObserver" in window)) {
      const handleScroll = () => {
        setIsVisible(window.scrollY > 400);
      };

      handleScroll();
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }

    // Sauberer Weg: IntersectionObserver auf den Hero
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        // Solange Hero sichtbar ist -> CTAs ausblenden
        // Wenn Hero nicht mehr sichtbar -> CTAs anzeigen
        setIsVisible(!entry.isIntersecting);
      },
      {
        threshold: 0.2, // Hero gilt als sichtbar, solange mind. 20 % im Viewport sind
      }
    );

    observer.observe(hero);

    return () => observer.disconnect();
  }, []);

  // Wenn noch im Hero-Bereich: keine CTAs rendern
  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 md:hidden">
      <div className="bg-white/95 backdrop-blur border-t border-neutral-200 px-4 py-3">
        <div className="container-max px-0 flex items-center gap-3">
          <a
            href="tel:+41762219016"
            className="flex-1 inline-flex items-center justify-center px-4 py-2 rounded-full text-sm font-medium bg-[#111111] text-white border border-[#111111] hover:bg-black hover:border-black transition-colors"
          >
            Anrufen
          </a>
          <a
            href="mailto:info@ib-bauwerkspruefung.de"
            className="flex-1 inline-flex items-center justify-center px-4 py-2 rounded-full text-sm font-medium border border-neutral-400 text-neutral-800 bg-white hover:border-neutral-700 transition-colors"
          >
            E-Mail
          </a>
        </div>
      </div>
    </div>
  );
}
