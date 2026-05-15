import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Reveal } from "@/components/Reveal";
import mural from "@/assets/store-mural.png";
import storeFront from "@/assets/store-front.png";

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
  { name: "Rhi", role: "Chief Chip Officer" },
  { name: "Ysabella", role: "Sauce Boss" },
  { name: "Josh", role: "Topping Architect" },
  { name: "Lisa", role: "Local Sourcing Wrangler" },
];

const sustainability = [
  { title: "Free water stations", body: "No plastic bottles, ever. Refill, rehydrate, repeat." },
  { title: "BioPak compostable cups", body: "From plant to plant — back to the earth." },
  { title: "Recyclable packaging", body: "Every bowl, every napkin. Closed-loop by design." },
  { title: "Loop Oils partnership", body: "Used cooking oil → biofuel. Nothing goes to waste." },
  { title: "Too Good To Go", body: "Cutting food waste with surprise bags." },
  { title: "Local first", body: "Toppings sourced from Sunshine Coast producers." },
];

function AboutPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-cream">
      <SiteHeader />

      <section className="border-b border-ink/10">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
          <div>
            <Reveal>
              <span className="inline-block rounded-full bg-accent/40 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-ink">Our story</span>
            </Reveal>
            <Reveal delay={100}>
              <h1 className="mt-5 font-display text-6xl leading-[0.95] md:text-7xl text-ink">
                Four mates. <span className="text-primary block">One mission.</span>
                <span className="block">Loaded <span className="italic text-secondary-foreground">fries.</span></span>
              </h1>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-6 max-w-md text-lg text-muted-foreground">
                We're <strong>Rhi, Ysabella, Josh &amp; Lisa</strong> — and we built the world's first self-serve fry bar on Hastings Street, Noosa. Why? Because chips aren't just a side dish, mate.
              </p>
            </Reveal>
          </div>
          <Reveal delay={150}>
            <div className="overflow-hidden rounded-3xl bg-card shadow-chunky-lg">
              <img
                src={storeFront}
                alt="Chip 'n' Mix storefront on Hastings Street"
                className="img-pop w-full h-auto block"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Mural section — story-telling */}
      <section className="border-b border-ink/10 bg-bamboo-light/40">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-20 md:grid-cols-2 md:items-center">
          <Reveal>
            <div className="overflow-hidden rounded-3xl bg-card shadow-chunky">
              <img
                src={mural}
                alt="Hand-painted Who Doesn't Love Chips? mural inside Chip 'n' Mix Noosa"
                className="img-pop w-full h-auto block"
                loading="lazy"
              />
            </div>
          </Reveal>
          <div>
            <Reveal>
              <span className="inline-block rounded-full bg-secondary/60 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-ink">Why we do it</span>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="mt-4 font-display text-5xl text-ink">An ode to the humble chip.</h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-4 text-lg text-ink/85">
                Climb the stairs to dine in upstairs, and you'll find this poem painted right on the wall — written by us, for everyone who's ever loved a chip a little too much. <em>Could you build a house entirely from chips?</em> We've thought about it.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20">
        <Reveal>
          <h2 className="font-display text-5xl md:text-6xl text-ink">Meet the <span className="text-primary">crew</span>.</h2>
        </Reveal>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {founders.map((f, i) => (
            <Reveal key={f.name} delay={i * 100}>
              <div className="rounded-3xl bg-card p-6 shadow-soft text-center">
                <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-accent/40 font-display text-2xl text-ink">{f.name.charAt(0)}</div>
                <h3 className="mt-4 font-display text-2xl text-ink">{f.name}</h3>
                <p className="text-sm text-muted-foreground">{f.role}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y border-ink/10 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-6xl px-4 py-20">
          <Reveal>
            <span className="inline-block rounded-full bg-cream/20 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em]">Planet first</span>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mt-4 font-display text-5xl md:text-6xl">Bold flavour. Lighter footprint.</h2>
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {sustainability.map((s, i) => (
              <Reveal key={s.title} delay={i * 80}>
                <div className="rounded-3xl bg-card p-6 text-foreground shadow-soft transition-transform hover:-translate-y-1">
                  <h3 className="font-display text-xl text-ink">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={300}>
            <div className="mt-12 flex flex-wrap gap-3">
              <Link to="/" hash="visit" className="rounded-full bg-cream px-6 py-3 font-semibold text-ink shadow-soft transition-transform hover:-translate-y-0.5">
                Come visit →
              </Link>
              <Link to="/menu" className="rounded-full bg-secondary px-6 py-3 font-semibold text-ink shadow-soft transition-transform hover:-translate-y-0.5">
                See the menu
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
