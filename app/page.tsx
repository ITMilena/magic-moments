"use client";

import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [orgOpen, setOrgOpen] = useState(false);
  const [dekorOpen, setDekorOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#fbfaf7] text-[#2f343b]">
      <header className="sticky top-0 z-50 border-b border-[#ebe4da] bg-white/95 backdrop-blur">
        <div className="mx-auto flex h-[92px] max-w-[1280px] items-center justify-between px-6 lg:px-10">
          <Link href="/" className="flex items-center">
            <img
              src="/Logo.jpeg"
              alt="Magic Moments"
              className="h-14 w-auto object-contain"
            />
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            <Link
              href="/"
              className="text-[13px] font-semibold uppercase tracking-[0.08em] text-[#2f343b] transition hover:text-[#b88a2c]"
            >
              Početna
            </Link>

            <div className="group relative">
              <button
                type="button"
                className="flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[0.08em] text-[#2f343b] transition hover:text-[#b88a2c]"
              >
                Organizacija
                <span className="text-[11px] text-[#b88a2c]">›</span>
              </button>

              <div className="absolute left-0 top-full h-4 w-72" />

              <div className="invisible absolute left-0 top-[calc(100%+4px)] z-50 min-w-[260px] border border-[#eee6db] bg-white opacity-0 shadow-[0_10px_25px_rgba(0,0,0,0.06)] transition-all duration-150 group-hover:visible group-hover:opacity-100">
                <Link
                  href="/usluge#organizacija-rodjendana"
                  className="block px-5 py-4 text-[13px] text-[#555] transition hover:bg-[#fcf8f0] hover:text-[#b88a2c]"
                >
                  Organizacija rođendana
                </Link>
                <Link
                  href="/usluge#organizacija-dogadjaja"
                  className="block px-5 py-4 text-[13px] text-[#555] transition hover:bg-[#fcf8f0] hover:text-[#b88a2c]"
                >
                  Organizacija događaja
                </Link>
              </div>
            </div>

            <div className="group relative">
              <button
                type="button"
                className="flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[0.08em] text-[#2f343b] transition hover:text-[#b88a2c]"
              >
                Dekoracija
                <span className="text-[11px] text-[#b88a2c]">›</span>
              </button>

              <div className="absolute left-0 top-full h-4 w-72" />

              <div className="invisible absolute left-0 top-[calc(100%+4px)] z-50 min-w-[280px] border border-[#eee6db] bg-white opacity-0 shadow-[0_10px_25px_rgba(0,0,0,0.06)] transition-all duration-150 group-hover:visible group-hover:opacity-100">
                <Link
                  href="/dekoracije/rodjendan"
                  className="block px-5 py-4 text-[13px] text-[#555] transition hover:bg-[#fcf8f0] hover:text-[#b88a2c]"
                >
                  Dekoracija rođendana
                </Link>
                <Link
                  href="/dekoracije/krstenje"
                  className="block px-5 py-4 text-[13px] text-[#555] transition hover:bg-[#fcf8f0] hover:text-[#b88a2c]"
                >
                  Dekoracija krštenja
                </Link>
                <Link
                  href="/dekoracije/punoletstvo"
                  className="block px-5 py-4 text-[13px] text-[#555] transition hover:bg-[#fcf8f0] hover:text-[#b88a2c]"
                >
                  Elegantne event dekoracije
                </Link>
              </div>
            </div>

            <Link
              href="/usluge"
              className="text-[13px] font-semibold uppercase tracking-[0.08em] text-[#2f343b] transition hover:text-[#b88a2c]"
            >
              Usluge
            </Link>

            <Link
              href="/galerija"
              className="text-[13px] font-semibold uppercase tracking-[0.08em] text-[#2f343b] transition hover:text-[#b88a2c]"
            >
              Galerija
            </Link>

            <Link
              href="/kontakt"
              className="text-[13px] font-semibold uppercase tracking-[0.08em] text-[#2f343b] transition hover:text-[#b88a2c]"
            >
              Kontakt
            </Link>
          </nav>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-10 w-10 items-center justify-center border border-[#e7deca] text-[#444] lg:hidden"
            aria-label="Otvori meni"
            type="button"
          >
            {mobileOpen ? "✕" : "☰"}
          </button>
        </div>

        {mobileOpen && (
          <div className="border-t border-[#ece7dc] bg-white px-4 py-4 lg:hidden">
            <div className="flex flex-col">
              <Link
                href="/"
                className="px-3 py-3 text-sm font-semibold uppercase text-[#444]"
                onClick={() => setMobileOpen(false)}
              >
                Početna
              </Link>

              <div className="border-t border-[#f3eee3]">
                <button
                  onClick={() => setOrgOpen(!orgOpen)}
                  className="flex w-full items-center justify-between px-3 py-3 text-left text-sm font-semibold uppercase text-[#444]"
                  type="button"
                >
                  Organizacija
                  <span className="text-[#b88a2c]">{orgOpen ? "−" : "+"}</span>
                </button>

                {orgOpen && (
                  <div className="pb-2">
                    <Link
                      href="/usluge#organizacija-rodjendana"
                      className="block px-5 py-2 text-sm text-[#555]"
                      onClick={() => setMobileOpen(false)}
                    >
                      Organizacija rođendana
                    </Link>
                    <Link
                      href="/usluge#organizacija-dogadjaja"
                      className="block px-5 py-2 text-sm text-[#555]"
                      onClick={() => setMobileOpen(false)}
                    >
                      Organizacija događaja
                    </Link>
                  </div>
                )}
              </div>

              <div className="border-t border-[#f3eee3]">
                <button
                  onClick={() => setDekorOpen(!dekorOpen)}
                  className="flex w-full items-center justify-between px-3 py-3 text-left text-sm font-semibold uppercase text-[#444]"
                  type="button"
                >
                  Dekoracija
                  <span className="text-[#b88a2c]">{dekorOpen ? "−" : "+"}</span>
                </button>

                {dekorOpen && (
                  <div className="pb-2">
                    <Link
                      href="/dekoracije/rodjendan"
                      className="block px-5 py-2 text-sm text-[#555]"
                      onClick={() => setMobileOpen(false)}
                    >
                      Dekoracija rođendana
                    </Link>
                    <Link
                      href="/dekoracije/krstenje"
                      className="block px-5 py-2 text-sm text-[#555]"
                      onClick={() => setMobileOpen(false)}
                    >
                      Dekoracija krštenja
                    </Link>
                    <Link
                      href="/dekoracije/punoletstvo"
                      className="block px-5 py-2 text-sm text-[#555]"
                      onClick={() => setMobileOpen(false)}
                    >
                      Elegantne event dekoracije
                    </Link>
                  </div>
                )}
              </div>

              <Link
                href="/usluge"
                className="border-t border-[#f3eee3] px-3 py-3 text-sm font-semibold uppercase text-[#444]"
                onClick={() => setMobileOpen(false)}
              >
                Usluge
              </Link>

              <Link
                href="/galerija"
                className="border-t border-[#f3eee3] px-3 py-3 text-sm font-semibold uppercase text-[#444]"
                onClick={() => setMobileOpen(false)}
              >
                Galerija
              </Link>

              <Link
                href="/kontakt"
                className="border-t border-[#f3eee3] px-3 py-3 text-sm font-semibold uppercase text-[#444]"
                onClick={() => setMobileOpen(false)}
              >
                Kontakt
              </Link>
            </div>
          </div>
        )}
      </header>

      <section
        className="relative overflow-hidden"
        style={{ backgroundImage: "url('/pocetna.jpeg')" }}
      >
        <div className="absolute inset-0 bg-black/35" />
        <div className="relative mx-auto flex min-h-[78vh] max-w-[1400px] items-center justify-center px-6 py-24 text-center">
          <div className="max-w-5xl text-white">
            <p className="mb-4 text-xs uppercase tracking-[0.35em] text-white/80">
              Magic Moments
            </p>
            <h1 className="mb-6 text-4xl font-semibold uppercase tracking-[0.08em] md:text-6xl xl:text-7xl">
              Organizacija i dekoracija proslava
            </h1>
            <p className="mx-auto max-w-3xl text-base leading-8 text-white/90 md:text-xl">
              Elegantni koncepti, pažljivo birani detalji i profesionalna podrška
              od prve ideje do realizacije događaja.
            </p>

            <div className="mt-10">
              <Link
                href="/kontakt"
                className="inline-block border border-white/70 bg-white/10 px-10 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-white hover:text-[#2f343b]"
              >
                Kontaktirajte nas
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-[#b88a2c]">
            O nama
          </p>
          <h2 className="mb-6 text-3xl font-semibold uppercase tracking-[0.04em] text-[#26313f] md:text-4xl">
            Posebni trenuci zaslužuju pažljivo osmišljen ambijent
          </h2>
          <p className="mx-auto max-w-4xl text-lg leading-9 text-[#4b4b4b]">
            Magic Moments pruža podršku pri organizaciji i dekoraciji proslava,
            sa fokusom na estetiku, koordinaciju i osećaj sklada. Naš cilj je da
            svaki događaj izgleda otmeno, funkcionalno i potpuno prilagođeno
            vašim željama.
          </p>
        </div>
      </section>

      <section className="bg-[#f6f4ef] py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-3">
          <Link
            href="/usluge"
            className="group border border-[#e8dfd2] bg-white p-8 transition hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(0,0,0,0.05)]"
          >
            <p className="mb-3 text-xs uppercase tracking-[0.28em] text-[#b88a2c]">
              01
            </p>
            <h3 className="mb-4 text-2xl font-semibold uppercase text-[#26313f]">
              Organizacija
            </h3>
            <p className="leading-8 text-[#555]">
              Jasna priprema, pažljivo planiranje i koordinacija svakog segmenta
              događaja.
            </p>
          </Link>

          <Link
            href="/dekoracije/krstenje"
            className="group border border-[#e8dfd2] bg-white p-8 transition hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(0,0,0,0.05)]"
          >
            <p className="mb-3 text-xs uppercase tracking-[0.28em] text-[#b88a2c]">
              02
            </p>
            <h3 className="mb-4 text-2xl font-semibold uppercase text-[#26313f]">
              Dekoracija
            </h3>
            <p className="leading-8 text-[#555]">
              Nežni tonovi, luksuzni detalji i skladan vizuelni identitet svake
              proslave.
            </p>
          </Link>

          <Link
            href="/kontakt"
            className="group border border-[#e8dfd2] bg-white p-8 transition hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(0,0,0,0.05)]"
          >
            <p className="mb-3 text-xs uppercase tracking-[0.28em] text-[#b88a2c]">
              03
            </p>
            <h3 className="mb-4 text-2xl font-semibold uppercase text-[#26313f]">
              Saradnja
            </h3>
            <p className="leading-8 text-[#555]">
              Od prve konsultacije do realizacije, vodimo vas kroz svaki korak
              jasno i bez stresa.
            </p>
          </Link>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-[#b88a2c]">
            Usluge
          </p>
          <h2 className="mb-6 text-3xl font-semibold uppercase tracking-[0.04em] text-[#26313f] md:text-4xl">
            Organizacija, dekoracija i pažljivo osmišljeni detalji
          </h2>
          <p className="mx-auto max-w-4xl text-lg leading-9 text-[#4b4b4b]">
            Sve na jednom mestu — od planiranja koncepta i izbora prostora do
            dekoracije, vizuelnog identiteta događaja i završne koordinacije.
          </p>

          <div className="mt-10">
            <Link
              href="/usluge"
              className="inline-block border border-[#d8c0c6] bg-[#d8c0c6] px-10 py-4 text-sm font-semibold uppercase tracking-[0.12em] text-white transition hover:bg-[#cdaeb7] hover:border-[#cdaeb7]"
            >
              Pogledajte usluge
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}