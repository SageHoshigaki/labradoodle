import { useState } from "react";
import { Menu, Phone, X } from "lucide-react";

const links = [
  ["Home", "/"],
  ["Available Puppies", "/available-puppies"],
  ["About", "/about"],
  ["The Breed", "/breed"],
  ["Guardian Program", "/guardian-program"],
  ["Puppy Family Profile", "/puppy-family-profile"],
  ["Contact & FAQ", "/contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const currentPath = window.location.pathname;

  return (
    <header className="sticky top-0 z-50 border-b border-[#e5d9c7] bg-[#fffaf3]/95 text-[#2b2925] shadow-sm backdrop-blur-xl">
      <div className="mx-auto flex h-[76px] max-w-[1440px] items-center justify-between px-5 lg:px-10">
        <a href="/" className="flex shrink-0 items-center gap-3" aria-label="Labradoodles of Long Island home">
          <img src="/images/web-logo-2.png" alt="" className="h-14 w-14 object-contain" />
          <div className="hidden leading-none sm:block">
            <p className="text-[15px] font-black uppercase tracking-[-0.025em]">Labradoodles<br />of Long Island</p>
            <p className="mt-1 text-[7px] font-bold uppercase tracking-[0.22em] text-[#9b744e]">Premium Australian Labradoodles</p>
          </div>
        </a>

        <nav className="hidden items-center gap-5 text-[11px] font-semibold xl:flex" aria-label="Main navigation">
          {links.map(([label, href]) => (
            <a key={href} href={href} className={`whitespace-nowrap transition hover:text-[#bd762d] ${currentPath === href ? "text-[#bd762d]" : ""}`}>
              {label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a href="tel:6318341111" className="flex items-center gap-2 whitespace-nowrap text-[11px] font-bold">
            <Phone size={14} className="text-[#b8752b]" />631-834-1111
          </a>
          <a href="/puppy-family-profile" className="rounded-full bg-gradient-to-b from-[#da963f] to-[#ae651f] px-5 py-3 text-[10px] font-bold uppercase tracking-[0.12em] text-white shadow-md">
            Apply for a puppy
          </a>
        </div>

        <button type="button" onClick={() => setOpen((value) => !value)} className="grid h-11 w-11 place-items-center rounded-full border border-[#d8c7b1] xl:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-[#e5d9c7] bg-[#fffaf3] px-5 py-5 xl:hidden" aria-label="Mobile navigation">
          <div className="mx-auto grid max-w-[1440px] gap-1">
            {links.map(([label, href]) => (
              <a key={href} href={href} onClick={() => setOpen(false)} className={`rounded-xl px-4 py-3 text-sm font-semibold transition hover:bg-[#f3e7d6] hover:text-[#bd762d] ${currentPath === href ? "bg-[#f3e7d6] text-[#bd762d]" : ""}`}>
                {label}
              </a>
            ))}
            <div className="mt-3 grid gap-2 border-t border-[#e5d9c7] pt-4 sm:grid-cols-2">
              <a href="tel:6318341111" className="flex items-center justify-center gap-2 rounded-full border border-[#b8752b] px-5 py-3 text-xs font-bold text-[#9b5b20]"><Phone size={15} />631-834-1111</a>
              <a href="/puppy-family-profile" className="rounded-full bg-[#b8752b] px-5 py-3 text-center text-xs font-bold uppercase tracking-[0.1em] text-white">Apply for a puppy</a>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
