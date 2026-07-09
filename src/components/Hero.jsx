import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, List, X, Phone } from "@phosphor-icons/react";
import gsap from "gsap";

import heroPuppy from "/images/hero-puppy.jpg";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Available Puppies", href: "/available-puppies" },
  { label: "Our Dogs", href: "/our-dogs" },
  { label: "About", href: "/about" },
  { label: "Guardian Program", href: "/guardian-program" },
  { label: "Contact", href: "/contact" },
];

export default function Hero() {
  const heroRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-nav", {
        y: -18,
        opacity: 0,
        duration: 0.9,
        delay: 2.05,
        ease: "power3.out",
      });

      gsap.from(".hero-bg-image", {
        scale: 1.12,
        opacity: 0,
        duration: 1.6,
        delay: 1.55,
        ease: "power4.out",
      });

      gsap.from("[data-hero-reveal]", {
        y: 36,
        opacity: 0,
        duration: 1.15,
        delay: 2.3,
        ease: "power4.out",
        stagger: 0.12,
      });

      gsap.from(".hero-seal", {
        scale: 0.86,
        opacity: 0,
        duration: 1,
        delay: 2.45,
        ease: "power4.out",
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen overflow-hidden bg-[#251811] text-[#fff8ed]"
    >
      <div className="absolute inset-0">
        <img
          src={heroPuppy}
          alt="Australian Labradoodle puppy in warm home light"
          className="hero-bg-image h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#251811]/82 via-[#251811]/38 to-[#251811]/8" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#251811]/72 via-transparent to-[#251811]/24" />
        <div className="paper-noise absolute inset-0 opacity-[0.12]" />
      </div>

      <header className="hero-nav absolute left-0 right-0 top-0 z-40 px-5 py-5 md:px-10 lg:px-14">
        <div className="mx-auto flex h-[76px] max-w-[1380px] items-center justify-between rounded-full border border-white/14 bg-[#251811]/22 px-4 shadow-2xl shadow-black/10 backdrop-blur-xl md:px-5">
          <a href="/" className="flex items-center gap-3">
            <div className="grid h-12 w-12 place-items-center overflow-hidden rounded-full border border-white/20 bg-[#fff8ed]">
              <img
                src="/images/web-logo-2.png"
                alt="Labradoodles of Long Island"
                className="h-full w-full object-contain"
              />
            </div>

            <div className="hidden leading-none sm:block">
              <p className="text-[13px] font-black uppercase leading-4 tracking-[-0.02em] text-[#fff8ed]">
                Labradoodles
                <br />
                of Long Island
              </p>
              <p className="mt-1 text-[8px] font-bold uppercase tracking-[0.22em] text-[#d9c29e]">
                Australian Labradoodles
              </p>
            </div>
          </a>

          <nav className="hidden items-center gap-6 rounded-full border border-white/10 bg-white/[0.06] px-6 py-3 text-[11px] font-bold uppercase tracking-[0.13em] text-[#fff8ed]/78 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="transition hover:text-[#d9c29e]"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href="tel:6319411111"
              className="inline-flex items-center gap-2 rounded-full border border-white/14 bg-white/[0.06] px-4 py-3 text-[12px] font-bold text-[#fff8ed]/86 transition hover:text-[#d9c29e]"
            >
              <Phone size={15} weight="fill" />
              631-941-1111
            </a>

            <a
              href="/puppy-family-profile"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#fff8ed] px-5 py-3 text-[11px] font-black uppercase tracking-[0.13em] text-[#251811] transition hover:bg-[#d9c29e]"
            >
              Apply
              <ArrowUpRight
                size={15}
                weight="bold"
                className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen((current) => !current)}
            className="grid h-12 w-12 place-items-center rounded-full border border-white/18 bg-white/[0.08] text-[#fff8ed] lg:hidden"
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <X size={22} weight="bold" />
            ) : (
              <List size={24} weight="bold" />
            )}
          </button>
        </div>

        {menuOpen && (
          <div className="mt-3 overflow-hidden rounded-[2rem] border border-white/14 bg-[#251811]/88 p-4 shadow-2xl backdrop-blur-xl lg:hidden">
            <nav className="grid gap-1">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-2xl px-4 py-4 text-[12px] font-black uppercase tracking-[0.14em] text-[#fff8ed]/86 transition hover:bg-white/10 hover:text-[#d9c29e]"
                >
                  {item.label}
                </a>
              ))}

              <a
                href="/puppy-family-profile"
                onClick={() => setMenuOpen(false)}
                className="mt-2 rounded-full bg-[#fff8ed] px-5 py-4 text-center text-[12px] font-black uppercase tracking-[0.14em] text-[#251811]"
              >
                Apply for a Puppy
              </a>

              <a
                href="tel:6319411111"
                className="rounded-full border border-white/14 px-5 py-4 text-center text-[12px] font-black uppercase tracking-[0.14em] text-[#fff8ed]"
              >
                Call 631-941-1111
              </a>
            </nav>
          </div>
        )}
      </header>

      <div className="relative z-10 flex min-h-screen items-end px-5 pb-12 pt-36 md:px-10 md:pb-16 lg:px-14 lg:pb-20">
        <div className="max-w-6xl">
          <div
            data-hero-reveal
            className="mb-8 flex items-center gap-4 text-[11px] font-semibold uppercase tracking-[0.34em] text-[#eadcc9]"
          >
            <span className="h-px w-10 bg-[#eadcc9]" />
            Long Island · Since 2006
          </div>

          <h1
            data-hero-reveal
            className="max-w-5xl text-[17vw] font-semibold leading-[0.82] tracking-[-0.085em] md:text-[11vw] lg:text-[7.5vw]"
          >
            Raised
            <br />
            at home.
            <br />
            <span className="font-editorial italic tracking-[-0.06em] text-[#d9c29e]">
              Ready
            </span>{" "}
            for yours.
          </h1>

          <p
            data-hero-reveal
            className="mt-8 max-w-xl text-lg leading-[1.65] text-[#f5e9dc]/88 md:text-xl"
          >
            Australian Labradoodles raised in a real Long Island home — cared
            for as family from their first days to the moment they become part
            of yours.
          </p>

          <div
            data-hero-reveal
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <a
              href="/available-puppies"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#fff8ed] px-7 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-[#251811] transition hover:bg-[#d9c29e]"
            >
              View Puppies
              <ArrowUpRight
                size={18}
                weight="bold"
                className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>

            <a
              href="/puppy-family-profile"
              className="inline-flex items-center justify-center rounded-full border border-[#fff8ed]/45 px-7 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-[#fff8ed] transition hover:border-[#fff8ed]"
            >
              Begin Family Profile
            </a>
          </div>
        </div>
      </div>

      <div className="hero-seal absolute right-5 top-32 z-10 grid h-28 w-28 place-items-center rounded-full border border-[#fff8ed]/28 bg-[#251811]/28 text-center text-[10px] font-bold uppercase leading-4 tracking-[0.18em] text-[#fff8ed] shadow-xl backdrop-blur-md md:right-10 md:h-36 md:w-36 lg:right-14 lg:top-32">
        Quality
        <br />
        Breeding
        <br />
        Since 2006
      </div>

      <div
        data-hero-reveal
        className="absolute bottom-6 right-5 z-10 hidden max-w-[18rem] rounded-3xl border border-white/20 bg-[#fff8ed]/12 p-5 shadow-xl backdrop-blur-md md:right-10 md:block lg:right-14"
      >
        <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#d9c29e]">
          Home-raised promise
        </p>

        <p className="mt-3 text-sm leading-6 text-[#fff8ed]/82">
          No kennels. No puppy sheds. Just a real home, daily care, and the
          beginning of a family story.
        </p>
      </div>
    </section>
  );
}
