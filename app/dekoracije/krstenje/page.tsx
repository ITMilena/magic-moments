export default function KrstenjePage() {
  return (
    <main className="bg-white text-[#222]">

      {/* HERO */}
      <section className="bg-[#f7f5f1] py-20">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h1 className="text-4xl font-semibold uppercase tracking-[0.05em] text-[#26313f]">
            Dekoracija za krštenje
          </h1>
          <p className="mt-6 text-lg text-[#555] leading-8">
            Elegantno osmišljena dekoracija koja donosi toplinu, nežnost i
            posebnu atmosferu za jedan od najvažnijih dana.
          </p>
        </div>
      </section>

      {/* BLOK 1 */}
      <section className="py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 md:grid-cols-2">

          <img
            src="/krstenje1.jpg"
            className="w-full h-[400px] object-cover"
          />

          <div>
            <h2 className="mb-6 text-2xl font-semibold uppercase text-[#26313f]">
              Dekoracija za krštenje dečaka
            </h2>

            <p className="leading-8 text-[#4b4b4b]">
              Najčešće se koriste nežne plave nijanse u kombinaciji sa belim
              i zlatnim detaljima. Dekoracija može uključivati balone,
              personalizovane elemente i tematske detalje koji stvaraju
              toplu i svečanu atmosferu.
            </p>
          </div>

        </div>
      </section>

      {/* BLOK 2 */}
      <section className="bg-[#f9f7f2] py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 md:grid-cols-2">

          <div>
            <h2 className="mb-6 text-2xl font-semibold uppercase text-[#26313f]">
              Dekoracija za krštenje devojčica
            </h2>

            <p className="leading-8 text-[#4b4b4b]">
              Dominantne su pastelne roze i krem nijanse uz dodatak cvetnih
              aranžmana i elegantnih detalja. Svaki element pažljivo je
              biran kako bi prostor izgledao nežno i luksuzno.
            </p>
          </div>

          <img
            src="/krstenje2.jpg"
            className="w-full h-[400px] object-cover"
          />

        </div>
      </section>

      {/* BLOK 3 */}
      <section className="py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 md:grid-cols-2">

          <img
            src="/krstenje3.jpg"
            className="w-full h-[400px] object-cover"
          />

          <div>
            <h2 className="mb-6 text-2xl font-semibold uppercase text-[#26313f]">
              Šta sve uključuje dekoracija?
            </h2>

            <ul className="space-y-3 text-[#4b4b4b]">
              <li>• Dekoracija stolova</li>
              <li>• Baloni i cvetni aranžmani</li>
              <li>• Personalizovani detalji</li>
              <li>• Foto kutak</li>
              <li>• Tematski koncept događaja</li>
            </ul>
          </div>

        </div>
      </section>

    </main>
  );
}