import {
  ArrowRight,
  EnvelopeSimple,
  Heart,
  PawPrint,
  Phone,
} from "@phosphor-icons/react";

export default function HomeFinalCTA() {
  return (
    <>
      <section className="bg-[#fbf6ee] px-5 pb-0 pt-4 text-[#241915] md:px-8 lg:px-12">
        <div className="mx-auto grid max-w-[1280px] overflow-hidden rounded-t-[28px] border border-b-0 border-[#e1d3c1] bg-[#fffaf3] md:grid-cols-[0.72fr_1.28fr]">
          <div className="relative min-h-[300px]">
            <img
              src="/images/home-final-puppy.jpg"
              alt="Australian Labradoodle puppy"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>

          <div className="relative flex flex-col justify-center overflow-hidden p-8 md:p-10">
            <PawPrint
              size={110}
              weight="duotone"
              className="absolute right-8 top-8 text-[#e9dac7]"
            />

            <div className="relative z-10">
              <p className="text-[11px] font-black uppercase tracking-[0.3em] text-[#9a6a3a]">
                Ready When You Are
              </p>

              <h2 className="mt-4 max-w-[760px] text-[4rem] font-semibold leading-[0.9] tracking-[-0.07em] text-[#1f2528] md:text-[5rem]">
                Bring home
                <br />
                a puppy raised
                <br />
                <span className="font-editorial italic text-[#b8752b]">
                  with love.
                </span>
              </h2>

              <p className="mt-5 max-w-[560px] text-[16px] leading-8 text-[#58656b]">
                View current litters, meet the parent dogs, or begin your Puppy
                Family Profile so we can help guide your next step.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="/available-puppies"
                  className="inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-b from-[#d9903c] to-[#a95f1f] px-7 py-4 text-[12px] font-black uppercase tracking-[0.14em] text-white"
                >
                  View Available Puppies
                  <ArrowRight size={16} weight="bold" />
                </a>

                <a
                  href="/puppy-family-profile"
                  className="inline-flex items-center justify-center rounded-full border border-[#c29a70] bg-white px-7 py-4 text-[12px] font-black uppercase tracking-[0.14em] text-[#8d5a2d]"
                >
                  Apply for a Puppy
                </a>
              </div>

              <div className="mt-7 flex flex-wrap gap-5 text-[14px] font-black text-[#3f3027]">
                <a href="tel:6319411111" className="flex items-center gap-2">
                  <Phone size={17} weight="fill" className="text-[#6f805f]" />
                  631-941-1111
                </a>

                <a
                  href="mailto:info@labradoodlesoflongisland.com"
                  className="flex items-center gap-2"
                >
                  <EnvelopeSimple
                    size={17}
                    weight="fill"
                    className="text-[#6f805f]"
                  />
                  info@labradoodlesoflongisland.com
                </a>

                <span className="flex items-center gap-2">
                  <Heart size={17} weight="fill" className="text-[#b8752b]" />
                  Since 2006
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#66755f] px-5 py-8 text-white md:px-8 lg:px-12">
        <div className="mx-auto grid max-w-[1280px] gap-8 md:grid-cols-[1.2fr_1fr_1fr_1fr] md:items-center">
          <div className="flex items-center gap-4">
            <img
              src="/images/web-logo-2.png"
              alt="Labradoodles of Long Island"
              className="h-14 w-14 rounded-full object-contain"
            />

            <div>
              <p className="text-[16px] font-black uppercase leading-4">
                Labradoodles
                <br />
                of Long Island
              </p>
              <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-white/70">
                Australian Labradoodles
              </p>
            </div>
          </div>

          <p className="text-[13px] leading-6 text-white/78">
            © 2026 Labradoodles of Long Island
            <br />
            All Rights Reserved
          </p>

          <div className="text-[13px] leading-7 text-white/78">
            <p className="flex items-center gap-2">
              <Phone size={16} weight="fill" /> 631-941-1111
            </p>
            <p className="flex items-center gap-2">
              <EnvelopeSimple size={16} weight="fill" />{" "}
              info@labradoodlesoflongisland.com
            </p>
          </div>

          <div className="flex gap-5 text-[13px] text-white/78 md:justify-end">
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Use</a>
          </div>
        </div>
      </footer>
    </>
  );
}
