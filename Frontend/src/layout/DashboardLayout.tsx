import { Outlet, Link, useNavigate, useLocation } from "react-router-dom";
import { LogOut, UserRound } from "lucide-react";

export default function DashboardLayout() {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === "/dashboard") {
      return location.pathname === path;
    }
    return location.pathname.startsWith(path);
  };

  return (
    <div className="flex min-h-screen bg-white">
      {/* SIDEBAR */}
      <aside className="w-64 bg-[#7A1C3D] text-white fixed h-full flex flex-col p-8 z-20">
        <div className="mb-12">
          <h2 className="text-2xl font-extrabold tracking-tight">
            INVOFEST
          </h2>
          <p className="text-xs text-white/50 mt-2">
            Admin Panel
          </p>
        </div>

        <nav className="flex-1 space-y-6">
          <Link
            to="/dashboard"
            className={`block text-sm transition-all ${
              isActive("/dashboard")
                ? "font-bold opacity-100 underline underline-offset-8"
                : "opacity-60 hover:opacity-100"
            }`}
          >
            Dashboard
          </Link>

          <Link
            to="/dashboard/kategori"
            className={`block text-sm transition-all ${
              isActive("/dashboard/kategori")
                ? "font-bold opacity-100 underline underline-offset-8"
                : "opacity-60 hover:opacity-100"
            }`}
          >
            Category Event
          </Link>

          <Link
            to="/dashboard/event"
            className={`block text-sm transition-all ${
              isActive("/dashboard/event")
                ? "font-bold opacity-100 underline underline-offset-8"
                : "opacity-60 hover:opacity-100"
            }`}
          >
            Event
          </Link>

          <Link
            to="/dashboard/pembicara"
            className={`block text-sm transition-all ${
              isActive("/dashboard/pembicara")
                ? "font-bold opacity-100 underline underline-offset-8"
                : "opacity-60 hover:opacity-100"
            }`}
          >
            Pembicara
          </Link>
        </nav>

        <div className="pt-6 border-t border-rose-800/30">
          <button
            onClick={() => navigate("/login")}
            className="flex items-center gap-2 text-sm opacity-70 hover:opacity-100 transition-all"
          >
            <LogOut size={17} />
            Keluar
          </button>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <div className="flex-1 ml-64 bg-[#FDFDFD]">
        {/* TOP NAVBAR */}
        <header className="h-20 bg-white/80 backdrop-blur-md flex items-center justify-between px-10 sticky top-0 z-10 border-b border-gray-100">
          <div className="text-[10px] font-medium text-gray-400">
            Dashboard /{" "}
            <span className="text-gray-900 font-bold uppercase tracking-wider">
              {location.pathname
                .split("/")
                .filter((p) => p !== "dashboard" && p !== "")
                .pop() || "Overview"}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <div className="text-right">
              <Link
                to="/dashboard/biodata"
                className="text-sm font-extrabold text-gray-800 leading-none hover:text-[#7A1C3D] transition-colors"
              >
                Inaysimaratu
              </Link>

              <p className="text-[10px] text-gray-400 mt-1">
                Administrator
              </p>
            </div>

            <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#7A1C3D] to-[#b84b72] flex items-center justify-center text-white shadow-md ring-4 ring-rose-50">
              <UserRound size={21} />
            </div>
          </div>
        </header>

        <main className="p-10">
          <Outlet />
        </main>
      </div>
    </div>
  );
}