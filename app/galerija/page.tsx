"use client";

import { useState } from "react";
import Link from "next/link";

const dekoracijeSlike = [
  "/dekoracija5.jpeg",
  "/dekoracija6.jpeg",
  "/dekoracija7.jpeg",
  "/dekoracija8.jpeg",
  "/dekoracija9.jpeg",
  "/dekoracija10.jpeg",
  "/dekoracija11.jpeg",
  "/dekoracija12.jpeg",
  "/dekoracija13.jpeg",
  "/dekoracija14.jpeg",
  "/dekoracija15.jpeg",
  "/dekoracija16.jpeg",
  "/dekoracija17.jpeg",
  "/dekoracija18.jpeg",
  "/dekoracija19.jpeg",
  "/dekoracija20.jpeg",
  "/dekoracija21.jpeg",
  "/dekoracija22.jpeg",
  "/dekoracija23.jpeg",
];

export default function GalerijaPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <main className="bg-[#fdfbf7] text-[#2f2a24]">

      {/* HERO */}
      <section className="bg-[#cfd5e3] px-6 py-24 md:py-32 text-center">
        <p className="text-sm uppercase tracking-[0.28em] text-white/80">
          Magic Moments
        </p>
        <h1 className="mt-6 text-5xl md:text-7xl font-semibold text-[#f7f2e8]">
          Galerija
        </h1>
      </section>

      {/* ALBUM */}
      <section className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-semibold text-[#26313f] mb-10">
            Dekoracije
          </h2>

          {/* GRID */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {dekoracijeSlike.map((src, i) => (
              <div
                key={i}
                onClick={() => setSelectedImage(src)}
                className="cursor-pointer overflow-hidden rounded-[18px] border border-[#eadfca] bg-white shadow-sm hover:shadow-lg transition"
              >
                <div className="h-[320px] overflow-hidden">
                  <img
                    src={src}
                    className="w-full h-full object-cover hover:scale-105 transition duration-500"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LIGHTBOX */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center"
        >
          <img
            src={selectedImage}
            className="max-h-[90vh] max-w-[90vw] rounded-xl shadow-2xl"
          />
        </div>
      )}

      {/* CTA */}
      <section className="px-6 pb-20">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="text-3xl md:text-5xl font-semibold text-[#26313f]">
            Svidela vam se dekoracija?
          </h2>

          <p className="mt-6 text-lg text-[#5f5a52]">
            Kontaktirajte nas i zajedno ćemo osmisliti savršen ambijent za vašu
            proslavu.
          </p>

          <div className="mt-10">
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center rounded-full bg-[#c9a75d] px-8 py-4 text-sm font-semibold uppercase text-white hover:bg-[#b88a2c]"
            >
              Kontakt
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}