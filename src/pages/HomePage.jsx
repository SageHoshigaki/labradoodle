import {
  ArrowRight,
  Award,
  CalendarDays,
  Check,
  ChevronDown,
  Heart,
  Home,
  Leaf,
  PackageCheck,
  PawPrint,
  Phone,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Users,
} from "lucide-react";
import Navbar from "../components/Navbar";

const credentials = [
  { icon: Award, title: "Breeding Since 2006", copy: "Nearly two decades of experience and passion." },
  { icon: Award, title: "ALAA Platinum-Rated Member", copy: "Proud member of the Australian Labradoodle Association." },
  { icon: ShieldCheck, title: "Health-Tested Breeding Dogs", copy: "OFA health clearances and genetic screening." },
  { icon: Home, title: "Loved by Families", copy: "Hundreds of happy families across Long Island." },
  { icon: PawPrint, title: "Premium Labradoodles", copy: "Mini, medium, and standard companions." },
];

const services = [
  { image: "/images/available-puppies.jpg", title: "Available Puppies", copy: "Explore our current puppies and upcoming litters.", link: "/available-puppies" },
  { image: "/images/home-raised.jpg", title: "Puppy Family Profile", copy: "Tell us about your family and lifestyle so we can help make the perfect match.", link: "/puppy-family-profile" },
  { image: "/images/guardian-program.jpg", title: "Guardian Program", copy: "Partner with us and give an exceptional dog a loving family home.", link: "/guardian-program" },
  { image: "/images/sleeping-dog.jpeg", title: "Recent Litters", copy: "See photos and details of our recent litters and what is coming next.", link: "/available-puppies" },
];

const reasons = [
  [Home, "Home-Raised Puppies", "Raised in our home, never in a kennel."],
  [PawPrint, "Multi-Generational Care", "Years of love and thoughtful breeding."],
  [ShieldCheck, "OFA Health Certificates", "Health-tested and independently screened."],
  [Users, "Personalized Matching", "Every family receives thoughtful guidance."],
  [Heart, "High Standards", "Raised with love in a real family environment."],
];

const packageItems = ["Food starter pack", "Wee-wee pads", "Kennel crate", "Cozy blanket", "Toys", "Stainless bowls", "Leash and collar", "Microchip", "Health exam", "Milestone guide"];

const litters = [
  ["Winnie & Zeus", "/images/zeus.png", "Medium", "May 2026"],
  ["Zelda & Elvis", "/images/zelda.png", "Mini", "June 2026"],
  ["Harbor & Theo", "/images/harbor.png", "Mini", "June 2026"],
];

const testimonials = [
  ["Our best friend was born at Labradoodles of Long Island!", "Darlene, John, Adam & Zach"],
  ["She is the BEST dog in the world!", "Jennifer"],
  ["We are in love with our new premiere puppy!", "James"],
];

const faqs = [
  "How much do the puppies cost?",
  "What do the puppies come with?",
  "Are the puppies socialized and microchipped?",
  "Do you health test your breeding dogs?",
  "Do you offer a health guarantee?",
];

