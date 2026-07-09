import {
  ArrowRight,
  CalendarBlank,
  CheckCircle,
  EnvelopeSimple,
  Heart,
  HouseLine,
  Leaf,
  PawPrint,
  Phone,
  ShieldCheck,
  Sparkle,
} from "@phosphor-icons/react";

const sizes = [
  {
    label: "Mini",
    image: "/images/mini.png",
    height: "14–16 inches",
    weight: "20–30 lbs",
  },
  {
    label: "Medium",
    image: "/images/mid.png",
    height: "17–20 inches",
    weight: "30–45 lbs",
  },
  {
    label: "Standard",
    image: "/images/large.png",
    height: "21–24 inches",
    weight: "45–65 lbs",
  },
];

const litters = [
  {
    parents: "Winnie & Zeus",
    size: "Medium",
    image: "/images/zeus.png",
    status: "Reservation List Open",
    eyebrow: "Now Matching Families",
    due: "May 2026",
    home: "July 2026",
    note: "Warm, social medium-size puppies expected from a thoughtful pairing selected for temperament, coat, and family fit.",
    sold: false,
  },
  {
    parents: "Zelda & Elvis",
    size: "Mini",
    image: "/images/zelda.png",
    status: "Reservation List Open",
    eyebrow: "Upcoming Mini Litter",
    due: "June 2026",
    home: "August 2026",
    note: "Small companions with soft expression, gentle presence, and big family energy.",
    sold: false,
  },
  {
    parents: "Harbor & Theo",
    size: "Mini",
    image: "/images/harbor.png",
    status: "Reservation List Open",
    eyebrow: "Upcoming Mini Litter",
    due: "June 2026",
    home: "August 2026",
    note: "Expected soft coats, affectionate temperaments, and the kind of puppy families remember forever.",
    sold: false,
  },
  {
    parents: "Meadow & Theo",
    size: "Mini",
    image: "/images/meadow.png",
    status: "Reservation List Open",
    eyebrow: "Late Summer Litter",
    due: "August 2026",
    home: "October 2026",
    note: "A beautiful fall homecoming window for families preparing for a new best friend.",
    sold: false,
  },
];

const packageItems = [
  {
    icon: PawPrint,
    title: "Food Starter Pack",
    body: "Familiar food for the first days home.",
  },
  {
    icon: CalendarBlank,
    title: "Weewee Pads",
    body: "Early transition support.",
  },
  { icon: HouseLine, title: "Kennel / Crate", body: "A cozy starter space." },
  { icon: Heart, title: "Cozy Blanket", body: "Comfort with familiar scent." },
  { icon: Sparkle, title: "Toys", body: "Play, bonding, and enrichment." },
  {
    icon: PawPrint,
    title: "Stainless Steel Bowls",
    body: "Food and water essentials.",
  },
  {
    icon: CheckCircle,
    title: "Leash & Collar",
    body: "Ready for first adventures.",
  },
  {
    icon: ShieldCheck,
    title: "Microchip & Registration",
    body: "Safety and identification.",
  },
];

const trustPackage = [
  {
    icon: ShieldCheck,
    title: "Health-Checked",
    body: "Vet examined with age-appropriate care.",
  },
  {
    icon: Heart,
    title: "Home Socialized",
    body: "Raised with touch, sound, rhythm, and family life.",
  },
  {
    icon: CheckCircle,
    title: "Health-Tested Parents",
    body: "Thoughtful pairings with health and temperament first.",
  },
  {
    icon: Sparkle,
    title: "Lifetime Support",
    body: "Guidance before, during, and after homecoming.",
  },
];

export default function AvailablePuppiesPage() {
  return (
    <main className="min-h-screen bg-[#f7efe4] text-[#241915]">
      <PageHeader />
      <AvailableHero />
      <SizeGuide />
      <CurrentLitters />
      <PuppyPackage />
      <EileenFooterBand />
      <PageFooter />
    </main>
  );
}

function PageHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#e5d9c7] bg-[#fffaf3]/95 backdrop-blur-xl">
      <div className="mx-auto flex h-[72px] max-w-[1360px] items-center justify-between px-5 md:px-8 lg:px-12">
        <a href="/" className="flex items-center gap-3">
          <img
            src="/images/web-logo-2.png"
            alt="Labradoodles of Long Island"
            className="h-12 w-12 rounded-full object-contain"
          />

          <div className="leading-none">
            <p className="text-[15px] font-black uppercase tracking-[-0.03em]">
              Labradoodles
              <br />
              of Long Island
            </p>
            <p className="mt-1 text-[8px] font-bold uppercase tracking-[0.22em] text-[#9a6a3a]">
              Australian Labradoodles
            </p>
          </div>
        </a>

        <nav className="hidden items-center gap-7 text-[12px] font-semibold text-[#3f3027] lg:flex">
          <a href="/">Home</a>
          <a href="/available-puppies" className="text-[#b8752b]">
            Available Puppies
          </a>
          <a href="/our-dogs">Our Dogs</a>
          <a href="/about">About</a>
          <a href="/guardian-program">Guardian Program</a>
          <a href="/contact">Contact</a>
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <a
            href="tel:6319411111"
            className="flex items-center gap-2 text-[13px] font-bold text-[#3f3027]"
          >
            <Phone size={17} weight="fill" className="text-[#b8752b]" />
            631-941-1111
          </a>

          <a
            href="/puppy-family-profile"
            className="rounded-full bg-gradient-to-b from-[#d9903c] to-[#a95f1f] px-6 py-3 text-[11px] font-black uppercase tracking-[0.12em] text-white shadow-lg shadow-[#b8752b]/25"
          >
            Apply for a Puppy
          </a>
        </div>

        <button className="lg:hidden">
          <PawPrint size={28} weight="duotone" />
        </button>
      </div>
    </header>
  );
}

