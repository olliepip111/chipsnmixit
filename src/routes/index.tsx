import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, type ReactElement } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Reveal } from "@/components/Reveal";
import heroFries from "@/assets/chipnmix-bowl.jpg";
import fryBar from "@/assets/chipnmix-sauces.jpg";
import toppings from "@/assets/chipnmix-toppings.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Chip 'n' Mix — World's First Self-Serve Fry Bar | Noosa Heads" },
      { name: "description", content: "Build your perfect fries at Chip 'n' Mix on Hastings St, Noosa Heads. 3 chip types, 30+ toppings, locally sourced. Chips aren't just a side dish." },
      { property: "og:title", content: "Chip 'n' Mix — Build Your Perfect Fries" },
      { property: "og:description", content: "The world's first self-serve fry bar. Hastings St, Noosa Heads." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <SiteHeader />
      <Hero />
      <Marquee />
      <HowItWorks />
      <About />
      <Reviews />
      <SiteFooter />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
        <div className="relative">
          <Reveal>
            <span className="inline-block rounded-full border-2 border-ink bg-accent px-3 py-1 text-xs font-bold uppercase tracking-wider shadow-chunky">
              🌏 World's first self-serve fry bar
            </span>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="mt-5 font-display text-6xl leading-[0.9] md:text-8xl">
              Build Your <span className="block text-primary">Perfect</span>
              <span className="block bg-secondary px-3 py-1 inline-block border-2 border-ink shadow-chunky-lg -rotate-2 mt-2">Fries.</span>
            </h1>
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-6 max-w-md text-lg text-muted-foreground">
              Pull the lever, pile the toppings, make a mess. 3 chip types, 30+ hot &amp; cold toppings, locally sourced — all on Hastings St.
            </p>
          </Reveal>
          <Reveal delay={320}>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/find-us" className="rounded-full border-2 border-ink bg-primary px-6 py-3 font-bold text-primary-foreground shadow-chunky-lg transition-transform hover:-translate-y-1">
                Find Us in Noosa →
              </Link>
              <Link to="/toppings" className="rounded-full border-2 border-ink bg-card px-6 py-3 font-bold shadow-chunky transition-transform hover:-translate-y-1">
                See toppings
              </Link>
            </div>
          </Reveal>
          <Reveal delay={400}>
            <div className="mt-8 flex items-center gap-4 text-sm text-muted-foreground">
              <span>⭐ 3.6 · 209 reviews</span>
              <span>·</span>
              <span>📍 Hastings St, Noosa</span>
            </div>
          </Reveal>
        </div>
        <Reveal delay={150} className="relative">
          <div className="absolute -left-4 -top-4 z-10 h-32 w-32 rounded-full bg-accent border-4 border-ink shadow-chunky-lg animate-float grid place-items-center text-center font-display leading-none rotate-[-12deg]">
            <div>
              <div className="text-3xl">30+</div>
              <div className="text-lg mt-1">toppings</div>
            </div>
          </div>
          <div className="absolute -right-4 bottom-6 z-10 rotate-6 rounded-2xl border-4 border-ink bg-primary px-4 py-2 font-display text-primary-foreground shadow-chunky">
            🥤 saucy
          </div>
          <img
            src={heroFries}
            alt="Loaded fries with cheese sauce, ketchup and herbs on a yellow background"
            className="img-pop rounded-3xl border-4 border-ink shadow-chunky-lg w-full object-cover aspect-square animate-wiggle"
          />
        </Reveal>
      </div>
    </section>
  );
}

