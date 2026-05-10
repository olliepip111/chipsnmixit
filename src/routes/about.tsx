import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Reveal } from "@/components/Reveal";
import storefront from "@/assets/chipnmix-storefront.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Chip 'n' Mix" },
      { name: "description", content: "Four mates, one mission: make loaded fries the main event. Born in Noosa, the world's first self-serve fry bar." },
      { property: "og:title", content: "About Chip 'n' Mix" },
      { property: "og:description", content: "Founded by Rhi, Ysabella, Josh & Lisa on Hastings Street, Noosa." },
    ],
  }),
  component: AboutPage,
});

const founders = [
  { name: "Rhi", emoji: "🍟", role: "Chief Chip Officer" },
  { name: "Ysabella", emoji: "🌶️", role: "Sauce Boss" },
  { name: "Josh", emoji: "🧀", role: "Topping Architect" },
  { name: "Lisa", emoji: "🌿", role: "Local Sourcing Wrangler" },
];

const sustainability = [
  { emoji: "💧", title: "Free water stations", body: "No plastic bottles, ever. Refill, rehydrate, repeat." },
  { emoji: "🌱", title: "BioPak compostable cups", body: "From plant to plant — back to the earth." },
  { emoji: "♻️", title: "Recyclable packaging", body: "Every bowl, every napkin. Closed-loop by design." },
  { emoji: "🛢️", title: "Loop Oils partnership", body: "Used cooking oil → biofuel. Nothing goes to waste." },
  { emoji: "🥡", title: "Too Good To Go", body: "Cutting food waste with surprise bags near closing time." },
  { emoji: "🌍", title: "Local first", body: "Toppings sourced from Sunshine Coast producers." },
];

function AboutPage() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <SiteHeader />

      {/* Hero */}
      <section className="border-b-4 border-ink bg-mustard">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
          <div>
            <Reveal>
              <span className="inline-block rounded-full border-2 border-ink bg-cream px-3 py-1 text-xs font-bold uppercase shadow-chunky">Our story</span>
            </Reveal>
            <Reveal delay={100}>
              <h1 className="mt-5 font-display text-6xl leading-[0.9] md:text-7xl">
                Four mates. <span className="block text-teal">One mission.</span>
                <span className="block bg-teal text-cream px-2 border-2 border-ink -rotate-2 inline-block mt-2">Loaded fries.</span>
              </h1>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-6 max-w-md text-lg text-ink">
                We're <strong>Rhi, Ysabella, Josh &amp; Lisa</strong> — and we built the world's first self-serve fry bar on Hastings Street, Noosa. Why? Because chips aren't just a side dish, mate.
              </p>
            </Reveal>
          </div>
          <Reveal delay={150}>
            <img
              src={storefront}
              alt="Chip 'n' Mix storefront on Hastings Street"
              className="img-pop rounded-3xl border-4 border-ink shadow-chunky-lg w-full aspect-[4/5] object-cover"
            />
          </Reveal>
        </div>
      </section>

      {/* Founders */}
      <section className="mx-auto max-w-6xl px-4 py-20">
        <Reveal>
          <h2 className="font-display text-5xl md:text-6xl">
            Meet the <span className="bg-teal text-cream px-2 border-2 border-ink inline-block -rotate-1">crew</span>
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {founders.map((f, i) => (
            <Reveal key={f.name} delay={i * 100}>
              <div className="rounded-3xl border-4 border-ink bg-card p-6 shadow-chunky-lg text-center transition-transform hover:-translate-y-1">
                <div className="text-6xl">{f.emoji}</div>
                <h3 className="mt-3 font-display text-3xl">{f.name}</h3>
                <p className="text-muted-foreground">{f.role}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Sustainability */}
      <section className="border-y-4 border-ink bg-teal text-cream">
        <div className="mx-auto max-w-6xl px-4 py-20">
          <Reveal>
            <span className="inline-block rounded-full border-2 border-ink bg-mustard px-3 py-1 text-xs font-bold uppercase text-ink shadow-chunky">Planet first</span>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mt-4 font-display text-5xl md:text-6xl text-cream">Bold flavour. Lighter footprint.</h2>
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {sustainability.map((s, i) => (
              <Reveal key={s.title} delay={i * 80}>
                <div className="rounded-3xl border-4 border-ink bg-card p-6 text-foreground shadow-chunky transition-transform hover:-translate-y-1">
                  <div className="text-5xl">{s.emoji}</div>
                  <h3 className="mt-3 font-display text-2xl">{s.title}</h3>
                  <p className="mt-1 text-muted-foreground">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={300}>
            <div className="mt-12 flex flex-wrap gap-3">
              <Link to="/find-us" className="rounded-full border-2 border-ink bg-cream px-6 py-3 font-bold text-ink shadow-chunky-lg transition-transform hover:-translate-y-1">
                Come visit →
              </Link>
              <Link to="/toppings" className="rounded-full border-2 border-ink bg-mustard px-6 py-3 font-bold text-ink shadow-chunky-lg transition-transform hover:-translate-y-1">
                See the toppings
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
