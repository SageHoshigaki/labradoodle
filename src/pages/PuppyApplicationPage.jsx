import {
  ArrowUpRight,
  Baby,
  CalendarBlank,
  CheckCircle,
  EnvelopeSimple,
  Heart,
  HouseLine,
  PawPrint,
  Phone,
  Sparkle,
  UsersThree,
} from "@phosphor-icons/react";
import Navbar from "../components/Navbar";

const processSteps = [
  {
    number: "01",
    title: "Tell us about your family",
    body: "Share your home, lifestyle, experience with dogs, and what you’re hoping for in a puppy.",
  },
  {
    number: "02",
    title: "We review your profile",
    body: "We look for the best fit between each puppy’s temperament and each family’s needs.",
  },
  {
    number: "03",
    title: "We connect with you",
    body: "If we think there is a good fit, we’ll reach out to discuss litters, timing, and next steps.",
  },
  {
    number: "04",
    title: "Prepare for homecoming",
    body: "Once matched, we help you prepare for your puppy’s transition into your home.",
  },
];

const preferences = [
  "Mini",
  "Medium",
  "Standard",
  "Male",
  "Female",
  "No preference",
  "Therapy / emotional support potential",
  "Family companion",
  "Low-shedding / allergy-friendly",
  "Good with children",
];