function Marquee() {
  const items = [
    "🧂 Classic salt", "🐔 Chicken salt", "🌶️ Paprika", "🌶️ Togarashi",
    "🍅 Marinara", "🍱 Katsu", "🌶️ Birria", "🧀 Liquid cheese",
    "🥑 Guacamole", "🧅 Onions", "🍕 Pepperoni", "🍗 Chicken tenders",
    "🥓 Bacon", "🧀 Parmesan", "🫒 Black olives", "🌿 Oregano", "🫘 Beans",
  ];
  return (
    <div className="border-y-4 border-ink bg-primary py-3 text-primary-foreground overflow-hidden">
      <div className="flex w-max gap-10 whitespace-nowrap font-display text-2xl animate-marquee">
        {[...items, ...items].map((it, i) => (
          <span key={i}>{it}</span>
        ))}
      </div>
    </div>
  );
}

function HowItWorks() {
  const steps = [
    { n: "01", emoji: "🍟", title: "Pick your chips", body: "3 fresh-fried types, dispensed by you. Pull the lever — fill it up.", color: "bg-secondary" },
    { n: "02", emoji: "🧀", title: "Load your toppings", body: "30+ hot & cold toppings, locally sourced. Sauces, cheeses, slaws, the works.", color: "bg-accent" },
    { n: "03", emoji: "🎉", title: "Mix & enjoy", body: "Dine in upstairs or grab and go. Take your masterpiece to the beach.", color: "bg-primary text-primary-foreground" },
  ];
  return (
    <section id="how" className="mx-auto max-w-6xl px-4 py-20">
      <div className="max-w-2xl">
        <Reveal>
          <span className="inline-block rounded-full border-2 border-ink bg-card px-3 py-1 text-xs font-bold uppercase shadow-chunky">How it works</span>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="mt-4 font-display text-5xl md:text-6xl">Build your perfect mix!</h2>
        </Reveal>
      </div>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {steps.map((s, i) => (
          <Reveal key={s.n} delay={i * 120}>
            <div className={`relative rounded-3xl border-4 border-ink ${s.color} p-6 shadow-chunky-lg h-full`}>
              <div className="font-display text-7xl opacity-90">{s.emoji}</div>
              <div className="mt-4 font-display text-sm opacity-70">STEP {s.n}</div>
              <h3 className="mt-1 font-display text-3xl">{s.title}</h3>
              <p className="mt-2 text-base">{s.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
      <div className="mt-10 grid gap-4 md:grid-cols-2">
        <Reveal>
          <img src={fryBar} alt="Self-serve fry bar with yellow lever dispensers" loading="lazy" className="img-pop rounded-3xl border-4 border-ink shadow-chunky w-full aspect-[4/3] object-cover" />
        </Reveal>
        <Reveal delay={120}>
          <img src={toppings} alt="Colorful array of fry toppings and sauces" loading="lazy" className="img-pop rounded-3xl border-4 border-ink shadow-chunky w-full aspect-[4/3] object-cover" />
        </Reveal>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="border-y-4 border-ink bg-secondary">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-20 md:grid-cols-5">
        <div className="md:col-span-2">
          <Reveal>
            <span className="inline-block rounded-full border-2 border-ink bg-card px-3 py-1 text-xs font-bold uppercase shadow-chunky">About us</span>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mt-4 font-display text-5xl md:text-6xl">Chips aren't just a side dish.</h2>
          </Reveal>
        </div>
        <div className="md:col-span-3 space-y-4 text-lg">
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
            <Link to="/about" className="inline-block mt-2 rounded-full border-2 border-ink bg-primary px-6 py-3 font-bold text-primary-foreground shadow-chunky-lg transition-transform hover:-translate-y-1">
              Read our full story →
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Reviews() {
  const reviews = [
    {
      name: "Naomi Chadd",
      meta: "9 reviews · 4 photos",
      when: "2 months ago",
      tag: "Takeaway",
      rating: 5,
      body: "We had such a fun experience at Chip n Mix in Noosa! Being able to choose three different types of chips and customise them with your own toppings was such a great concept, and there was so much choice available. The food was incredibly fresh and everything tasted amazing. A special shoutout to the staff — there was a lovely gentleman who was so friendly and more than happy to answer all of our questions, which made the experience even better. The whole atmosphere was welcoming and enjoyable, and we honestly wish we were staying longer so we could come back again. Highly recommend if you're in the area!",
      scores: { Food: 5, Service: 5, Atmosphere: 5 },
      color: "bg-secondary",
    },
    {
      name: "Drew Ebbstein",
      meta: "Local Guide · 154 reviews · 409 photos",
      when: "a year ago",
      tag: "Dine in · Lunch · $20–40",
      rating: 5,
      body: "Fantastic and fun!! Highly recommended. Great successful concept.. fresh and tasty. The best chrip chip I've ever had. My custom loaded fries cost my $20.50 and was very satisfying. Will definitely be back.",
      scores: { Food: 5, Service: 5, Atmosphere: 5 },
      color: "bg-accent",
    },
    {
      name: "Bella Bella",
      meta: "Local Guide · 497 reviews · 3378 photos",
      when: "3 months ago",
      tag: null as string | null,
      rating: 3,
      body: "Still not sure what the hype is about. The idea is fun in theory — load up your own chips with whatever toppings you like — but it ends up feeling like you're overpaying for doing the work yourself. The chips are fine, the toppings are fine, but nothing really stands out to justify the price. If you're curious, it's worth trying once, but it didn't quite live up to the buzz.",
      scores: { Food: 3, Service: 3, Atmosphere: 4 },
      color: "bg-card",
    },
  ];
  const Stars = ({ n }: { n: number }) => (
    <span aria-label={`${n} out of 5 stars`} className="text-primary">
      {"★".repeat(n)}<span className="opacity-25">{"★".repeat(5 - n)}</span>
    </span>
  );
  return (
    <section id="reviews" className="border-t-4 border-ink bg-cream">
      <div className="mx-auto max-w-6xl px-4 py-20">
        <div className="flex flex-col items-start gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <Reveal>
              <span className="inline-block rounded-full border-2 border-ink bg-accent px-3 py-1 text-xs font-bold uppercase shadow-chunky">Reviews</span>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="mt-4 font-display text-5xl md:text-6xl">What folks are saying.</h2>
            </Reveal>
          </div>
          <Reveal delay={150}>
            <p className="max-w-sm text-muted-foreground">⭐ 3.6 · 209 reviews on Google. Here's a taste.</p>
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
  rating: number; body: string; scores: Record<string, number>; color: string;
};

function ReviewCard({ r, Stars }: { r: Review; Stars: (p: { n: number }) => ReactElement }) {
  const [expanded, setExpanded] = useState(false);
  const limit = 140;
  const isLong = r.body.length > limit;
  const shown = !isLong || expanded ? r.body : r.body.slice(0, limit).trimEnd() + "…";
  return (
    <article className={`rounded-3xl border-4 border-ink ${r.color} p-6 shadow-chunky-lg flex flex-col h-full`}>
      <div className="flex items-center gap-3">
        <div className="grid h-12 w-12 place-items-center rounded-full border-2 border-ink bg-primary text-primary-foreground font-display text-xl">
          {r.name.charAt(0)}
        </div>
        <div>
          <div className="font-display text-lg leading-tight">{r.name}</div>
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
      <p className="mt-4 text-base leading-relaxed">{shown}</p>
      {isLong && (
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          className="mt-2 self-start text-sm font-bold text-primary underline underline-offset-2 hover:opacity-80"
        >
          {expanded ? "See less" : "See more"}
        </button>
      )}
      <div className="mt-5 flex flex-wrap gap-2 text-xs">
        {Object.entries(r.scores).map(([k, v]) => (
          <span key={k} className="rounded-full border-2 border-ink bg-card px-2 py-1 font-semibold">
            {k}: <span className="text-primary">{"★".repeat(v)}</span><span className="opacity-25">{"★".repeat(5 - v)}</span>
          </span>
        ))}
      </div>
    </article>
  );
}
