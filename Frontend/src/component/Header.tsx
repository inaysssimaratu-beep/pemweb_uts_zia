import React from "react";
import {
  Home,
  Trophy,
  Users,
  Briefcase,
  Mic2,
  LogIn,
} from "lucide-react";
import { NavLink } from "react-router-dom";

export const Header: React.FC = () => {
  const activeStyle = "text-red-900";
  const defaultStyle = "text-slate-600 hover:text-red-900";

  const menuItems = [
    {
      label: "Beranda",
      href: "/",
      icon: Home,
    },
    {
      label: "Competition",
      href: "/Competition",
      icon: Trophy,
    },
    {
      label: "Seminar",
      href: "/Seminar",
      icon: Users,
    },
    {
      label: "Workshop",
      href: "/Workshop",
      icon: Briefcase,
    },
    {
      label: "Talkshow",
      href: "/Talkshow",
      icon: Mic2,
    },
    {
      label: "Login",
      href: "/Login",
      icon: LogIn,
    },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm px-6 py-2">
      <div className="max-w-7xl mx-auto flex justify-between items-center gap-4">
        
        {/* Logo */}
        <div className="logo">
          <img
            src="https://www.invofest-harkatnegeri.com/assets/nav-logo.png"
            alt="logo"
            className="h-16"
          />
        </div>

        {/* Navigation */}
        <nav className="flex gap-2">
          {menuItems.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.label}
                to={item.href}
                className={({ isActive }) =>
                  `flex items-center gap-2 px-4 py-2 font-medium transition-all duration-200 ${
                    isActive ? activeStyle : defaultStyle
                  }`
                }
              >
                <Icon size={18} className="shrink-0" />
                <span>{item.label}</span>
              </NavLink>
            );
          })}
        </nav>

      </div>
    </header>
  );
};

export default Header;