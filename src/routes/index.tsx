import { createFileRoute } from "@tanstack/react-router";
import heroFries from "@/assets/chipnmix-bowl.jpg";
import fryBar from "@/assets/chipnmix-sauces.jpg";
import toppings from "@/assets/chipnmix-toppings.jpg";
import storefront from "@/assets/chipnmix-storefront.jpg";

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
      <Nav />
      <Hero />
      <HowItWorks />
      <About />
      <Sustainability />
      <Visit />
      <Footer />
    </div>
  );
}

function Logo({ className = "" }: { className?: string }) {
  return (
    <a href="#top" className={`inline-flex items-center gap-2 font-display text-2xl ${className}`}>
      <span className="grid h-10 w-10 place-items-center rounded-full bg-secondary border-2 border-ink shadow-chunky text-xl">🍟</span>
      <span className="leading-none">
        Chip <span className="text-primary">'n'</span> Mix
      </span>
    </a>
  );
}

function Nav() {
  return (
    <header id="top" className="sticky top-0 z-50 border-b-2 border-ink bg-secondary/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Logo />
        <nav className="hidden gap-6 text-sm font-semibold md:flex">
          <a href="#how" className="hover:text-primary">How it works</a>
          <a href="#about" className="hover:text-primary">About</a>
          <a href="#planet" className="hover:text-primary">Planet</a>
          <a href="#visit" className="hover:text-primary">Visit</a>
        </nav>
        <a href="#visit" className="rounded-full border-2 border-ink bg-primary px-4 py-2 text-sm font-bold text-primary-foreground shadow-chunky transition-transform hover:-translate-y-0.5">
          Find Us
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
        <div className="relative">
          <span className="inline-block rounded-full border-2 border-ink bg-accent px-3 py-1 text-xs font-bold uppercase tracking-wider shadow-chunky">
            🌏 World's first self-serve fry bar
          </span>
          <h1 className="mt-5 font-display text-6xl leading-[0.9] md:text-8xl">
            Build Your <span className="block text-primary">Perfect</span>
            <span className="block bg-secondary px-3 py-1 inline-block border-2 border-ink shadow-chunky-lg -rotate-2 mt-2">Fries.</span>
          </h1>
          <p className="mt-6 max-w-md text-lg text-muted-foreground">
            Pull the lever, pile the toppings, make a mess. 3 chip types, 30+ hot &amp; cold toppings, locally sourced — all on Hastings St.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#visit" className="rounded-full border-2 border-ink bg-primary px-6 py-3 font-bold text-primary-foreground shadow-chunky-lg transition-transform hover:-translate-y-1">
              Find Us in Noosa →
            </a>
            <a href="#how" className="rounded-full border-2 border-ink bg-card px-6 py-3 font-bold shadow-chunky transition-transform hover:-translate-y-1">
              How it works
            </a>
          </div>
          <div className="mt-8 flex items-center gap-4 text-sm text-muted-foreground">
            <span>⭐ 3.6 · 209 reviews</span>
            <span>·</span>
            <span>📍 Hastings St, Noosa</span>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -left-4 -top-4 z-10 h-28 w-28 rounded-full bg-accent border-2 border-ink shadow-chunky animate-float grid place-items-center text-center font-display text-base leading-tight rotate-[-12deg]">
            30+<br/>toppings
          </div>
          <div className="absolute -right-4 bottom-6 z-10 rotate-6 rounded-2xl border-2 border-ink bg-primary px-4 py-2 font-display text-primary-foreground shadow-chunky">
            🥤 saucy
          </div>
          <img
            src={heroFries}
            alt="Loaded fries with cheese sauce, ketchup and herbs on a yellow background"
            width={1536}
            height={1280}
            className="rounded-3xl border-2 border-ink shadow-chunky-lg w-full object-cover aspect-square animate-wiggle"
          />
        </div>
      </div>
      <Marquee />
    </section>
  );
}

