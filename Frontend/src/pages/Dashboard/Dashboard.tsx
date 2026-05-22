import { Link } from "react-router-dom";
import {
  FolderKanban,
  CalendarDays,
  Mic2,
  CircleCheckBig,
  UserRound,
} from "lucide-react";

type Stat = {
  title: string;
  value: number;
  icon: React.ReactNode;
  path: string;
};

type EventItem = {
  name: string;
  category: string;
  date: string;
};

type SpeakerItem = {
  name: string;
  job: string;
};

const stats: Stat[] = [
  { title: "Kategori", value: 3, icon: <FolderKanban size={24} />, path: "/dashboard/kategori" },
  { title: "Event", value: 3, icon: <CalendarDays size={24} />, path: "/dashboard/event" },
  { title: "Pembicara", value: 3, icon: <Mic2 size={24} />, path: "/dashboard/pembicara" },
  { title: "Event Aktif", value: 2, icon: <CircleCheckBig size={24} />, path: "/dashboard/event" },
];

const latestEvents: EventItem[] = [
  { name: "Seminar AI 2025", category: "Seminar", date: "10 Jan 2026" },
  { name: "Workshop UI/UX", category: "Workshop", date: "15 Feb 2026" },
  { name: "Talkshow Startup", category: "Talkshow", date: "20 Mar 2026" },
];

const latestSpeakers: SpeakerItem[] = [
  { name: "Danang Avan M", job: "UI/UX Designer" },
  { name: "Lhuqita Fazry", job: "Software Engineer" },
  { name: "M. Dendi Purwanto", job: "Product Manager" },
];

export default function Dashboard() {
  return (
    <div className="max-w-7xl mx-auto">
      {/* HEADER */}
      <div className="mb-10 bg-gradient-to-r from-[#7A1C3D] to-[#b84b72] rounded-[32px] p-8 text-white shadow-md">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-white/70 mb-3">
          Overview
        </p>
        <h1 className="text-4xl font-extrabold">Dashboard</h1>
        <p className="text-sm text-white/75 mt-2">
          Ringkasan data Invofest hari ini
        </p>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
        {stats.map((stat) => (
          <Link to={stat.path} key={stat.title} className="block group">
            <div className="bg-white p-6 rounded-[28px] shadow-sm border border-[#7A1C3D]/10 transition-all group-hover:-translate-y-1 group-hover:shadow-xl">
              <div className="flex justify-between items-start mb-8">
                <div className="w-12 h-12 rounded-2xl bg-[#fff3f7] text-[#7A1C3D] flex items-center justify-center group-hover:bg-[#7A1C3D] group-hover:text-white transition-all">
                  {stat.icon}
                </div>

                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                  {stat.title}
                </span>
              </div>

              <p className="text-4xl font-extrabold text-gray-800">
                {stat.value}
              </p>

              <p className="text-xs text-gray-400 mt-2">
                Total data tersedia
              </p>
            </div>
          </Link>
        ))}
      </div>

      {/* CONTENT */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* EVENT TERBARU */}
        <div className="bg-white p-8 rounded-[28px] shadow-sm border border-[#7A1C3D]/10">
          <div className="flex justify-between items-center mb-8">
            <div>
              <p className="text-xs font-bold text-[#7A1C3D] uppercase tracking-widest">
                Event
              </p>
              <h2 className="text-xl font-extrabold text-gray-800">
                Event Terbaru
              </h2>
            </div>

            <CalendarDays className="text-[#7A1C3D]" size={26} />
          </div>

          <ul className="space-y-5">
            {latestEvents.map((item) => (
              <li
                key={item.name}
                className="flex justify-between items-center bg-[#fff8fb] rounded-2xl px-5 py-4 border border-[#7A1C3D]/5"
              >
                <div>
                  <p className="text-sm font-bold text-gray-800">
                    {item.name}
                  </p>
                  <p className="text-xs text-gray-400 mt-1">{item.date}</p>
                </div>

                <span className="text-[10px] font-bold bg-white text-[#7A1C3D] px-3 py-1.5 rounded-full uppercase tracking-wider border border-[#7A1C3D]/10">
                  {item.category}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* PEMBICARA TERBARU */}
        <div className="bg-white p-8 rounded-[28px] shadow-sm border border-[#7A1C3D]/10">
          <div className="flex justify-between items-center mb-8">
            <div>
              <p className="text-xs font-bold text-[#7A1C3D] uppercase tracking-widest">
                Speaker
              </p>
              <h2 className="text-xl font-extrabold text-gray-800">
                Pembicara Terbaru
              </h2>
            </div>

            <Mic2 className="text-[#7A1C3D]" size={26} />
          </div>

          <ul className="space-y-5">
            {latestSpeakers.map((item) => (
              <li
                key={item.name}
                className="flex items-center gap-4 bg-[#fff8fb] rounded-2xl px-5 py-4 border border-[#7A1C3D]/5"
              >
                <div className="w-11 h-11 rounded-full bg-white border border-[#7A1C3D]/20 flex items-center justify-center text-[#7A1C3D]">
                  <UserRound size={22} />
                </div>

                <div>
                  <p className="text-sm font-bold text-gray-800">
                    {item.name}
                  </p>
                  <p className="text-[10px] text-gray-400 font-bold uppercase mt-1">
                    {item.job}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}