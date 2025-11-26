"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const nav = [
  { label: "Leistungen", href: "#leistungen" },
  { label: "Partner", href: "#partner" },
  { label: "Vorgehen", href: "#vorgehen" },
  { label: "Über uns", href: "#ueber-uns" },
  { label: "Kontakt", href: "#kontakt" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Fester Header */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-neutral-200">
        <div className="container-max px-4 sm:px-6 flex items-center justify-between py-3">
          {/* Logo + Text */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/logo/logo-icon.png"
              alt="IB Bauwerksprüfung Logo"
              width={40}
              height={40}
              className="object-contain"
              priority
            />
            <div className="-mt-1">
              <p className="font-semibold text-sm sm:text-base text-[#111111] leading-none">
                IB Bauwerksprüfung
              </p>
              <p className="text-[11px] text-neutral-500 leading-none mt-1">
                Ingenieure · Sachverständige
              </p>
            </div>
          </Link>

          {/* Desktop-Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-neutral-700 hover:text-[#111111] transition-colors"
              >
                {item.label}
              </a>
            ))}

            <a
              href="#kontakt"
              className="px-4 py-2 rounded-full text-sm bg-[#111111] text-white border border-[#111111] hover:bg-black hover:border-black transition-colors"
            >
              Anfrage stellen
            </a>
          </nav>

          {/* Mobile: Kontakt + Burger-Menü */}
          <div className="flex items-center gap-2 md:hidden">
            <a
              href="#kontakt"
              className="px-3 py-1.5 rounded-full text-xs bg-[#111111] text-white border border-[#111111] hover:bg-black hover:border-black transition-colors"
            >
              Kontakt
            </a>

            <button
              type="button"
              aria-label="Menü öffnen"
              onClick={() => setOpen((v) => !v)}
              className="h-8 w-8 rounded-full border border-neutral-300 flex items-center justify-center"
            >
              <span className="block w-4 border-t border-neutral-900 relative">
                <span className="absolute -top-1 w-4 border-t border-neutral-900" />
                <span className="absolute top-1 w-4 border-t border-neutral-900" />
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Overlay-Menü */}
      {open && (
        <div
          className="fixed inset-0 z-30 bg-black/40 md:hidden"
          onClick={() => setOpen(false)}
        >
          <div
            className="absolute right-0 top-0 h-full w-64 bg-white shadow-xl p-5 flex flex-col gap-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-semibold text-[#111111]">
                Navigation
              </span>
              <button
                type="button"
                aria-label="Menü schließen"
                onClick={() => setOpen(false)}
                className="text-neutral-500 text-sm"
              >
                ✕
              </button>
            </div>

            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="py-1.5 text-sm text-neutral-800 border-b border-neutral-100 hover:text-[#111111]"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}

            <a
              href="#kontakt"
              onClick={() => setOpen(false)}
              className="mt-3 px-4 py-2 rounded-full text-sm text-center bg-[#111111] text-white border border-[#111111] hover:bg-black hover:border-black transition-colors"
            >
              Anfrage stellen
            </a>
          </div>
        </div>
      )}
    </>
  );
}
