export default function Competition() {
  const faqs = [
    {
      title: "Apa itu INVOFEST?",
      description:
        "Invofest (Informatics Vocational Festival) adalah festival tahunan yang diakan oleh program studi sarjana terapan teknik informatika Universitas Harkat Negeri, yang bertujuan untuk menginspirasi dan memberdayakan generasi muda Indonesia dalam menghadapi era digital.",
    },
    {
      title: "Bagaimana saya mengetahui pemenang kompetisi?",
      description:
        "Pemenang akan diinformasikan melalui media sosial instagram dari invofest @invofest_harkatnegeri.",
    },
    {
      title: "Kapan dan dimana INVOFEST dilaksanakan?",
      description:
        "INVOFEST diselenggarakan mulai tanggal 21 Oktober 2025 sampai dengan tanggal 27 November 2025. Untuk acara workshop, seminar, talkshow diadakan secara Offline di kampus 1 Universitas Harkat Negeri dan kompetisi diadakan secara Online.",
    },
    {
      title: "Apa yang didapat pemenang dalam kompetisi?",
      description:
        "Pemenang kompetisi akan mendapatkan hadiah trophy, uang pembinaan, dan e-sertifikat.",
    },
    {
      title: "Apakah ada biaya pendaftaran di INVOFEST?",
      description: "Semua kegiatan dipastikan berbayar ya teman-teman.",
    },
    {
      title: "Bagaimana cara mendaftar event?",
      description:
        "Buka https://www.invofest-harkatnegeri.com lalu pergi ke halaman event yang anda ingin ikuti atau scroll kebagian bawah halaman beranda dengan klik mendaftar pada salah satu eventnya, jika sudah maka diarahkan ke halaman detail event dan klik tombol 'Registrasi' maka akan diarahkan ke google form pengisian pendaftaran event yang diikuti.",
    },
  ];

  const competitionList = [
    "National Poster Design Competition",
    "UI/UX Design Competition",
    "Creative Innovation Challenge",
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">
      {/* HERO SECTION */}
      <section className="max-w-6xl mx-auto px-8 md:px-16 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block bg-[#fce8ef] text-[#7B1D3F] text-xs font-bold px-5 py-2 rounded-full mb-5">
              INVOFEST COMPETITION
            </span>

            <h1 className="text-4xl md:text-6xl font-extrabold text-[#7B1D3F] mb-4">
              IT Competition
            </h1>

            <p className="text-xl text-gray-700 italic mb-6">
              "From Creation to Innovation"
            </p>

            <p className="text-gray-600 leading-relaxed mb-8 text-lg">
              Kompetisi dalam INVOFEST ini mengusung tema{" "}
              <strong>"From Creation to Innovation"</strong>. Tema ini bertujuan
              mengajak generasi muda untuk mengembangkan inovasi dan kreativitas
              guna membentuk kelompok yang memiliki potensi luar biasa dan mampu
              mewujudkan masa depan yang berkelanjutan.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="bg-[#7B1D3F] text-white text-sm font-bold px-7 py-3 rounded-full hover:bg-[#5a1530] hover:scale-105 transition-all shadow-md">
                INFO SELENGKAPNYA
              </button>

              <button className="border-2 border-[#7B1D3F] text-[#7B1D3F] text-sm font-bold px-7 py-3 rounded-full hover:bg-[#7B1D3F] hover:text-white transition-all">
                HUBUNGI PANITIA
              </button>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative bg-gradient-to-br from-[#fff3f7] to-white rounded-[42px] p-8 shadow-lg border border-[#7B1D3F]/10">
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-[#fce8ef] rounded-full -z-10" />
              <div className="absolute -bottom-4 -left-4 w-28 h-28 bg-[#7B1D3F]/10 rounded-full -z-10" />

              <img
                src="https://www.invofest-harkatnegeri.com/assets/Maskot-Lomba.png"
                alt="INVOFEST Mascot"
                className="w-72 md:w-80 h-72 md:h-80 object-contain drop-shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* DESKRIPSI KOMPETISI */}
      <section className="bg-[#fff3f7] py-20 px-8">
        <div className="max-w-6xl mx-auto bg-white rounded-[36px] shadow-md border border-[#7B1D3F]/10 p-8 md:p-12">
          <div className="grid md:grid-cols-3 gap-10 items-start">
            <div>
              <span className="text-[#7B1D3F] text-sm font-extrabold uppercase tracking-widest">
                Overview
              </span>

              <h2 className="text-3xl md:text-4xl font-extrabold text-[#7B1D3F] mt-3 leading-tight">
                Deskripsi Kompetisi
              </h2>
            </div>

            <div className="md:col-span-2">
              <p className="text-gray-700 leading-relaxed text-lg mb-8 text-justify">
                Kompetisi atau perlombaan yang ada dalam kegiatan{" "}
                <strong>INVOFEST (Infomatics Vocational Festival) 2025</strong>{" "}
                diantaranya National Poster Design Competition, UI/UX Design
                Competition, dan Creative Innovation Challenge. Kompetisi dalam
                INVOFEST ini mengusung tema{" "}
                <strong>"From Creation to Innovation"</strong>. Tema ini
                bertujuan mengajak generasi muda untuk mengembangkan inovasi dan
                kreativitas menjadi solusi yang berdampak.
              </p>

              <div className="grid sm:grid-cols-3 gap-4">
                {competitionList.map((item, index) => (
                  <div
                    key={index}
                    className="bg-[#fce8ef] rounded-2xl px-5 py-5 border border-[#7B1D3F]/10"
                  >
                    <p className="text-[#7B1D3F] text-xs font-bold mb-2">
                      0{index + 1}
                    </p>
                    <h3 className="text-gray-800 text-sm font-bold leading-relaxed">
                      {item}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-20 px-8 max-w-5xl mx-auto text-center">
        <span className="inline-block bg-[#fce8ef] text-[#7B1D3F] text-xs font-bold px-5 py-2 rounded-full mb-5">
          FAQ
        </span>

        <h2 className="text-4xl font-extrabold text-gray-800 mb-3">
          Punya Pertanyaan?
        </h2>

        <p className="text-gray-500 mb-12 text-sm leading-relaxed">
          Ada banyak informasi yang terkait dengan INVOFEST. Kamu dapat melihat
          daftar pertanyaan di bawah ini.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-left">
          {faqs.map((faq, i) => (
            <details
              key={i}
              className="group bg-white border border-[#7B1D3F]/20 rounded-2xl px-6 py-5 cursor-pointer hover:shadow-md hover:border-[#7B1D3F]/50 transition-all"
            >
              <summary className="flex items-center gap-3 text-gray-700 font-bold text-sm list-none outline-none">
                <span className="w-8 h-8 rounded-full bg-[#fce8ef] text-[#7B1D3F] flex items-center justify-center font-extrabold transition-transform group-open:rotate-180">
                  ⌄
                </span>
                {faq.title}
              </summary>

              <p className="mt-4 text-gray-500 text-sm leading-relaxed border-t border-[#7B1D3F]/10 pt-4">
                {faq.description}
              </p>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
}