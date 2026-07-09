import {
  ArrowRight,
  CalendarBlank,
  CheckCircle,
  ClipboardText,
  EnvelopeSimple,
  GenderFemale,
  Gift,
  Heart,
  HouseLine,
  Leaf,
  PawPrint,
  Phone,
  ShieldCheck,
  Sparkle,
  Stethoscope,
} from "@phosphor-icons/react";

const topTrust = [
  { icon: PawPrint, title: "Intelligent &", body: "Eager to Please" },
  { icon: Leaf, title: "Low to Non", body: "Shedding" },
  { icon: Heart, title: "Playful &", body: "Loving" },
  { icon: ShieldCheck, title: "Healthy-Tested", body: "Parents" },
  { icon: HouseLine, title: "Raised with", body: "Love" },
];

const steps = [
  {
    number: "1",
    icon: Stethoscope,
    title: "Health Testing & Evaluation",
    body: "We conduct thorough health testing to ensure our dogs meet breeding standards.",
  },
  {
    number: "2",
    icon: CheckCircle,
    title: "If Not Approved",
    body: "If a dog does not pass testing, the guardianship ends. The dog is spayed/neutered and ownership transfers to the guardian.",
  },
  {
    number: "3",
    icon: ClipboardText,
    title: "Guardian Contract",
    body: "All guardian placements are covered under a specific guardianship contract that outlines expectations and responsibilities.",
  },
  {
    number: "4",
    icon: GenderFemale,
    title: "In Heat Notification",
    body: "Female guardians notify us when their girl comes into heat.",
  },
  {
    number: "5",
    icon: HouseLine,
    title: "Return for Whelping",
    body: "Your dog returns to us about one week before her due date and stays until the puppies are weaned.",
  },
  {
    number: "6",
    icon: PawPrint,
    title: "Visit & Stay Connected",
    body: "Guardian families are welcome to visit and stay connected while puppies are young.",
  },
  {
    number: "7",
    icon: Heart,
    title: "Forever Family",
    body: "After retirement from our program, your dog remains yours — loved and cherished for life.",
  },
];

const benefits = [
  {
    icon: HouseLine,
    title: "Your dog lives in a loving home with one-on-one attention",
  },
  {
    icon: Sparkle,
    title: "Help shape the future of healthy, happy Labradoodles",
  },
  {
    icon: ShieldCheck,
    title: "We provide all breeding-related care and support",
  },
  {
    icon: PawPrint,
    title:
      "Your dog is part of our extended Labradoodles of Long Island family",
  },
  {
    icon: Heart,
    title: "After retirement, your dog stays with you — forever",
  },
  {
    icon: Gift,
    title: "Limited litters mean more time and memories at home",
  },
];

const faqs = [
  "What is a Guardian Home?",
  "Do I pay for breeding or vet care?",
  "What are my responsibilities as a Guardian?",
  "Can we visit our dog while she is at the breeder?",
  "How many litters will my dog have?",
  "What happens after my dog retires?",
  "What if I can no longer keep my guardian dog?",
  "Is the Guardian Program right for our family?",
];

const footerTrust = [
  { icon: HouseLine, title: "Home-Raised", body: "Never Kennel Kept." },
  { icon: CalendarBlank, title: "Since 2006", body: "" },
  { icon: Leaf, title: "Hypoallergenic /", body: "Low-Shedding" },
  { icon: Heart, title: "Health-Tested", body: "Parents" },
];

function GuardianProgramPage() {
  return (
    <main className="min-h-screen bg-[#f7efe4] text-[#241915]">
      <PageHeader />
      <GuardianHero />
      <TopTrustStrip />
      <ProgramIntro />
      <HowItWorks />
      <BenefitsSection />
      <FaqSection />
      <BottomImpactCTA />
      <FooterTrustStrip />
      <PageFooter />
    </main>
  );
}

