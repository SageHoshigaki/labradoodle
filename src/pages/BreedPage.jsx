import {
  ArrowRight,
  CalendarBlank,
  CheckCircle,
  EnvelopeSimple,
  GraduationCap,
  Heart,
  HouseLine,
  Leaf,
  MapPin,
  PawPrint,
  Phone,
  UsersThree,
} from "@phosphor-icons/react";

const breedTraits = [
  "Known for charisma, sociability, and a joyful personality",
  "Highly intelligent and eager to please",
  "Remarkable trainability and versatility",
  "Low-allergy coats with low to non-shedding fur",
  "Little to no dog odor",
  "Ideal as guide dogs, therapy dogs, assistance dogs, and beloved family companions",
];

const sizeCards = [
  {
    name: "Miniature",
    image: "/images/breed/miniature.jpg",
    height: "13–17 inches",
    weight: "15–30 lbs",
  },
  {
    name: "Medium",
    image: "/images/breed/medium.jpg",
    height: "18–21 inches",
    weight: "30–45 lbs",
  },
  {
    name: "Standard",
    image: "/images/breed/standard.jpg",
    height: "22+ inches",
    weight: "45–65+ lbs",
  },
];

const coatColors = [
  { name: "Chalk / White", image: "/images/breed/colors/chalk.jpg" },
  { name: "Cream / Caramel", image: "/images/breed/colors/cream.jpg" },
  { name: "Apricot", image: "/images/breed/colors/apricot.jpg" },
  { name: "Red", image: "/images/breed/colors/red.jpg" },
  { name: "Chocolate", image: "/images/breed/colors/chocolate.jpg" },
  { name: "Black", image: "/images/breed/colors/black.jpg" },
];

const familyReasons = [
  {
    icon: Heart,
    title: "Loving Temperament",
    body: "Affectionate, loyal, and people-oriented — true family dogs.",
  },
  {
    icon: Leaf,
    title: "Hypoallergenic Coat",
    body: "Low-allergy, low to non-shedding coats help keep homes cleaner and comfier.",
  },
  {
    icon: GraduationCap,
    title: "Highly Trainable",
    body: "Smart, eager to please, and quick learners — ideal for many roles and lifestyles.",
  },
  {
    icon: UsersThree,
    title: "Children-Friendly",
    body: "Gentle, patient, and playful with kids of all ages.",
  },
  {
    icon: HouseLine,
    title: "Perfect for Family Life",
    body: "Adaptable, social, and happiest when part of everyday family moments.",
  },
];

const trustStrip = [
  { icon: HouseLine, title: "Home-Raised", body: "Never Kennel Kept." },
  { icon: CalendarBlank, title: "Since 2006", body: "" },
  { icon: Leaf, title: "Hypoallergenic /", body: "Low-Shedding" },
  { icon: Heart, title: "Health-Tested", body: "Parents" },
];

function BreedPage() {
  return (
    <main className="min-h-screen bg-[#f7efe4] text-[#241915]">
      <PageHeader />
      <BreedHero />
      <BreedOrigin />
      <SizeSection />
      <ColorSection />
      <FamilyReasons />
      <BreederCTA />
      <TrustStrip />
      <PageFooter />
    </main>
  );
}

export default BreedPage;

function PageHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#e5d9c7] bg-[#fffaf3]/95 backdrop-blur-xl">
      <div className="mx-auto flex h-[72px] max-w-[1360px] items-center justify-between px-5 md:px-8 lg:px-12">
        <a href="/" className="flex items-center gap-3">
          <img
            src="/images/logo/logo.png"
            alt="Labradoodles of Long Island"
            className="h-12 w-12 rounded-full object-cover"
          />

          <div className="leading-none">
            <p className="text-[15px] font-black uppercase tracking-[-0.03em]">
              Labradoodles
              <br />
              of Long Island
            </p>
            <p className="mt-1 text-[8px] font-bold uppercase tracking-[0.22em] text-[#9a6a3a]">
              Premium Australian Labradoodles
            </p>
          </div>
        </a>

        <nav className="hidden items-center gap-7 text-[12px] font-semibold text-[#3f3027] lg:flex">
          <a href="/">Home</a>
          <a href="/available-puppies">Available Puppies</a>
          <a href="/our-dogs">Our Dogs</a>
          <a href="/puppy-package">Puppy Package</a>
          <a href="/testimonials">Testimonials</a>
          <a href="/about">About</a>
          <a href="/breed" className="text-[#b8752b]">
            The Breed
          </a>
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

