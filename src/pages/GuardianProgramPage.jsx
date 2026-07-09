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
  { icon: ShieldCheck, title: "Health-Tested", body: "Parents" },
  { icon: HouseLine, title: "Raised with", body: "Love" },
];

const steps = [
  {
    number: "01",
    icon: Stethoscope,
    title: "Health Testing & Evaluation",
    body: "We conduct thorough health testing to ensure our dogs meet breeding standards.",
  },
  {
    number: "02",
    icon: CheckCircle,
    title: "If Not Approved",
    body: "If a dog does not pass testing, the guardianship ends. The dog is spayed/neutered and ownership transfers to the guardian.",
  },
  {
    number: "03",
    icon: ClipboardText,
    title: "Guardian Contract",
    body: "All guardian placements are covered under a specific guardianship contract that outlines expectations and responsibilities.",
  },
  {
    number: "04",
    icon: GenderFemale,
    title: "In Heat Notification",
    body: "Female guardians notify us when their girl comes into heat.",
  },
  {
    number: "05",
    icon: HouseLine,
    title: "Return for Whelping",
    body: "Your dog returns to us about one week before her due date and stays until the puppies are weaned.",
  },
  {
    number: "06",
    icon: PawPrint,
    title: "Visit & Stay Connected",
    body: "Guardian families are welcome to visit and stay connected while puppies are young.",
  },
  {
    number: "07",
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
  {
    question: "What is a Guardian Home?",
    answer:
      "A Guardian Home is a loving family home for one of our breeding dogs. The dog lives with you as a family companion while remaining part of our breeding program for a limited time.",
  },
  {
    question: "Do I pay for breeding or vet care?",
    answer:
      "Breeding-related care is handled by us. Guardian families are responsible for normal daily care, love, grooming, food, exercise, and communication.",
  },
  {
    question: "What are my responsibilities as a Guardian?",
    answer:
      "You provide a safe, loving home, keep the dog healthy and socialized, communicate with us, and follow the guardian agreement.",
  },
  {
    question: "Can we visit our dog while she is at the breeder?",
    answer:
      "Yes. We keep guardian families connected and informed while their dog is with us for whelping and puppy care.",
  },
  {
    question: "How many litters will my dog have?",
    answer:
      "That depends on the dog, her health, and what is best for her. We always prioritize the dog’s wellbeing.",
  },
  {
    question: "What happens after my dog retires?",
    answer:
      "After retirement, your dog remains with you permanently as your loved family companion.",
  },
  {
    question: "What if I can no longer keep my guardian dog?",
    answer:
      "You should contact us immediately. Guardian placements are handled with care and responsibility under the agreement.",
  },
  {
    question: "Is the Guardian Program right for our family?",
    answer:
      "It may be if you live nearby, communicate well, love dogs deeply, and want to be part of raising the next generation of Labradoodles.",
  },
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
          <a href="/available-puppies">Available Puppies</a>
          <a href="/our-dogs">Our Dogs</a>
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
      <div className="absolute left-[-12rem] top-[-12rem] h-[34rem] w-[34rem] rounded-full bg-[#d9903c]/12 blur-3xl" />
      <div className="absolute bottom-[-14rem] right-[-10rem] h-[34rem] w-[34rem] rounded-full bg-[#6f805f]/14 blur-3xl" />

      <div className="relative mx-auto grid min-h-[570px] max-w-[1500px] lg:grid-cols-[0.48fr_0.52fr]">
        <div className="relative z-10 flex flex-col justify-center px-6 py-16 md:px-12 lg:pl-20">
          <p className="mb-5 flex items-center gap-3 text-[11px] font-black uppercase tracking-[0.32em] text-[#89705c]">
            Guardian Program
            <span className="h-px w-10 bg-[#b8752b]" />
          </p>

          <h1 className="max-w-[680px] text-[4.1rem] font-semibold leading-[0.9] tracking-[-0.07em] text-[#1f2528] md:text-[5.55rem]">
            A partnership
            <br />
            <span className="font-editorial italic text-[#b8752b]">
              built on love
            </span>
            <br />
            for generations.
          </h1>

          <p className="mt-7 max-w-[520px] text-[17px] font-semibold leading-8 text-[#4f5b60]">
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

        <div className="relative min-h-[430px]">
          <img
            src="/images/guardian-program.jpg"
            alt="Guardian family with Australian Labradoodle"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-[#fbf6ee] to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1f2528]/35 via-transparent to-transparent" />

          <div className="absolute bottom-7 left-7 right-7 rounded-[26px] border border-white/30 bg-[#fffaf3]/88 p-5 shadow-2xl backdrop-blur-md md:left-auto md:max-w-[370px]">
            <p className="text-[10px] font-black uppercase tracking-[0.24em] text-[#9a6a3a]">
              Loved as family
            </p>
            <p className="mt-2 text-[14px] font-semibold leading-6 text-[#4f5b60]">
              Guardian dogs live real family lives first — loved, known, and
              cared for every day.
            </p>
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
      <div className="mx-auto grid max-w-[1280px] gap-8 rounded-[30px] border border-[#e6dac8] bg-[#fffaf3] p-6 shadow-sm md:p-8 lg:grid-cols-[0.95fr_1.05fr]">
        <article className="flex flex-col justify-center rounded-[24px] bg-white p-7 md:p-8">
          <p className="text-[11px] font-black uppercase tracking-[0.3em] text-[#9a6a3a]">
            The heart of the program
          </p>

          <h2 className="mt-4 font-editorial text-[46px] font-semibold leading-none tracking-[-0.04em] text-[#1f2528]">
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
              care, support, and communication. Once your dog retires from our
              program, they remain yours — forever.
            </p>
          </div>
        </article>

        <div className="relative min-h-[350px] overflow-hidden rounded-[999px] border border-[#e6dac8] bg-[#eadbc6] shadow-sm">
          <img
            src="/images/sleeping-dog.jpeg"
            alt="Sleeping Australian Labradoodle"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#1f2528]/28 via-transparent to-transparent" />

          <Heart
            size={88}
            weight="regular"
            className="absolute bottom-7 right-10 text-[#b8752b]"
          />
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section className="relative overflow-hidden px-5 pb-10 md:px-8 lg:px-12">
      <div className="absolute left-[-12rem] top-10 h-[28rem] w-[28rem] rounded-full bg-[#6f805f]/12 blur-3xl" />

      <div className="relative mx-auto max-w-[1280px] rounded-[30px] border border-[#e6dac8] bg-[#fffaf3] p-6 shadow-sm md:p-8">
        <div className="mx-auto max-w-[780px] text-center">
          <p className="text-[11px] font-black uppercase tracking-[0.3em] text-[#9a6a3a]">
            The process
          </p>

          <h2 className="mt-4 font-editorial text-[42px] font-semibold leading-none tracking-[-0.04em] text-[#1f2528]">
            How Our Guardian Program Works{" "}
            <span className="font-editorial italic text-[#b8752b]">♡</span>
          </h2>

          <p className="mt-4 text-[15px] leading-7 text-[#58656b]">
            Clear expectations, thoughtful care, and a partnership built around
            the wellbeing of the dog.
          </p>
        </div>

        <div className="mt-9 overflow-x-auto pb-2">
          <div className="grid min-w-[1180px] grid-cols-7 gap-0 overflow-hidden rounded-[22px] border border-[#e6dac8] bg-white">
            {steps.map((step) => {
              const Icon = step.icon;

              return (
                <article
                  key={step.number}
                  className="relative min-h-[315px] border-r border-[#e6dac8] p-5 text-center last:border-r-0"
                >
                  <div className="absolute left-1/2 top-0 grid h-11 w-11 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-gradient-to-b from-[#d9903c] to-[#a95f1f] text-[12px] font-black text-white shadow-lg shadow-[#b8752b]/20">
                    {step.number}
                  </div>

                  <div className="mt-8 flex h-16 items-center justify-center">
                    <Icon
                      size={48}
                      weight="duotone"
                      className="text-[#6f805f]"
                    />
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
      </div>
    </section>
  );
}

function BenefitsSection() {
  return (
    <section className="px-5 pb-10 md:px-8 lg:px-12">
      <div className="mx-auto max-w-[1280px] rounded-[30px] border border-[#e6dac8] bg-[#fffaf3] p-6 shadow-sm md:p-8">
        <div className="grid gap-7 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
          <div>
            <p className="text-[11px] font-black uppercase tracking-[0.3em] text-[#9a6a3a]">
              Benefits
            </p>
            <h2 className="mt-4 font-editorial text-[42px] font-semibold leading-none tracking-[-0.04em] text-[#1f2528]">
              Why families become guardians{" "}
              <span className="font-editorial italic text-[#b8752b]">♡</span>
            </h2>
          </div>

          <p className="max-w-[570px] text-[15px] leading-7 text-[#58656b] lg:justify-self-end">
            A guardian home gives a special dog the life they deserve while
            helping us continue a responsible, home-centered breeding program.
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
          {benefits.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="group min-h-[185px] rounded-[22px] border border-[#e6dac8] bg-white p-5 text-center shadow-sm transition duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#8a5d37]/10"
              >
                <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-[#fbf6ee] text-[#6f805f] transition duration-500 group-hover:bg-[#6f805f] group-hover:text-white">
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
      <div className="mx-auto max-w-[1280px] rounded-[30px] border border-[#e6dac8] bg-[#fffaf3] p-6 shadow-sm md:p-8">
        <div className="mx-auto max-w-[780px] text-center">
          <p className="text-[11px] font-black uppercase tracking-[0.3em] text-[#9a6a3a]">
            FAQ
          </p>

          <h2 className="mt-4 font-editorial text-[42px] font-semibold leading-none tracking-[-0.04em] text-[#1f2528]">
            Frequently Asked Questions{" "}
            <span className="font-editorial italic text-[#b8752b]">♡</span>
          </h2>
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-[18px] border border-[#e6dac8] bg-white px-5 py-5 shadow-sm"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                <span className="text-[15px] font-black text-[#2f2925]">
                  {faq.question}
                </span>
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#f7efe4] text-[22px] font-light text-[#6f6a63] transition group-open:rotate-45">
                  +
                </span>
              </summary>

              <p className="mt-4 text-[14px] leading-7 text-[#62686a]">
                {faq.answer}
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
      <div className="mx-auto grid max-w-[1280px] overflow-hidden rounded-t-[30px] border border-b-0 border-[#e1d3c1] bg-[#fffaf3] md:grid-cols-[0.36fr_0.42fr_0.22fr]">
        <div className="relative min-h-[280px] bg-[#eadbc6]">
          <img
            src="/images/guardian/cta-dog.png"
            alt="Australian Labradoodle"
            className="absolute bottom-0 left-0 h-full w-full object-contain object-left-bottom"
          />
        </div>

        <div className="flex flex-col justify-center p-8 md:p-10">
          <p className="text-[11px] font-black uppercase tracking-[0.3em] text-[#9a6a3a]">
            Guardian Homes
          </p>

          <h2 className="mt-4 font-editorial text-[46px] font-semibold leading-[1] tracking-[-0.04em] text-[#1f2528]">
            Ready to make a
            <br />
            lasting impact?{" "}
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
            src="/images/web-logo-2.png"
            alt="Labradoodles of Long Island"
            className="h-12 w-12 rounded-full object-contain"
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