function Marquee() {
  const items = ["🍟 Crinkle", "🧀 Cheese sauce", "🌶️ Birria", "🥓 Bacon bits", "🥒 Pickles", "🌿 Herbs", "🌽 Corn", "🥚 Egg", "🍯 Honey mustard", "🌶️ Sriracha"];
  return (
    <div className="border-y-2 border-ink bg-primary py-3 text-primary-foreground overflow-hidden">
      <div className="flex gap-10 whitespace-nowrap font-display text-2xl animate-[float-y_3s_ease-in-out_infinite]">
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
        <span className="inline-block rounded-full border-2 border-ink bg-card px-3 py-1 text-xs font-bold uppercase shadow-chunky">How it works</span>
        <h2 className="mt-4 font-display text-5xl md:text-6xl">Three steps to fry nirvana.</h2>
      </div>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {steps.map((s) => (
          <div key={s.n} className={`relative rounded-3xl border-2 border-ink ${s.color} p-6 shadow-chunky-lg`}>
            <div className="font-display text-7xl opacity-90">{s.emoji}</div>
            <div className="mt-4 font-display text-sm opacity-70">STEP {s.n}</div>
            <h3 className="mt-1 font-display text-3xl">{s.title}</h3>
            <p className="mt-2 text-base">{s.body}</p>
          </div>
        ))}
      </div>
      <div className="mt-10 grid gap-4 md:grid-cols-2">
        <img src={fryBar} alt="Self-serve fry bar with yellow lever dispensers" width={1280} height={960} loading="lazy" className="rounded-3xl border-2 border-ink shadow-chunky w-full aspect-[4/3] object-cover" />
        <img src={toppings} alt="Colorful array of fry toppings and sauces" width={1280} height={960} loading="lazy" className="rounded-3xl border-2 border-ink shadow-chunky w-full aspect-[4/3] object-cover" />
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="border-y-2 border-ink bg-secondary">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-20 md:grid-cols-5">
        <div className="md:col-span-2">
          <span className="inline-block rounded-full border-2 border-ink bg-card px-3 py-1 text-xs font-bold uppercase shadow-chunky">About us</span>
          <h2 className="mt-4 font-display text-5xl md:text-6xl">Chips aren't just a side dish.</h2>
        </div>
        <div className="md:col-span-3 space-y-4 text-lg">
          <p>
            We're the world's <strong>first self-serve fry bar</strong>. Founded by four mates in Noosa with one mission: make loaded fries the <em>main event</em>.
          </p>
          <p>
            Locally sourced toppings. Freshly cut chips. Zero rules. Pile it high, drown it in sauce, share it (or don't — we won't tell).
          </p>
          <p className="font-display text-2xl text-primary">Born in Noosa. Loved everywhere. 🌴</p>
        </div>
      </div>
    </section>
  );
}

