import {
  ArrowRight,
  ChatCircleText,
  Heart,
  HouseLine,
  PawPrint,
  Sparkle,
} from "@phosphor-icons/react";

const steps = [
  {
    icon: ChatCircleText,
    title: "Tell us your family rhythm",
    body: "Children, home life, schedule, allergies, size preference, and timing.",
  },
  {
    icon: PawPrint,
    title: "We guide the right pairing",
    body: "We look at temperament, energy, coat, and what the puppy is being raised for.",
  },
  {
    icon: HouseLine,
    title: "Prepare for homecoming",
    body: "We help you understand the transition, the package, and the first week home.",
  },
];

export default function FamilyMatch() {
  return (
    <section className="relative overflow-hidden bg-[#f7efe4] px-5 py-20 text-[#241915] md:px-8 lg:px-12">
      <div className="mx-auto grid max-w-[1280px] overflow-hidden rounded-[32px] border border-[#e6dac8] bg-[#fffaf3] shadow-sm lg:grid-cols-[0.82fr_1.18fr]">
        <div className="relative min-h-[520px] overflow-hidden bg-[#1f2528] p-8 text-white md:p-10">
          <img
            src="/images/family-match.jpg"
            alt="Family with Australian Labradoodle puppy"
            className="absolute inset-0 h-full w-full object-cover opacity-62"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#1f2528]/95 via-[#1f2528]/48 to-transparent" />

          <div className="relative z-10 flex h-full flex-col justify-between">
            <div>
              <p className="text-[11px] font-black uppercase tracking-[0.32em] text-[#f4d7ae]">
                Family Matching
              </p>

              <h2 className="mt-5 max-w-[540px] text-[4rem] font-semibold leading-[0.9] tracking-[-0.07em] md:text-[5rem]">
                Not just
                <br />
                a puppy.
                <br />
                <span className="font-editorial italic text-[#f4d7ae]">
                  the right puppy.
                </span>
              </h2>
            </div>

            <p className="max-w-[430px] text-[17px] leading-8 text-white/82">
              The best match is about more than color. We care about
              temperament, size, timing, home rhythm, and the feeling families
              want to bring into their lives.
            </p>
          </div>
        </div>

        <div className="p-6 md:p-8 lg:p-10">
          <div className="grid gap-4">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <article
                  key={step.title}
                  className="grid gap-5 rounded-[24px] border border-[#e6dac8] bg-white p-6 md:grid-cols-[auto_1fr]"
                >
                  <div className="grid h-14 w-14 place-items-center rounded-full bg-[#f7efe4] text-[#b8752b]">
                    <Icon size={30} weight="duotone" />
                  </div>

                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.26em] text-[#9a6a3a]">
                      Step 0{index + 1}
                    </p>
                    <h3 className="mt-2 text-[22px] font-black tracking-[-0.03em] text-[#2f2925]">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-[14px] leading-7 text-[#64696b]">
                      {step.body}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-6 rounded-[24px] border border-[#e6dac8] bg-[#f7efe4] p-6">
            <div className="flex items-start gap-4">
              <Heart
                size={34}
                weight="duotone"
                className="shrink-0 text-[#6f805f]"
              />
              <div>
                <p className="text-[15px] font-black text-[#2f2925]">
                  Applying does not obligate you to purchase.
                </p>
                <p className="mt-1 text-[14px] leading-6 text-[#64696b]">
                  It simply helps us understand your family and guide you with
                  care.
                </p>
              </div>
            </div>

            <a
              href="/puppy-family-profile"
              className="mt-6 inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-b from-[#d9903c] to-[#a95f1f] px-7 py-4 text-[12px] font-black uppercase tracking-[0.14em] text-white"
            >
              Start Puppy Family Profile
              <ArrowRight size={16} weight="bold" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
