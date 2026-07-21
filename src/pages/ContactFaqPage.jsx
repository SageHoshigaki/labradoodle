import {
  ArrowUpRight,
  CaretDown,
  CheckCircle,
  Clock,
  EnvelopeSimple,
  HouseLine,
  MapPin,
  PawPrint,
  Phone,
  Question,
  Sparkle,
} from "@phosphor-icons/react";
import Navbar from "../components/Navbar";

const contactCards = [
  {
    icon: Phone,
    title: "Call Us",
    value: "631-834-1111",
    href: "tel:6318341111",
    body: "Speak with us about available puppies, upcoming litters, and the application process.",
  },
  {
    icon: EnvelopeSimple,
    title: "Email",
    value: "info@labradoodlesoflongisland.com",
    href: "mailto:info@labradoodlesoflongisland.com",
    body: "Send questions about puppies, guardian homes, visits, or family profiles.",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Long Island, New York",
    href: "#",
    body: "Serving Long Island, Manhattan, NYC, Nassau, Suffolk, and surrounding families.",
  },
  {
    icon: Clock,
    title: "Hours",
    value: "By Appointment",
    href: "#",
    body: "Visits are scheduled with approved families during the puppy selection process.",
  },
];

const faqs = [
  {
    question: "How much are your puppies?",
    answer:
      "Our Australian Labradoodle puppies are $3,800. A deposit may be required to reserve your place once you are approved and matched with a litter.",
  },
  {
    question: "Are Australian Labradoodles hypoallergenic?",
    answer:
      "Australian Labradoodles are known for low-allergy, low to non-shedding fleece coats. No dog is guaranteed completely allergy-proof, but many families with sensitivities do very well with this breed.",
  },
  {
    question: "When can puppies go home?",
    answer:
      "Puppies typically go home around 8 weeks old after receiving age-appropriate care, handling, socialization, and health checks.",
  },
  {
    question: "Can we visit the puppies?",
    answer:
      "Approved families are invited to visit mommy and puppies around 6 weeks old. Visits are scheduled by appointment.",
  },
  {
    question: "Do you health test your breeding dogs?",
    answer:
      "Yes. Our breeding dogs are health tested and cleared for important breed-related conditions before entering the breeding program.",
  },
  {
    question: "Do you ship puppies?",
    answer:
      "We prefer families to pick up their puppy in person whenever possible so the transition feels safe, personal, and supported.",
  },
  {
    question: "What comes with the puppy?",
    answer:
      "Each puppy goes home with starter essentials such as food, blanket, toys, bowls, leash and collar, microchip information, and helpful guidance.",
  },
  {
    question: "How do I get started?",
    answer:
      "Start by completing the Puppy Family Profile. We review your answers and contact you about fit, timing, and next steps.",
  },
];

const quickLinks = [
  {
    icon: PawPrint,
    title: "Available Puppies",
    body: "See current and upcoming litters.",
    href: "/available-puppies",
  },
  {
    icon: HouseLine,
    title: "Guardian Program",
    body: "Learn about becoming a guardian family.",
    href: "/guardian-program",
  },
  {
    icon: Sparkle,
    title: "The Breed",
    body: "Learn about Australian Labradoodle traits.",
    href: "/breed",
  },
];

