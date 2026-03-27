import type { Metadata } from "next";
import Link from "next/link";
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

export const metadata: Metadata = {
  title: "Magic Moments",
  description: "Organizacija i dekoracija proslava",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="sr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[#fbfaf7] text-[#2f343b]">
        <header className="sticky top-0 z-50 border-b border-[#e9e1d5] bg-white">
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

                <div className="invisible absolute left-0 top-[calc(100%+4px)] z-50 min-w-[260px] border border-[#ece3d8] bg-white opacity-0 shadow-[0_10px_25px_rgba(0,0,0,0.06)] transition-all duration-150 group-hover:visible group-hover:opacity-100">
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

                <div className="invisible absolute left-0 top-[calc(100%+4px)] z-50 min-w-[280px] border border-[#ece3d8] bg-white opacity-0 shadow-[0_10px_25px_rgba(0,0,0,0.06)] transition-all duration-150 group-hover:visible group-hover:opacity-100">
                  <Link
                    href="/dekoracije/krstenje"
                    className="block px-5 py-4 text-[13px] text-[#555] transition hover:bg-[#fcf8f0] hover:text-[#b88a2c]"
                  >
                    Dekoracija krštenja
                  </Link>
                  <Link
                    href="/dekoracije/rodjendan"
                    className="block px-5 py-4 text-[13px] text-[#555] transition hover:bg-[#fcf8f0] hover:text-[#b88a2c]"
                  >
                    Dekoracija rođendana
                  </Link>
                  <Link
                    href="/dekoracije/punoletstvo"
                    className="block px-5 py-4 text-[13px] text-[#555] transition hover:bg-[#fcf8f0] hover:text-[#b88a2c]"
                  >
                    Dekoracija 18. rođendana
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
          </div>
        </header>

        {children}

        <footer className="border-t border-[#e9e1d5] bg-white py-8 text-center text-sm text-[#6f5a57]">
          <div className="space-y-2">
            <p className="font-medium text-[#3d2c2a]">Magic Moments</p>
            <p>Sajt radio – Milena Živković</p>
            <p>
              <a href="tel:+381601938373" className="hover:underline">
                060 / 193 - 83 - 73
              </a>
            </p>
            <p className="pt-2 text-xs text-[#9c7c5b]">
              © {new Date().getFullYear()} Sva prava zadržana
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}