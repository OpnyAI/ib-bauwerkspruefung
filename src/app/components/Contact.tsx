"use client";

import { FormEvent, useEffect, useState } from "react";

export default function Contact() {
  const [startedAt, setStartedAt] = useState<number | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    setStartedAt(Date.now());
  }, []);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setSuccessMessage(null);
    setErrorMessage(null);

    const formData = new FormData(e.currentTarget);

    const payload = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string | null,
      message: formData.get("message") as string,
      company: formData.get("company") as string | null, // honeypot
      startedAt, // timestamp
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.error || "Fehler beim Senden der Nachricht.");
      }

      setSuccessMessage(
        "Vielen Dank für Ihre Anfrage. Wir melden uns schnellstmöglich bei Ihnen."
      );

      (e.target as HTMLFormElement).reset();
      setStartedAt(Date.now());
    } catch (err: any) {
      console.error(err);
      setErrorMessage(
        err?.message ||
          "Es ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="kontakt" className="section-padding bg-brand-light">
      <div className="container-max max-w-3xl">
        <h2 className="text-2xl sm:text-3xl font-heading font-semibold text-neutral-900">
          Kontakt
        </h2>
        <p className="mt-2 text-sm sm:text-base text-neutral-700">
          Nutzen Sie das Formular für eine unverbindliche Anfrage zu
          Bauwerksprüfungen nach DIN 1076.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-8 rounded-2xl bg-white shadow-sm border border-neutral-200 p-6 sm:p-8 space-y-6"
        >
          {/* Honeypot */}
          <div className="hidden">
            <label htmlFor="company">Firma</label>
            <input id="company" name="company" type="text" />
          </div>

          <input type="hidden" name="startedAt" value={startedAt ?? ""} />

          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-neutral-800"
            >
              Name *
            </label>
            <input
              id="name"
              name="name"
              required
              type="text"
              className="mt-2 w-full rounded-xl border border-neutral-300 bg-white px-3 py-2 text-sm sm:text-base text-neutral-900 shadow-sm focus:ring-2 focus:ring-neutral-900"
              placeholder="Vor- und Nachname"
            />
          </div>

          {/* E-Mail */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-neutral-800"
            >
              E-Mail *
            </label>
            <input
              id="email"
              name="email"
              required
              type="email"
              className="mt-2 w-full rounded-xl border border-neutral-300 bg-white px-3 py-2 text-sm sm:text-base text-neutral-900 shadow-sm focus:ring-2 focus:ring-neutral-900"
              placeholder="ihre.mail@beispiel.de"
            />
          </div>

          {/* Telefon */}
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-neutral-800"
            >
              Telefonnummer (optional)
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              className="mt-2 w-full rounded-xl border border-neutral-300 bg-white px-3 py-2 text-sm sm:text-base text-neutral-900 shadow-sm focus:ring-2 focus:ring-neutral-900"
              placeholder=""
            />
          </div>

          {/* Nachricht */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-neutral-800"
            >
              Nachricht *
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              className="mt-2 w-full rounded-xl border border-neutral-300 bg-white px-3 py-2 text-sm sm:text-base text-neutral-900 shadow-sm focus:ring-2 focus:ring-neutral-900 resize-none"
              placeholder="Kurze Beschreibung Ihres Anliegens…"
            />
          </div>

          {/* Erfolg / Fehler */}
          {successMessage && (
            <p className="text-sm text-green-700 bg-green-50 border border-green-100 rounded-xl px-3 py-2">
              {successMessage}
            </p>
          )}
          {errorMessage && (
            <p className="text-sm text-red-700 bg-red-50 border border-red-100 rounded-xl px-3 py-2">
              {errorMessage}
            </p>
          )}

          {/* Absenden */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex items-center justify-center rounded-full bg-neutral-900 px-6 py-3 text-sm sm:text-base font-medium text-white shadow-sm hover:bg-neutral-800 disabled:opacity-60"
          >
            {isSubmitting ? "Wird gesendet…" : "Anfrage senden"}
          </button>
        </form>
      </div>
    </section>
  );
}