export default function ContactFaqPage() {
  return (
    <main className="min-h-screen bg-[#f6ead8] text-[#251811]">
      <Navbar />

      <section className="relative overflow-hidden px-5 pb-14 pt-24 md:px-10 lg:px-14">
        <div className="paper-noise absolute inset-0 opacity-[0.12]" />

        <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.32em] text-[#9a6a3a]">
              Contact & FAQ
            </p>

            <h1 className="mt-5 max-w-3xl text-5xl font-semibold leading-[0.9] tracking-[-0.07em] md:text-7xl">
              Have questions?
              <br />
              We’re here
              <br />
              <span className="font-editorial italic text-[#b8742b]">
                to help.
              </span>{" "}
              ♡
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-[#6b4d37]">
              Whether you’re ready to apply, curious about the breed, or looking
              for the right upcoming litter, reach out and we’ll help guide your
              next step.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contact-form"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-[#b8742b] px-7 py-4 text-sm font-bold uppercase tracking-[0.14em] text-white transition hover:bg-[#8f571f]"
              >
                Send a Message
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
              src="/images/heros/contact.jpg"
              alt="Australian Labradoodle puppy at home"
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#251811]/65 via-transparent to-transparent" />

            <div className="absolute bottom-6 left-6 right-6 rounded-[1.5rem] border border-white/25 bg-[#fff8ed]/86 p-5 shadow-xl backdrop-blur-md">
              <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#9a6a3a]">
                Long Island · Since 2006
              </p>
              <p className="mt-3 text-sm leading-6 text-[#6b4d37]">
                Home-raised Australian Labradoodles with thoughtful family
                matching and lifelong support.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 pb-12 md:px-10 lg:px-14">
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-2 lg:grid-cols-4">
          {contactCards.map((card) => {
            const Icon = card.icon;

            return (
              <a
                key={card.title}
                href={card.href}
                className="rounded-[1.75rem] border border-[#d2b991] bg-[#fff8ed]/78 p-6 shadow-xl shadow-[#8a5d37]/8 transition hover:-translate-y-1 hover:bg-white"
              >
                <div className="grid h-13 w-13 place-items-center rounded-full bg-[var(--heritage-green)] text-white">
                  <Icon size={26} weight="duotone" />
                </div>

                <p className="mt-5 text-xs font-bold uppercase tracking-[0.2em] text-[#9a6a3a]">
                  {card.title}
                </p>

                <h2 className="mt-2 text-xl font-semibold tracking-[-0.04em]">
                  {card.value}
                </h2>

                <p className="mt-3 text-sm leading-6 text-[#6b4d37]">
                  {card.body}
                </p>
              </a>
            );
          })}
        </div>
      </section>

      <section id="contact-form" className="px-5 pb-12 md:px-10 lg:px-14">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.72fr_1.28fr]">
          <aside className="rounded-[2rem] border border-[#d2b991] bg-[#fff8ed]/78 p-7 shadow-xl shadow-[#8a5d37]/8">
            <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#9a6a3a]">
              Quick links
            </p>

            <h2 className="mt-4 text-4xl font-semibold leading-[0.95] tracking-[-0.055em]">
              Find what you need faster.
            </h2>

            <div className="mt-7 grid gap-4">
              {quickLinks.map((link) => {
                const Icon = link.icon;

                return (
                  <a
                    key={link.title}
                    href={link.href}
                    className="group flex gap-4 rounded-2xl border border-[#d2b991] bg-white p-4 transition hover:bg-[#fffaf3]"
                  >
                    <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#f6ead8] text-[#b8742b]">
                      <Icon size={23} weight="duotone" />
                    </div>

                    <div>
                      <h3 className="text-sm font-bold">{link.title}</h3>
                      <p className="mt-1 text-sm leading-6 text-[#6b4d37]">
                        {link.body}
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>

            <div className="mt-6 rounded-[1.5rem] border border-[#d2b991] bg-[#f6ead8] p-5">
              <p className="text-sm font-bold text-[#251811]">
                Prefer to call?
              </p>
              <a
                href="tel:6318341111"
                className="mt-2 block text-2xl font-semibold tracking-[-0.04em] text-[#b8742b]"
              >
                631-834-1111
              </a>
              <p className="mt-2 text-sm leading-6 text-[#6b4d37]">
                We’re happy to answer questions about timing, pricing,
                availability, and the application process.
              </p>
            </div>
          </aside>

          <form className="rounded-[2rem] border border-[#d2b991] bg-[#fff8ed]/82 p-7 shadow-xl shadow-[#8a5d37]/8">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#9a6a3a]">
                Send us a message
              </p>

              <h2 className="mt-4 text-4xl font-semibold leading-[0.95] tracking-[-0.055em] md:text-5xl">
                Tell us how we can help.
              </h2>

              <p className="mt-4 max-w-2xl text-base leading-7 text-[#6b4d37]">
                We’ll review your message and get back to you as soon as
                possible.
              </p>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              <Input label="First Name" />
              <Input label="Last Name" />
              <Input label="Email" type="email" />
              <Input label="Phone" type="tel" />
            </div>

            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <Select label="Reason for Contact">
                <option>Select one</option>
                <option>Available puppies</option>
                <option>Upcoming litters</option>
                <option>Puppy Family Profile</option>
                <option>Guardian Program</option>
                <option>General question</option>
              </Select>

              <Select label="Preferred Contact Method">
                <option>Select one</option>
                <option>Phone</option>
                <option>Email</option>
                <option>Either is fine</option>
              </Select>
            </div>

            <div className="mt-4">
              <Textarea label="Message" />
            </div>

            <button
              type="submit"
              className="mt-6 inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#b8742b] px-8 py-4 text-sm font-bold uppercase tracking-[0.14em] text-white transition hover:bg-[#8f571f] md:w-auto"
            >
              Submit Message
              <ArrowUpRight size={18} weight="bold" />
            </button>
          </form>
        </div>
      </section>

      <section className="px-5 pb-16 md:px-10 lg:px-14">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-[#d2b991] bg-[#fff8ed]/78 p-6 shadow-xl shadow-[#8a5d37]/8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#9a6a3a]">
              Frequently Asked Questions
            </p>

            <h2 className="mt-4 text-4xl font-semibold leading-[0.95] tracking-[-0.055em] md:text-5xl">
              Common puppy questions{" "}
              <span className="font-editorial italic text-[#b8742b]">♡</span>
            </h2>

            <p className="mt-4 text-base leading-7 text-[#6b4d37]">
              A few answers families usually want before applying.
            </p>
          </div>

          <div className="mx-auto mt-8 grid max-w-5xl gap-3">
            {faqs.map((faq, index) => (
              <details
                key={faq.question}
                className="group rounded-[1.25rem] border border-[#d2b991] bg-white p-5"
                open={index === 0}
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5">
                  <span className="flex items-center gap-3 text-base font-bold">
                    <Question
                      size={22}
                      weight="duotone"
                      className="shrink-0 text-[#b8742b]"
                    />
                    {faq.question}
                  </span>

                  <CaretDown
                    size={20}
                    weight="bold"
                    className="shrink-0 transition group-open:rotate-180"
                  />
                </summary>

                <p className="mt-4 pl-9 text-sm leading-7 text-[#6b4d37]">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <BottomCTA />
      <PageFooter />
    </main>
  );
}

function Input({ label, type = "text" }) {
  return (
    <label className="grid gap-2">
      <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#9a6a3a]">
        {label}
      </span>
      <input
        type={type}
        className="rounded-2xl border border-[#d2b991] bg-white px-4 py-3 outline-none focus:border-[#b8742b]"
      />
    </label>
  );
}

function Select({ label, children }) {
  return (
    <label className="grid gap-2">
      <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#9a6a3a]">
        {label}
      </span>
      <select className="rounded-2xl border border-[#d2b991] bg-white px-4 py-3 outline-none focus:border-[#b8742b]">
        {children}
      </select>
    </label>
  );
}

function Textarea({ label }) {
  return (
    <label className="grid gap-2">
      <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#9a6a3a]">
        {label}
      </span>
      <textarea
        rows="7"
        className="rounded-2xl border border-[#d2b991] bg-white px-4 py-3 outline-none focus:border-[#b8742b]"
      />
    </label>
  );
}

function BottomCTA() {
  return (
    <section className="px-5 pb-8 md:px-10 lg:px-14">
      <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[2rem] border border-[#d2b991] bg-[#fff8ed] shadow-xl shadow-[#8a5d37]/8 md:grid-cols-[0.72fr_1.28fr]">
        <div className="relative min-h-56">
          <img
            src="/images/puppies/cta-puppy.jpg"
            alt="Labradoodle puppy"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>

        <div className="flex flex-col justify-center p-8 md:p-10">
          <h2 className="max-w-2xl text-4xl font-semibold leading-[0.95] tracking-[-0.055em] md:text-5xl">
            Ready to take the next step?{" "}
            <span className="font-editorial italic text-[#b8742b]">♡</span>
          </h2>

          <p className="mt-4 max-w-xl text-[#6b4d37]">
            Start your Puppy Family Profile and we’ll help guide you from there.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a
              href="/puppy-family-profile"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-[#b8742b] px-7 py-4 text-center text-sm font-bold uppercase tracking-[0.14em] text-white"
            >
              Start Family Profile
              <ArrowUpRight size={18} weight="bold" />
            </a>

            <a
              href="/available-puppies"
              className="rounded-full border border-[#c9ad82] px-7 py-4 text-center text-sm font-bold uppercase tracking-[0.14em]"
            >
              View Puppies
            </a>
          </div>
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
          <a href="/breed">The Breed</a>
          <a href="/guardian-program">Guardian Program</a>
          <a href="/about">About</a>
          <a href="/contact" className="text-[#b8742b]">
            Contact
          </a>
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
          <a href="tel:6318341111">631-834-1111</a>
        </div>
      </div>
    </footer>
  );
}
