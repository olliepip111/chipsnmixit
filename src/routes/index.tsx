import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, type ReactElement } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Reveal } from "@/components/Reveal";
import dispensers from "@/assets/store-dispensers.png";
import storeFront from "@/assets/store-front.png";
import toppingsBar from "@/assets/store-toppings-bar.png";
import bowl1 from "@/assets/topping-bowl-1.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Chip 'n' Mix — World's First Self-Serve Fry Bar | Noosa Heads" },
      { name: "description", content: "Build your perfect fries at Chip 'n' Mix on Hastings St, Noosa Heads. 3 chip types, 30+ toppings, locally sourced." },
      { property: "og:title", content: "Chip 'n' Mix — Build Your Perfect Fries" },
      { property: "og:description", content: "The world's first self-serve fry bar. Hastings St, Noosa Heads." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-cream">
      <SiteHeader />
      <Hero />
      <Marquee />
      <HowItWorks />
      <About />
      <Reviews />
      <FindUs />
      <SiteFooter />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 md:grid-cols-2 md:py-24">
        <div className="relative">
          <Reveal>
            <span className="inline-block rounded-full bg-accent/40 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-ink">
              World's first self-serve fry bar
            </span>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="mt-5 font-display text-6xl leading-[0.95] md:text-8xl text-ink">
              Build your <span className="text-primary">perfect</span>
              <span className="block">bowl of <span className="text-secondary-foreground italic">fries.</span></span>
            </h1>
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-6 max-w-md text-lg text-muted-foreground">
              Pull the lever, pile the toppings, make a mess. 3 chip types, 30+ hot &amp; cold toppings — all on Hastings St, Noosa.
            </p>
          </Reveal>
          <Reveal delay={320}>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/menu" className="rounded-full bg-primary px-7 py-3.5 font-semibold text-primary-foreground shadow-chunky transition-transform hover:-translate-y-0.5">
                See the menu →
              </Link>
              <a href="#visit" className="rounded-full bg-card px-7 py-3.5 font-semibold text-ink shadow-soft ring-1 ring-ink/10 transition-transform hover:-translate-y-0.5">
                Find us in Noosa
              </a>
            </div>
          </Reveal>
          <Reveal delay={400}>
            <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <span>★ 3.6 · 209 Google reviews</span>
              <span>·</span>
              <span>📍 Hastings St, Noosa</span>
            </div>
          </Reveal>
        </div>
        <Reveal delay={150} className="relative">
          <div className="absolute -left-3 -top-3 z-10 h-28 w-28 rounded-full bg-secondary shadow-chunky animate-float grid place-items-center text-center font-display leading-none rotate-[-8deg] text-ink">
            <div>
              <div className="text-3xl">30+</div>
              <div className="text-xs mt-1 uppercase tracking-wider">toppings</div>
            </div>
          </div>
          <div className="absolute -right-3 bottom-6 z-10 rotate-3 rounded-2xl bg-accent px-4 py-2 font-display text-ink shadow-soft">
            fresh daily
          </div>
          <div className="overflow-hidden rounded-[2rem] bg-card shadow-chunky-lg">
            <img
              src={bowl1}
              alt="Loaded fries with cheese sauce, salsa and herbs"
              className="img-pop w-full aspect-square object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Marquee() {
  const items = [
    "Sweet potato", "Hand cut crispy", "Classic skinny", "Chicken salt",
    "Liquid cheese", "Guacamole", "Birria", "Pepperoni",
    "Bacon", "Parmesan", "Salsa fresca", "Pangrattato", "Togarashi",
  ];
  return (
    <div className="border-y border-ink/10 bg-secondary/70 py-3 text-ink overflow-hidden">
      <div className="flex w-max gap-12 whitespace-nowrap font-display text-xl uppercase tracking-wider animate-marquee">
        {[...items, ...items].map((it, i) => (
          <span key={i} className="opacity-90">★ {it}</span>
        ))}
      </div>
    </div>
  );
}

