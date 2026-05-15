import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Reveal } from "@/components/Reveal";
import dispensers from "@/assets/store-dispensers.png";
import toppingsBar from "@/assets/store-toppings-bar.png";
import bowl1 from "@/assets/topping-bowl-1.png";
import bowl2 from "@/assets/topping-bowl-2.png";
import bowl3 from "@/assets/topping-bowl-3.png";
import bowl4 from "@/assets/topping-bowl-4.png";
import bowl5 from "@/assets/topping-bowl-5.png";
import bowl6 from "@/assets/topping-bowl-6.png";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Chips & Toppings — Chip 'n' Mix" },
      { name: "description", content: "Three chip types and 30+ locally sourced toppings. Build your perfect bowl at the world's first self-serve fry bar." },
      { property: "og:title", content: "Chips & Toppings — Chip 'n' Mix" },
      { property: "og:description", content: "Three chip types, 30+ toppings. Pull the lever, build your bowl." },
    ],
  }),
  component: MenuPage,
});

const chips = [
  { name: "Sweet Potato", body: "Crunchy edges, fluffy middle. A little sweet, a lot good." },
  { name: "Hand Cut Crispy", body: "Chunky, golden, fresh from the fryer." },
  { name: "Classic Skinny", body: "Crisp, salty, addictive. The original loaded-fry canvas." },
];

const categories = [
  { title: "Salts & Seasonings", items: ["Classic Salt", "Chicken Salt", "Paprika", "Togarashi"] },
  { title: "Sauces & Dressings", items: ["Liquid Cheese", "Marinara", "Katsu", "Birria", "Guacamole", "Ranch"] },
  { title: "Proteins", items: ["Pepperoni", "Chicken Tenders", "Bacon"] },
  { title: "Cheese", items: ["Melted Cheddar", "Parmesan", "Feta"] },
  { title: "Veg & Fresh", items: ["Onions", "Black Olives", "Beans", "Jalapeños", "Salsa"] },
  { title: "Garnish & Crunch", items: ["Pangrattato", "Oregano", "Spring Onion", "Crispy Shallots"] },
];

const gallery = [
  { src: bowl1, alt: "Loaded fries with guacamole, salsa and meat" },
  { src: bowl2, alt: "Sweet potato fries with cheese, guac and bacon" },
  { src: bowl3, alt: "Fries with salsa, cheese, herbs and ranch drizzle" },
  { src: bowl4, alt: "Two bowls of loaded fries with cheese sauce and salsa" },
  { src: bowl5, alt: "Crispy fries piled with herbs and salsa" },
  { src: bowl6, alt: "Chip 'n' Mix bowls with BBQ, cheese and greens" },
];

function MenuPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-cream">
      <SiteHeader />

      {/* Hero */}
      <section className="border-b border-ink/10">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
          <Reveal>
            <span className="inline-block rounded-full bg-accent/40 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-ink">
              The good stuff
            </span>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="mt-5 font-display text-6xl leading-[0.95] md:text-8xl text-ink">
              Chips. <span className="text-primary">Toppings.</span>
              <span className="block text-secondary-foreground">Your masterpiece.</span>
            </h1>
          </Reveal>
          <Reveal delay={220}>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              Three chip types. 30+ hot &amp; cold toppings, locally sourced on the Sunshine Coast. Pull the lever, pile it high, make a mess.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Chips section with real store photo */}
      <section className="border-b border-ink/10">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-20 md:grid-cols-2 md:items-center">
          <Reveal>
            <div className="overflow-hidden rounded-3xl bg-card shadow-chunky">
              <img
                src={dispensers}
                alt="Three self-serve chip dispensers at Chip 'n' Mix Noosa, with sweet potato, hand cut crispy, and classic chips"
                className="img-pop w-full h-auto"
                loading="eager"
              />
            </div>
          </Reveal>
          <div>
            <Reveal>
              <span className="inline-block rounded-full bg-secondary/60 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-ink">Step 01 · The base</span>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="mt-4 font-display text-5xl md:text-6xl text-ink">Pick your <span className="text-primary">chips</span>.</h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-4 text-lg text-muted-foreground">Pull the lever. Fill your bowl. Three fresh-fried styles, dispensed by you.</p>
            </Reveal>
            <div className="mt-8 grid gap-3">
              {chips.map((c, i) => (
                <Reveal key={c.name} delay={i * 100}>
                  <div className="flex items-start gap-4 rounded-2xl bg-card p-5 shadow-soft">
                    <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-accent/50 font-display text-ink">{i + 1}</div>
                    <div>
                      <h3 className="font-display text-xl text-ink">{c.name}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{c.body}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Toppings bar with real photo */}
      <section className="border-b border-ink/10 bg-bamboo-light/40">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-20 md:grid-cols-2 md:items-center">
          <div className="md:order-2">
            <Reveal>
              <div className="overflow-hidden rounded-3xl bg-card shadow-chunky">
                <img
                  src={toppingsBar}
                  alt="The Chip 'n' Mix self-serve topping bar with sauces, salsas and fresh ingredients"
                  className="img-pop w-full h-auto"
                  loading="lazy"
                />
              </div>
            </Reveal>
          </div>
          <div className="md:order-1">
            <Reveal>
              <span className="inline-block rounded-full bg-secondary/60 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-ink">Step 02 · The fun part</span>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="mt-4 font-display text-5xl md:text-6xl text-ink">Load your <span className="text-primary">toppings</span>.</h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-4 text-lg text-muted-foreground">30+ hot &amp; cold toppings, made fresh, sourced locally. No rules. Pile it high.</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Topping categories */}
      <section className="border-b border-ink/10">
        <div className="mx-auto max-w-6xl px-4 py-20">
          <Reveal>
            <h2 className="font-display text-5xl md:text-6xl text-ink">Pick your flavour.</h2>
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((c, i) => (
              <Reveal key={c.title} delay={i * 80}>
                <article className="h-full rounded-3xl bg-card p-6 shadow-soft transition-transform hover:-translate-y-1">
                  <h3 className="font-display text-2xl text-ink">{c.title}</h3>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {c.items.map((it) => (
                      <li key={it} className="rounded-full bg-accent/30 px-3 py-1 text-sm font-medium text-ink">
                        {it}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Inspiration gallery — natural sizing, no upscale */}
      <section>
        <div className="mx-auto max-w-6xl px-4 py-20">
          <Reveal>
            <h2 className="font-display text-5xl md:text-6xl text-ink">Need <span className="text-primary">inspo?</span></h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="mt-3 max-w-xl text-lg text-muted-foreground">Real bowls from real customers. Yours could look like this.</p>
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.map((g, i) => (
              <Reveal key={i} delay={i * 80}>
                <figure className="overflow-hidden rounded-3xl bg-card shadow-soft">
                  <img
                    src={g.src}
                    alt={g.alt}
                    loading={i < 2 ? "eager" : "lazy"}
                    decoding="async"
                    className="img-pop w-full h-auto block"
                  />
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