const Button = ({ href, children, outline = false }) => (
  <a href={href} className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-6 text-[11px] font-bold uppercase tracking-[.12em] transition hover:-translate-y-0.5 ${outline ? "border border-[#b97834] bg-white/70 text-[#9b5b20]" : "bg-gradient-to-b from-[#da963f] to-[#ae651f] text-white shadow-lg shadow-[#b8752b]/20"}`}>
    {children}<ArrowRight size={14} />
  </a>
);

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#fbf7f0] text-[#20282b]">
      <Navbar />

      <section className="relative overflow-hidden border-b border-[#eadfce] bg-[#f7f1e8]">
        <div className="mx-auto grid min-h-[500px] max-w-[1500px] lg:grid-cols-[.46fr_.54fr]">
          <div className="relative z-10 flex flex-col justify-center px-6 py-14 md:px-12 lg:pl-20">
            <p className="mb-4 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[.24em] text-[#7f715f]">Premium Australian Labradoodles <span className="h-px w-10 bg-[#b8752b]" /></p>
            <h1 className="font-editorial text-[54px] font-semibold leading-[.95] tracking-[-.045em] md:text-[72px]">
              Australian<br /><span className="text-[#b36c29]">Labradoodles</span><br />Raised with Love <span className="font-normal text-[#b36c29]">♡</span>
            </h1>
            <p className="mt-5 max-w-[500px] text-[15px] leading-7 text-[#536064]">Trusted, home-raised, well-kept, pedigree Australian Labradoodles for loving families across Long Island and Manhattan.</p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row"><Button href="/available-puppies">View available puppies</Button><Button href="/puppy-family-profile" outline>Start your puppy family profile</Button></div>
          </div>
          <div className="relative min-h-[420px] overflow-hidden bg-[radial-gradient(circle_at_70%_45%,#fff_0%,#f2e8db_58%,#e8ddce_100%)] lg:min-h-0">
            <div className="absolute bottom-8 right-8 h-28 w-48 rounded-[50%] bg-[#d8c7b4]/30 blur-2xl" />
            <img src="/images/large.png" alt="Australian Labradoodle" className="absolute bottom-0 right-[5%] h-[94%] w-[84%] object-contain object-bottom" />
            <div className="absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-[#f7f1e8] to-transparent" />
            <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 gap-2">{[0,1,2,3].map(i => <span key={i} className={`h-2.5 w-2.5 rounded-full ${i === 0 ? "bg-[#b8752b]" : "bg-white"}`} />)}</div>
          </div>
        </div>
      </section>

      <section className="mx-auto -mt-px max-w-[1240px] px-5 py-4">
        <div className="grid overflow-hidden rounded-2xl border border-[#e8ded0] bg-white shadow-sm sm:grid-cols-2 lg:grid-cols-4">
          {[[Home,"Home-Raised, Never Kennel-Kept"],[CalendarDays,"Since 2006"],[Leaf,"Hypoallergenic / Low-Shedding"],[Heart,"Health-Tested Parents"]].map(([Icon,label]) => <div key={label} className="flex items-center justify-center gap-3 border-[#eee5d8] px-5 py-4 text-center text-[11px] font-semibold lg:border-r last:border-0"><Icon size={22} className="text-[#718060]" />{label}</div>)}
        </div>
      </section>

      <section className="mx-auto max-w-[1320px] px-5 py-3">
        <div className="rounded-2xl bg-[#f7f1e8] p-5">
          <h2 className="font-editorial text-center text-2xl font-semibold">Trusted. Experienced. Dedicated to Excellence.</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {credentials.map(({icon: Icon,title,copy}) => <article key={title} className="rounded-xl border border-[#ece2d5] bg-white p-5 text-center shadow-sm"><Icon className="mx-auto text-[#718060]" size={34} /><h3 className="font-editorial mt-3 text-[17px] font-semibold leading-tight">{title}</h3><p className="mt-2 text-[10px] leading-5 text-[#697074]">{copy}</p></article>)}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1320px] px-5 py-4">
        <h2 className="font-editorial text-center text-3xl font-semibold">Our Services & Offerings</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(service => <article key={service.title} className="overflow-hidden rounded-2xl border border-[#e7dccd] bg-white shadow-sm"><img src={service.image} alt="" className="h-44 w-full object-cover" /><div className="p-5"><h3 className="font-editorial text-xl font-semibold text-[#a45f24]">{service.title}</h3><p className="mt-2 min-h-12 text-[12px] leading-5 text-[#687074]">{service.copy}</p><a href={service.link} className="mt-4 inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[.1em] text-[#b46c29]">Learn more <ArrowRight size={13} /></a></div></article>)}
        </div>
      </section>

      <section id="puppy-package" className="mx-auto max-w-[1320px] px-5 py-3">
        <div className="grid overflow-hidden rounded-2xl border border-[#e8ddcf] bg-white lg:grid-cols-[.42fr_.58fr]">
          <div className="p-7 lg:p-10"><h2 className="font-editorial text-3xl font-semibold leading-tight">What Comes Home<br />With Your Puppy <span className="text-[#b8752b]">♡</span></h2><p className="mt-4 text-[12px] leading-6 text-[#677074]">We send every puppy home with a premium starter package to help them transition, including comfort, care, food, bedding, health information, and familiar resources.</p></div>
          <div className="relative min-h-[290px] bg-[#f4eee5]"><img src="/images/hero-puppy.jpg" alt="Puppy starter package" className="absolute inset-0 h-full w-full object-cover object-center opacity-85" /><div className="absolute inset-0 bg-gradient-to-r from-white/85 via-white/25 to-transparent" /><div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">{packageItems.map(item => <span key={item} className="rounded-full border border-white/70 bg-white/90 px-3 py-1.5 text-[9px] font-semibold shadow-sm">{item}</span>)}</div></div>
        </div>
      </section>

      <section className="mx-auto max-w-[1320px] px-5 py-4">
        <div className="rounded-2xl bg-[#faf6ef] p-5">
          <div className="grid gap-4 lg:grid-cols-[1.55fr_1fr]">
            <div><h2 className="font-editorial text-center text-2xl font-semibold">Why Families Choose Labradoodles of Long Island</h2><div className="mt-4 grid gap-2 sm:grid-cols-5">{reasons.map(([Icon,title,copy]) => <div key={title} className="rounded-xl bg-white p-4 text-center"><Icon className="mx-auto text-[#708061]" size={27} /><h3 className="mt-2 text-[11px] font-bold">{title}</h3><p className="mt-1 text-[9px] leading-4 text-[#747a7d]">{copy}</p></div>)}</div></div>
            <div id="testimonials"><h2 className="font-editorial text-center text-lg font-semibold">What Our Families Are Saying</h2><div className="mt-4 grid gap-2 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">{testimonials.map(([quote,name]) => <blockquote key={name} className="rounded-xl bg-white p-4 text-center"><p className="text-[#c48635]">★★★★★</p><p className="mt-2 text-[10px] italic leading-4">“{quote}”</p><cite className="mt-2 block text-[8px] not-italic text-[#777]">{name}</cite></blockquote>)}</div></div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1320px] px-5 py-3">
        <div className="grid gap-4 lg:grid-cols-[1.55fr_.7fr_1.15fr]">
          <div className="rounded-2xl border border-[#e7dccd] bg-white p-5"><div className="flex items-end justify-between"><div><h2 className="font-editorial text-2xl font-semibold">Available Puppies & Current Litters</h2><p className="text-[10px] text-[#73797b]">View photos and details of available and upcoming litters.</p></div></div><div className="mt-4 grid grid-cols-3 gap-3">{litters.map(([name,image,size,due]) => <a href="/available-puppies" key={name} className="text-center"><img src={image} alt="" className="h-24 w-full rounded-xl object-cover" /><h3 className="font-editorial mt-2 text-sm font-semibold">{name}</h3><p className="text-[8px] uppercase text-[#a5682e]">{size} · {due}</p></a>)}</div></div>
          <div className="flex flex-col items-center justify-center rounded-2xl border border-[#e7dccd] bg-white p-6 text-center"><p className="font-editorial text-4xl font-semibold">$3,800</p><p className="mt-1 text-[10px]">All-inclusive puppy package</p><ul className="mt-4 space-y-2 text-left text-[10px]">{["Price, vaccines & dewormed", "Microchipped", "2-year health guarantee", "Lifetime breeder support"].map(x => <li key={x} className="flex gap-2"><Check size={13} className="text-[#718060]" />{x}</li>)}</ul><div className="mt-5"><Button href="/available-puppies">View puppies</Button></div></div>
          <div className="grid grid-cols-2 gap-2">{[["We are so in love with our smart and loving puppy!","Jessie"],["He cuddles & is happier with our master!","Sue & Kendall"]].map(([quote,name]) => <blockquote key={name} className="rounded-2xl border border-[#e7dccd] bg-white p-5 text-center"><p className="text-[#c48635]">★★★★★</p><p className="mt-4 text-[11px] italic leading-5">“{quote}”</p><cite className="mt-4 block text-[9px] not-italic">{name}</cite></blockquote>)}</div>
        </div>
      </section>

      <section className="mx-auto max-w-[1320px] px-5 py-4">
        <div className="grid overflow-hidden rounded-2xl border border-[#e8ddcf] bg-white lg:grid-cols-[.32fr_.42fr_.46fr]">
          <img src="/images/web-staff-eileen.jpg" alt="Eileen with an Australian Labradoodle" className="h-full min-h-[260px] w-full object-cover" />
          <div className="p-7"><h2 className="font-editorial text-2xl font-semibold">Meet Eileen <span className="text-[#b8752b]">♡</span></h2><p className="mt-4 text-[11px] leading-5 text-[#646d70]">I’m the breeder behind Australian Labradoodles of Long Island. My dogs and puppies are part of our family. They are raised in our home with our children, making each puppy part of our family.</p><p className="font-editorial mt-5 text-2xl italic text-[#697762]">Eileen ♡</p></div>
          <div id="faq" className="bg-[#faf6ef] p-7"><h2 className="font-editorial text-2xl font-semibold">Frequently Asked Questions</h2><div className="mt-4 divide-y divide-[#e7dccd]">{faqs.map(q => <details key={q} className="group py-3"><summary className="flex cursor-pointer list-none items-center justify-between text-[11px] font-semibold">{q}<ChevronDown size={14} className="transition group-open:rotate-180" /></summary><p className="pt-2 text-[10px] leading-5 text-[#697174]">Contact our family team for details specific to your puppy, timing, and matching process.</p></details>)}</div></div>
        </div>
      </section>

      <section className="relative mt-4 overflow-hidden bg-[#ece8df]">
        <div className="mx-auto flex max-w-[1320px] flex-col items-center justify-between gap-5 px-6 py-7 md:flex-row"><div><h2 className="font-editorial text-3xl font-semibold text-white drop-shadow">Ready to Welcome<br />Your New Best Friend? <span>♡</span></h2><p className="mt-1 text-[10px] text-white/90">We’d love to help you find your perfect puppy.</p></div><div className="flex flex-col gap-2 sm:flex-row"><Button href="/puppy-family-profile">Apply for a puppy</Button><a href="tel:6318341111" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-white px-6 text-[11px] font-bold"><Phone size={14} />Call: 631-834-1111</a></div><img src="/images/her.png" alt="" className="hidden h-36 w-36 object-contain lg:block" /></div>
      </section>

      <footer className="bg-[#526b54] text-white"><div className="mx-auto grid max-w-[1320px] gap-7 px-6 py-7 sm:grid-cols-2 lg:grid-cols-4"><div className="flex items-center gap-3"><img src="/images/web-logo-2.png" alt="" className="h-14 w-14 rounded-full bg-white object-contain" /><p className="text-[11px] font-black uppercase">Labradoodles<br />of Long Island</p></div><div className="text-[9px] leading-5">East Setauket, New York<br />Serving Manhattan & Long Island</div><div className="text-[9px] leading-5"><a href="tel:6318341111">631-834-1111</a><br /><a href="mailto:info@labradoodlesoflongisland.com">info@labradoodlesoflongisland.com</a></div><div className="flex items-end justify-between gap-4 text-[8px]"><a href="/privacy">Privacy Policy</a><span>© 2026 Labradoodles of Long Island</span></div></div></footer>
    </main>
  );
}