function BreedHero() {
  return (
    <section className="relative overflow-hidden border-b border-[#eadfce] bg-[#fbf6ee]">
      <div className="mx-auto grid min-h-[560px] max-w-[1500px] lg:grid-cols-[0.48fr_0.52fr]">
        <div className="relative z-10 flex flex-col justify-center px-6 py-16 md:px-12 lg:pl-20">
          <div className="mb-12 flex items-center gap-2 text-[12px] font-semibold text-[#7a7069]">
            <a href="/" className="hover:text-[#b8752b]">
              Home
            </a>
            <span>›</span>
            <a href="/about" className="hover:text-[#b8752b]">
              About
            </a>
            <span>›</span>
            <span className="text-[#b8752b]">The Breed</span>
          </div>

          <p className="mb-5 text-[13px] font-black uppercase tracking-[0.22em] text-[#4d4a45]">
            The Breed
          </p>

          <h1 className="max-w-[620px] text-[4.35rem] font-semibold leading-[0.9] tracking-[-0.065em] text-[#1f2528] md:text-[5.6rem]">
            The Australian
            <br />
            <span className="font-editorial italic text-[#b8752b]">
              Labradoodle
            </span>{" "}
            <span className="font-editorial font-normal italic text-[#b8752b]">
              ♡
            </span>
          </h1>

          <p className="mt-7 max-w-[520px] text-[19px] font-semibold leading-8 text-[#3f4649]">
            Intelligent. Affectionate. Low-Allergy.
            <br />
            The perfect blend of three remarkable qualities that make the
            Australian Labradoodle a truly extraordinary companion.
          </p>
        </div>

        <div className="relative min-h-[440px]">
          <img
            src="/images/heros/breed.jpg"
            alt="Australian Labradoodle with family in the background"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-[#fbf6ee] to-transparent" />
        </div>
      </div>
    </section>
  );
}

function BreedOrigin() {
  return (
    <section className="px-5 py-10 md:px-8 lg:px-12">
      <div className="mx-auto grid max-w-[1280px] gap-7 rounded-[22px] border border-[#e6dac8] bg-[#fffaf3] p-8 shadow-sm lg:grid-cols-[0.36fr_0.84fr_0.8fr]">
        <div className="grid place-items-center rounded-[18px] bg-[#fbf6ee] p-7">
          <div className="grid h-[190px] w-[190px] place-items-center rounded-full border border-dashed border-[#c79968] bg-white">
            <img
              src="/images/breed/australia-mark.png"
              alt="Australia icon"
              className="h-[115px] w-[115px] object-contain"
            />
          </div>
        </div>

        <article className="flex flex-col justify-center">
          <h2 className="font-editorial text-[34px] font-semibold leading-none tracking-[-0.03em] text-[#1f2528]">
            A Thoughtful Beginning{" "}
            <span className="font-editorial italic text-[#b8752b]">♡</span>
          </h2>

          <div className="mt-5 space-y-5 text-[16px] leading-8 text-[#4f5b60]">
            <p>
              The Australian Labradoodle originated in Australia in the 1970s
              when the Australian Guide Dogs Foundation set out to create a
              low-allergy guide dog for those with sensitivities.
            </p>

            <p>
              By carefully pairing a Standard Poodle with a Labrador Retriever,
              breeders created a dog with the best of both breeds —
              intelligence, trainability, and a friendly, loving nature.
            </p>
          </div>
        </article>

        <article className="rounded-[18px] border border-[#e6dac8] bg-white p-7">
          <h2 className="font-editorial text-[34px] font-semibold leading-none tracking-[-0.03em] text-[#1f2528]">
            A Breed Like No Other
          </h2>

          <div className="mt-6 space-y-3">
            {breedTraits.map((trait) => (
              <p
                key={trait}
                className="flex items-start gap-3 text-[15px] font-semibold leading-6 text-[#4f5b60]"
              >
                <CheckCircle
                  size={20}
                  weight="fill"
                  className="mt-0.5 shrink-0 text-[#b8752b]"
                />
                {trait}
              </p>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}

function SizeSection() {
  return (
    <section className="px-5 pb-10 md:px-8 lg:px-12">
      <div className="mx-auto max-w-[1280px]">
        <h2 className="text-center font-editorial text-[40px] font-semibold leading-none tracking-[-0.03em] text-[#1f2528]">
          Three Sizes. The Perfect Fit.{" "}
          <span className="font-editorial italic text-[#b8752b]">♡</span>
        </h2>

        <div className="mt-7 grid gap-6 md:grid-cols-3">
          {sizeCards.map((size) => (
            <article
              key={size.name}
              className="grid min-h-[290px] grid-cols-[0.8fr_1fr] overflow-hidden rounded-[18px] border border-[#e6dac8] bg-[#fffaf3] shadow-sm"
            >
              <div className="relative flex items-end justify-center bg-white px-4 pt-6">
                <img
                  src={size.image}
                  alt={`${size.name} Australian Labradoodle`}
                  className="h-[235px] object-contain"
                />
              </div>

              <div className="flex flex-col items-center justify-center p-6 text-center">
                <div className="grid h-14 w-14 place-items-center rounded-full bg-[#6f805f] text-white">
                  <PawPrint size={29} weight="fill" />
                </div>

                <h3 className="mt-5 font-editorial text-[31px] font-semibold leading-none tracking-[-0.03em] text-[#1f2528]">
                  {size.name}
                </h3>

                <div className="mt-5">
                  <p className="text-[14px] font-black text-[#2f2925]">
                    Height
                  </p>
                  <p className="mt-1 text-[15px] font-semibold text-[#4f5b60]">
                    {size.height}
                  </p>
                </div>

                <div className="mt-4">
                  <p className="text-[14px] font-black text-[#2f2925]">
                    Weight
                  </p>
                  <p className="mt-1 text-[15px] font-semibold text-[#4f5b60]">
                    {size.weight}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-5 text-center text-[15px] font-semibold text-[#6c625a]">
          <span className="font-editorial text-[#b8752b]">♡</span> Size can vary
          based on genetics, lineage, and individual dog. We’re happy to help
          you find the perfect match for your family.
        </p>
      </div>
    </section>
  );
}

function ColorSection() {
  return (
    <section className="px-5 pb-10 md:px-8 lg:px-12">
      <div className="mx-auto max-w-[1280px] rounded-[22px] border border-[#e6dac8] bg-[#fffaf3] p-8 shadow-sm">
        <div className="text-center">
          <h2 className="font-editorial text-[39px] font-semibold leading-none tracking-[-0.03em] text-[#1f2528]">
            Beautiful Colors. Naturally Unique.{" "}
            <span className="font-editorial italic text-[#b8752b]">♡</span>
          </h2>

          <p className="mx-auto mt-3 max-w-[660px] text-[15px] leading-6 text-[#58656b]">
            Australian Labradoodles come in a stunning range of natural colors.
            Coat shades may change and mature over time.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
          {coatColors.map((color) => (
            <article key={color.name} className="text-center">
              <div className="mx-auto grid h-[136px] w-[136px] place-items-center rounded-full border border-[#e0d2bf] bg-white p-2 shadow-sm">
                <img
                  src={color.image}
                  alt={`${color.name} Australian Labradoodle coat`}
                  className="h-full w-full rounded-full object-cover"
                />
              </div>

              <p className="mt-4 font-editorial text-[19px] font-semibold leading-none text-[#2f2925]">
                {color.name}
              </p>
            </article>
          ))}
        </div>

        <p className="mt-8 text-center text-[15px] font-semibold text-[#6c625a]">
          <span className="font-editorial text-[#b8752b]">♡</span> Coat
          appearance can vary — wavy, curly, or fleece. Each Labradoodle is as
          unique as they are beautiful.
        </p>
      </div>
    </section>
  );
}

function FamilyReasons() {
  return (
    <section className="px-5 pb-10 md:px-8 lg:px-12">
      <div className="mx-auto max-w-[1280px] rounded-[22px] border border-[#e6dac8] bg-[#fffaf3] p-7 shadow-sm">
        <h2 className="text-center font-editorial text-[37px] font-semibold leading-none tracking-[-0.03em] text-[#1f2528]">
          Why Families Choose Australian Labradoodles{" "}
          <span className="font-editorial italic text-[#b8752b]">♡</span>
        </h2>

        <div className="mt-7 grid gap-0 overflow-hidden rounded-[18px] border border-[#e6dac8] bg-white sm:grid-cols-2 lg:grid-cols-5">
          {familyReasons.map((reason) => {
            const Icon = reason.icon;

            return (
              <article
                key={reason.title}
                className="min-h-[210px] border-b border-r border-[#e6dac8] p-6 text-center last:border-r-0 lg:border-b-0"
              >
                <div className="mx-auto grid h-[72px] w-[72px] place-items-center rounded-full border border-[#d9c9b4] bg-[#fbf6ee] text-[#6f805f]">
                  <Icon size={34} weight="duotone" />
                </div>

                <h3 className="mt-5 font-editorial text-[22px] font-semibold leading-none tracking-[-0.02em] text-[#2f2925]">
                  {reason.title}
                </h3>

                <p className="mt-3 text-[14px] font-semibold leading-6 text-[#58656b]">
                  {reason.body}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function BreederCTA() {
  return (
    <section className="px-5 pb-10 md:px-8 lg:px-12">
      <div className="mx-auto grid max-w-[1280px] overflow-hidden rounded-[22px] border border-[#e6dac8] bg-[#fffaf3] shadow-sm md:grid-cols-[0.42fr_0.58fr]">
        <div className="relative min-h-[285px]">
          <img
            src="/images/about/eileen.jpg"
            alt="Eileen with Australian Labradoodle"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>

        <div className="relative flex flex-col justify-center overflow-hidden p-8 md:p-10">
          <div className="relative z-10 max-w-[690px]">
            <h2 className="font-editorial text-[43px] font-semibold leading-[1.05] tracking-[-0.035em] text-[#1f2528]">
              Ready to Welcome
              <br />
              Your New Best Friend?{" "}
              <span className="font-editorial italic text-[#b8752b]">♡</span>
            </h2>

            <p className="mt-4 max-w-[560px] text-[16px] leading-7 text-[#58656b]">
              We’re here to help you find the perfect Australian Labradoodle to
              love and cherish for years to come.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href="/available-puppies"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-b from-[#d9903c] to-[#a95f1f] px-7 py-4 text-[12px] font-black uppercase tracking-[0.12em] text-white shadow-lg shadow-[#b8752b]/20"
              >
                View Available Puppies
                <PawPrint size={16} weight="fill" />
              </a>

              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-3 rounded-full border border-[#c29a70] bg-white px-7 py-4 text-[12px] font-black uppercase tracking-[0.12em] text-[#8d5a2d]"
              >
                Contact Us
                <EnvelopeSimple size={16} weight="bold" />
              </a>
            </div>
          </div>

          <div className="absolute bottom-4 right-6 hidden text-[#d8c9b6] md:block">
            <PawPrint size={64} weight="duotone" />
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustStrip() {
  return (
    <section className="border-y border-[#e6dac8] bg-[#fffaf3] px-5 py-5 md:px-8 lg:px-12">
      <div className="mx-auto grid max-w-[1280px] gap-0 overflow-hidden rounded-[14px] sm:grid-cols-2 lg:grid-cols-4">
        {trustStrip.map((item) => {
          const Icon = item.icon;

          return (
            <article
              key={item.title}
              className="flex items-center justify-center gap-4 border-b border-r border-[#e6dac8] px-5 py-4 last:border-r-0 lg:border-b-0"
            >
              <Icon size={31} weight="duotone" className="text-[#6f805f]" />
              <div>
                <p className="text-[14px] font-black leading-4 text-[#2f2925]">
                  {item.title}
                </p>
                {item.body && (
                  <p className="mt-1 text-[12px] font-semibold text-[#58656b]">
                    {item.body}
                  </p>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function PageFooter() {
  return (
    <footer className="bg-[#66755f] px-5 py-8 text-white md:px-8 lg:px-12">
      <div className="mx-auto grid max-w-[1280px] gap-8 md:grid-cols-[1.1fr_1.1fr_1fr_0.8fr] md:items-center">
        <div className="flex items-center gap-4">
          <img
            src="/images/logo/logo.png"
            alt="Labradoodles of Long Island"
            className="h-14 w-14 rounded-full object-cover"
          />

          <div>
            <p className="text-[16px] font-black uppercase leading-4">
              Labradoodles
              <br />
              of Long Island
            </p>
            <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-white/70">
              Premium Australian Labradoodles
            </p>
          </div>
        </div>

        <div className="text-[13px] leading-7 text-white/78">
          <p className="flex items-center gap-2">
            <Phone size={16} weight="fill" /> 631-834-1111
          </p>
          <p className="flex items-center gap-2">
            <EnvelopeSimple size={16} weight="fill" />{" "}
            info@labradoodlesoflongisland.com
          </p>
        </div>

        <p className="flex items-center gap-2 text-[13px] leading-6 text-white/78">
          <MapPin size={18} weight="fill" />
          Long Island, New York
        </p>

        <div className="flex gap-5 text-[13px] text-white/78 md:justify-end">
          <a href="/privacy">Privacy Policy</a>
          <a href="/contact">Contact</a>
        </div>
      </div>
    </footer>
  );
}
