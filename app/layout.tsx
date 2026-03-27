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
            <Link href="/" className="flex items-center shrink-0">
              <img
                src="/Logo.jpeg"
                alt="Magic Moments"
                className="h-14 w-auto object-contain"
              />
            </Link>

            <nav className="hidden items-center gap-6 xl:gap-8 lg:flex">
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

                <div className="absolute left-0 top-full h-4 w-[340px]" />

                <div className="invisible absolute left-0 top-[calc(100%+4px)] z-50 w-[340px] border border-[#ece3d8] bg-white opacity-0 shadow-[0_10px_25px_rgba(0,0,0,0.06)] transition-all duration-150 group-hover:visible group-hover:opacity-100">
                  <Link
                    href="/organizacija/rodjendana"
                    className="block border-b border-[#f5eee4] px-5 py-4 text-[15px] text-[#555] transition hover:bg-[#fcf8f0] hover:text-[#b88a2c]"
                  >
                    Organizacija proslave rođendana
                  </Link>
                  <Link
                    href="/organizacija/punoletstva"
                    className="block border-b border-[#f5eee4] px-5 py-4 text-[15px] text-[#555] transition hover:bg-[#fcf8f0] hover:text-[#b88a2c]"
                  >
                    Organizacija proslave 18. rođendana
                  </Link>
                  <Link
                    href="/organizacija/krstenja"
                    className="block border-b border-[#f5eee4] px-5 py-4 text-[15px] text-[#555] transition hover:bg-[#fcf8f0] hover:text-[#b88a2c]"
                  >
                    Organizacija proslave krštenja
                  </Link>
                  <Link
                    href="/organizacija/rodjenja-deteta"
                    className="block border-b border-[#f5eee4] px-5 py-4 text-[15px] text-[#555] transition hover:bg-[#fcf8f0] hover:text-[#b88a2c]"
                  >
                    Organizacija proslave rođenja deteta
                  </Link>
                  <Link
                    href="/organizacija/korporativnih-dogadjaja"
                    className="block border-b border-[#f5eee4] px-5 py-4 text-[15px] text-[#555] transition hover:bg-[#fcf8f0] hover:text-[#b88a2c]"
                  >
                    Organizacija korporativnih događaja
                  </Link>
                  <Link
                    href="/organizacija/seminara-i-kongresa"
                    className="block px-5 py-4 text-[15px] text-[#555] transition hover:bg-[#fcf8f0] hover:text-[#b88a2c]"
                  >
                    Organizacija seminara i kongresa
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
                    href="/dekoracije/rodjenje-deteta"
                    className="block px-5 py-4 text-[15px] text-[#555] transition hover:bg-[#fcf8f0] hover:text-[#b88a2c]"
                  >
                    Dekoracija rođenja deteta
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

                <div className="absolute left-1/2 top-full h-4 w-[760px] -translate-x-1/2" />

                <div className="invisible absolute left-1/2 top-[calc(100%+4px)] z-50 w-[760px] -translate-x-1/2 border border-[#ece3d8] bg-white opacity-0 shadow-[0_10px_25px_rgba(0,0,0,0.06)] transition-all duration-150 group-hover:visible group-hover:opacity-100">
                  <div className="grid grid-cols-3">
                    <div className="border-r border-[#f1ebe2] p-6">
                      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.12em] text-[#b88a2c]">
                        Muzika i zabava
                      </p>

                      <div className="flex flex-col">
                        <Link
                          href="/usluge#bendovi"
                          className="py-2 text-[15px] text-[#444] transition hover:text-[#b88a2c]"
                        >
                          Bendovi za proslave
                        </Link>
                        <Link
                          href="/usluge#animatori"
                          className="py-2 text-[15px] text-[#444] transition hover:text-[#b88a2c]"
                        >
                          Animatori za decu
                        </Link>
                        <Link
                          href="/usluge#voditelji"
                          className="py-2 text-[15px] text-[#444] transition hover:text-[#b88a2c]"
                        >
                          Voditelji i zabavni program
                        </Link>
                      </div>
                    </div>

                    <div className="border-r border-[#f1ebe2] p-6">
                      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.12em] text-[#b88a2c]">
                        Foto i video
                      </p>

                      <div className="flex flex-col">
                        <Link
                          href="/usluge#fotografi"
                          className="py-2 text-[15px] text-[#444] transition hover:text-[#b88a2c]"
                        >
                          Fotografisanje događaja
                        </Link>
                        <Link
                          href="/usluge#snimanje"
                          className="py-2 text-[15px] text-[#444] transition hover:text-[#b88a2c]"
                        >
                          Video snimanje proslave
                        </Link>
                        <Link
                          href="/usluge#foto-kutak"
                          className="py-2 text-[15px] text-[#444] transition hover:text-[#b88a2c]"
                        >
                          Foto kutak i dodatni sadržaj
                        </Link>
                      </div>
                    </div>

                    <div className="p-6">
                      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.12em] text-[#b88a2c]">
                        Dodatno
                      </p>

                      <div className="flex flex-col">
                        <Link
                          href="/usluge#pozivnice"
                          className="py-2 text-[15px] text-[#444] transition hover:text-[#b88a2c]"
                        >
                          Pozivnice za proslave
                        </Link>
                        <Link
                          href="/usluge#dekoracija-prostora"
                          className="py-2 text-[15px] text-[#444] transition hover:text-[#b88a2c]"
                        >
                          Dekoracija prostora
                        </Link>
                        <Link
                          href="/usluge#koordinacija"
                          className="py-2 text-[15px] text-[#444] transition hover:text-[#b88a2c]"
                        >
                          Koordinacija događaja
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
                        href="/organizacija/rodjendana"
                        className="block px-5 py-2 text-sm text-[#555]"
                        onClick={closeMobileMenu}
                      >
                        Organizacija proslave rođendana
                      </Link>
                      <Link
                        href="/organizacija/punoletstva"
                        className="block px-5 py-2 text-sm text-[#555]"
                        onClick={closeMobileMenu}
                      >
                        Organizacija proslave 18. rođendana
                      </Link>
                      <Link
                        href="/organizacija/krstenja"
                        className="block px-5 py-2 text-sm text-[#555]"
                        onClick={closeMobileMenu}
                      >
                        Organizacija proslave krštenja
                      </Link>
                      <Link
                        href="/organizacija/rodjenja-deteta"
                        className="block px-5 py-2 text-sm text-[#555]"
                        onClick={closeMobileMenu}
                      >
                        Organizacija proslave rođenja deteta
                      </Link>
                      <Link
                        href="/organizacija/korporativnih-dogadjaja"
                        className="block px-5 py-2 text-sm text-[#555]"
                        onClick={closeMobileMenu}
                      >
                        Organizacija korporativnih događaja
                      </Link>
                      <Link
                        href="/organizacija/seminara-i-kongresa"
                        className="block px-5 py-2 text-sm text-[#555]"
                        onClick={closeMobileMenu}
                      >
                        Organizacija seminara i kongresa
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
                        href="/dekoracije/rodjenje-deteta"
                        className="block px-5 py-2 text-sm text-[#555]"
                        onClick={closeMobileMenu}
                      >
                        Dekoracija rođenja deteta
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
                        href="/usluge#bendovi"
                        className="block px-5 py-2 text-sm text-[#555]"
                        onClick={closeMobileMenu}
                      >
                        Bendovi za proslave
                      </Link>
                      <Link
                        href="/usluge#animatori"
                        className="block px-5 py-2 text-sm text-[#555]"
                        onClick={closeMobileMenu}
                      >
                        Animatori za decu
                      </Link>
                      <Link
                        href="/usluge#voditelji"
                        className="block px-5 py-2 text-sm text-[#555]"
                        onClick={closeMobileMenu}
                      >
                        Voditelji i zabavni program
                      </Link>
                      <Link
                        href="/usluge#fotografi"
                        className="block px-5 py-2 text-sm text-[#555]"
                        onClick={closeMobileMenu}
                      >
                        Fotografisanje događaja
                      </Link>
                      <Link
                        href="/usluge#snimanje"
                        className="block px-5 py-2 text-sm text-[#555]"
                        onClick={closeMobileMenu}
                      >
                        Video snimanje proslave
                      </Link>
                      <Link
                        href="/usluge#foto-kutak"
                        className="block px-5 py-2 text-sm text-[#555]"
                        onClick={closeMobileMenu}
                      >
                        Foto kutak i dodatni sadržaj
                      </Link>
                      <Link
                        href="/usluge#pozivnice"
                        className="block px-5 py-2 text-sm text-[#555]"
                        onClick={closeMobileMenu}
                      >
                        Pozivnice za proslave
                      </Link>
                      <Link
                        href="/usluge#dekoracija-prostora"
                        className="block px-5 py-2 text-sm text-[#555]"
                        onClick={closeMobileMenu}
                      >
                        Dekoracija prostora
                      </Link>
                      <Link
                        href="/usluge#koordinacija"
                        className="block px-5 py-2 text-sm text-[#555]"
                        onClick={closeMobileMenu}
                      >
                        Koordinacija događaja
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