import { useEffect } from "react";
import gsap from "gsap";

export default function IntroReveal() {
  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { ease: "power4.inOut" },
    });

    tl.set(".intro-reveal", {
      pointerEvents: "auto",
    })
      .from(".intro-mark", {
        y: 18,
        opacity: 0,
        scale: 0.94,
        duration: 0.85,
        ease: "power3.out",
      })
      .to(".intro-mark", {
        y: -10,
        opacity: 0,
        scale: 1.02,
        duration: 0.55,
        delay: 0.55,
        ease: "power3.in",
      })
      .to(
        ".intro-panel-left",
        {
          xPercent: -101,
          duration: 1.25,
        },
        "-=0.1",
      )
      .to(
        ".intro-panel-right",
        {
          xPercent: 101,
          duration: 1.25,
        },
        "<",
      )
      .to(
        ".intro-line",
        {
          scaleY: 0,
          duration: 1,
        },
        "<",
      )
      .set(".intro-reveal", {
        pointerEvents: "none",
        display: "none",
      });

    return () => tl.kill();
  }, []);

  return (
    <div className="intro-reveal fixed inset-0 z-[999] overflow-hidden bg-[#251811]">
      <div className="intro-panel-left absolute left-0 top-0 h-full w-1/2 bg-[#f4eadc]" />
      <div className="intro-panel-right absolute right-0 top-0 h-full w-1/2 bg-[#f4eadc]" />

      <div className="intro-line absolute left-1/2 top-0 h-full w-px origin-center bg-[#251811]/15" />

      <div className="intro-mark absolute left-1/2 top-1/2 z-10 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center text-center">
        <img
          src="/images/web-logo-2.png"
          alt="Labradoodles of Long Island"
          className="w-[300px] object-contain drop-shadow-[0_22px_35px_rgba(80,54,34,0.18)] md:w-[470px]"
        />

        <p className="mt-8 text-[10px] font-bold uppercase tracking-[0.42em] text-[#8a5d37]">
          Quality Breeding Since 2006
        </p>
      </div>
    </div>
  );
}
