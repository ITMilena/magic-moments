"use client";

import { useMemo, useState } from "react";

type Category = "Sve" | "Bendovi" | "Sale" | "Dekoracije";

type GalleryItem = {
  title: string;
  category: Exclude<Category, "Sve">;
};

const categories: Category[] = ["Sve", "Bendovi", "Sale", "Dekoracije"];

const galleryItems: GalleryItem[] = [
  { title: "Bend 1", category: "Bendovi" },
  { title: "Bend 2", category: "Bendovi" },
  { title: "Bend 3", category: "Bendovi" },
  { title: "Bend 4", category: "Bendovi" },

  { title: "Sala 1", category: "Sale" },
  { title: "Sala 2", category: "Sale" },
  { title: "Sala 3", category: "Sale" },
  { title: "Sala 4", category: "Sale" },

  { title: "Dekoracija 1", category: "Dekoracije" },
  { title: "Dekoracija 2", category: "Dekoracije" },
  { title: "Dekoracija 3", category: "Dekoracije" },
  { title: "Dekoracija 4", category: "Dekoracije" },
];

export default function GalerijaPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("Sve");

  const filteredItems = useMemo(() => {
    if (activeCategory === "Sve") return galleryItems;
    return galleryItems.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <main className="min-h-screen bg-[#fdfbf7] text-[#2f2a24]">
      <section className="border-b border-[#eadfca] bg-[#fbf8f2] px-6 py-16 md:py-20">
        <div className="mx-auto max-w-7xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-[#b88a2c]">
            Magic Moments
          </p>

          <h1 className="text-4xl font-semibold uppercase tracking-[0.04em] text-[#26313f] md:text-6xl">
            Dobrodošli u našu galeriju
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-[#5b5348] md:text-lg">
            Izdvojeni momenti, pažljivo osmišljeni detalji i inspiracija za
            bendove, sale i dekoracije.
          </p>
        </div>
      </section>

      <section className="px-6 py-8 md:py-10">
        <div className="mx-auto max-w-7xl">
          <div className="overflow-hidden border border-[#e6d8b8] bg-white md:grid md:grid-cols-4">
            {categories.map((category, index) => {
              const active = activeCategory === category;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={[
                    "w-full px-6 py-5 text-center text-lg font-semibold uppercase tracking-[0.04em] transition",
                    index !== categories.length - 1
                      ? "border-b border-[#efe5d1] md:border-b-0 md:border-r md:border-r-[#e6d8b8]"
                      : "",
                    active
                      ? "bg-[#c9a75d] text-white"
                      : "bg-white text-[#26313f] hover:bg-[#fdf6e7] hover:text-[#b88a2c]",
                  ].join(" ")}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-6 pb-16 md:pb-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {filteredItems.map((item) => (
              <div
                key={`${item.category}-${item.title}`}
                className="group overflow-hidden rounded-[26px] border border-[#e2d4b3] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="flex h-[360px] w-full items-center justify-center bg-[#f7f1e4] text-center">
                  <div className="px-6">
                    <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#d8c0c6] text-xl text-white">
                      ✨
                    </div>

                    <p className="text-lg font-semibold text-[#26313f]">
                      {item.title}
                    </p>

                    <p className="mt-2 text-sm text-[#7b6f5c]">
                      Ovde ide slika
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="py-16 text-center text-[#666]">
              Trenutno nema stavki u ovoj kategoriji.
            </div>
          )}
        </div>
      </section>
    </main>
  );
}