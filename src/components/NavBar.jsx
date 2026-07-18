import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import profile from "../data/profile.json";
import SocialIcons from "./SocialIcons.jsx";

const links = [
  { to: "/", label: "Inicio" },
  { to: "/about", label: "Sobre mí" },
  { to: "/projects", label: "Proyectos" },
  { to: "/contact", label: "Contacto" },
];

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-30 px-6 sm:px-8 lg:px-12 py-6 sm:py-8">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between">
        {/* Links de escritorio */}
        <nav className="hidden items-center gap-6 sm:gap-8 lg:gap-12 text-sm sm:text-base font-medium sm:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                `link-underline transition-colors ${
                  isActive ? "text-accent" : "text-text hover:text-accent"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Botón de menú móvil */}
        <button
          className="text-text sm:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menú"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Logo circular con iniciales — 100% editable, sin marca de terceros */}
        <NavLink
          to="/"
          className="flex h-10 w-10 sm:h-12 sm:w-14 items-center justify-center rounded-full border border-border font-display text-sm sm:text-base font-semibold text-text transition-colors hover:border-accent"
        >
          {profile.initials}
        </NavLink>

        {/* Iconos sociales */}
        <div className="hidden items-center gap-4 sm:gap-5 lg:gap-6 sm:flex">
          <SocialIcons socials={profile.socials} />
        </div>
      </div>

      {/* Menú desplegable móvil */}
      {open && (
        <nav className="mx-auto mt-4 sm:mt-6 flex w-full max-w-6xl flex-col gap-4 sm:gap-6 rounded-2xl border border-border bg-surface p-6 sm:p-8 text-sm sm:text-base font-medium sm:hidden">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                isActive ? "text-accent" : "text-text hover:text-accent"
              }
            >
              {link.label}
            </NavLink>
          ))}
          <SocialIcons socials={profile.socials} className="pt-2" />
        </nav>
      )}
    </header>
  );
}
