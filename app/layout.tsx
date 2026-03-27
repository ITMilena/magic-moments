"use client";

import Link from "next/link";
import { useState } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [orgOpen, setOrgOpen] = useState(false);
  const [dekorOpen, setDekorOpen] = useState(false);
  const [uslugeOpen, setUslugeOpen] = useState(false);

  const closeMobileMenu = () => {
    setMobileOpen(false);
    setOrgOpen(false);
    setDekorOpen(false);
    setUslugeOpen(false);
  };

  return (
    <html
      lang="sr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[#fbfaf7] text-[#2f343b]">
        <header className="sticky top-0 z-50 border-b border-[#e9e1d5] bg-white">
          <div className="mx-auto flex h-[92px] max-w-[1380px] items-center justify-between px-4 lg:px-8">
            <Link href="/" className="flex shrink-0 items-center">
              <img
                src="/Logo.jpeg"
                alt="Magic Moments"
                className="h-14 w-auto object-contain"
              />
            </Link>

            <nav className="hidden items-center gap-6 lg:flex xl:gap-8">
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

                <div className="absolute left-0 top-full h-4 w-[360px]" />

                <div className="invisible absolute left-0 top-[calc(100%+4px)] z-50 w-[360px] border border-[#ece3d8] bg-white opacity-0 shadow-[0_10px_25px_rgba(0,0,0,0.06)] transition-all duration-150 group-hover:visible group-hover:opacity-100">
                  <Link
                    href="/organizacija/prvi-rodjendan"
                    className="block border-b border-[#f5eee4] px-5 py-4 text-[15px] text-[#555] transition hover:bg-[#fcf8f0] hover:text-[#b88a2c]"
                  >
                    Organizacija prvog rođendana
                  </Link>
                  <Link
                    href="/organizacija/krstenje"
                    className="block border-b border-[#f5eee4] px-5 py-4 text-[15px] text-[#555] transition hover:bg-[#fcf8f0] hover:text-[#b88a2c]"
                  >
                    Organizacija krštenja
                  </Link>
                  <Link
                    href="/organizacija/punoletstvo"
                    className="block border-b border-[#f5eee4] px-5 py-4 text-[15px] text-[#555] transition hover:bg-[#fcf8f0] hover:text-[#b88a2c]"
                  >
                    Organizacija 18. rođendana
                  </Link>
                  <Link
                    href="/organizacija/momacke-i-devojacke-veceri"
                    className="block border-b border-[#f5eee4] px-5 py-4 text-[15px] text-[#555] transition hover:bg-[#fcf8f0] hover:text-[#b88a2c]"
                  >
                    Momačke i devojačke večeri
                  </Link>
                  <Link
                    href="/organizacija/odlazak-u-penziju"
                    className="block border-b border-[#f5eee4] px-5 py-4 text-[15px] text-[#555] transition hover:bg-[#fcf8f0] hover:text-[#b88a2c]"
                  >
                    Odlazak u penziju
                  </Link>
                  <Link
                    href="/organizacija/zurka-iznenadjenja"
                    className="block px-5 py-4 text-[15px] text-[#555] transition hover:bg-[#fcf8f0] hover:text-[#b88a2c]"
                  >
                    Žurke iznenađenja
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

                <div className="absolute left-0 top-full h-4 w-[320px]" />

                <div className="invisible absolute left-0 top-[calc(100%+4px)] z-50 w-[320px] border border-[#ece3d8] bg-white opacity-0 shadow-[0_10px_25px_rgba(0,0,0,0.06)] transition-all duration-150 group-hover:visible group-hover:opacity-100">
                  <Link
                    href="/dekoracije/rodjendan"
                    className="block border-b border-[#f5eee4] px-5 py-4 text-[15px] text-[#555] transition hover:bg-[#fcf8f0] hover:text-[#b88a2c]"
                  >
                    Dekoracija rođendana
                  </Link>
                  <Link
                    href="/dekoracije/punoletstvo"
                    className="block border-b border-[#f5eee4] px-5 py-4 text-[15px] text-[#555] transition hover:bg-[#fcf8f0] hover:text-[#b88a2c]"
                  >
                    Dekoracija 18. rođendana
                  </Link>
                  <Link
                    href="/dekoracije/krstenje"
                    className="block border-b border-[#f5eee4] px-5 py-4 text-[15px] text-[#555] transition hover:bg-[#fcf8f0] hover:text-[#b88a2c]"
                  >
                    Dekoracija krštenja
                  </Link>
                  <Link
                    href="/dekoracije/prvi-rodjendan"
                    className="block px-5 py-4 text-[15px] text-[#555] transition hover:bg-[#fcf8f0] hover:text-[#b88a2c]"
                  >
                    Dekoracija prvog rođendana
                  </Link>
                </div>
              </div>

              <div className="group relative">
                <button
                  type="button"
                  className="flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[0.08em] text-[#2f343b] transition hover:text-[#b88a2c]"
                >
                  Usluge
                  <span className="text-[11px] text-[#b88a2c]">›</span>
                </button>

                <div className="absolute right-0 top-full h-4 w-[640px]" />

                <div className="invisible absolute right-0 top-[calc(100%+4px)] z-50 w-[640px] border border-[#ece3d8] bg-white opacity-0 shadow-[0_10px_25px_rgba(0,0,0,0.06)] transition-all duration-150 group-hover:visible group-hover:opacity-100">
                  <div className="grid grid-cols-2">
                    <div className="border-r border-[#f1ebe2] p-6">
                      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.12em] text-[#b88a2c]">
                        Organizacija događaja
                      </p>

                      <div className="flex flex-col">
                        <Link
                          href="/usluge#planiranje-koordinacija"
                          className="py-2 text-[15px] text-[#444] transition hover:text-[#b88a2c]"
                        >
                          Planiranje i koordinacija događaja
                        </Link>
                        <Link
                          href="/usluge#rezervacija-sale"
                          className="py-2 text-[15px] text-[#444] transition hover:text-[#b88a2c]"
                        >
                          Pronalaženje i rezervacija sale / lokala
                        </Link>
                        <Link
                          href="/usluge#muzicki-program"
                          className="py-2 text-[15px] text-[#444] transition hover:text-[#b88a2c]"
                        >
                          Organizacija muzičkog programa
                        </Link>
                        <Link
                          href="/usluge#dizajn-dekoracija"
                          className="py-2 text-[15px] text-[#444] transition hover:text-[#b88a2c]"
                        >
                          Dizajn i dekoracija prostora
                        </Link>
                      </div>
                    </div>

                    <div className="p-6">
                      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.12em] text-[#b88a2c]">
                        Dodatne usluge
                      </p>

                      <div className="flex flex-col">
                        <Link
                          href="/usluge#ketering"
                          className="py-2 text-[15px] text-[#444] transition hover:text-[#b88a2c]"
                        >
                          Ketering usluge po vašem izboru
                        </Link>
                        <Link
                          href="/usluge#animatori"
                          className="py-2 text-[15px] text-[#444] transition hover:text-[#b88a2c]"
                        >
                          Animatori za decu
                        </Link>
                        <Link
                          href="/usluge#foto-video"
                          className="py-2 text-[15px] text-[#444] transition hover:text-[#b88a2c]"
                        >
                          Fotografisanje i video snimanje događaja
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Link
                href="/restorani-za-proslave"
                className="text-[13px] font-semibold uppercase tracking-[0.08em] text-[#2f343b] transition hover:text-[#b88a2c]"
              >
                Restorani za proslave
              </Link>

              <Link
                href="/galerija"
                className="text-[13px] font-semibold uppercase tracking-[0.08em] text-[#2f343b] transition hover:text-[#b88a2c]"
              >
                Galerija
              </Link>

              <Link
                href="/saveti"
                className="text-[13px] font-semibold uppercase tracking-[0.08em] text-[#2f343b] transition hover:text-[#b88a2c]"
              >
                Saveti
              </Link>

              <Link
                href="/kontakt"
                className="text-[13px] font-semibold uppercase tracking-[0.08em] text-[#2f343b] transition hover:text-[#b88a2c]"
              >
                Kontakt
              </Link>
            </nav>

            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="flex h-10 w-10 items-center justify-center text-[#2f343b] lg:hidden"
              aria-label="Otvori meni"
            >
              {mobileOpen ? "✕" : "☰"}
            </button>
          </div>

          {mobileOpen && (
            <div className="border-t border-[#ece3d8] bg-white px-4 py-4 lg:hidden">
              <div className="flex flex-col">
                <Link
                  href="/"
                  className="px-3 py-3 text-sm font-semibold uppercase text-[#2f343b]"
                  onClick={closeMobileMenu}
                >
                  Početna
                </Link>

                <div className="border-t border-[#f1ebe2]">
                  <button
                    type="button"
                    onClick={() => setOrgOpen(!orgOpen)}
                    className="flex w-full items-center justify-between px-3 py-3 text-left text-sm font-semibold uppercase text-[#2f343b]"
                  >
                    Organizacija
                    <span className="text-[#b88a2c]">{orgOpen ? "−" : "+"}</span>
                  </button>

                  {orgOpen && (
                    <div className="pb-2">
                      <Link
                        href="/organizacija/prvi-rodjendan"
                        className="block px-5 py-2 text-sm text-[#555]"
                        onClick={closeMobileMenu}
                      >
                        Organizacija prvog rođendana
                      </Link>
                      <Link
                        href="/organizacija/krstenje"
                        className="block px-5 py-2 text-sm text-[#555]"
                        onClick={closeMobileMenu}
                      >
                        Organizacija krštenja
                      </Link>
                      <Link
                        href="/organizacija/punoletstvo"
                        className="block px-5 py-2 text-sm text-[#555]"
                        onClick={closeMobileMenu}
                      >
                        Organizacija 18. rođendana
                      </Link>
                      <Link
                        href="/organizacija/momacke-i-devojacke-veceri"
                        className="block px-5 py-2 text-sm text-[#555]"
                        onClick={closeMobileMenu}
                      >
                        Momačke i devojačke večeri
                      </Link>
                      <Link
                        href="/organizacija/odlazak-u-penziju"
                        className="block px-5 py-2 text-sm text-[#555]"
                        onClick={closeMobileMenu}
                      >
                        Odlazak u penziju
                      </Link>
                      <Link
                        href="/organizacija/zurka-iznenadjenja"
                        className="block px-5 py-2 text-sm text-[#555]"
                        onClick={closeMobileMenu}
                      >
                        Žurke iznenađenja
                      </Link>
                    </div>
                  )}
                </div>

                <div className="border-t border-[#f1ebe2]">
                  <button
                    type="button"
                    onClick={() => setDekorOpen(!dekorOpen)}
                    className="flex w-full items-center justify-between px-3 py-3 text-left text-sm font-semibold uppercase text-[#2f343b]"
                  >
                    Dekoracija
                    <span className="text-[#b88a2c]">{dekorOpen ? "−" : "+"}</span>
                  </button>

                  {dekorOpen && (
                    <div className="pb-2">
                      <Link
                        href="/dekoracije/rodjendan"
                        className="block px-5 py-2 text-sm text-[#555]"
                        onClick={closeMobileMenu}
                      >
                        Dekoracija rođendana
                      </Link>
                      <Link
                        href="/dekoracije/punoletstvo"
                        className="block px-5 py-2 text-sm text-[#555]"
                        onClick={closeMobileMenu}
                      >
                        Dekoracija 18. rođendana
                      </Link>
                      <Link
                        href="/dekoracije/krstenje"
                        className="block px-5 py-2 text-sm text-[#555]"
                        onClick={closeMobileMenu}
                      >
                        Dekoracija krštenja
                      </Link>
                      <Link
                        href="/dekoracije/prvi-rodjendan"
                        className="block px-5 py-2 text-sm text-[#555]"
                        onClick={closeMobileMenu}
                      >
                        Dekoracija prvog rođendana
                      </Link>
                    </div>
                  )}
                </div>

                <div className="border-t border-[#f1ebe2]">
                  <button
                    type="button"
                    onClick={() => setUslugeOpen(!uslugeOpen)}
                    className="flex w-full items-center justify-between px-3 py-3 text-left text-sm font-semibold uppercase text-[#2f343b]"
                  >
                    Usluge
                    <span className="text-[#b88a2c]">
                      {uslugeOpen ? "−" : "+"}
                    </span>
                  </button>

                  {uslugeOpen && (
                    <div className="pb-2">
                      <Link
                        href="/usluge#planiranje-koordinacija"
                        className="block px-5 py-2 text-sm text-[#555]"
                        onClick={closeMobileMenu}
                      >
                        Planiranje i koordinacija događaja
                      </Link>
                      <Link
                        href="/usluge#rezervacija-sale"
                        className="block px-5 py-2 text-sm text-[#555]"
                        onClick={closeMobileMenu}
                      >
                        Pronalaženje i rezervacija sale / lokala
                      </Link>
                      <Link
                        href="/usluge#muzicki-program"
                        className="block px-5 py-2 text-sm text-[#555]"
                        onClick={closeMobileMenu}
                      >
                        Organizacija muzičkog programa
                      </Link>
                      <Link
                        href="/usluge#dizajn-dekoracija"
                        className="block px-5 py-2 text-sm text-[#555]"
                        onClick={closeMobileMenu}
                      >
                        Dizajn i dekoracija prostora
                      </Link>
                      <Link
                        href="/usluge#ketering"
                        className="block px-5 py-2 text-sm text-[#555]"
                        onClick={closeMobileMenu}
                      >
                        Ketering usluge po vašem izboru
                      </Link>
                      <Link
                        href="/usluge#animatori"
                        className="block px-5 py-2 text-sm text-[#555]"
                        onClick={closeMobileMenu}
                      >
                        Animatori za decu
                      </Link>
                      <Link
                        href="/usluge#foto-video"
                        className="block px-5 py-2 text-sm text-[#555]"
                        onClick={closeMobileMenu}
                      >
                        Fotografisanje i video snimanje događaja
                      </Link>
                    </div>
                  )}
                </div>

                <Link
                  href="/restorani-za-proslave"
                  className="border-t border-[#f1ebe2] px-3 py-3 text-sm font-semibold uppercase text-[#2f343b]"
                  onClick={closeMobileMenu}
                >
                  Restorani za proslave
                </Link>

                <Link
                  href="/galerija"
                  className="border-t border-[#f1ebe2] px-3 py-3 text-sm font-semibold uppercase text-[#2f343b]"
                  onClick={closeMobileMenu}
                >
                  Galerija
                </Link>

                <Link
                  href="/saveti"
                  className="border-t border-[#f1ebe2] px-3 py-3 text-sm font-semibold uppercase text-[#2f343b]"
                  onClick={closeMobileMenu}
                >
                  Saveti
                </Link>

                <Link
                  href="/kontakt"
                  className="border-t border-[#f1ebe2] px-3 py-3 text-sm font-semibold uppercase text-[#2f343b]"
                  onClick={closeMobileMenu}
                >
                  Kontakt
                </Link>
              </div>
            </div>
          )}
        </header>

        {children}
      </body>
    </html>
  );
}