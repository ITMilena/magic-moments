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
        <header className="w-full border-b border-[#e8ddd2] bg-white/80 backdrop-blur">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
            <Link href="/" className="font-serif text-xl tracking-wide">
              Magic Moments
            </Link>

            <nav className="flex gap-6 text-sm">
              <Link href="/">Početna</Link>
              <Link href="/kontakt">Kontakt</Link>
            </nav>
          </div>
        </header>

        <main className="flex-1">{children}</main>

        <footer className="border-t border-[#e8ddd2] bg-white/80 py-8 text-center text-sm text-[#6f5a57]">
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