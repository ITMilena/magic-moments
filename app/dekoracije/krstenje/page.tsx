export default function KrstenjePage() {
  return (
    <main className="bg-white text-[#222]">

      {/* HERO */}
      <section className="bg-[#f7f5f1] py-24">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-semibold uppercase tracking-[0.06em] text-[#26313f]">
            Dekoracija za krštenje
          </h1>
          <p className="mt-6 text-lg text-[#666] leading-8 max-w-2xl mx-auto">
            Elegantno osmišljena dekoracija koja donosi toplinu, nežnost i
            posebnu atmosferu za jedan od najvažnijih dana.
          </p>
        </div>
      </section>

      {/* BLOK 1 */}
      <section className="py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 md:grid-cols-2">

          <img
            src="/krstenje1.jpg"
            className="w-full h-[420px] object-cover shadow-sm"
          />

          <div>
            <h2 className="mb-6 text-2xl md:text-3xl font-semibold uppercase tracking-[0.04em] text-[#26313f]">
              Dekoracija za krštenje dečaka
            </h2>

            <p className="leading-8 text-[#4b4b4b] text-lg">
              Najčešće se koriste nežne plave nijanse u kombinaciji sa belim
              i zlatnim detaljima. Dekoracija može uključivati balone,
              personalizovane elemente i tematske detalje koji stvaraju
              toplu i svečanu atmosferu.
            </p>
          </div>

        </div>
      </section>

      {/* BLOK 2 */}
      <section className="bg-[#f9f7f2] py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 md:grid-cols-2">

          <div>
            <h2 className="mb-6 text-2xl md:text-3xl font-semibold uppercase tracking-[0.04em] text-[#26313f]">
              Dekoracija za krštenje devojčica
            </h2>

            <p className="leading-8 text-[#4b4b4b] text-lg">
              Dominantne su pastelne roze i krem nijanse uz dodatak cvetnih
              aranžmana i elegantnih detalja. Svaki element pažljivo je
              biran kako bi prostor izgledao nežno i luksuzno.
            </p>
          </div>

          <img
            src="/krstenje2.jpg"
            className="w-full h-[420px] object-cover shadow-sm"
          />

        </div>
      </section>

      {/* BLOK 3 */}
      <section className="py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 md:grid-cols-2">

          <img
            src="/krstenje3.jpg"
            className="w-full h-[420px] object-cover shadow-sm"
          />

          <div>
            <h2 className="mb-6 text-2xl md:text-3xl font-semibold uppercase tracking-[0.04em] text-[#26313f]">
              Šta sve uključuje dekoracija?
            </h2>

            <ul className="space-y-4 text-[#4b4b4b] text-lg">
              <li>• Dekoracija stolova i prostora</li>
              <li>• Baloni i cvetni aranžmani</li>
              <li>• Personalizovani detalji</li>
              <li>• Foto kutak</li>
              <li>• Tematski koncept događaja</li>
            </ul>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#fcfaf5] py-24 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h3 className="text-2xl md:text-3xl font-semibold uppercase text-[#26313f] mb-6">
            Želite savršenu dekoraciju?
          </h3>

          <p className="text-[#555] leading-8 mb-10">
            Kontaktirajte nas i zajedno ćemo osmisliti svaki detalj vašeg
            posebnog dana.
          </p>

          <a
            href="/kontakt"
            className="inline-block bg-[#d8c0c6] px-10 py-4 text-sm font-semibold uppercase tracking-[0.10em] text-white transition hover:bg-[#cdaeb7]"
          >
            Kontaktirajte nas
          </a>
        </div>
      </section>

    </main>
  );
}