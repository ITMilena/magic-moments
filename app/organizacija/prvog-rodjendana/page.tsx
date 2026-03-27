export default function PrviRodjendanPage() {
  return (
    <main className="bg-[#fdfbf7] text-[#2f2a24]">
      {/* HERO */}
      <section className="relative h-[70vh] w-full">
        <img
          src="/images/prvi-rodjendan.jpg"
          className="absolute inset-0 h-full w-full object-cover"
          alt="Prvi rođendan"
        />

        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 flex h-full items-center justify-center text-center text-white px-6">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[#f0d79c]">
              Magic Moments
            </p>

            <h1 className="mt-4 text-4xl md:text-6xl font-semibold">
              Organizacija prvog rođendana
            </h1>

            <p className="mt-6 max-w-2xl mx-auto text-lg text-white/90">
              Najlepši prvi rođendan uz pažljivo osmišljene detalje,
              dekoraciju i savršenu organizaciju.
            </p>
          </div>
        </div>
      </section>

      {/* OPIS */}
      <section className="px-6 py-20">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-[#26313f]">
            Proslava koja se pamti
          </h2>

          <p className="mt-6 text-lg text-[#5b5348] leading-8">
            Organizujemo prvi rođendan sa posebnim fokusom na atmosferu,
            dekoraciju i detalje koji stvaraju uspomene za ceo život.
            Od ideje do realizacije – sve prepuštate nama.
          </p>
        </div>
      </section>

      {/* USLUGE */}
      <section className="bg-[#fbf8f2] px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-center text-[#26313f]">
            Šta obuhvata organizacija
          </h2>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {[
              "Planiranje i koordinacija događaja",
              "Pronalaženje prostora",
              "Dekoracija i dizajn",
              "Animatori za decu",
              "Fotograf i video snimanje",
              "Ketering po izboru",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-[#e6d8b8] bg-white p-6 text-center shadow-sm hover:shadow-md transition"
              >
                <div className="text-2xl mb-3">✨</div>
                <p className="font-semibold text-[#26313f]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20 text-center">
        <h2 className="text-3xl font-semibold text-[#26313f]">
          Želite savršenu proslavu?
        </h2>

        <p className="mt-4 text-lg text-[#5b5348]">
          Kontaktirajte nas i zajedno ćemo organizovati nezaboravan prvi rođendan.
        </p>

        <a
          href="/kontakt"
          className="inline-block mt-8 rounded-full bg-[#c9a75d] px-8 py-4 text-white font-semibold uppercase tracking-wide hover:bg-[#b88a2c] transition"
        >
          Kontaktirajte nas
        </a>
      </section>
    </main>
  );
}