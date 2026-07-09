import { useEffect, useRef } from "react";
import { Certificate, Sparkle } from "@phosphor-icons/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const proofMarks = [
  {
    label: "Vogue",
    file: "/images/press/vogue.png",
    note: "Lifestyle moment",
  },
  {
    label: "Animal Planet",
    file: "/images/press/animal-planet.png",
    note: "National feature",
  },
  {
    label: "Too Cute",
    file: "/images/press/too-cute.png",
    note: "Puppy spotlight",
  },
  {
    label: "The Tonight Show",
    file: "/images/press/tonight-show.png",
    note: "Screen memory",
  },
  {
    label: "Macy’s",
    file: "/images/press/macys.png",
    note: "Brand story",
  },
  {
    label: "Ralph Lauren",
    file: "/images/press/ralph-lauren.png",
    note: "Family-lifestyle feature",
  },
];

export default function FeaturedOn() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from("[data-pedigree-reveal]", {
        y: 30,
        opacity: 0,
        duration: 0.85,
        ease: "power3.out",
        stagger: 0.08,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 72%",
          once: true,
        },
      });

      gsap.from(".pedigree-photo", {
        y: 30,
        scale: 0.99,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".pedigree-photo",
          start: "top 78%",
          once: true,
        },
      });

      gsap.from(".recognition-item", {
        y: 18,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.06,
        scrollTrigger: {
          trigger: ".recognition-ledger",
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
      id="pedigree"
      className="relative overflow-hidden bg-[#f6ead8] px-5 py-20 text-[#2a1a10] md:px-10 md:py-24 lg:px-14"
    >
      <div className="paper-noise absolute inset-0 opacity-[0.18]" />
      <div className="absolute left-[-14rem] top-[-14rem] h-[36rem] w-[36rem] rounded-full bg-[#d9a76f]/35 blur-3xl" />
      <div className="absolute bottom-[-14rem] right-[-12rem] h-[34rem] w-[34rem] rounded-full bg-[var(--heritage-green)]/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div>
            <p
              data-pedigree-reveal
              className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.34em] text-[#9a6a3a]"
            >
              <Certificate size={18} weight="duotone" />
              Chapter 02 — The Pedigree
            </p>

            <h2
              data-pedigree-reveal
              className="mt-6 max-w-5xl text-5xl font-semibold leading-[0.88] tracking-[-0.08em] text-[#2a1a10] md:text-7xl lg:text-[7.4rem]"
            >
              Loved at
              <br />
              home.
              <br />
              <span className="font-editorial italic text-[var(--heritage-green)]">
                Remembered
              </span>{" "}
              everywhere.
            </h2>
          </div>

          <div className="max-w-2xl lg:pb-4">
            <p
              data-pedigree-reveal
              className="text-lg leading-[1.72] text-[#6b4d37] md:text-xl"
            >
              Every puppy starts in the same place — close to home, held with
              care, learning the sounds, rhythms, and softness of family life.
              The features, campaigns, and screen moments are simply echoes of
              that beginning.
            </p>
          </div>
        </div>

        <div className="relative mt-14">
          <div className="pedigree-photo relative min-h-[36rem] overflow-hidden rounded-[2.5rem] border border-[#d2b991] bg-[#e8d1ad] shadow-2xl shadow-[#8a5d37]/15 md:min-h-[42rem]">
            <img
              src="/images/pedigree-dog.jpg"
              alt="Australian Labradoodle portrait"
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#2a1a10]/84 via-[#2a1a10]/22 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#2a1a10]/18 via-transparent to-[#2a1a10]/10" />

            <div className="absolute inset-x-0 bottom-0 z-10 p-6 md:p-9 lg:p-10">
              <div className="max-w-4xl">
                <p className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.3em] text-[#f0d4a8]">
                  <Sparkle size={14} weight="fill" />
                  Long Island · Australian Labradoodles
                </p>

                <h3 className="mt-4 text-4xl font-semibold leading-[0.92] tracking-[-0.06em] text-[#fff8ed] md:text-6xl lg:text-7xl">
                  The kind of love that follows them home.
                </h3>

                <p className="mt-6 max-w-2xl text-base leading-7 text-[#fff8ed]/78 md:text-lg">
                  Long after the first photo, the first visit, and the ride
                  home, families remember the feeling: a puppy raised with
                  patience, handled with love, and ready to belong.
                </p>
              </div>
            </div>
          </div>

          <div className="recognition-ledger mt-6 overflow-hidden rounded-[2rem] border border-[#d2b991] bg-[#fffaf3]/78 shadow-xl shadow-[#8a5d37]/8 backdrop-blur-sm">
            <div className="grid gap-0 divide-y divide-[#d2b991] md:grid-cols-[0.55fr_1.45fr] md:divide-x md:divide-y-0">
              <div className="flex items-center p-6 md:p-7">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.32em] text-[#9a6a3a]">
                    Recognition
                  </p>
                  <h3 className="mt-3 max-w-xs text-3xl font-semibold leading-[0.95] tracking-[-0.05em] text-[#2a1a10]">
                    Seen in places families remember.
                  </h3>
                </div>
              </div>

              <div className="grid grid-cols-2 divide-x divide-y divide-[#d2b991] md:grid-cols-3 lg:grid-cols-6 lg:divide-y-0">
                {proofMarks.map((mark) => (
                  <RecognitionItem key={mark.label} mark={mark} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function RecognitionItem({ mark }) {
  return (
    <article className="recognition-item group flex min-h-32 flex-col items-center justify-center p-5 text-center transition duration-300 hover:bg-[#fff7ec]">
      <div className="flex h-10 items-center justify-center">
        <img
          src={mark.file}
          alt={`${mark.label} logo`}
          className="max-h-8 max-w-[7rem] object-contain opacity-65 grayscale transition duration-300 group-hover:opacity-100 group-hover:grayscale-0"
        />
      </div>

      <p className="mt-4 text-[8px] font-bold uppercase tracking-[0.16em] text-[#9a6a3a]">
        {mark.note}
      </p>
    </article>
  );
}