export default function PuppyApplicationPage() {
  return (
    <main className="min-h-screen bg-[#f6ead8] text-[#251811]">
      <Navbar />

      <section className="relative overflow-hidden px-5 pb-14 pt-24 md:px-10 lg:px-14">
        <div className="paper-noise absolute inset-0 opacity-[0.12]" />

        <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.32em] text-[#9a6a3a]">
              Puppy Family Profile
            </p>

            <h1 className="mt-5 max-w-3xl text-5xl font-semibold leading-[0.9] tracking-[-0.07em] md:text-7xl">
              Let’s find
              <br />
              the right puppy
              <br />
              <span className="font-editorial italic text-[#b8742b]">
                for your family.
              </span>{" "}
              ♡
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-[#6b4d37]">
              Our application helps us understand your home, lifestyle, timing,
              and puppy preferences so we can guide you toward the best possible
              match.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#application-form"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-[#b8742b] px-7 py-4 text-sm font-bold uppercase tracking-[0.14em] text-white transition hover:bg-[#8f571f]"
              >
                Start Application
                <ArrowUpRight size={18} weight="bold" />
              </a>

              <a
                href="/available-puppies"
                className="inline-flex items-center justify-center rounded-full border border-[#c9ad82] bg-white/50 px-7 py-4 text-sm font-bold uppercase tracking-[0.14em] text-[#251811] transition hover:bg-white"
              >
                View Puppies
              </a>
            </div>
          </div>

          <div className="relative min-h-[28rem] overflow-hidden rounded-[2.5rem] border border-[#d2b991] bg-[#e8d1ad] shadow-2xl shadow-[#8a5d37]/15 md:min-h-[34rem]">
            <img
              src="/images/heros/puppy-application.jpg"
              alt="Family holding Australian Labradoodle puppy"
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#251811]/65 via-transparent to-transparent" />

            <div className="absolute bottom-6 left-6 right-6 rounded-[1.5rem] border border-white/25 bg-[#fff8ed]/86 p-5 shadow-xl backdrop-blur-md">
              <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#9a6a3a]">
                A thoughtful match
              </p>
              <p className="mt-3 text-sm leading-6 text-[#6b4d37]">
                Applying does not obligate you to purchase. It simply helps us
                learn how to best support your puppy journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 pb-12 md:px-10 lg:px-14">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-[#d2b991] bg-[#fff8ed]/78 p-6 shadow-xl shadow-[#8a5d37]/8">
          <div className="grid gap-8 lg:grid-cols-[0.65fr_1.35fr]">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#9a6a3a]">
                The process
              </p>

              <h2 className="mt-4 text-4xl font-semibold leading-[0.95] tracking-[-0.055em]">
                From profile to puppy match{" "}
                <span className="font-editorial italic text-[#b8742b]">♡</span>
              </h2>

              <p className="mt-5 text-base leading-7 text-[#6b4d37]">
                We keep the process warm, personal, and focused on the best fit
                for both the puppy and the family.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {processSteps.map((step) => (
                <article
                  key={step.number}
                  className="rounded-[1.5rem] border border-[#d2b991] bg-white p-5"
                >
                  <p className="text-xs font-bold uppercase tracking-[0.26em] text-[#b8742b]">
                    {step.number}
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em]">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-[#6b4d37]">
                    {step.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="application-form" className="px-5 pb-16 md:px-10 lg:px-14">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.72fr_1.28fr]">
          <aside className="rounded-[2rem] border border-[#d2b991] bg-[#fff8ed]/78 p-7 shadow-xl shadow-[#8a5d37]/8 lg:sticky lg:top-28 lg:self-start">
            <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#9a6a3a]">
              Before you begin
            </p>

            <h2 className="mt-4 text-4xl font-semibold leading-[0.95] tracking-[-0.055em]">
              A few things to know.
            </h2>

            <div className="mt-7 grid gap-4">
              <InfoItem
                icon={Heart}
                title="No obligation"
                body="Submitting a profile does not require you to purchase a puppy."
              />
              <InfoItem
                icon={CalendarBlank}
                title="Timing matters"
                body="Tell us when you’re hoping to bring your puppy home."
              />
              <InfoItem
                icon={HouseLine}
                title="Home fit"
                body="We consider your household, schedule, children, pets, and lifestyle."
              />
              <InfoItem
                icon={PawPrint}
                title="Temperament first"
                body="The right match is about more than color or size."
              />
            </div>
          </aside>

          <form className="rounded-[2rem] border border-[#d2b991] bg-[#fff8ed]/82 p-7 shadow-xl shadow-[#8a5d37]/8">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#9a6a3a]">
                Puppy Family Profile
              </p>
              <h2 className="mt-4 text-4xl font-semibold leading-[0.95] tracking-[-0.055em] md:text-5xl">
                Tell us about your home.
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-[#6b4d37]">
                We’ll review your answers and reach out with next steps.
              </p>
            </div>

            <FormSection title="Contact Information" icon={EnvelopeSimple}>
              <div className="grid gap-4 md:grid-cols-2">
                <Input label="First Name" />
                <Input label="Last Name" />
                <Input label="Email" type="email" />
                <Input label="Phone" type="tel" />
              </div>
              <Input label="Address" />
              <div className="grid gap-4 md:grid-cols-3">
                <Input label="City" />
                <Input label="State" />
                <Input label="Zip Code" />
              </div>
            </FormSection>

            <FormSection title="Your Household" icon={HouseLine}>
              <div className="grid gap-4 md:grid-cols-2">
                <Select label="Do you own or rent?">
                  <option>Select one</option>
                  <option>Own</option>
                  <option>Rent</option>
                </Select>

                <Select label="Type of home">
                  <option>Select one</option>
                  <option>House</option>
                  <option>Apartment</option>
                  <option>Condo</option>
                  <option>Townhouse</option>
                </Select>
              </div>

              <Textarea label="Who lives in your home? Include adults, children, ages, and other pets." />
              <Textarea label="Describe your daily schedule and how much time the puppy will be alone." />
            </FormSection>

            <FormSection title="Puppy Preferences" icon={Baby}>
              <div className="grid gap-3 sm:grid-cols-2">
                {preferences.map((item) => (
                  <label
                    key={item}
                    className="flex cursor-pointer items-center gap-3 rounded-2xl border border-[#d2b991] bg-white p-4"
                  >
                    <input
                      type="checkbox"
                      className="h-4 w-4 accent-[#b8742b]"
                    />
                    <span className="text-sm font-semibold text-[#6b4d37]">
                      {item}
                    </span>
                  </label>
                ))}
              </div>

              <Textarea label="Tell us about your ideal puppy temperament." />
              <Textarea label="Are there specific colors, sizes, or timing you prefer?" />
            </FormSection>

            <FormSection title="Experience & Commitment" icon={UsersThree}>
              <Select label="Have you owned a dog before?">
                <option>Select one</option>
                <option>Yes</option>
                <option>No</option>
              </Select>

              <Textarea label="Tell us about your dog experience, training plans, and how you will care for your puppy." />
              <Textarea label="Why do you feel an Australian Labradoodle is the right fit for your family?" />
            </FormSection>

            <div className="mt-8 rounded-[1.5rem] border border-[#d2b991] bg-[#f6ead8] p-5">
              <label className="flex gap-3">
                <input
                  type="checkbox"
                  className="mt-1 h-4 w-4 accent-[#b8742b]"
                />
                <span className="text-sm leading-6 text-[#6b4d37]">
                  I understand that submitting this profile does not guarantee
                  placement or obligate me to purchase. I confirm the
                  information provided is accurate.
                </span>
              </label>
            </div>

            <button
              type="submit"
              className="mt-6 inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#b8742b] px-8 py-4 text-sm font-bold uppercase tracking-[0.14em] text-white transition hover:bg-[#8f571f] md:w-auto"
            >
              Submit Puppy Family Profile
              <ArrowUpRight size={18} weight="bold" />
            </button>
          </form>
        </div>
      </section>

      <ContactStrip />
      <PageFooter />
    </main>
  );
}

function InfoItem({ icon: Icon, title, body }) {
  return (
    <article className="flex gap-4 rounded-2xl border border-[#d2b991] bg-white p-4">
      <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[var(--heritage-green)] text-white">
        <Icon size={23} weight="duotone" />
      </div>
      <div>
        <h3 className="text-sm font-bold">{title}</h3>
        <p className="mt-1 text-sm leading-6 text-[#6b4d37]">{body}</p>
      </div>
    </article>
  );
}

function FormSection({ title, icon: Icon, children }) {
  return (
    <section className="mt-8 border-t border-[#d2b991] pt-7">
      <div className="mb-5 flex items-center gap-3">
        <div className="grid h-10 w-10 place-items-center rounded-full bg-[#f6ead8] text-[#b8742b]">
          <Icon size={22} weight="duotone" />
        </div>
        <h3 className="text-2xl font-semibold tracking-[-0.04em]">{title}</h3>
      </div>

      <div className="grid gap-4">{children}</div>
    </section>
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
        rows="5"
        className="rounded-2xl border border-[#d2b991] bg-white px-4 py-3 outline-none focus:border-[#b8742b]"
      />
    </label>
  );
}

function ContactStrip() {
  return (
    <section className="px-5 pb-8 md:px-10 lg:px-14">
      <div className="mx-auto grid max-w-7xl gap-4 rounded-[2rem] border border-[#d2b991] bg-[#fff8ed]/82 p-6 shadow-xl shadow-[#8a5d37]/8 md:grid-cols-3">
        <div className="flex gap-4">
          <Phone size={28} weight="duotone" className="text-[#b8742b]" />
          <div>
            <p className="text-sm font-bold">Call Us</p>
            <a href="tel:6318341111" className="text-sm text-[#6b4d37]">
              631-834-1111
            </a>
          </div>
        </div>

        <div className="flex gap-4">
          <EnvelopeSimple
            size={28}
            weight="duotone"
            className="text-[#b8742b]"
          />
          <div>
            <p className="text-sm font-bold">Email</p>
            <a
              href="mailto:info@labradoodlesoflongisland.com"
              className="text-sm text-[#6b4d37]"
            >
              info@labradoodlesoflongisland.com
            </a>
          </div>
        </div>

        <div className="flex gap-4">
          <Sparkle size={28} weight="duotone" className="text-[#b8742b]" />
          <div>
            <p className="text-sm font-bold">Next Step</p>
            <p className="text-sm text-[#6b4d37]">
              We’ll reach out after reviewing your profile.
            </p>
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
          <a href="/puppy-family-profile" className="text-[#b8742b]">
            Apply
          </a>
          <a href="/contact">Contact</a>
        </nav>

        <a
          href="/available-puppies"
          className="hidden rounded-full bg-[#b8742b] px-5 py-3 text-xs font-bold uppercase tracking-[0.12em] text-white lg:inline-flex"
        >
          View Puppies
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
          <a href="/contact">Contact</a>
          <a href="tel:6318341111">631-834-1111</a>
        </div>
      </div>
    </footer>
  );
}
