import {
  Calendar,
  Clock,
  MapPin,
  School,
  ChevronDown,
} from "lucide-react";

export default function Seminar() {
  const speakers = [
    {
      name: "Dery Agung Triyadi",
      role: "Aws Indonesia",
      imageUrl:
        "https://www.invofest-harkatnegeri.com/assets/seminar/Seminar%20Dery.png",
    },
    {
      name: "Sowam Habibi",
      role: "Google Indonesia",
      imageUrl:
        "https://www.invofest-harkatnegeri.com/assets/seminar/seminar%20sowam.png",
    },
  ];

  const infoPelaksanaan = [
    { icon: <Calendar size={26} />, label: "Kamis, 27 November 2025" },
    { icon: <Clock size={26} />, label: "08.00 WIB - 12.00 WIB" },
    { icon: <MapPin size={26} />, label: "Aula Gedung C" },
    {
      icon: <School size={26} />,
      label: "Kampus 1 (Mataram) Universitas Harkat Negeri",
    },
  ];

  const faqItems = [
    {
      title: "Apa itu INVOFEST?",
      description:
        "Invofest (Informatics Vocational Festival) adalah festival tahunan yang diadakan oleh program studi sarjana terapan teknik informatika Universitas Harkat Negeri, yang bertujuan untuk menginspirasi dan memberdayakan generasi muda Indonesia dalam menghadapi era digital.",
    },
    {
      title: "Bagaimana saya mengetahui pemenang kompetisi?",
      description:
        "Pemenang akan diinformasikan melalui media sosial instagram dari invofest @invofest_harkatnegeri.",
    },
    {
      title: "Kapan dan dimana INVOFEST dilaksanakan?",
      description:
        "INVOFEST diselenggarakan mulai tanggal 21 Oktober 2025 sampai dengan tanggal 27 November 2025. Untuk acara workshop, seminar, talkshow diadakan secara Offline di kampus 1 Universitas Harkat Negeri.",
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
        "Buka https://www.invofest-harkatnegeri.com lalu pergi ke halaman event yang anda ingin ikuti dan klik tombol 'Registrasi'.",
    },
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">
      {/* HERO */}
      <section className="max-w-6xl mx-auto px-8 md:px-16 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block bg-[#fce8ef] text-[#7B1D3F] text-xs font-bold px-5 py-2 rounded-full mb-5">
              INVOFEST SEMINAR
            </span>

            <h1 className="text-4xl md:text-6xl font-extrabold text-[#7B1D3F] mb-4">
              IT Seminar
            </h1>

            <p className="text-lg md:text-xl text-[#7B1D3F] font-semibold italic mb-6 leading-relaxed">
              "Human-AI Integration: Merancang Arsitektur Kolaboratif, Bukan Kompetitif"
            </p>

            <p className="text-gray-600 leading-relaxed mb-8 text-lg">
              Seminar nasional yang membahas strategi dan arsitektur teknologi
              untuk menciptakan sistem di mana manusia dan AI bekerja sebagai
              mitra yang sinergis. Seminar ini bertujuan mengubah paradigma dari
              persaingan menjadi kolaborasi.
            </p>

            <button className="bg-[#7B1D3F] text-white text-sm font-bold px-8 py-4 rounded-full hover:bg-[#5a1530] hover:scale-105 transition-all shadow-md">
              DAFTAR SEKARANG
            </button>
          </div>

          <div className="flex justify-center">
            <div className="relative bg-gradient-to-br from-[#fff3f7] to-white rounded-[42px] p-8 shadow-lg border border-[#7B1D3F]/10">
              <div className="absolute -top-5 -left-5 w-24 h-24 bg-[#fce8ef] rounded-full -z-10" />
              <div className="absolute -bottom-5 -right-5 w-28 h-28 bg-[#7B1D3F]/10 rounded-full -z-10" />

              <img
                src="https://www.invofest-harkatnegeri.com/assets/Maskot-Hero.png"
                alt="INVOFEST Mascot"
                className="w-72 md:w-80 h-72 md:h-80 object-contain drop-shadow-xl"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    "https://www.invofest-harkatnegeri.com/assets/Maskot-Lomba.png";
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* TENTANG SEMINAR */}
      <section className="bg-[#fff3f7] py-20 px-8">
        <div className="max-w-6xl mx-auto bg-white rounded-[36px] shadow-md border border-[#7B1D3F]/10 p-8 md:p-12">
          <div className="grid md:grid-cols-3 gap-10">
            <div>
              <span className="text-[#7B1D3F] text-sm font-extrabold uppercase tracking-widest">
                About Seminar
              </span>

              <h2 className="text-3xl md:text-4xl font-extrabold text-[#7B1D3F] mt-3 leading-tight">
                Tentang IT Seminar
              </h2>
            </div>

            <div className="md:col-span-2">
              <p className="text-gray-700 leading-relaxed text-lg text-justify">
                Seminar bertajuk “Human-AI Integration: Merancang Arsitektur
                Kolaboratif, Bukan Kompetitif” hadir untuk membahas bagaimana
                manusia dan kecerdasan buatan dapat saling melengkapi. Di tengah
                pesatnya perkembangan AI, seminar ini mengajak peserta melihat
                peluang kolaborasi antara manusia dan teknologi agar AI dapat
                menjadi mitra yang memperkuat kreativitas, produktivitas, dan
                kecerdasan manusia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SPEAKERS */}
      <section className="py-20 px-8 max-w-6xl mx-auto text-center">
        <span className="inline-block bg-[#fce8ef] text-[#7B1D3F] text-xs font-bold px-5 py-2 rounded-full mb-5">
          SPEAKERS
        </span>

        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-14">
          Temui Pembicara Khusus Kami
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {speakers.map((s) => (
            <div
              key={s.name}
              className="group bg-white rounded-[30px] p-7 shadow-md border border-[#7B1D3F]/10 hover:-translate-y-2 hover:shadow-xl transition-all"
            >
              <div className="w-32 h-32 rounded-full border-4 border-[#7B1D3F] overflow-hidden bg-[#fce8ef] mx-auto mb-6 group-hover:scale-105 transition-transform">
                <img
                  src={s.imageUrl}
                  alt={s.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="font-extrabold text-[#7B1D3F] text-lg">
                {s.name}
              </h3>

              <p className="text-gray-500 text-sm mt-2">{s.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PELAKSANAAN */}
      <section className="bg-gradient-to-br from-[#fff3f7] via-[#fce8ef] to-white py-20 px-8">
        <div className="max-w-5xl mx-auto text-center">
          <span className="inline-block bg-white text-[#7B1D3F] text-xs font-bold px-5 py-2 rounded-full shadow-sm mb-5">
            EVENT DETAILS
          </span>

          <h2 className="text-3xl md:text-4xl font-extrabold text-[#7B1D3F] mb-12">
            Pelaksanaan IT Seminar
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {infoPelaksanaan.map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-3xl p-6 flex items-center gap-5 shadow-md border border-[#7B1D3F]/10 hover:shadow-lg transition-all"
              >
                <div className="bg-[#7B1D3F] text-white rounded-2xl w-14 h-14 flex items-center justify-center flex-shrink-0">
                  {item.icon}
                </div>

                <p className="text-gray-700 font-bold text-sm md:text-base text-left">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-8 max-w-5xl mx-auto text-center">
        <span className="inline-block bg-[#fce8ef] text-[#7B1D3F] text-xs font-bold px-5 py-2 rounded-full mb-5">
          FAQ
        </span>

        <h2 className="text-4xl font-extrabold text-gray-800 mb-12">
          Punya Pertanyaan?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {faqItems.map((item, i) => (
            <details
              key={i}
              className="group bg-white border border-[#7B1D3F]/20 rounded-2xl px-6 py-5 text-left cursor-pointer hover:shadow-md hover:border-[#7B1D3F]/50 transition-all"
            >
              <summary className="flex items-center gap-3 text-gray-700 font-bold text-sm list-none outline-none">
                <span className="w-8 h-8 rounded-full bg-[#fce8ef] text-[#7B1D3F] flex items-center justify-center flex-shrink-0 transition-transform group-open:rotate-180">
                  <ChevronDown size={18} />
                </span>
                {item.title}
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