export default GuardianProgramPage;

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
              Australian Labradoodles
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
          <a href="/guardian-program" className="text-[#b8752b]">
            Guardian Program
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

function GuardianHero() {
  return (
    <section className="relative overflow-hidden border-b border-[#eadfce] bg-[#fbf6ee]">
      <div className="mx-auto grid min-h-[520px] max-w-[1500px] lg:grid-cols-[0.48fr_0.52fr]">
        <div className="relative z-10 flex flex-col justify-center px-6 py-16 md:px-12 lg:pl-20">
          <p className="mb-5 text-[13px] font-black uppercase tracking-[0.22em] text-[#89705c]">
            Guardian Program{" "}
            <span className="font-editorial text-[#b8752b]">♡</span>
          </p>

          <h1 className="max-w-[620px] text-[4.25rem] font-semibold leading-[0.9] tracking-[-0.065em] text-[#1f2528] md:text-[5.45rem]">
            A Partnership
            <br />
            <span className="font-editorial italic text-[#b8752b]">
              Built on Love
            </span>
            <br />
            for Generations
          </h1>

          <p className="mt-7 max-w-[500px] text-[17px] font-semibold leading-8 text-[#4f5b60]">
            Our Guardian Program allows select Australian Labradoodles to live
            in loving homes while helping us continue our commitment to health,
            temperament, and excellence.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href="#guardian-faq"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-b from-[#d9903c] to-[#a95f1f] px-7 py-4 text-[12px] font-black uppercase tracking-[0.12em] text-white shadow-xl shadow-[#b8752b]/20"
            >
              Apply for Guardian Home
              <ArrowRight size={17} weight="bold" />
            </a>

            <a
              href="tel:6319411111"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[#c29a70] bg-white/55 px-7 py-4 text-[12px] font-black uppercase tracking-[0.12em] text-[#8d5a2d]"
            >
              <Phone size={17} weight="fill" />
              Call 631-941-1111
            </a>
          </div>
        </div>

        <div className="relative min-h-[420px]">
          <img
            src="/images/heros/guardian-program.jpg"
            alt="Guardian family with Australian Labradoodle"
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
          </div>
        </div>
      </div>
    </section>
  );
}

function TopTrustStrip() {
  return (
    <section className="bg-[#fffaf3] px-5 py-7 md:px-8 lg:px-12">
      <div className="mx-auto grid max-w-[1280px] gap-0 overflow-hidden rounded-[18px] border border-[#e6dac8] bg-white shadow-sm sm:grid-cols-2 lg:grid-cols-5">
        {topTrust.map((item) => {
          const Icon = item.icon;

          return (
            <article
              key={item.title}
              className="flex min-h-[92px] items-center justify-center gap-4 border-b border-r border-[#e6dac8] px-5 py-4 last:border-r-0 lg:border-b-0"
            >
              <Icon
                size={34}
                weight="duotone"
                className="shrink-0 text-[#6f805f]"
              />
              <div>
                <p className="text-[15px] font-black leading-5 text-[#2c2925]">
                  {item.title}
                </p>
                <p className="text-[13px] font-bold leading-4 text-[#4f5b60]">
                  {item.body}
                </p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function ProgramIntro() {
  return (
    <section className="px-5 pb-10 md:px-8 lg:px-12">
      <div className="mx-auto grid max-w-[1280px] gap-8 rounded-[22px] border border-[#e6dac8] bg-[#fffaf3] p-8 shadow-sm lg:grid-cols-[0.95fr_1.05fr]">
        <article className="flex flex-col justify-center">
          <h2 className="font-editorial text-[42px] font-semibold leading-none tracking-[-0.03em] text-[#1f2528]">
            Our Guardian Program{" "}
            <span className="font-editorial italic text-[#b8752b]">♡</span>
          </h2>

          <div className="mt-6 space-y-5 text-[16px] font-semibold leading-8 text-[#4f5b60]">
            <p>
              At Labradoodles of Long Island, we believe the best breeding dogs
              are raised in real homes — one-on-one — where they receive the
              love, attention, and daily experiences that shape exceptional
              companions.
            </p>

            <p>
              As a Guardian Family, you provide a safe, happy home for one of
              our future parents. In return, we provide all breeding-related
              care, support, and communication, and once your dog retires from
              our program, they remain yours — forever.
            </p>
          </div>
        </article>

        <div className="relative min-h-[320px] overflow-hidden rounded-[999px] border border-[#e6dac8] bg-[#eadbc6] shadow-sm">
          <img
            src="/images/guardian/sleeping-dog.jpg"
            alt="Sleeping Australian Labradoodle"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <Heart
            size={78}
            weight="regular"
            className="absolute bottom-6 right-8 text-[#b8752b]"
          />
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section className="px-5 pb-10 md:px-8 lg:px-12">
      <div className="mx-auto max-w-[1280px] rounded-[22px] border border-[#e6dac8] bg-[#fffaf3] p-8 shadow-sm">
        <h2 className="text-center font-editorial text-[38px] font-semibold leading-none tracking-[-0.03em] text-[#1f2528]">
          How Our Guardian Program Works{" "}
          <span className="font-editorial italic text-[#b8752b]">♡</span>
        </h2>

        <div className="mt-9 grid gap-0 overflow-hidden rounded-[18px] border border-[#e6dac8] bg-white md:grid-cols-2 lg:grid-cols-7">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <article
                key={step.number}
                className="relative min-h-[300px] border-b border-r border-[#e6dac8] p-5 text-center last:border-r-0 lg:border-b-0"
              >
                <div className="absolute left-1/2 top-0 grid h-10 w-10 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-[#c97927] text-[15px] font-black text-white shadow-md">
                  {step.number}
                </div>

                <div className="mt-7 flex h-16 items-center justify-center">
                  <Icon size={48} weight="duotone" className="text-[#6f805f]" />
                </div>

                <h3 className="mt-5 text-[15px] font-black leading-5 text-[#2f2925]">
                  {step.title}
                </h3>

                <p className="mt-3 text-[12px] font-semibold leading-5 text-[#64696b]">
                  {step.body}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function BenefitsSection() {
  return (
    <section className="px-5 pb-10 md:px-8 lg:px-12">
      <div className="mx-auto max-w-[1280px] rounded-[22px] border border-[#e6dac8] bg-[#fffaf3] p-8 shadow-sm">
        <h2 className="text-center font-editorial text-[38px] font-semibold leading-none tracking-[-0.03em] text-[#1f2528]">
          Benefits of Our Guardian Program{" "}
          <span className="font-editorial italic text-[#b8752b]">♡</span>
        </h2>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
          {benefits.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="min-h-[175px] rounded-[16px] border border-[#e6dac8] bg-white p-5 text-center shadow-sm"
              >
                <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-[#fbf6ee] text-[#6f805f]">
                  <Icon size={32} weight="duotone" />
                </div>

                <p className="mt-5 text-[14px] font-black leading-6 text-[#2f2925]">
                  {item.title}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FaqSection() {
  return (
    <section id="guardian-faq" className="px-5 pb-10 md:px-8 lg:px-12">
      <div className="mx-auto max-w-[1280px] rounded-[22px] border border-[#e6dac8] bg-[#fffaf3] p-8 shadow-sm">
        <h2 className="text-center font-editorial text-[38px] font-semibold leading-none tracking-[-0.03em] text-[#1f2528]">
          Frequently Asked Questions{" "}
          <span className="font-editorial italic text-[#b8752b]">♡</span>
        </h2>

        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          {faqs.map((faq) => (
            <details
              key={faq}
              className="group rounded-[14px] border border-[#e6dac8] bg-white px-5 py-4 shadow-sm"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                <span className="text-[15px] font-black text-[#2f2925]">
                  {faq}
                </span>
                <span className="text-[22px] font-light text-[#6f6a63] group-open:rotate-45">
                  +
                </span>
              </summary>

              <p className="mt-3 text-[14px] leading-6 text-[#62686a]">
                We’ll review the details with you personally so you understand
                expectations, support, timing, and whether the program is the
                right fit for your family.
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function BottomImpactCTA() {
  return (
    <section className="px-5 pb-0 md:px-8 lg:px-12">
      <div className="mx-auto grid max-w-[1280px] overflow-hidden rounded-t-[22px] border border-b-0 border-[#e1d3c1] bg-[#fbf6ee] md:grid-cols-[0.32fr_0.42fr_0.26fr]">
        <div className="relative min-h-[230px]">
          <img
            src="/images/guardian/cta-dog.png"
            alt="Australian Labradoodle"
            className="absolute bottom-0 left-0 h-full w-full object-contain object-left-bottom"
          />
        </div>

        <div className="flex flex-col justify-center p-8 md:p-10">
          <h2 className="font-editorial text-[42px] font-semibold leading-[1] tracking-[-0.035em] text-[#1f2528]">
            Ready to Make a
            <br />
            Lasting Impact?{" "}
            <span className="font-editorial italic text-[#b8752b]">♡</span>
          </h2>

          <p className="mt-4 max-w-[460px] text-[15px] font-semibold leading-7 text-[#58656b]">
            Join our Guardian Program and help us raise the next generation —
            right from your heart and home.
          </p>
        </div>

        <div className="flex flex-col justify-center gap-4 p-8 md:p-10">
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-b from-[#d9903c] to-[#a95f1f] px-7 py-4 text-[12px] font-black uppercase tracking-[0.12em] text-white"
          >
            Apply for Guardian Home
          </a>

          <a
            href="tel:6319411111"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-[#c29a70] bg-white px-7 py-4 text-[12px] font-black uppercase tracking-[0.12em] text-[#8d5a2d]"
          >
            <Phone size={17} weight="fill" />
            Call 631-941-1111
          </a>
        </div>
      </div>
    </section>
  );
}

function FooterTrustStrip() {
  return (
    <section className="bg-[#66755f] px-5 py-5 text-white md:px-8 lg:px-12">
      <div className="mx-auto grid max-w-[1280px] gap-0 overflow-hidden sm:grid-cols-2 lg:grid-cols-4">
        {footerTrust.map((item) => {
          const Icon = item.icon;

          return (
            <article
              key={item.title}
              className="flex items-center justify-center gap-4 border-white/20 px-5 py-4 lg:border-r last:border-r-0"
            >
              <Icon size={31} weight="duotone" className="text-white/85" />
              <div>
                <p className="text-[14px] font-black leading-4 text-white">
                  {item.title}
                </p>
                {item.body && (
                  <p className="mt-1 text-[12px] font-semibold text-white/75">
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
    <footer className="bg-[#66755f] px-5 pb-8 pt-4 text-white md:px-8 lg:px-12">
      <div className="mx-auto grid max-w-[1280px] gap-8 border-t border-white/18 pt-7 md:grid-cols-[1.1fr_1fr_1fr] md:items-center">
        <div className="flex items-center gap-4">
          <img
            src="/images/logo/logo.png"
            alt="Labradoodles of Long Island"
            className="h-12 w-12 rounded-full object-cover"
          />

          <div>
            <p className="text-[15px] font-black uppercase leading-4">
              Labradoodles
              <br />
              of Long Island
            </p>
            <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-white/70">
              Australian Labradoodles
            </p>
          </div>
        </div>

        <p className="flex items-center justify-center gap-2 text-[15px] font-black text-white">
          <Phone size={17} weight="fill" /> Call: 631-941-1111
        </p>

        <div className="flex gap-5 text-[13px] text-white/78 md:justify-end">
          <a href="/privacy">Privacy Policy</a>
          <a href="/contact">Contact</a>
        </div>
      </div>
    </footer>
  );
}