function Sustainability() {
  const items = [
    { emoji: "💧", title: "Free water stations", body: "No plastic bottles, ever. Refill, rehydrate, repeat." },
    { emoji: "🌱", title: "BioPak compostable cups", body: "From plant to plant — back to the earth." },
    { emoji: "♻️", title: "Recyclable packaging", body: "Every bowl, every napkin. Closed-loop by design." },
    { emoji: "🛢️", title: "Loop Oils partnership", body: "Used cooking oil → biofuel. Nothing goes to waste." },
    { emoji: "🥡", title: "Too Good To Go", body: "Cutting food waste by 50–75% with surprise bags." },
    { emoji: "🌍", title: "Local first", body: "Toppings sourced from Sunshine Coast producers." },
  ];
  return (
    <section id="planet" className="mx-auto max-w-6xl px-4 py-20">
      <div className="flex flex-col items-start gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <span className="inline-block rounded-full border-2 border-ink bg-accent px-3 py-1 text-xs font-bold uppercase shadow-chunky">Sustainability</span>
          <h2 className="mt-4 font-display text-5xl md:text-6xl max-w-2xl">Fries today. <span className="text-accent-foreground bg-accent px-2 border-2 border-ink">Planet tomorrow.</span></h2>
        </div>
        <p className="max-w-sm text-muted-foreground">Bold flavour, lighter footprint. Here's how we keep it green while keeping it golden.</p>
      </div>
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((it, i) => (
          <div key={i} className="rounded-3xl border-2 border-ink bg-card p-6 shadow-chunky transition-transform hover:-translate-y-1 hover:rotate-[-1deg]">
            <div className="text-5xl">{it.emoji}</div>
            <h3 className="mt-3 font-display text-2xl">{it.title}</h3>
            <p className="mt-1 text-muted-foreground">{it.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Visit() {
  const hours = [
    ["Mon – Thu", "11:00 – 21:00"],
    ["Fri – Sat", "11:00 – 22:00"],
    ["Sunday", "11:00 – 21:00"],
  ];
  return (
    <section id="visit" className="border-t-2 border-ink bamboo-bg text-ink">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-20 md:grid-cols-2">
        <div>
          <span className="inline-block rounded-full border-2 border-ink bg-card px-3 py-1 text-xs font-bold uppercase text-ink shadow-chunky">Visit us</span>
          <h2 className="mt-4 font-display text-5xl md:text-6xl">Come say <span className="bg-secondary text-ink px-2 border-2 border-ink -rotate-2 inline-block">hi 👋</span></h2>
          <p className="mt-6 text-lg">Tucked on the buzziest stretch of Hastings Street. Salt in the air, vinegar on the chips.</p>
          <img src={storefront} alt="Chip 'n' Mix storefront on Hastings Street, Noosa Heads" width={1080} height={1180} loading="lazy" className="mt-6 rounded-3xl border-2 border-ink shadow-chunky-lg w-full aspect-[4/5] object-cover max-w-sm" />
          <div className="mt-8 rounded-3xl border-2 border-ink bg-card p-6 text-foreground shadow-chunky-lg">
            <div className="font-display text-2xl">📍 8 Hastings St</div>
            <div className="text-muted-foreground">Noosa Heads QLD 4567, Australia</div>
            <a href="https://maps.google.com/?q=8+Hastings+St+Noosa+Heads" target="_blank" rel="noreferrer" className="mt-3 inline-block font-bold text-primary underline">Open in Maps →</a>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="https://instagram.com/chipnmixit" target="_blank" rel="noreferrer" className="rounded-full border-2 border-ink bg-card px-5 py-2 font-bold text-foreground shadow-chunky transition-transform hover:-translate-y-1">📸 @chipnmixit</a>
            <a href="https://tiktok.com/@chipnmixit" target="_blank" rel="noreferrer" className="rounded-full border-2 border-ink bg-secondary px-5 py-2 font-bold text-ink shadow-chunky transition-transform hover:-translate-y-1">🎵 TikTok</a>
          </div>
        </div>
        <div className="rounded-3xl border-2 border-ink bg-card p-6 text-foreground shadow-chunky-lg">
          <h3 className="font-display text-3xl">Opening Hours</h3>
          <ul className="mt-4 divide-y-2 divide-ink/10">
            {hours.map(([d, h]) => (
              <li key={d} className="flex items-center justify-between py-3">
                <span className="font-semibold">{d}</span>
                <span className="font-display">{h}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6 rounded-2xl border-2 border-ink bg-secondary p-4 text-ink">
            <div className="font-display">💸 $20–40 per person</div>
            <div className="text-sm opacity-80">Dine-in upstairs · Takeaway · Delivery</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t-2 border-ink bg-ink text-cream">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-4 py-12 md:flex-row md:items-center">
        <div>
          <div className="flex items-center gap-2 font-display text-2xl">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-secondary border-2 border-cream text-xl">🍟</span>
            Chip <span className="text-secondary">'n'</span> Mix
          </div>
          <p className="mt-2 max-w-sm font-display text-xl text-secondary">"Chips aren't just a side dish."</p>
        </div>
        <div className="flex flex-col gap-2 text-sm">
          <a href="https://instagram.com/chipnmixit" target="_blank" rel="noreferrer" className="hover:text-secondary">Instagram → @chipnmixit</a>
          <a href="https://tiktok.com/@chipnmixit" target="_blank" rel="noreferrer" className="hover:text-secondary">TikTok → @chipnmixit</a>
          <a href="https://chipnmix.com.au" target="_blank" rel="noreferrer" className="hover:text-secondary">chipnmix.com.au</a>
        </div>
      </div>
      <div className="border-t border-cream/10 px-4 py-4 text-center text-xs opacity-70">
        © {new Date().getFullYear()} Chip 'n' Mix · Hastings St, Noosa Heads · Made with 🧂
      </div>
    </footer>
  );
}
