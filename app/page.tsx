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
          <a href="#pocetna" className="flex items-center">
            <img
              src="/Logo.jpeg"
              alt="Magic Moments"
              className="h-14 w-auto object-contain"
            />
          </a>

          <nav className="hidden items-center gap-7 lg:flex xl:gap-8">
            <a
              href="#pocetna"
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
                  href="#organizacija-rodjendana"
                  className="block px-4 py-3 text-[13px] text-[#555] transition hover:bg-[#fcf8ef] hover:text-[#b88a2c]"
                >
                  Organizacija rođendana
                </a>
                <a
                  href="#dekoracija-dogadjaja"
                  className="block px-4 py-3 text-[13px] text-[#555] transition hover:bg-[#fcf8ef] hover:text-[#b88a2c]"
                >
                  Dekoracija događaja
                </a>
                <a
                  href="#organizacija-dogadjaja"
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

              <div className="invisible absolute left-0 top-[calc(100%+4px)] z-50 min-w-[220px] border border-[#f0eadf] bg-white opacity-0 shadow-[0_6px_16px_rgba(0,0,0,0.04)] transition-all duration-150 group-hover:visible group-hover:opacity-100">
                <a
                  href="#dekoracija-dogadjaja"
                  className="block px-4 py-3 text-[13px] text-[#555] transition hover:bg-[#fcf8ef] hover:text-[#b88a2c]"
                >
                  Dekoracija rođendana
                </a>
                <a
                  href="#dekoracija-dogadjaja"
                  className="block px-4 py-3 text-[13px] text-[#555] transition hover:bg-[#fcf8ef] hover:text-[#b88a2c]"
                >
                  Dekoracija krštenja
                </a>
                <a
                  href="#dekoracija-dogadjaja"
                  className="block px-4 py-3 text-[13px] text-[#555] transition hover:bg-[#fcf8ef] hover:text-[#b88a2c]"
                >
                  Elegantne event dekoracije
                </a>
              </div>
            </div>

            <a
              href="#usluge"
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
                href="#pocetna"
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
                      href="#organizacija-rodjendana"
                      className="block px-5 py-2 text-sm text-[#555]"
                      onClick={() => setMobileOpen(false)}
                    >
                      Organizacija rođendana
                    </a>
                    <a
                      href="#dekoracija-dogadjaja"
                      className="block px-5 py-2 text-sm text-[#555]"
                      onClick={() => setMobileOpen(false)}
                    >
                      Dekoracija događaja
                    </a>
                    <a
                      href="#organizacija-dogadjaja"
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
                      href="#dekoracija-dogadjaja"
                      className="block px-5 py-2 text-sm text-[#555]"
                      onClick={() => setMobileOpen(false)}
                    >
                      Dekoracija rođendana
                    </a>
                    <a
                      href="#dekoracija-dogadjaja"
                      className="block px-5 py-2 text-sm text-[#555]"
                      onClick={() => setMobileOpen(false)}
                    >
                      Dekoracija krštenja
                    </a>
                    <a
                      href="#dekoracija-dogadjaja"
                      className="block px-5 py-2 text-sm text-[#555]"
                      onClick={() => setMobileOpen(false)}
                    >
                      Elegantne event dekoracije
                    </a>
                  </div>
                )}
              </div>

              <a
                href="#usluge"
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

      <section id="usluge" className="bg-[#fcfaf5] py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div id="organizacija-rodjendana" className="mb-20 scroll-mt-28">
            <div className="mb-8 flex items-start gap-6">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#dcc5cc] text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v4m-4 4h8m-9 8h10a2 2 0 002-2v-3H5v3a2 2 0 002 2zm-1-8h12l-1-4H8l-1 4z"
                  />
                </svg>
              </div>

              <div>
                <h3 className="mb-4 text-2xl font-semibold uppercase tracking-[0.03em] text-[#26313f]">
                  Organizacija proslave rođendana
                </h3>
                <p className="max-w-4xl text-lg leading-9 text-[#4b4b4b]">
                  Kako bi vaša proslava rođendana bila nezaboravna, neophodni su
                  pažljivo planiranje i detaljna organizacija. Mi smo tu da vam
                  pomognemo! Dekoracija prostora, muzika, fotograf i celokupan
                  koncept događaja samo su deo usluga koje nudimo kako bismo
                  vaš važan dan učinili magičnim i besprekornim.
                </p>
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              <img src="/rodjendan1.jpg" alt="Rođendan 1" className="h-72 w-full object-cover" />
              <img src="/rodjendan2.jpg" alt="Rođendan 2" className="h-72 w-full object-cover" />
              <img src="/rodjendan3.jpg" alt="Rođendan 3" className="h-72 w-full object-cover" />
            </div>
          </div>

          <div id="dekoracija-dogadjaja" className="mb-20 scroll-mt-28">
            <div className="mb-8 flex items-start gap-6">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#dcc5cc] text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v12m6-6H6"
                  />
                </svg>
              </div>

              <div>
                <h3 className="mb-4 text-2xl font-semibold uppercase tracking-[0.03em] text-[#26313f]">
                  Dekoracija događaja
                </h3>
                <p className="max-w-4xl text-lg leading-9 text-[#4b4b4b]">
                  Elegantna dekoracija prostora igra ključnu ulogu u stvaranju
                  atmosfere. Kroz pažljivo birane detalje, zlatne akcente i
                  sofisticirane kompozicije kreiramo vizuelni identitet događaja
                  koji izgleda skladno, luksuzno i upečatljivo.
                </p>
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              <img src="/dekor1.jpg" alt="Dekoracija 1" className="h-72 w-full object-cover" />
              <img src="/dekor2.jpg" alt="Dekoracija 2" className="h-72 w-full object-cover" />
              <img src="/dekor3.jpg" alt="Dekoracija 3" className="h-72 w-full object-cover" />
            </div>
          </div>

          <div id="organizacija-dogadjaja" className="scroll-mt-28">
            <div className="mb-8 flex items-start gap-6">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#dcc5cc] text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 7V5a4 4 0 118 0v2m-9 0h10a2 2 0 012 2v8a2 2 0 01-2 2H7a2 2 0 01-2-2V9a2 2 0 012-2z"
                  />
                </svg>
              </div>

              <div>
                <h3 className="mb-4 text-2xl font-semibold uppercase tracking-[0.03em] text-[#26313f]">
                  Organizacija događaja
                </h3>
                <p className="max-w-4xl text-lg leading-9 text-[#4b4b4b]">
                  Organizujemo privatne i poslovne događaje sa profesionalnim
                  pristupom, jasnim planom i estetski usklađenom realizacijom.
                  Naš cilj je da svaki događaj izgleda elegantno, funkcionalno
                  i ostavi snažan utisak na goste.
                </p>
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              <img src="/event1.jpg" alt="Event 1" className="h-72 w-full object-cover" />
              <img src="/event2.jpg" alt="Event 2" className="h-72 w-full object-cover" />
              <img src="/event3.jpg" alt="Event 3" className="h-72 w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section id="galerija" className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="mb-5 text-3xl font-semibold uppercase tracking-[0.04em] text-[#26313f] md:text-4xl">
            Galerija
          </h2>
          <p className="mx-auto max-w-3xl leading-8 text-[#4b4b4b]">
            Izdvojeni momenti, pažljivo osmišljeni detalji i inspiracija za vaše
            naredne Magic Moments proslave.
          </p>
        </div>
      </section>
    </main>
  );
}