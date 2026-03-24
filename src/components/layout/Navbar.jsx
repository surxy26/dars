import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { NAV_LINKS } from "../../utils/constants";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-neutral-950/80 backdrop-blur-xl">
      <div className="container-shell flex h-18 items-center justify-between py-4">
        <Link to="/" className="flex flex-col">
          <span className="text-sm uppercase tracking-[0.3em] text-neutral-400">
            Portfolio
          </span>
          <span className="text-lg font-semibold">Darwin Canda</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `text-sm transition ${
                  isActive ? "text-white" : "text-neutral-400 hover:text-white"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="rounded-lg border border-white/10 px-3 py-2 text-sm md:hidden"
        >
          Menu
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-neutral-950 md:hidden">
          <div className="container-shell flex flex-col py-4">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setOpen(false)}
                className="py-3 text-neutral-300 transition hover:text-white"
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;