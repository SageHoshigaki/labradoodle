import {
  ArrowUpRight,
  Heart,
  HouseLine,
  MapPin,
  PawPrint,
  ShieldCheck,
  Sparkle,
  Syringe,
  Stethoscope,
  Medal,
  UsersThree,
} from "@phosphor-icons/react";

const trustStrip = [
  { icon: PawPrint, title: "Breeding & Loving", body: "Since 2006" },
  { icon: MapPin, title: "East Setauket", body: "New York" },
  { icon: Heart, title: "Manhattan &", body: "Long Island Adoptions" },
  { icon: HouseLine, title: "Raised in Our Home", body: "or with Guardians" },
  { icon: Sparkle, title: "Hypoallergenic", body: "Low-Shedding" },
  { icon: UsersThree, title: "Wonderful", body: "with Children" },
];

const chooseItems = [
  {
    icon: PawPrint,
    title: "Raised with Love",
    body: "Our dogs live in our home or with guardians and are part of the family.",
  },
  {
    icon: Medal,
    title: "Health Comes First",
    body: "Extensive health testing for stronger, healthier generations.",
  },
  {
    icon: HouseLine,
    title: "In-Home Experience",
    body: "Puppies are raised in a relaxed home environment with daily enrichment.",
  },
  {
    icon: UsersThree,
    title: "Family Focused",
    body: "Loving, sociable, and wonderful with children of all ages.",
  },
  {
    icon: Heart,
    title: "Lifetime Support",
    body: "We’re here for you before, during, and long after your puppy comes home.",
  },
];

const packageItems = [
  {
    icon: Syringe,
    title: "First Vaccination",
    body: "Up to date on age-appropriate vaccines.",
  },
  {
    icon: ShieldCheck,
    title: "Dewormed",
    body: "For a healthy start in life.",
  },
  {
    icon: PawPrint,
    title: "Microchipped",
    body: "AKC microchip for lifetime safety.",
  },
  {
    icon: Heart,
    title: "Blanket with Litter Scent",
    body: "Comfort and familiarity for home.",
  },
  { icon: Sparkle, title: "Toys", body: "For play, enrichment, and bonding." },
  { icon: PackageIcon, title: "Bowls", body: "Food and water essentials." },
  {
    icon: Stethoscope,
    title: "Leash & Collar",
    body: "The perfect start for adventures.",
  },
  {
    icon: Medal,
    title: "Milestone Info & Tips",
    body: "Helpful guidance for your journey.",
  },
];

const healthItems = [
  { title: "Orthopedic Clearances", body: "Hips, elbows, OFA normal." },
  { title: "Cardiac Clearance", body: "OFA heart normal." },
  { title: "Eye Clearance", body: "OFA eye normal." },
  {
    title: "Genetic Testing",
    body: "PRA, EIC, vWD disease clear by parentage.",
  },
  {
    title: "Breed Integrity",
    body: "Committed to ethical breeding and ALAA standards.",
  },
];

