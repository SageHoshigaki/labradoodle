import {
  ArrowRight,
  GenderFemale,
  GenderMale,
  PawPrint,
  ShieldCheck,
} from "@phosphor-icons/react";

const dogCards = [
  {
    label: "Meet the Mommies",
    href: "/our-dogs#mommies",
    image: "/images/her.png",
    icon: GenderFemale,
    title: "Mommies raised with love.",
    body: "Our girls are chosen for health, temperament, coat, and the kind of softness families feel immediately.",
  },
  {
    label: "Meet the Daddies",
    href: "/our-dogs#daddies",
    image: "/images/goose.png",
    icon: GenderMale,
    title: "Daddies with heart.",
    body: "Our boys bring structure, confidence, sweetness, and the family-ready traits we want to see carried forward.",
  },
];

export default function OurDogsPreview() {
  return (
    <section className="bg-[#fbf6ee] px-5 py-20 text-[#241915] md:px-8 lg:px-12">
      <div className="mx-auto max-w-[1280px]">
        <div className="mb-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="text-[11px] font-black uppercase tracking-[0.32em] text-[#9a6a3a]">
              Our Dogs
            </p>

            <h2 className="mt-4 max-w-[720px] text-[3.6rem] font-semibold leading-[0.9] tracking-[-0.07em] text-[#1f2528] md:text-[5rem]">
              Meet the
              <br />
              parents behind
              <br />
              <span className="font-editorial italic text-[#b8752b]">
                every pairing.
              </span>
            </h2>
          </div>

          <p className="max-w-[540px] text-[17px] leading-8 text-[#58656b] lg:justify-self-end">
            Buyers want to know the dogs. This page gives families the trust
            layer: mommies, daddies, health testing, temperament, and the
            standard behind each litter.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {dogCards.map((card) => {
            const Icon = card.icon;

            return (
              <a
                key={card.label}
                href={card.href}
                className="group grid overflow-hidden rounded-[30px] border border-[#e6dac8] bg-[#fffaf3] shadow-sm transition duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#8a5d37]/10 md:grid-cols-[0.92fr_1.08fr]"
              >
                <div className="relative min-h-[380px] overflow-hidden bg-[#eadbc6]">
                  <img
                    src={card.image}
                    alt={card.label}
                    className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#1f2528]/68 via-transparent to-transparent" />

                  <span className="absolute left-5 top-5 rounded-full bg-white/90 px-4 py-2 text-[10px] font-black uppercase tracking-[0.16em] text-[#2f2925]">
                    {card.label}
                  </span>
                </div>

                <div className="flex flex-col justify-between p-7 md:p-8">
                  <div>
                    <div className="grid h-14 w-14 place-items-center rounded-full bg-[#6f805f] text-white">
                      <Icon size={30} weight="duotone" />
                    </div>

                    <h3 className="mt-5 font-editorial text-[42px] font-semibold leading-[0.95] tracking-[-0.04em] text-[#1f2528]">
                      {card.title}
                    </h3>

                    <p className="mt-4 text-[15px] leading-7 text-[#58656b]">
                      {card.body}
                    </p>
                  </div>

                  <div className="mt-8 flex items-center justify-between border-t border-[#e6dac8] pt-5">
                    <div className="flex items-center gap-2 text-[12px] font-black uppercase tracking-[0.16em] text-[#6f805f]">
                      <ShieldCheck size={18} weight="fill" />
                      Health + Temperament
                    </div>

                    <ArrowRight
                      size={22}
                      weight="bold"
                      className="text-[#b8752b] transition group-hover:translate-x-1"
                    />
                  </div>
                </div>
              </a>
            );
          })}
        </div>

        <div className="mt-6 rounded-[24px] border border-[#e6dac8] bg-[#fffaf3] p-6 md:flex md:items-center md:justify-between md:gap-6">
          <div className="flex items-start gap-4">
            <PawPrint
              size={34}
              weight="duotone"
              className="shrink-0 text-[#b8752b]"
            />
            <div>
              <p className="text-[15px] font-black text-[#2f2925]">
                Mommies and daddies are now part of the main buyer journey.
              </p>
              <p className="mt-1 text-[14px] leading-6 text-[#64696b]">
                Families can meet the parent dogs before deciding which upcoming
                pairing feels right.
              </p>
            </div>
          </div>

          <a
            href="/our-dogs"
            className="mt-5 inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-b from-[#d9903c] to-[#a95f1f] px-7 py-4 text-[12px] font-black uppercase tracking-[0.14em] text-white md:mt-0"
          >
            View Our Dogs
            <ArrowRight size={16} weight="bold" />
          </a>
        </div>
      </div>
    </section>
  );
}
