import {
  MonitorSmartphone,
  Cpu,
  ShieldCheck,
  Calendar,
  Clock,
  MapPin,
  ChevronDown,
} from "lucide-react";

export default function Workshop() {
  const speakers = [
    {
      name: "Lhuqita Fazry",
      field: "Mobile Development",
      role: "Developer, Founder Rumah Coding Indonesia",
      img: "https://www.invofest-harkatnegeri.com/assets/workshop/workshop%20mobile.png",
    },
    {
      name: "M. Dendi Purwanto",
      field: "Artificial Intelligence",
      role: "Software Engineer, PT. Mayar Kernel Supernova",
      img: "https://www.invofest-harkatnegeri.com/assets/workshop/workshop%20AI.png",
    },
    {
      name: "Danang Avan M",
      field: "Cyber Security",
      role: "Security Analyst, Founder | Contributor TegalSec",
      img: "https://www.invofest-harkatnegeri.com/assets/workshop/talkshow%20cyber.png",
    },
  ];

  const workshops = [
    {
      icon: <MonitorSmartphone size={28} />,
      title: "Mobile Development",
      date: "Selasa, 25 November 2025",
      time: "08.00 WIB - 16.30 WIB",
      location: "Lab Kom D.1",
    },
    {
      icon: <Cpu size={28} />,
      title: "Artificial Intelligence",
      date: "Selasa, 25 November 2025",
      time: "08.00 WIB - 16.30 WIB",
      location: "Lab Kom D.2",
    },
    {
      icon: <ShieldCheck size={28} />,
      title: "Cyber Security",
      date: "Rabu, 26 November 2025",
      time: "08.00 WIB - 16.30 WIB",
      location: "Lab Kom D.1",
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
              INVOFEST WORKSHOP
            </span>

            <h1 className="text-4xl md:text-6xl font-extrabold text-[#7B1D3F] mb-4">
              IT Workshop
            </h1>

            <p className="text-lg md:text-xl text-[#7B1D3F] font-semibold italic mb-6 leading-relaxed">
              “AI for a Sustainable Future: The Role of Z Generation in the Digital Era”
            </p>

            <p className="text-gray-600 leading-relaxed mb-8 text-lg">
              IT Workshop ini menjembatani potensi Generasi Z dan kekuatan AI
              untuk menciptakan masa depan yang berkelanjutan. Peserta akan
              dibekali wawasan serta keterampilan untuk mengubah ide inovatif
              menjadi solusi nyata di era digital.
            </p>

            <button className="bg-[#7B1D3F] text-white text-sm font-bold px-8 py-4 rounded-full hover:bg-[#5a1530] hover:scale-105 transition-all shadow-md">
              DAFTAR SEKARANG
            </button>
          </div>

          <div className="flex justify-center">
            <div className="relative bg-gradient-to-br from-[#fff3f7] to-white rounded-[42px] p-8 shadow-lg border border-[#7B1D3F]/10">
              <div className="absolute -top-5 -right-5 w-24 h-24 bg-[#fce8ef] rounded-full -z-10" />
              <div className="absolute -bottom-5 -left-5 w-28 h-28 bg-[#7B1D3F]/10 rounded-full -z-10" />

              <img
                src="https://www.invofest-harkatnegeri.com/assets/Maskot-Lomba.png"
                alt="INVOFEST Mascot"
                className="w-72 md:w-80 h-72 md:h-80 object-contain drop-shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* TENTANG WORKSHOP */}
      <section className="bg-[#fff3f7] py-20 px-8">
        <div className="max-w-6xl mx-auto bg-white rounded-[36px] shadow-md border border-[#7B1D3F]/10 p-8 md:p-12">
          <div className="grid md:grid-cols-3 gap-10">
            <div>
              <span className="text-[#7B1D3F] text-sm font-extrabold uppercase tracking-widest">
                About Workshop
              </span>

              <h2 className="text-3xl md:text-4xl font-extrabold text-[#7B1D3F] mt-3 leading-tight">
                Tentang IT Workshop
              </h2>
            </div>

            <div className="md:col-span-2">
              <p className="text-gray-700 leading-relaxed text-lg text-justify">
                Workshop "AI for a Sustainable Future: The Role of Z Generation
                in the Digital Era" didesain khusus untuk Generasi Z sebagai
                generasi digital yang dekat dengan teknologi. Melalui kegiatan
                ini, peserta diajak memahami bagaimana AI dapat menjadi alat
                untuk menciptakan solusi nyata bagi isu lingkungan dan
                keberlanjutan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SPEAKERS */}
      <section className="py-20 px-8 max-w-6xl mx-auto text-center">
        <span className="inline-block bg-[#fce8ef] text-[#7B1D3F] text-xs font-bold px-5 py-2 rounded-full mb-5">
          MENTORS
        </span>

        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-14">
          Temui Pembicara Khusus Kami
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {speakers.map((s) => (
            <div
              key={s.name}
              className="group bg-white rounded-[30px] p-7 shadow-md border border-[#7B1D3F]/10 hover:-translate-y-2 hover:shadow-xl transition-all"
            >
              <div className="w-32 h-32 rounded-full border-4 border-[#7B1D3F] overflow-hidden bg-[#fce8ef] mx-auto mb-6 group-hover:scale-105 transition-transform">
                <img
                  src={s.img}
                  alt={s.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="font-extrabold text-gray-800 text-lg">{s.name}</h3>

              <p className="text-[#7B1D3F] text-sm font-bold mt-2">
                {s.field}
              </p>

              <p className="text-gray-500 text-xs mt-2 leading-relaxed">
                {s.role}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* PELAKSANAAN */}
      <section className="bg-gradient-to-br from-[#fff3f7] via-[#fce8ef] to-white py-20 px-8">
        <div className="max-w-6xl mx-auto text-center">
          <span className="inline-block bg-white text-[#7B1D3F] text-xs font-bold px-5 py-2 rounded-full shadow-sm mb-5">
            WORKSHOP SCHEDULE
          </span>

          <h2 className="text-3xl md:text-4xl font-extrabold text-[#7B1D3F] mb-12">
            Pelaksanaan IT Workshop
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {workshops.map((w) => (
              <div
                key={w.title}
                className="bg-white rounded-[28px] p-7 shadow-md border border-[#7B1D3F]/10 text-left hover:shadow-xl hover:-translate-y-2 transition-all"
              >
                <div className="bg-[#7B1D3F] text-white rounded-2xl w-14 h-14 flex items-center justify-center mb-6">
                  {w.icon}
                </div>

                <h3 className="font-extrabold text-[#7B1D3F] text-xl mb-5">
                  {w.title}
                </h3>

                <div className="space-y-3">
                  <p className="text-gray-600 text-sm flex items-start gap-3">
                    <Calendar
                      size={16}
                      className="text-[#7B1D3F] flex-shrink-0 mt-0.5"
                    />
                    {w.date}
                  </p>

                  <p className="text-gray-600 text-sm flex items-start gap-3">
                    <Clock
                      size={16}
                      className="text-[#7B1D3F] flex-shrink-0 mt-0.5"
                    />
                    {w.time}
                  </p>

                  <p className="text-gray-600 text-sm flex items-start gap-3">
                    <MapPin
                      size={16}
                      className="text-[#7B1D3F] flex-shrink-0 mt-0.5"
                    />
                    {w.location}
                  </p>
                </div>
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