function AvailableHero() {
  return (
    <section className="relative overflow-hidden border-b border-[#eadfce] bg-[#fbf6ee]">
      <div className="mx-auto grid min-h-[520px] max-w-[1500px] lg:grid-cols-[0.48fr_0.52fr]">
        <div className="relative z-10 flex flex-col justify-center px-6 py-16 md:px-12 lg:pl-20">
          <p className="mb-5 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.32em] text-[#89705c]">
            Premium Australian Labradoodles
            <span className="h-px w-10 bg-[#b8752b]" />
          </p>

          <h1 className="max-w-[560px] text-[4.5rem] font-semibold leading-[0.88] tracking-[-0.065em] text-[#1f2528] md:text-[5.7rem]">
            Available
            <br />
            <span className="font-editorial italic text-[#b8752b]">
              Labradoodle
            </span>
            <br />
            Puppies{" "}
            <span className="font-editorial font-normal italic text-[#b8752b]">
              ♡
            </span>
          </h1>

          <p className="mt-6 max-w-[460px] text-[17px] leading-8 text-[#4f5b60]">
            Our beautiful, friendly Australian Labradoodle puppies are raised
            with love in our home and ready to bring joy to yours.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href="#current-litters"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-b from-[#d9903c] to-[#a95f1f] px-7 py-4 text-[12px] font-black uppercase tracking-[0.12em] text-white shadow-xl shadow-[#b8752b]/20"
            >
              View Current Litters
              <ArrowRight size={17} weight="bold" />
            </a>

            <a
              href="/puppy-family-profile"
              className="inline-flex items-center justify-center rounded-full border border-[#c29a70] bg-white/55 px-7 py-4 text-[12px] font-black uppercase tracking-[0.12em] text-[#8d5a2d]"
            >
              Start Puppy Family Profile
            </a>
          </div>
        </div>

        <div className="relative min-h-[420px]">
          <img
            src="/images/available-puppies.jpg"
            alt="Three Australian Labradoodle puppies"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-[#fbf6ee] to-transparent" />

          <button className="absolute right-8 top-1/2 grid h-14 w-14 -translate-y-1/2 place-items-center rounded-full border border-[#d4b58d] bg-white/85 text-[#b8752b] shadow-lg">
            <ArrowRight size={24} weight="bold" />
          </button>

          <div className="absolute bottom-7 left-1/2 flex -translate-x-1/2 gap-2">
            <span className="h-3 w-3 rounded-full bg-[#b8752b]" />
            <span className="h-3 w-3 rounded-full bg-white" />
            <span className="h-3 w-3 rounded-full bg-white" />
            <span className="h-3 w-3 rounded-full bg-white" />
          </div>
        </div>
      </div>
    </section>
  );
}

function SizeGuide() {
  return (
    <section className="px-5 py-10 md:px-8 lg:px-12">
      <div className="mx-auto grid max-w-[1280px] gap-8 rounded-[22px] border border-[#e6dac8] bg-[#fffaf3] p-8 shadow-sm md:grid-cols-[0.95fr_1fr_1fr_1fr]">
        <div className="flex flex-col justify-center">
          <h2 className="text-[42px] font-semibold leading-[0.95] tracking-[-0.055em] text-[#1f2528]">
            Find Your
            <br />
            Perfect Fit{" "}
            <span className="font-editorial italic text-[#b8752b]">♡</span>
          </h2>

          <p className="mt-6 max-w-[250px] text-[16px] leading-7 text-[#58656b]">
            Our puppies come in three beautiful sizes to fit a variety of
            families and lifestyles.
          </p>

          <div className="mt-8 flex items-center gap-4">
            <div className="grid h-14 w-14 shrink-0 place-items-center rounded-full border border-[#9aa98b]">
              <Leaf size={28} weight="duotone" className="text-[#6f805f]" />
            </div>
            <p className="text-[15px] font-semibold leading-6 text-[#3d4648]">
              All puppies have a soft, hypoallergenic fleece coat.
            </p>
          </div>
        </div>

        {sizes.map((size) => (
          <article
            key={size.label}
            className="group relative flex min-h-[330px] flex-col items-center justify-end overflow-hidden rounded-[18px] border border-[#e6dac8] bg-white px-6 pb-8 pt-7 text-center shadow-sm transition duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#8a5d37]/10"
          >
            <div className="absolute inset-x-6 top-6 h-24 rounded-full bg-[#f7efe4] blur-2xl transition duration-500 group-hover:bg-[#f3dfc3]" />

            <div className="relative mb-4 grid h-12 w-12 place-items-center rounded-full border border-[#a87947] text-[#a87947]">
              <PawPrint size={24} weight="duotone" />
            </div>

            <p className="relative text-[13px] font-black uppercase tracking-[0.16em] text-[#222]">
              {size.label}
            </p>

            <img
              src={size.image}
              alt={`${size.label} Australian Labradoodle`}
              className="relative mt-4 h-[170px] object-contain transition duration-500 group-hover:scale-[1.04]"
            />

            <p className="relative mt-5 text-[19px] font-black leading-7 text-[#1f2528]">
              {size.height}
              <br />
              {size.weight}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

function CurrentLitters() {
  return (
    <section
      id="current-litters"
      className="relative overflow-hidden px-5 pb-10 md:px-8 lg:px-12"
    >
      <div className="absolute left-[-14rem] top-10 h-[30rem] w-[30rem] rounded-full bg-[#d9903c]/15 blur-3xl" />
      <div className="absolute bottom-0 right-[-12rem] h-[28rem] w-[28rem] rounded-full bg-[#6f805f]/16 blur-3xl" />

      <div className="relative mx-auto max-w-[1280px] rounded-[30px] border border-[#e6dac8] bg-[#fffaf3]/90 p-5 shadow-sm backdrop-blur md:p-8">
        <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-end">
          <div>
            <p className="text-[11px] font-black uppercase tracking-[0.32em] text-[#9a6a3a]">
              Current Litters
            </p>

            <h2 className="mt-4 max-w-[620px] text-[3.6rem] font-semibold leading-[0.9] tracking-[-0.07em] text-[#1f2528] md:text-[5rem]">
              Beautiful
              <br />
              pairings.
              <br />
              <span className="font-editorial italic text-[#b8752b]">
                Thoughtful homes.
              </span>
            </h2>
          </div>

          <div className="max-w-[540px] lg:justify-self-end">
            <p className="text-[17px] leading-8 text-[#58656b]">
              Each litter begins with a carefully selected mommy and daddy —
              chosen for temperament, health, coat, size, and the kind of family
              life their puppies are being prepared for.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <span className="rounded-full border border-[#d8cbbb] bg-white px-4 py-2 text-[11px] font-black uppercase tracking-[0.14em] text-[#6f805f]">
                Health-Tested Parents
              </span>
              <span className="rounded-full border border-[#d8cbbb] bg-white px-4 py-2 text-[11px] font-black uppercase tracking-[0.14em] text-[#6f805f]">
                Home-Raised
              </span>
              <span className="rounded-full border border-[#d8cbbb] bg-white px-4 py-2 text-[11px] font-black uppercase tracking-[0.14em] text-[#6f805f]">
                Family Matched
              </span>
            </div>
          </div>
        </div>

        <div className="mt-9 grid gap-6">
          {litters.map((litter, index) => (
            <LitterPairCard
              key={litter.parents}
              litter={litter}
              featured={index === 0}
            />
          ))}
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 rounded-[22px] border border-[#e6dac8] bg-white p-5 md:flex-row">
          <div>
            <p className="text-[15px] font-black text-[#2f2925]">
              Ready to be considered for a litter?
            </p>
            <p className="mt-1 text-[14px] text-[#64696b]">
              Applying does not obligate you to purchase. It helps us understand
              your family, timing, and preferred puppy fit.
            </p>
          </div>

          <a
            href="/puppy-family-profile"
            className="inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-gradient-to-b from-[#d9903c] to-[#a95f1f] px-8 py-4 text-[12px] font-black uppercase tracking-[0.14em] text-white shadow-lg shadow-[#b8752b]/20"
          >
            Start Puppy Family Profile
            <ArrowRight size={16} weight="bold" />
          </a>
        </div>
      </div>
    </section>
  );
}

function LitterPairCard({ litter, featured = false }) {
  return (
    <article
      className={`group overflow-hidden rounded-[28px] border border-[#e6dac8] bg-white shadow-sm transition duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#8a5d37]/10 ${
        featured
          ? "lg:grid lg:grid-cols-[1.08fr_0.92fr]"
          : "lg:grid lg:grid-cols-[0.95fr_1.05fr]"
      }`}
    >
      <div
        className={`relative overflow-hidden bg-[#f7efe4] ${
          featured ? "min-h-[520px]" : "min-h-[380px]"
        }`}
      >
        <img
          src={litter.image}
          alt={litter.parents}
          className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.035]"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#1f2528]/68 via-[#1f2528]/8 to-transparent" />

        <div className="absolute left-5 top-5 flex flex-wrap gap-3">
          <span
            className={`rounded-full px-4 py-2 text-[10px] font-black uppercase tracking-[0.16em] text-white ${
              litter.sold ? "bg-[#858585]" : "bg-[#6f805f]"
            }`}
          >
            {litter.status}
          </span>

          {featured && (
            <span className="rounded-full bg-white/90 px-4 py-2 text-[10px] font-black uppercase tracking-[0.16em] text-[#2f2925]">
              Featured Pairing
            </span>
          )}
        </div>

        <button className="absolute right-5 top-5 grid h-12 w-12 place-items-center rounded-full bg-white/90 text-[#b8752b] backdrop-blur transition hover:scale-105">
          <Heart size={22} weight="regular" />
        </button>

        <p className="absolute bottom-5 left-5 text-[10px] font-black uppercase tracking-[0.26em] text-[#f4d7ae]">
          {litter.eyebrow}
        </p>
      </div>

      <div className="flex flex-col justify-between p-6 md:p-8">
        <div>
          <p className="text-[11px] font-black uppercase tracking-[0.24em] text-[#9a6a3a]">
            {litter.size} Australian Labradoodles
          </p>

          <h3
            className={`mt-4 font-editorial font-semibold leading-[0.92] tracking-[-0.045em] text-[#1f2528] ${
              featured
                ? "text-[58px] md:text-[76px]"
                : "text-[48px] md:text-[64px]"
            }`}
          >
            {litter.parents}
          </h3>

          <p className="mt-5 max-w-[520px] text-[16px] leading-8 text-[#58656b]">
            {litter.note}
          </p>
        </div>

        <div className="mt-8">
          <div className="grid gap-3 sm:grid-cols-3">
            <LitterStat label="Status" value={litter.status} />
            <LitterStat label="Due" value={litter.due} />
            <LitterStat label="Home" value={litter.home} />
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a
              href="/puppy-family-profile"
              className={`inline-flex items-center justify-center gap-3 rounded-full px-7 py-4 text-[12px] font-black uppercase tracking-[0.14em] text-white ${
                litter.sold
                  ? "bg-[#777]"
                  : "bg-gradient-to-b from-[#d9903c] to-[#a95f1f]"
              }`}
            >
              {litter.sold ? "View Past Litter" : "View Litter & Apply"}
              <ArrowRight size={16} weight="bold" />
            </a>

            <a
              href="/our-dogs"
              className="inline-flex items-center justify-center rounded-full border border-[#c29a70] bg-[#fffaf3] px-7 py-4 text-[12px] font-black uppercase tracking-[0.14em] text-[#8d5a2d]"
            >
              Meet the Parents
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}

function LitterStat({ label, value }) {
  return (
    <div className="rounded-[17px] border border-[#e6dac8] bg-[#fbf6ee] px-4 py-3">
      <p className="text-[9px] font-black uppercase tracking-[0.18em] text-[#9a6a3a]">
        {label}
      </p>
      <p className="mt-1 text-[13px] font-black leading-5 text-[#2f2925]">
        {value}
      </p>
    </div>
  );
}

function PuppyPackage() {
  return (
    <section className="relative overflow-hidden px-5 pb-10 md:px-8 lg:px-12">
      <div className="relative mx-auto max-w-[1280px] overflow-hidden rounded-[30px] border border-[#e6dac8] bg-[#fffaf3] shadow-sm">
        <div className="absolute right-[-9rem] top-[-9rem] h-[24rem] w-[24rem] rounded-full bg-[#d9903c]/12 blur-3xl" />

        <div className="grid gap-0 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="relative flex min-h-[520px] flex-col justify-between overflow-hidden bg-[#1f2528] p-7 text-white md:p-9">
            <img
              src="/images/puppies/package-puppy.jpg"
              alt="Labradoodle puppy package"
              className="absolute inset-0 h-full w-full object-cover opacity-65"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1f2528]/94 via-[#1f2528]/55 to-[#1f2528]/12" />

            <div className="relative z-10">
              <p className="text-[11px] font-black uppercase tracking-[0.32em] text-[#f4d7ae]">
                Puppy Package
              </p>

              <h2 className="mt-5 max-w-[480px] text-[4rem] font-semibold leading-[0.9] tracking-[-0.07em] md:text-[5rem]">
                Everything
                <br />
                they need
                <br />
                <span className="font-editorial italic text-[#f4d7ae]">
                  to come home.
                </span>
              </h2>
            </div>

            <p className="relative z-10 max-w-[430px] text-[17px] leading-8 text-white/82">
              Every puppy leaves with a premium starter pack, familiar comforts,
              and the support families need for a smoother first week.
            </p>
          </div>

          <div className="relative p-5 md:p-8">
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {packageItems.map((item) => {
                const Icon = item.icon;

                return (
                  <article
                    key={item.title}
                    className="group min-h-[190px] rounded-[22px] border border-[#e6dac8] bg-white p-5 shadow-sm transition duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#8a5d37]/10"
                  >
                    <div className="grid h-12 w-12 place-items-center rounded-full bg-[#fbf6ee] text-[#b8752b] transition duration-500 group-hover:bg-[#b8752b] group-hover:text-white">
                      <Icon size={29} weight="duotone" />
                    </div>

                    <h3 className="mt-5 text-[15px] font-black leading-5 text-[#2f2925]">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-[13px] leading-6 text-[#64696b]">
                      {item.body}
                    </p>
                  </article>
                );
              })}
            </div>

            <div className="mt-5 grid gap-4 md:grid-cols-4">
              {trustPackage.map((item) => {
                const Icon = item.icon;

                return (
                  <article
                    key={item.title}
                    className="rounded-[20px] border border-[#d8cbbb] bg-[#f7efe4] p-5"
                  >
                    <Icon
                      size={30}
                      weight="duotone"
                      className="text-[#6f805f]"
                    />
                    <h3 className="mt-4 text-[14px] font-black text-[#2f2925]">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-[12px] leading-5 text-[#64696b]">
                      {item.body}
                    </p>
                  </article>
                );
              })}
            </div>

            <div className="mt-5 rounded-[22px] border border-[#e6dac8] bg-white p-5 md:flex md:items-center md:justify-between md:gap-5">
              <div>
                <p className="text-[14px] font-black text-[#2f2925]">
                  Built for a calm first week home.
                </p>
                <p className="mt-1 text-[13px] leading-6 text-[#64696b]">
                  Familiar items, practical essentials, and guidance from day
                  one.
                </p>
              </div>

              <a
                href="/puppy-family-profile"
                className="mt-4 inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-b from-[#d9903c] to-[#a95f1f] px-6 py-3 text-[11px] font-black uppercase tracking-[0.13em] text-white md:mt-0"
              >
                Apply Now
                <ArrowRight size={15} weight="bold" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function EileenFooterBand() {
  return (
    <section className="bg-[#fbf6ee] px-5 pb-0 pt-4 md:px-8 lg:px-12">
      <div className="mx-auto grid max-w-[1280px] overflow-hidden rounded-t-[22px] border border-b-0 border-[#e1d3c1] bg-[#fffaf3] lg:grid-cols-[0.78fr_1fr_1fr]">
        <article className="grid grid-cols-[150px_1fr] gap-5 border-b border-[#e1d3c1] p-5 lg:border-b-0 lg:border-r">
          <img
            src="/images/about/eileen.jpg"
            alt="Eileen with Labradoodle"
            className="h-full min-h-[170px] rounded-[18px] object-cover"
          />
          <div className="flex flex-col justify-center">
            <h3 className="font-editorial text-[29px] font-semibold tracking-[-0.03em]">
              Meet Eileen{" "}
              <span className="font-editorial italic text-[#b8752b]">♡</span>
            </h3>
            <p className="mt-3 text-[14px] leading-6 text-[#58656b]">
              Dedicated to Australian Labradoodles since 2006, with health,
              temperament, and family fit at the center of every pairing.
            </p>
            <p className="mt-4 font-editorial text-[30px] italic text-[#8a6a4f]">
              Eileen ♡
            </p>
          </div>
        </article>

        <article className="border-b border-[#e1d3c1] p-7 lg:border-b-0 lg:border-r">
          <h3 className="font-editorial text-[29px] font-semibold tracking-[-0.03em]">
            Why Families Choose Us
          </h3>

          <div className="mt-5 space-y-3">
            {[
              "Trusted, experienced, ethical breeder",
              "Home-raised with love and care",
              "Health-tested parents",
              "Beautiful, intelligent, low-shedding puppies",
              "Ongoing support for our families",
            ].map((item) => (
              <p
                key={item}
                className="flex items-start gap-3 text-[14px] font-semibold leading-6 text-[#4f5b60]"
              >
                <CheckCircle
                  size={19}
                  weight="fill"
                  className="mt-0.5 shrink-0 text-[#6f805f]"
                />
                {item}
              </p>
            ))}
          </div>
        </article>

        <article className="relative min-h-[260px] overflow-hidden p-7">
          <div className="relative z-10 max-w-[320px]">
            <h3 className="font-editorial text-[34px] font-semibold leading-[1.05] tracking-[-0.035em]">
              Ready to Welcome
              <br />
              Your New Best Friend?
            </h3>

            <p className="mt-3 text-[14px] leading-6 text-[#58656b]">
              Fill out your Puppy Family Profile today to get started.
            </p>

            <a
              href="/puppy-family-profile"
              className="mt-5 inline-flex rounded-full bg-gradient-to-b from-[#d9903c] to-[#a95f1f] px-7 py-3 text-[11px] font-black uppercase tracking-[0.13em] text-white"
            >
              Apply for a Puppy
            </a>

            <a
              href="tel:6319411111"
              className="mt-3 flex items-center gap-2 text-[14px] font-black text-[#3f3027]"
            >
              <Phone size={17} weight="fill" className="text-[#6f805f]" />
              Call: 631-941-1111
            </a>
          </div>

          <img
            src="/images/puppies/cta-puppy.png"
            alt="Labradoodle puppy"
            className="absolute bottom-0 right-0 h-[220px] object-contain"
          />
        </article>
      </div>
    </section>
  );
}

function PageFooter() {
  return (
    <footer className="bg-[#66755f] px-5 py-8 text-white md:px-8 lg:px-12">
      <div className="mx-auto grid max-w-[1280px] gap-8 md:grid-cols-[1.2fr_1fr_1fr_1fr] md:items-center">
        <div className="flex items-center gap-4">
          <img
            src="/images/logo/web-logo-2.png"
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
  );
}
