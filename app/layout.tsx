import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
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
  description: "Elegantna dekoracija za posebne trenutke",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="sr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#f8f5f0] text-[#3d2c2a]">

        {/* NAVIGACIJA */}
        <header className="w-full border-b border-[#e8ddd2] bg-white/80 backdrop-blur">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">

            {/* LOGO */}
            <Link href="/" className="font-serif text-xl tracking-wide">
              Magic Moments
            </Link>

            {/* MENU */}
            <nav className="flex gap-6 text-sm">
              <Link href="/">Početna</Link>
              <Link href="/kontakt">Kontakt</Link>
            </nav>
          </div>
        </header>

        {/* STRANICE */}
        <main className="flex-1">{children}</main>

        {/* FOOTER */}
        <footer className="border-t border-[#e8ddd2] bg-white/80 py-8 text-center text-sm text-[#6f5a57]">
          <footer className="border-t border-[#e8ddd2] bg-white/80 py-8 text-center text-sm text-[#6f5a57]">
            <div className="space-y-2">

              <p className="font-medium text-[#3d2c2a]">
                Magic Moments
              </p>

              <p>
                Sajt radio – Milena Živković
              </p>

              <p>
                📞 060 / 193 - 83 - 73
              </p>

              <p className="text-xs text-[#9c7c5b] pt-2">
                © {new Date().getFullYear()} Sva prava zadržana
              </p>

            </div>
          </footer>

          <p className="text-xs text-[#9c7c5b] pt-2">
            © {new Date().getFullYear()} Sva prava zadržana
          </p>

        </div>
      </footer>
    </footer>

    </body >
    </html >
  );
}