function HowItWorks() {
  const steps = [
    { n: "01", title: "Pick your chips", body: "3 fresh-fried styles, dispensed by you. Pull the lever — fill it up.", img: dispensers, alt: "Self-serve chip dispensers at Chip 'n' Mix Noosa" },
    { n: "02", title: "Load your toppings", body: "30+ hot & cold toppings, sourced locally. Sauces, cheeses, slaws, the works.", img: toppingsBar, alt: "Topping bar with sauces and bowls" },
  ];
  return (
    <section id="how" className="mx-auto max-w-6xl px-4 py-20">
      <div className="max-w-2xl">
        <Reveal>
          <span className="inline-block rounded-full bg-accent/40 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-ink">How it works</span>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="mt-4 font-display text-5xl md:text-6xl text-ink">Three steps to <span className="text-primary">flavour town</span>.</h2>
        </Reveal>
      </div>

      <div className="mt-12 grid gap-8 md:grid-cols-2">
        {steps.map((s, i) => (
          <Reveal key={s.n} delay={i * 120}>
            <div className="overflow-hidden rounded-3xl bg-card shadow-chunky">
              <img src={s.img} alt={s.alt} loading="lazy" className="img-pop w-full h-auto block" />
              <div className="p-6">
                <div className="font-display text-xs uppercase tracking-[0.2em] text-muted-foreground">Step {s.n}</div>
                <h3 className="mt-1 font-display text-3xl text-ink">{s.title}</h3>
                <p className="mt-2 text-base text-muted-foreground">{s.body}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={200}>
        <div className="mt-10 rounded-3xl bg-primary p-8 text-primary-foreground shadow-chunky">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div>
              <div className="font-display text-xs uppercase tracking-[0.2em] opacity-80">Step 03</div>
              <h3 className="mt-1 font-display text-3xl">Mix &amp; enjoy.</h3>
              <p className="mt-2 max-w-md opacity-90">Dine in upstairs, or take your masterpiece to the beach.</p>
            </div>
            <Link to="/menu" className="rounded-full bg-cream px-6 py-3 font-semibold text-ink shadow-soft transition-transform hover:-translate-y-0.5">
              See full menu →
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function About() {
  return (
    <section className="border-y border-ink/10 bg-bamboo-light/40">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-20 md:grid-cols-5">
        <div className="md:col-span-2">
          <Reveal>
            <span className="inline-block rounded-full bg-secondary/60 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-ink">About us</span>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mt-4 font-display text-5xl md:text-6xl text-ink">Chips aren't just a side dish.</h2>
          </Reveal>
        </div>
        <div className="md:col-span-3 space-y-4 text-lg text-ink/85">
          <Reveal delay={150}>
            <p>
              We're the world's <strong>first self-serve fry bar</strong>. Founded by four mates in Noosa with one mission: make loaded fries the <em>main event</em>.
            </p>
          </Reveal>
          <Reveal delay={250}>
            <p>
              Locally sourced toppings. Freshly cut chips. Zero rules. Pile it high, drown it in sauce, share it (or don't — we won't tell).
            </p>
          </Reveal>
          <Reveal delay={350}>
            <p className="font-display text-2xl text-primary">Born in Noosa. Loved everywhere. 🌴</p>
          </Reveal>
          <Reveal delay={450}>
            <Link to="/about" className="inline-block mt-2 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground shadow-chunky transition-transform hover:-translate-y-0.5">
              Read our full story →
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function FindUs() {
  const hours: Array<[string, string]> = [
    ["Mon – Thu", "11:00 – 21:00"],
    ["Fri – Sat", "11:00 – 22:00"],
    ["Sunday", "11:00 – 21:00"],
  ];
  return (
    <section id="visit" className="border-t border-ink/10">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-20 md:grid-cols-2 md:items-center">
        <Reveal>
          <div className="overflow-hidden rounded-3xl bg-card shadow-chunky">
            <img
              src={storeFront}
              alt="Chip 'n' Mix storefront on Hastings Street, Noosa Heads with Happy Days sign"
              className="img-pop w-full h-auto block"
              loading="lazy"
            />
          </div>
        </Reveal>
        <div>
          <Reveal>
            <span className="inline-block rounded-full bg-accent/40 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-ink">Find us</span>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mt-4 font-display text-5xl md:text-6xl text-ink">Come say <span className="text-primary">hi</span>.</h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-4 text-lg text-muted-foreground">Tucked on the buzziest stretch of Hastings Street. Salt in the air, vinegar on the chips.</p>
          </Reveal>

          <Reveal delay={250}>
            <div className="mt-6 rounded-2xl bg-card p-6 shadow-soft">
              <div className="font-display text-2xl text-ink">📍 8 Hastings St</div>
              <div className="text-muted-foreground">Noosa Heads QLD 4567, Australia</div>
              <a
                href="https://maps.google.com/?q=8+Hastings+St+Noosa+Heads"
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-block font-semibold text-primary underline underline-offset-4"
              >
                Open in Maps →
              </a>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <div className="mt-4 rounded-2xl bg-card p-6 shadow-soft">
              <h3 className="font-display text-xl text-ink">Opening Hours</h3>
              <ul className="mt-3 divide-y divide-ink/10">
                {hours.map(([d, h]) => (
                  <li key={d} className="flex items-center justify-between py-2.5 text-sm">
                    <span className="font-medium text-ink">{d}</span>
                    <span className="font-display text-ink">{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={400}>
            <div className="mt-4 flex flex-wrap gap-3">
              <a href="https://instagram.com/chipnmixit" target="_blank" rel="noreferrer" className="rounded-full bg-primary px-5 py-2 font-semibold text-primary-foreground shadow-soft transition-transform hover:-translate-y-0.5">📸 @chipnmixit</a>
              <a href="https://tiktok.com/@chipnmixit" target="_blank" rel="noreferrer" className="rounded-full bg-secondary px-5 py-2 font-semibold text-ink shadow-soft transition-transform hover:-translate-y-0.5">🎵 TikTok</a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Reviews() {
  const reviews = [
    {
      name: "Naomi Chadd", meta: "9 reviews · 4 photos", when: "2 months ago", tag: "Takeaway", rating: 5,
      body: "We had such a fun experience at Chip n Mix in Noosa! Being able to choose three different types of chips and customise them with your own toppings was such a great concept, and there was so much choice available. The food was incredibly fresh and everything tasted amazing. A special shoutout to the staff — there was a lovely gentleman who was so friendly and more than happy to answer all of our questions. Highly recommend if you're in the area!",
      scores: { Food: 5, Service: 5, Atmosphere: 5 },
    },
    {
      name: "Drew Ebbstein", meta: "Local Guide · 154 reviews · 409 photos", when: "a year ago", tag: "Dine in · Lunch · $20–40", rating: 5,
      body: "Fantastic and fun!! Highly recommended. Great successful concept.. fresh and tasty. The best chrip chip I've ever had. My custom loaded fries cost my $20.50 and was very satisfying. Will definitely be back.",
      scores: { Food: 5, Service: 5, Atmosphere: 5 },
    },
    {
      name: "Bella Bella", meta: "Local Guide · 497 reviews · 3378 photos", when: "3 months ago", tag: null as string | null, rating: 3,
      body: "Still not sure what the hype is about. The idea is fun in theory — load up your own chips with whatever toppings you like — but it ends up feeling like you're overpaying for doing the work yourself. The chips are fine, the toppings are fine, but nothing really stands out to justify the price. If you're curious, it's worth trying once, but it didn't quite live up to the buzz.",
      scores: { Food: 3, Service: 3, Atmosphere: 4 },
    },
  ];
  const Stars = ({ n }: { n: number }) => (
    <span aria-label={`${n} out of 5 stars`} className="text-secondary-foreground">
      <span className="text-primary">{"★".repeat(n)}</span><span className="opacity-25">{"★".repeat(5 - n)}</span>
    </span>
  );
  return (
    <section id="reviews" className="border-t border-ink/10">
      <div className="mx-auto max-w-6xl px-4 py-20">
        <div className="flex flex-col items-start gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <Reveal>
              <span className="inline-block rounded-full bg-accent/40 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-ink">Reviews</span>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="mt-4 font-display text-5xl md:text-6xl text-ink">What folks are saying.</h2>
            </Reveal>
          </div>
          <Reveal delay={150}>
            <p className="max-w-sm text-muted-foreground">★ 3.6 · 209 reviews on Google. Here's a taste.</p>
          </Reveal>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {reviews.map((r, i) => (
            <Reveal key={i} delay={i * 120}>
              <ReviewCard r={r} Stars={Stars} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

type Review = {
  name: string; meta: string; when: string; tag: string | null;
  rating: number; body: string; scores: Record<string, number>;
};

function ReviewCard({ r, Stars }: { r: Review; Stars: (p: { n: number }) => ReactElement }) {
  const [expanded, setExpanded] = useState(false);
  const limit = 160;
  const isLong = r.body.length > limit;
  const shown = !isLong || expanded ? r.body : r.body.slice(0, limit).trimEnd() + "…";
  return (
    <article className="rounded-3xl bg-card p-6 shadow-soft flex flex-col h-full">
      <div className="flex items-center gap-3">
        <div className="grid h-11 w-11 place-items-center rounded-full bg-accent/50 text-ink font-display text-lg">
          {r.name.charAt(0)}
        </div>
        <div>
          <div className="font-display text-lg leading-tight text-ink">{r.name}</div>
          <div className="text-xs text-muted-foreground">{r.meta}</div>
        </div>
      </div>
      <div className="mt-4 flex items-center justify-between text-sm">
        <div className="text-lg"><Stars n={r.rating} /></div>
        <span className="text-muted-foreground">{r.when}</span>
      </div>
      {r.tag && (
        <div className="mt-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">{r.tag}</div>
      )}
      <p className="mt-4 text-base leading-relaxed text-ink/85">{shown}</p>
      {isLong && (
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          className="mt-2 self-start text-sm font-semibold text-primary underline underline-offset-2 hover:opacity-80"
        >
          {expanded ? "See less" : "See more"}
        </button>
      )}
      <div className="mt-5 flex flex-wrap gap-2 text-xs">
        {Object.entries(r.scores).map(([k, v]) => (
          <span key={k} className="rounded-full bg-bamboo-light/60 px-3 py-1 font-semibold text-ink">
            {k}: <span className="text-primary">{"★".repeat(v)}</span><span className="opacity-25">{"★".repeat(5 - v)}</span>
          </span>
        ))}
      </div>
    </article>
  );
}
