export default function Beranda() {
  const faqItems = [
    { title: "Apa itu INVOFEST?", description: "Invofest (Informatics Vocational Festival) adalah festival tahunan yang diakan oleh program studi sarjana terapan teknik informatika Universitas Harkat Negeri..." },
    { title: "Bagaimana saya mengetahui pemenang kompetisi?", description: "Pemenang akan diinformasikan melalui media sosial instagram dari invofest @invofest_harkatnegeri." },
    { title: "Kapan dan dimana INVOFEST dilaksanakan?", description: "INVOFEST diselenggarakan mulai tanggal 21 Oktober 2025 sampai dengan tanggal 27 November 2025." },
    { title: "Apa yang didapat pemenang dalam kompetisi?", description: "Pemenang kompetisi akan mendapatkan hadiah trophy, uang pembinaan, dan e-sertifikat."},
    { title: "Apakah ada biaya pendaftaran di INVOFEST?", description: "Semua kegiatan dipastikan berbayar ya teman-teman." },
    { title: "Bagaimana cara mendaftar event?", description: "Buka https://www.invofest-harkatnegeri.com lalu pergi ke halaman event..." },
  ];

  const categorySummary = [
    {
      title: "IT Seminar",
      description: "Seminar nasional ini membahas “Human-AI Integration: Merancang Arsitektur Kolaboratif, Bukan Kompetitif” untuk mengembangkan potensi diri dan pengetahuan teknologi lebih dalam lagi.",
    },
    {
      title: "IT Talkshow",
      description: "Talkshow “Humanizing Technology: Kolaborasi Manusia dan AI di Masa Depan” membahas peran manusia dalam memanfaatkan AI untuk solusi berkelanjutan dan peningkatan teknologi.",
    },
    {
      title: "IT Competition",
      description: "Kompetisi “From Creation to Innovation” mengajak generasi muda untuk mengembangkan inovasi dan kreativitas guna membentuk kelompok yang memiliki potensi luar biasa, yang mampu mewujudkan masa depan yang berkelanjutan.",
    },
    {
      title: "IT Workshop",
      description: "Workshop 'AI for a Sustainable Future: The Role of Z Generation in the Digital Era' membekali Gen Z dengan keterampilan praktis AI untuk menciptakan solusi berkelanjutan.",
    },
  ];

  const eventSections = [
    {
      title: "IT Seminar",
      desc: `Seminar Nasional Teknologi Informasi ini mengangkat tema "Human-AI Integration: Merancang Arsitektur Kolaboratif, Bukan Kompetitif.” Kami bertujuan untuk menggeser fokus dari ketakutan akan kompetisi menjadi eksplorasi peluang kolaborasi.`,
      btnLabel: "INFO SELENGKAPNYA",
      mascot: "https://www.invofest-harkatnegeri.com/assets/Maskot-Hero.png",
      mascotAlt: "Mascot Seminar",
      mascotLeft: false,
      bg: "white",
    },
    {
      title: "IT Talkshow",
      desc: `Talkshow berskala nasional: “Humanizing Technology: Kolaborasi Manusia dan AI di Masa Depan.” Acara ini membahas bagaimana nilai kemanusiaan seperti empati, etika, dan kreativitas dapat menjadi bagian penting dalam pengembangan teknologi AI.`,
      btnLabel: "INFO SELENGKAPNYA",
      mascot: "https://www.invofest-harkatnegeri.com/assets/Maskot-Lomba.png",
      mascotAlt: "Mascot Talkshow",
      mascotLeft: true,
      bg: "pink",
    },
    {
      title: "IT Workshop",
      desc: `Workshop "AI for a Sustainable Future: The Role of Z Generation in the Digital Era” menjembatani potensi Generasi Z dan kekuatan AI untuk menciptakan solusi lingkungan yang nyata dan berkelanjutan.`,
      btnLabel: "INFO SELENGKAPNYA",
      mascot: "https://www.invofest-harkatnegeri.com/assets/Maskot-Lomba.png",
      mascotAlt: "Mascot Workshop",
      mascotLeft: false,
      bg: "white",
    },
    {
      title: "IT Competition",
      desc: `"From Creation to Innovation" adalah kompetisi IT yang menantang talenta digital untuk menciptakan inovasi baru yang berdampak, berkelanjutan, dan memiliki nilai guna tinggi.`,
      btnLabel: "INFO SELENGKAPNYA",
      mascot: "https://www.invofest-harkatnegeri.com/assets/Maskot-Lomba.png",
      mascotAlt: "Mascot Competition",
      mascotLeft: true,
      bg: "pink",
    },
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">
      {/* HERO */}
      <section className="max-w-6xl mx-auto px-8 md:px-16 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <img
            src="https://www.invofest-harkatnegeri.com/assets/text-image.png"
            alt="INVOFEST"
            className="w-72 mb-6"
          />

          <p className="text-gray-700 leading-relaxed mb-8 text-lg">
            Invofest 2025, yang diselenggarakan oleh sarjana terapan Teknik Informatika
            Universitas Harkat Negeri, adalah festival tahunan yang bertujuan untuk
            menginspirasi dan memberdayakan generasi muda Indonesia dalam menghadapi era
            digital. Dengan mengusung tema{" "}
            <span className="font-bold">
              “Beyond Limits, Beyond Intelligence: Innovate for a Smarter Tomorrow”
            </span>.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="bg-[#7B1D3F] text-white text-sm font-bold px-7 py-3 rounded-full hover:bg-[#5a1530] transition-all shadow-md">
              INFO SELENGKAPNYA
            </button>
            <button className="border-2 border-[#7B1D3F] text-[#7B1D3F] text-sm font-bold px-7 py-3 rounded-full hover:bg-[#7B1D3F] hover:text-white transition-all">
              HUBUNGI PANITIA
            </button>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="bg-[#fce8ef] rounded-[40px] p-8 shadow-sm">
            <img
              src="https://www.invofest-harkatnegeri.com/assets/Maskot-Hero.png"
              alt="Mascot"
              className="w-72 md:w-80 h-72 md:h-80 object-contain drop-shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* TENTANG INVOFEST */}
      <section className="bg-gradient-to-br from-[#fff3f7] via-[#fce8ef] to-white py-20 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center max-w-4xl mx-auto mb-14">
            <span className="inline-block bg-white text-[#7B1D3F] text-xs font-bold px-5 py-2 rounded-full shadow-sm mb-5">
              ABOUT INVOFEST 2025
            </span>

            <h2 className="text-4xl md:text-5xl font-extrabold text-[#7B1D3F] mb-6">
              Tentang INVOFEST
            </h2>

            <p className="text-gray-700 text-lg leading-relaxed">
              Invofest 2025 menghadirkan berbagai kegiatan menarik seperti kompetisi IT,
              workshop IT, seminar nasional, dan talkshow bersama para ahli teknologi.
              Kegiatan ini dirancang untuk mengajak generasi muda lebih kreatif,
              inovatif, dan siap menghadapi perkembangan dunia digital.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
            {categorySummary.map((item, index) => (
              <div
                key={index}
                className="group bg-white/90 backdrop-blur-sm p-7 rounded-[28px] shadow-md border border-[#7B1D3F]/10 hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#7B1D3F] text-white flex items-center justify-center font-extrabold mb-6 group-hover:rotate-6 transition-transform">
                  0{index + 1}
                </div>

                <h3 className="text-2xl font-extrabold text-[#7B1D3F] mb-4">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed mb-8">
                  {item.description}
                </p>

                <button className="border border-[#7B1D3F] text-[#7B1D3F] text-[10px] font-bold py-2.5 px-5 rounded-full uppercase hover:bg-[#7B1D3F] hover:text-white transition-all">
                  INFO SELENGKAPNYA
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EVENT SECTIONS */}
      {eventSections.map((ev) => (
        <section
          key={ev.title}
          className={`py-20 ${
            ev.bg === "pink"
              ? "bg-[#fff3f7]"
              : "bg-white"
          }`}
        >
          <div
            className={`max-w-6xl mx-auto px-8 md:px-12 grid md:grid-cols-2 gap-12 items-center ${
              ev.mascotLeft ? "" : "md:[&>*:first-child]:order-2"
            }`}
          >
            <div className="flex justify-center">
              <div className="rounded-[36px] bg-white shadow-md p-8 border border-[#7B1D3F]/10">
                <img
                  src={ev.mascot}
                  alt={ev.mascotAlt}
                  className="max-w-xs md:max-w-sm h-auto object-contain drop-shadow-xl"
                />
              </div>
            </div>

            <div>
              <span className="text-[#7B1D3F] text-sm font-extrabold uppercase tracking-widest">
                INVOFEST Event
              </span>

              <h2 className="text-4xl md:text-5xl font-extrabold text-[#7B1D3F] mt-3 mb-6">
                {ev.title}
              </h2>

              <p className="text-gray-700 leading-relaxed mb-8 text-lg text-justify">
                {ev.desc}
              </p>

              <button className="bg-[#7B1D3F] text-white text-sm font-bold px-8 py-4 rounded-full hover:bg-[#5a1530] hover:scale-105 transition-all shadow-md uppercase">
                {ev.btnLabel}
              </button>
            </div>
          </div>
        </section>
      ))}

      {/* FAQ */}
      <section className="py-20 px-8 max-w-5xl mx-auto text-center">
        <span className="inline-block bg-[#fce8ef] text-[#7B1D3F] text-xs font-bold px-5 py-2 rounded-full mb-5">
          FAQ
        </span>

        <h2 className="text-4xl font-extrabold text-[#7B1D3F] mb-12">
          Punya Pertanyaan?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-left">
          {faqItems.map((item, i) => (
            <details
              key={i}
              className="bg-white border border-[#7B1D3F]/20 rounded-2xl px-6 py-5 cursor-pointer hover:shadow-md transition-all"
            >
              <summary className="text-gray-700 font-bold text-sm list-none outline-none">
                ⌄ {item.title}
              </summary>
              <p className="mt-4 text-gray-500 text-sm leading-relaxed border-t border-[#7B1D3F]/10 pt-4">
                {item.description}
              </p>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
}