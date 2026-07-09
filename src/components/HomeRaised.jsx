import { useEffect, useRef } from "react";
import {
  Heart,
  HouseLine,
  PawPrint,
  Sparkle,
  ArrowUpRight,
} from "@phosphor-icons/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const homePoints = [
  {
    icon: HouseLine,
    title: "Raised inside the home",
    body: "Puppies grow up around the sounds, routines, and gentle handling of real family life.",
  },
  {
    icon: Heart,
    title: "Handled with patience",
    body: "Each puppy is watched, touched, loved, and guided before meeting their new family.",
  },
  {
    icon: PawPrint,
    title: "Prepared to belong",
    body: "The goal is a soft, trusting companion ready to step into a home with confidence.",
  },
];

export default function HomeRaised() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from("[data-home-reveal]", {
        y: 26,
        opacity: 0,
        duration: 0.75,
        ease: "power3.out",
        stagger: 0.07,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 74%",
          once: true,
        },
      });

      gsap.from(".home-photo", {
        y: 26,
        scale: 0.99,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".home-photo",
          start: "top 80%",
          once: true,
        },
      });

      gsap.from(".home-point", {
        y: 18,
        opacity: 0,
        duration: 0.65,
        ease: "power3.out",
        stagger: 0.07,
        scrollTrigger: {
          trigger: ".home-points",
          start: "top 84%",
          once: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="home-raised"
      className="relative overflow-hidden bg-[#fff8ed] px-5 py-16 text-[#251811] md:px-10 md:py-20 lg:px-14"
    >
      <div className="paper-noise absolute inset-0 opacity-[0.1]" />
      <div className="absolute right-[-12rem] top-[-10rem] h-[28rem] w-[28rem] rounded-full bg-[var(--heritage-green)]/12 blur-3xl" />
      <div className="absolute bottom-[-12rem] left-[-10rem] h-[28rem] w-[28rem] rounded-full bg-[#d9a76f]/18 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p
              data-home-reveal
              className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.32em] text-[#9a6a3a]"
            >
              <Sparkle size={15} weight="fill" />
              Chapter 03 — The Home
            </p>

            <h2
              data-home-reveal
              className="mt-5 max-w-3xl text-4xl font-semibold leading-[0.95] tracking-[-0.06em] md:text-5xl lg:text-6xl"
            >
              No kennels.
              <br />
              No puppy sheds.
              <br />
              <span className="font-editorial italic text-[var(--heritage-green)]">
                Just home.
              </span>
            </h2>
          </div>

          <p
            data-home-reveal
            className="max-w-2xl text-base leading-[1.7] text-[#6b4d37] md:text-lg"
          >
            Choosing a puppy is not a transaction. It is the beginning of a
            relationship. That is why the earliest days matter — the warmth, the
            handling, the environment, and the care behind every little life.
          </p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="home-photo relative min-h-[26rem] overflow-hidden rounded-[2rem] border border-[#d2b991] bg-[#ead7bb] shadow-2xl shadow-[#8a5d37]/12 md:min-h-[32rem]">
            <img
              src="/images/home-raised.jpg"
              alt="Australian Labradoodle puppy raised at home"
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#251811]/74 via-[#251811]/14 to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#f0d4a8]">
                The home-raised promise
              </p>

              <h3 className="mt-3 max-w-2xl text-3xl font-semibold leading-[1] tracking-[-0.045em] text-[#fff8ed] md:text-5xl">
                They are loved before they are chosen.
              </h3>

              <p className="mt-4 max-w-xl text-sm leading-7 text-[#fff8ed]/78 md:text-base">
                Before a family ever fills out an application, the puppy has
                already begun learning what care feels like.
              </p>
            </div>
          </div>

          <div className="home-points grid gap-4">
            {homePoints.map((point) => (
              <HomePoint key={point.title} point={point} />
            ))}

            <a
              href="#journey"
              className="group mt-1 inline-flex items-center justify-between rounded-[1.5rem] border border-[#d2b991] bg-[#f6ead8] p-5 text-[#251811] transition duration-300 hover:-translate-y-1 hover:bg-[#fffaf3] hover:shadow-xl hover:shadow-[#8a5d37]/10"
            >
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.26em] text-[#9a6a3a]">
                  Next
                </p>
                <p className="mt-2 text-xl font-semibold tracking-[-0.04em] md:text-2xl">
                  See the puppy journey
                </p>
              </div>

              <ArrowUpRight
                size={22}
                weight="bold"
                className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function HomePoint({ point }) {
  const Icon = point.icon;

  return (
    <article className="home-point rounded-[1.5rem] border border-[#d2b991] bg-[#f6ead8]/72 p-5 shadow-xl shadow-[#8a5d37]/6 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:bg-[#fffaf3]">
      <div className="flex gap-4">
        <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[var(--heritage-green)] text-white">
          <Icon size={22} weight="duotone" />
        </div>

        <div>
          <h3 className="text-xl font-semibold leading-none tracking-[-0.04em]">
            {point.title}
          </h3>

          <p className="mt-3 text-sm leading-6 text-[#6b4d37]">{point.body}</p>
        </div>
      </div>
    </article>
  );
}
