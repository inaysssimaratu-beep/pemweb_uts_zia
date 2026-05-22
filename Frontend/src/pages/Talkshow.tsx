import {
  Calendar,
  Clock,
  MapPin,
  Building2,
  ChevronDown,
} from "lucide-react";

export default function Talkshow() {
  const speakers = [
    {
      name: "Moh. Ichsan Maulana",
      role: "Human Capital Information System (HCIS), PT. Garuda Daya Pratama Sejahtera",
      img: "https://www.invofest-harkatnegeri.com/assets/talkshow/talkshow%20ichsan.png",
    },
    {
      name: "M. Zaim Zamzami",
      role: "Programmer, PT. Pertamina Drilling Service Indonesia",
      img: "https://www.invofest-harkatnegeri.com/assets/talkshow/talkshow%20zaim%20zamzami.png",
    },
    {
      name: "Daffa Zuhdan Muhtar",
      role: "Android Developer, PT. Astra Internasional",
      img: "https://www.invofest-harkatnegeri.com/assets/talkshow/talkshow%20daffa.png",
    },
    {
      name: "Bayu Adi Prasetiyo",
      role: "Software Engineer, KOMPAS.ID",
      img: "https://www.invofest-harkatnegeri.com/assets/talkshow/talkshow%20bayu.png",
    },
  ];

  const details = [
    { icon: <Calendar size={26} />, text: "Senin, 24 November 2025" },
    { icon: <Clock size={26} />, text: "08.00 WIB - 12.00 WIB" },
    { icon: <MapPin size={26} />, text: "Aula Gedung C" },
    {
      icon: <Building2 size={26} />,
      text: "Kampus 1 (Mataram) Universitas Harkat Negeri",
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

  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">
      {/* HERO */}
      <section className="max-w-6xl mx-auto px-8 md:px-16 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block bg-[#fce8ef] text-[#7B1D3F] text-xs font-bold px-5 py-2 rounded-full mb-5">
              INVOFEST TALKSHOW
            </span>

            <h1 className="text-4xl md:text-6xl font-extrabold text-[#7B1D3F] mb-4">
              IT Talkshow
            </h1>

            <p className="text-lg md:text-xl text-[#7B1D3F] font-semibold italic mb-6 leading-relaxed">
              "Humanizing Technology: Kolaborasi Manusia dan AI di Masa Depan"
            </p>

            <p className="text-gray-600 leading-relaxed mb-8 text-lg">
              Talkshow ini menjadi ruang diskusi interaktif untuk membahas cara
              mengintegrasikan nilai kemanusiaan seperti etika, empati, dan
              kreativitas ke dalam pengembangan kecerdasan buatan.
            </p>

            <button className="bg-[#7B1D3F] text-white text-sm font-bold px-8 py-4 rounded-full hover:bg-[#5a1530] hover:scale-105 transition-all shadow-md">
              DAFTAR SEKARANG
            </button>
          </div>

          <div className="flex justify-center">
            <div className="relative rounded-[42px] bg-[#fff3f7] p-8 shadow-lg border border-[#7B1D3F]/10">
              <div className="absolute top-6 -left-6 bg-white text-[#7B1D3F] text-xs font-bold px-4 py-2 rounded-full shadow-md">
                Humanizing AI
              </div>

              <div className="absolute bottom-6 -right-6 bg-[#7B1D3F] text-white text-xs font-bold px-4 py-2 rounded-full shadow-md">
                Talk & Share
              </div>

              <img
                src="https://www.invofest-harkatnegeri.com/assets/Maskot-Lomba.png"
                alt="INVOFEST Mascot"
                className="w-72 md:w-80 h-72 md:h-80 object-contain drop-shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* TENTANG TALKSHOW */}
      <section className="bg-[#fff3f7] py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-[36px] shadow-md border border-[#7B1D3F]/10 overflow-hidden">
            <div className="grid md:grid-cols-3">
              <div className="bg-[#7B1D3F] text-white p-8 md:p-10 flex flex-col justify-center">
                <span className="text-white/80 text-sm font-extrabold uppercase tracking-widest">
                  About Talkshow
                </span>

                <h2 className="text-3xl md:text-4xl font-extrabold mt-3 leading-tight">
                  Tentang IT Talkshow
                </h2>
              </div>

              <div className="md:col-span-2 p-8 md:p-10">
                <p className="text-gray-700 leading-relaxed text-lg text-justify">
                  Seiring teknologi, khususnya kecerdasan buatan, semakin dekat
                  dengan kehidupan manusia, muncul pertanyaan penting tentang
                  bagaimana teknologi dapat tetap berpihak pada nilai
                  kemanusiaan. Talkshow “Humanizing Technology: Kolaborasi
                  Manusia dan AI di Masa Depan” hadir untuk menggali bagaimana AI
                  dapat menjadi mitra kolaboratif yang memperkuat potensi unik
                  manusia, bukan menggantikannya.
                </p>
              </div>
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
          {speakers.map((s, index) => (
            <div
              key={s.name}
              className="group bg-white rounded-[28px] p-6 shadow-md border border-[#7B1D3F]/10 hover:shadow-xl hover:-translate-y-2 transition-all"
            >
              <div className="relative w-28 h-28 mx-auto mb-6">
                <div className="absolute inset-0 bg-[#fce8ef] rounded-full group-hover:scale-110 transition-transform" />
                <img
                  src={s.img}
                  alt={s.name}
                  className="relative w-28 h-28 object-cover rounded-full border-4 border-[#7B1D3F]"
                />

                <span className="absolute -bottom-2 -right-2 bg-[#7B1D3F] text-white text-xs font-bold w-8 h-8 rounded-full flex items-center justify-center">
                  {index + 1}
                </span>
              </div>

              <h3 className="font-extrabold text-[#7B1D3F] text-base">
                {s.name}
              </h3>

              <p className="text-gray-500 text-xs mt-3 leading-relaxed">
                {s.role}
              </p>
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
            Pelaksanaan IT Talkshow
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {details.map((d, i) => (
              <div
                key={i}
                className="bg-white rounded-3xl p-6 flex items-center gap-5 shadow-md border border-[#7B1D3F]/10 hover:shadow-lg transition-all"
              >
                <div className="bg-[#7B1D3F] text-white rounded-2xl w-14 h-14 flex items-center justify-center flex-shrink-0">
                  {d.icon}
                </div>

                <p className="text-gray-700 font-bold text-sm md:text-base text-left">
                  {d.text}
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