import {
  ArrowRight,
  CalendarBlank,
  Heart,
  PawPrint,
} from "@phosphor-icons/react";

const previewLitters = [
  {
    parents: "Winnie & Zeus",
    size: "Medium",
    image: "/images/zeus.png",
    due: "May 2026",
    home: "July 2026",
  },
  {
    parents: "Zelda & Elvis",
    size: "Mini",
    image: "/images/zeldas_puppies_side_by_side.png",
    due: "June 2026",
    home: "August 2026",
  },
  {
    parents: "Meadow & Theo",
    size: "Mini",
    image: "/images/red_doodles_side_by_side.png",
    due: "August 2026",
    home: "October 2026",
  },
];

export default function AvailablePreview() {
  return (
    <section className="relative overflow-hidden bg-[#f7efe4] px-5 py-20 text-[#241915] md:px-8 lg:px-12">
      <div className="absolute left-[-14rem] top-10 h-[30rem] w-[30rem] rounded-full bg-[#d9903c]/14 blur-3xl" />
      <div className="absolute bottom-[-10rem] right-[-10rem] h-[28rem] w-[28rem] rounded-full bg-[#6f805f]/14 blur-3xl" />

      <div className="relative mx-auto max-w-[1280px]">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="text-[11px] font-black uppercase tracking-[0.32em] text-[#9a6a3a]">
              Available Puppies
            </p>

            <h2 className="mt-4 max-w-[700px] text-[3.6rem] font-semibold leading-[0.9] tracking-[-0.07em] text-[#1f2528] md:text-[5rem]">
              Upcoming
              <br />
              litters with
              <br />
              <span className="font-editorial italic text-[#b8752b]">
                real family care.
              </span>
            </h2>
          </div>

          <div className="max-w-[540px] lg:justify-self-end">
            <p className="text-[17px] leading-8 text-[#58656b]">
              Each puppy begins with a carefully chosen pairing, a loving home
              environment, and the kind of early care that prepares them to
              become part of yours.
            </p>

            <a
              href="/available-puppies"
              className="mt-7 inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-b from-[#d9903c] to-[#a95f1f] px-7 py-4 text-[12px] font-black uppercase tracking-[0.14em] text-white shadow-lg shadow-[#b8752b]/20"
            >
              View Available Puppies
              <ArrowRight size={16} weight="bold" />
            </a>
          </div>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {previewLitters.map((litter) => (
            <article
              key={litter.parents}
              className="group overflow-hidden rounded-[28px] border border-[#e6dac8] bg-[#fffaf3] shadow-sm transition duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#8a5d37]/10"
            >
              <div className="relative h-[330px] overflow-hidden bg-[#eadbc6]">
                <img
                  src={litter.image}
                  alt={litter.parents}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#1f2528]/72 via-transparent to-transparent" />

                <span className="absolute left-5 top-5 rounded-full bg-[#6f805f] px-4 py-2 text-[10px] font-black uppercase tracking-[0.16em] text-white">
                  Reservation List Open
                </span>

                <button className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full bg-white/90 text-[#b8752b]">
                  <Heart size={21} weight="regular" />
                </button>

                <div className="absolute bottom-5 left-5 right-5">
                  <p className="text-[10px] font-black uppercase tracking-[0.24em] text-[#f4d7ae]">
                    {litter.size} Australian Labradoodles
                  </p>
                  <h3 className="mt-2 font-editorial text-[44px] font-semibold leading-none tracking-[-0.04em] text-[#fffaf3]">
                    {litter.parents}
                  </h3>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 p-5">
                <div className="rounded-[17px] border border-[#e6dac8] bg-white px-4 py-3">
                  <CalendarBlank
                    size={22}
                    weight="duotone"
                    className="text-[#b8752b]"
                  />
                  <p className="mt-2 text-[9px] font-black uppercase tracking-[0.18em] text-[#9a6a3a]">
                    Due
                  </p>
                  <p className="mt-1 text-[13px] font-black text-[#2f2925]">
                    {litter.due}
                  </p>
                </div>

                <div className="rounded-[17px] border border-[#e6dac8] bg-white px-4 py-3">
                  <PawPrint
                    size={22}
                    weight="duotone"
                    className="text-[#6f805f]"
                  />
                  <p className="mt-2 text-[9px] font-black uppercase tracking-[0.18em] text-[#9a6a3a]">
                    Home
                  </p>
                  <p className="mt-1 text-[13px] font-black text-[#2f2925]">
                    {litter.home}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
