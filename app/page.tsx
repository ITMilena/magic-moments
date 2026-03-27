"use client";

import { useState } from "react";

export default function Home() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [orgOpen, setOrgOpen] = useState(false);
  const [dekorOpen, setDekorOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white text-[#222]">
      <header className="sticky top-0 z-50 border-b border-[#ece7dc] bg-white">
        <div className="mx-auto flex h-[90px] max-w-[1280px] items-center justify-between px-6 lg:px-10">
          <a href="/" className="flex items-center">
            <img
              src="/Logo.jpeg"
              alt="Magic Moments"
              className="h-14 w-auto object-contain"
            />
          </a>

          <nav className="hidden items-center gap-7 lg:flex xl:gap-8">
            <a
              href="/"
              className="text-[13px] font-semibold uppercase tracking-[0.04em] text-[#4a4a4a] transition hover:text-[#b88a2c]"
            >
              Početna
            </a>

            <div className="group relative">
              <button className="flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[0.04em] text-[#4a4a4a] transition hover:text-[#b88a2c]">
                Organizacija
                <span className="text-[11px] text-[#b88a2c]">›</span>
              </button>

              <div className="absolute left-0 top-full h-4 w-72" />

              <div className="invisible absolute left-0 top-[calc(100%+4px)] z-50 min-w-[250px] border border-[#f0eadf] bg-white opacity-0 shadow-[0_6px_16px_rgba(0,0,0,0.04)] transition-all duration-150 group-hover:visible group-hover:opacity-100">
                <a
                  href="/usluge#organizacija-rodjendana"
                  className="block px-4 py-3 text-[13px] text-[#555] transition hover:bg-[#fcf8ef] hover:text-[#b88a2c]"
                >
                  Organizacija rođendana
                </a>
                <a
                  href="/usluge#organizacija-dogadjaja"
                  className="block px-4 py-3 text-[13px] text-[#555] transition hover:bg-[#fcf8ef] hover:text-[#b88a2c]"
                >
                  Organizacija događaja
                </a>
              </div>
            </div>

            <div className="group relative">
              <button className="flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[0.04em] text-[#4a4a4a] transition hover:text-[#b88a2c]">
                Dekoracija
                <span className="text-[11px] text-[#b88a2c]">›</span>
              </button>

              <div className="absolute left-0 top-full h-4 w-64" />

              <div className="invisible absolute left-0 top-[calc(100%+4px)] z-50 min-w-[260px] border border-[#f0eadf] bg-white opacity-0 shadow-[0_6px_16px_rgba(0,0,0,0.04)] transition-all duration-150 group-hover:visible group-hover:opacity-100">
                <a
                  href="/dekoracije/rodjendan"
                  className="block px-4 py-3 text-[13px] text-[#555] transition hover:bg-[#fcf8ef] hover:text-[#b88a2c]"
                >
                  Dekoracija rođendana
                </a>
                <a
                  href="/dekoracije/krstenje"
                  className="block px-4 py-3 text-[13px] text-[#555] transition hover:bg-[#fcf8ef] hover:text-[#b88a2c]"
                >
                  Dekoracija krštenja
                </a>
                <a
                  href="/dekoracije/punoletstvo"
                  className="block px-4 py-3 text-[13px] text-[#555] transition hover:bg-[#fcf8ef] hover:text-[#b88a2c]"
                >
                  Dekoracija 18. rođendana
                </a>
              </div>
            </div>

            <a
              href="/usluge"
              className="text-[13px] font-semibold uppercase tracking-[0.04em] text-[#4a4a4a] transition hover:text-[#b88a2c]"
            >
              Usluge
            </a>

            <a
              href="/galerija"
              className="text-[13px] font-semibold uppercase tracking-[0.04em] text-[#4a4a4a] transition hover:text-[#b88a2c]"
            >
              Galerija
            </a>

            <a
              href="/kontakt"
              className="text-[13px] font-semibold uppercase tracking-[0.04em] text-[#4a4a4a] transition hover:text-[#b88a2c]"
            >
              Kontakt
            </a>
          </nav>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-10 w-10 items-center justify-center border border-[#e7deca] text-[#444] lg:hidden"
            aria-label="Otvori meni"
          >
            {mobileOpen ? "✕" : "☰"}
          </button>
        </div>

        {mobileOpen && (
          <div className="border-t border-[#ece7dc] bg-white px-4 py-4 lg:hidden">
            <div className="flex flex-col">
              <a
                href="/"
                className="px-3 py-3 text-sm font-semibold uppercase text-[#444]"
                onClick={() => setMobileOpen(false)}
              >
                Početna
              </a>

              <div className="border-t border-[#f3eee3]">
                <button
                  onClick={() => setOrgOpen(!orgOpen)}
                  className="flex w-full items-center justify-between px-3 py-3 text-left text-sm font-semibold uppercase text-[#444]"
                >
                  Organizacija
                  <span className="text-[#b88a2c]">{orgOpen ? "−" : "+"}</span>
                </button>
                {orgOpen && (
                  <div className="pb-2">
                    <a
                      href="/usluge#organizacija-rodjendana"
                      className="block px-5 py-2 text-sm text-[#555]"
                      onClick={() => setMobileOpen(false)}
                    >
                      Organizacija rođendana
                    </a>
                    <a
                      href="/usluge#organizacija-dogadjaja"
                      className="block px-5 py-2 text-sm text-[#555]"
                      onClick={() => setMobileOpen(false)}
                    >
                      Organizacija događaja
                    </a>
                  </div>
                )}
              </div>

              <div className="border-t border-[#f3eee3]">
                <button
                  onClick={() => setDekorOpen(!dekorOpen)}
                  className="flex w-full items-center justify-between px-3 py-3 text-left text-sm font-semibold uppercase text-[#444]"
                >
                  Dekoracija
                  <span className="text-[#b88a2c]">{dekorOpen ? "−" : "+"}</span>
                </button>
                {dekorOpen && (
                  <div className="pb-2">
                    <a
                      href="/dekoracije/rodjendan"
                      className="block px-5 py-2 text-sm text-[#555]"
                      onClick={() => setMobileOpen(false)}
                    >
                      Dekoracija rođendana
                    </a>
                    <a
                      href="/dekoracije/krstenje"
                      className="block px-5 py-2 text-sm text-[#555]"
                      onClick={() => setMobileOpen(false)}
                    >
                      Dekoracija krštenja
                    </a>
                    <a
                      href="/dekoracije/punoletstvo"
                      className="block px-5 py-2 text-sm text-[#555]"
                      onClick={() => setMobileOpen(false)}
                    >
                      Dekoracija 18. rođendana
                    </a>
                  </div>
                )}
              </div>

              <a
                href="/usluge"
                className="border-t border-[#f3eee3] px-3 py-3 text-sm font-semibold uppercase text-[#444]"
                onClick={() => setMobileOpen(false)}
              >
                Usluge
              </a>

              <a
                href="/galerija"
                className="border-t border-[#f3eee3] px-3 py-3 text-sm font-semibold uppercase text-[#444]"
                onClick={() => setMobileOpen(false)}
              >
                Galerija
              </a>

              <a
                href="/kontakt"
                className="border-t border-[#f3eee3] px-3 py-3 text-sm font-semibold uppercase text-[#444]"
                onClick={() => setMobileOpen(false)}
              >
                Kontakt
              </a>
            </div>
          </div>
        )}
      </header>

      <section
        id="pocetna"
        className="relative flex min-h-[78vh] items-center justify-center bg-cover bg-center px-4"
        style={{ backgroundImage: "url('/pocetna.jpeg')" }}
      >
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 backdrop-blur-[1.5px]" />

        <div className="relative z-10 mx-auto max-w-5xl text-center text-white">
          <h1 className="mb-6 text-4xl font-semibold uppercase tracking-[0.03em] md:text-6xl lg:text-7xl">
            Magic Moments
          </h1>

          <p className="mx-auto mb-8 max-w-4xl text-base leading-8 text-white/95 md:text-xl">
            Organizacija događaja i proslava uz pažljivo osmišljene detalje,
            elegantnu dekoraciju i atmosferu koja se pamti.
          </p>

          <a
            href="/kontakt"
            className="inline-block bg-[#d8c0c6] px-8 py-4 text-sm font-semibold uppercase tracking-[0.10em] text-white transition hover:bg-[#cdaeb7]"
          >
            Kontaktirajte nas
          </a>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="mb-5 text-3xl font-semibold uppercase tracking-[0.04em] text-[#26313f] md:text-4xl">
            Stručna pomoć pri organizaciji važnih događaja
          </h2>
          <p className="mx-auto max-w-3xl leading-8 text-[#4b4b4b]">
            Magic Moments pruža podršku pri organizaciji proslava i događaja,
            od prve ideje do realizacije, uz fokus na estetiku, dobru koordinaciju
            i skladno iskustvo za klijente i goste.
          </p>
        </div>
      </section>

      <section className="bg-[#fcfaf5] py-20">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="mb-5 text-3xl font-semibold uppercase tracking-[0.04em] text-[#26313f] md:text-4xl">
            Usluge
          </h2>
          <p className="mx-auto max-w-3xl leading-8 text-[#4b4b4b]">
            Organizacija događaja, dekoracija i pažljivo osmišljeni detalji —
            sve na jednom mestu, sa elegantnim pristupom i jasnim planom.
          </p>

          <a
            href="/usluge"
            className="mt-8 inline-block bg-[#d8c0c6] px-8 py-4 text-sm font-semibold uppercase tracking-[0.10em] text-white transition hover:bg-[#cdaeb7]"
          >
            Pogledajte usluge
          </a>
        </div>
      </section>
    </main>
  );
}