const testimonials = [
  {
    quote:
      "Eileen is incredibly knowledgeable and truly cares about each puppy. Our doodle is healthy, smart, and the best part of our family.",
    name: "Melissa R., Long Island",
  },
  {
    quote:
      "From the first visit to bringing our puppy home, the experience was wonderful. We felt supported every step of the way.",
    name: "Jennifer L., Manhattan",
  },
  {
    quote:
      "The love and attention these puppies receive is clear. Our boy is affectionate, gentle, and wonderful with our kids.",
    name: "Sara K., Long Island",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#f6ead8] text-[#251811]">
      <PageHeader />

      <section className="relative overflow-hidden px-5 pb-12 pt-24 md:px-10 lg:px-14">
        <div className="paper-noise absolute inset-0 opacity-[0.12]" />

        <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.32em] text-[#9a6a3a]">
              About Labradoodles of Long Island
            </p>

            <h1 className="mt-5 max-w-3xl text-5xl font-semibold leading-[0.9] tracking-[-0.07em] md:text-7xl">
              About Us.
              <br />
              <span className="font-editorial italic text-[#b8742b]">
                Our Mission.
              </span>{" "}
              ♡
            </h1>

            <p className="mt-6 max-w-lg text-lg font-semibold leading-8 text-[#251811]">
              Breeding and loving Australian Labradoodles since 2006.
            </p>

            <p className="mt-4 max-w-xl text-base leading-8 text-[#6b4d37] md:text-lg">
              We are a professional, in-home breeder dedicated to raising
              healthy, happy, well-socialized Australian Labradoodles that
              become cherished family members.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="/puppy-family-profile"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-[#b8742b] px-7 py-4 text-sm font-bold uppercase tracking-[0.14em] text-white transition hover:bg-[#8f571f]"
              >
                Apply for a Puppy
                <ArrowUpRight size={18} weight="bold" />
              </a>

              <a
                href="/puppy-family-profile"
                className="inline-flex items-center justify-center rounded-full border border-[#c9ad82] bg-white/50 px-7 py-4 text-sm font-bold uppercase tracking-[0.14em] text-[#251811] transition hover:bg-white"
              >
                Start Family Profile
              </a>
            </div>
          </div>

          <div className="relative min-h-[28rem] overflow-hidden rounded-[2.5rem] border border-[#d2b991] bg-[#e8d1ad] shadow-2xl shadow-[#8a5d37]/15 md:min-h-[34rem]">
            <img
              src="/images/heros/about.jpg"
              alt="Australian Labradoodle resting at home"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="px-5 pb-10 md:px-10 lg:px-14">
        <div className="mx-auto grid max-w-7xl gap-3 rounded-[1.5rem] border border-[#d2b991] bg-[#fff8ed]/78 p-4 shadow-xl shadow-[#8a5d37]/8 sm:grid-cols-2 lg:grid-cols-6">
          {trustStrip.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="flex items-center gap-3 rounded-2xl p-3"
              >
                <Icon
                  size={28}
                  weight="duotone"
                  className="shrink-0 text-[var(--heritage-green)]"
                />
                <div>
                  <p className="text-xs font-bold">{item.title}</p>
                  <p className="text-xs text-[#6b4d37]">{item.body}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="px-5 pb-12 md:px-10 lg:px-14">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.75fr_1fr_0.55fr]">
          <div className="relative min-h-[22rem] overflow-hidden rounded-[2rem] border border-[#d2b991] bg-[#e8d1ad] shadow-xl shadow-[#8a5d37]/10">
            <img
              src="/images/about/eileen.jpg"
              alt="Eileen with Labradoodle"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>

          <article className="rounded-[2rem] border border-[#d2b991] bg-[#fff8ed]/78 p-7 shadow-xl shadow-[#8a5d37]/8">
            <h2 className="text-4xl font-semibold tracking-[-0.055em] md:text-5xl">
              About Eileen{" "}
              <span className="font-editorial italic text-[#b8742b]">♡</span>
            </h2>

            <p className="mt-3 text-sm font-bold uppercase tracking-[0.18em] text-[#9a6a3a]">
              Master Breeder. Lifelong Dog Lover. Dedicated to Excellence.
            </p>

            <div className="mt-6 space-y-4 text-base leading-8 text-[#6b4d37]">
              <p>
                I’m Eileen, the breeder and heart behind Labradoodles of Long
                Island.
              </p>
              <p>
                My journey began in 2006 with a passion for the Australian
                Labradoodle breed and a commitment to responsible breeding,
                health testing, and exceptional care.
              </p>
              <p>
                Each of our dogs lives in our home or with trusted guardian
                families, where they are loved, nurtured, and become part of our
                extended family.
              </p>
              <p>
                It is my greatest joy to match our puppies with families who
                will love them as much as we do.
              </p>
            </div>

            <p className="mt-6 font-editorial text-3xl italic text-[#8a5d37]">
              Eileen ♡
            </p>
          </article>

          <aside className="rounded-[2rem] border border-[#d2b991] bg-[#fffaf3]/82 p-7 shadow-xl shadow-[#8a5d37]/8">
            <p className="font-editorial text-6xl leading-none text-[#b8742b]">
              “
            </p>
            <p className="mt-2 font-editorial text-2xl italic leading-[1.35] text-[#6b4d37]">
              Our mission is to raise healthy, happy, confident Australian
              Labradoodles and support families every step of the way.
            </p>
            <PawPrint size={42} weight="fill" className="mt-8 text-[#b8742b]" />
          </aside>
        </div>
      </section>

      <IconCardSection
        title="Why Families Choose Labradoodles of Long Island"
        items={chooseItems}
      />

      <section className="px-5 pb-12 md:px-10 lg:px-14">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-[#d2b991] bg-[#fff8ed]/75 p-6 shadow-xl shadow-[#8a5d37]/8">
          <div className="text-center">
            <h2 className="text-4xl font-semibold tracking-[-0.055em] md:text-5xl">
              What Comes Home With Your Puppy{" "}
              <span className="font-editorial italic text-[#b8742b]">♡</span>
            </h2>
            <p className="mt-3 text-[#6b4d37]">
              Our puppies go home at 8 weeks old, well-prepared for a smooth
              transition.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {packageItems.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="rounded-2xl border border-[#d2b991] bg-white p-5"
                >
                  <Icon size={26} weight="duotone" className="text-[#b8742b]" />
                  <h3 className="mt-3 text-sm font-bold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#6b4d37]">
                    {item.body}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-5 pb-12 md:px-10 lg:px-14">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-[#d2b991] bg-[#fff8ed]/75 p-6 shadow-xl shadow-[#8a5d37]/8">
          <div className="text-center">
            <h2 className="text-4xl font-semibold tracking-[-0.055em] md:text-5xl">
              Health Tested. Breed Integrity. Peace of Mind.
            </h2>
            <p className="mt-3 text-[#6b4d37]">
              Our breeding dogs are thoroughly tested and cleared by
              veterinarians.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3 lg:grid-cols-5">
            {healthItems.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-[#d2b991] bg-white p-5"
              >
                <ShieldCheck
                  size={28}
                  weight="duotone"
                  className="text-[var(--heritage-green)]"
                />
                <h3 className="mt-3 text-sm font-bold">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#6b4d37]">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 pb-12 md:px-10 lg:px-14">
        <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-[0.55fr_0.9fr_0.9fr]">
          <div className="relative min-h-56 overflow-hidden rounded-[1.75rem] border border-[#d2b991] bg-[#e8d1ad]">
            <img
              src="/images/about/visit-mommy.jpg"
              alt="Labradoodle puppy"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>

          <article className="rounded-[1.75rem] border border-[#d2b991] bg-[#fff8ed]/78 p-6">
            <h2 className="text-3xl font-semibold tracking-[-0.05em]">
              Visit Mommy & Puppies{" "}
              <span className="font-editorial italic text-[#b8742b]">♡</span>
            </h2>
            <p className="mt-4 text-sm leading-7 text-[#6b4d37]">
              Families are invited to visit mommy and the puppies at 6 weeks
              old. It is a special time to see their personalities shine and
              build a connection.
            </p>
            <a className="mt-5 inline-flex items-center gap-3 rounded-full bg-[#b8742b] px-6 py-3 text-xs font-bold uppercase tracking-[0.14em] text-white">
              Learn More About Our Process
              <ArrowUpRight size={17} weight="bold" />
            </a>
          </article>

          <div className="grid gap-5 sm:grid-cols-2">
            <div className="relative min-h-56 overflow-hidden rounded-[1.75rem] border border-[#d2b991] bg-[#e8d1ad]">
              <img
                src="/images/about/puppy-play.jpg"
                alt="Puppies playing"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
            <div className="relative min-h-56 overflow-hidden rounded-[1.75rem] border border-[#d2b991] bg-[#e8d1ad]">
              <img
                src="/images/about/litter.jpg"
                alt="Labradoodle litter"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <Testimonials />
      <BottomCTA />
      <PageFooter />
    </main>
  );
}

function IconCardSection({ title, items }) {
  return (
    <section className="px-5 pb-12 md:px-10 lg:px-14">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-[#d2b991] bg-[#fff8ed]/75 p-6 shadow-xl shadow-[#8a5d37]/8">
        <h2 className="text-center text-3xl font-semibold tracking-[-0.05em] md:text-4xl">
          {title}{" "}
          <span className="font-editorial italic text-[#b8742b]">♡</span>
        </h2>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {items.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="rounded-2xl border border-[#d2b991] bg-white p-5"
              >
                <Icon
                  size={30}
                  weight="duotone"
                  className="text-[var(--heritage-green)]"
                />
                <h3 className="mt-4 text-sm font-bold">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#6b4d37]">
                  {item.body}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="px-5 pb-12 md:px-10 lg:px-14">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-center text-3xl font-semibold tracking-[-0.05em] md:text-4xl">
          Loved by Families{" "}
          <span className="font-editorial italic text-[#b8742b]">♡</span>
        </h2>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {testimonials.map((item) => (
            <article
              key={item.name}
              className="rounded-[1.75rem] border border-[#d2b991] bg-[#fff8ed]/78 p-6 shadow-xl shadow-[#8a5d37]/8"
            >
              <p className="text-[#b8742b]">★★★★★</p>
              <p className="mt-4 font-editorial text-xl italic leading-8 text-[#6b4d37]">
                “{item.quote}”
              </p>
              <p className="mt-5 text-sm font-bold text-[#251811]">
                — {item.name}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function PageHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#d2b991]/60 bg-[#fff8ed]/88 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:px-10 lg:px-14">
        <a href="/" className="flex items-center gap-3">
          <img
            src="/images/logo/logo.png"
            alt="Labradoodles of Long Island"
            className="h-12 w-12 rounded-full object-cover"
          />
          <div>
            <p className="text-sm font-black uppercase leading-4 tracking-[-0.02em]">
              Labradoodles
              <br />
              of Long Island
            </p>
            <p className="mt-1 text-[9px] uppercase tracking-[0.22em] text-[#9a6a3a]">
              Australian Labradoodles
            </p>
          </div>
        </a>

        <nav className="hidden items-center gap-7 text-xs font-bold uppercase tracking-[0.12em] text-[#4c3a2f] lg:flex">
          <a href="/">Home</a>
          <a href="/available-puppies">Available Puppies</a>
          <a href="/our-dogs">Our Dogs</a>
          <a href="/puppy-family-profile">Puppy Package</a>
          <a href="/about" className="text-[#b8742b]">
            About
          </a>
          <a href="/contact">Contact</a>
        </nav>

        <a
          href="/puppy-family-profile"
          className="hidden rounded-full bg-[#b8742b] px-5 py-3 text-xs font-bold uppercase tracking-[0.12em] text-white lg:inline-flex"
        >
          Apply for a Puppy
        </a>

        <button className="lg:hidden">
          <PawPrint size={28} weight="duotone" />
        </button>
      </div>
    </header>
  );
}

function BottomCTA() {
  return (
    <section className="px-5 pb-8 md:px-10 lg:px-14">
      <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[2rem] border border-[#d2b991] bg-[#fff8ed] shadow-xl shadow-[#8a5d37]/8 md:grid-cols-[0.7fr_1.3fr]">
        <div className="relative min-h-56">
          <img
            src="/images/puppies/cta-puppy.jpg"
            alt="Labradoodle puppy"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>

        <div className="flex flex-col justify-center p-8 md:p-10">
          <h2 className="max-w-2xl text-4xl font-semibold leading-[0.95] tracking-[-0.055em] md:text-5xl">
            Ready to Welcome
            <br />
            Your New Best Friend?{" "}
            <span className="font-editorial italic text-[#b8742b]">♡</span>
          </h2>

          <p className="mt-4 max-w-xl text-[#6b4d37]">
            We’re here to help you find the perfect puppy for your family.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a
              href="/available-puppies"
              className="rounded-full bg-[#b8742b] px-7 py-4 text-center text-sm font-bold uppercase tracking-[0.14em] text-white"
            >
              View Available Puppies
            </a>

            <a
              href="/contact"
              className="rounded-full border border-[#c9ad82] px-7 py-4 text-center text-sm font-bold uppercase tracking-[0.14em]"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function PageFooter() {
  return (
    <footer className="bg-[var(--heritage-green)] px-5 py-8 text-white md:px-10 lg:px-14">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 md:flex-row md:items-center">
        <div className="flex items-center gap-3">
          <img
            src="/images/logo/logo.png"
            alt="Labradoodles of Long Island"
            className="h-12 w-12 rounded-full object-cover"
          />
          <div>
            <p className="text-sm font-black uppercase leading-4">
              Labradoodles
              <br />
              of Long Island
            </p>
            <p className="mt-1 text-xs text-white/70">
              © 2026 Labradoodles of Long Island
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-5 text-sm text-white/80">
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms of Use</a>
          <a href="/contact">Contact</a>
        </div>
      </div>
    </footer>
  );
}

function PackageIcon(props) {
  return <PackageBox {...props} />;
}

function PackageBox({ size = 26, className = "" }) {
  return <Package size={size} weight="duotone" className={className} />;
}
