import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Reveal } from "@/components/Reveal";
import bowl1 from "@/assets/topping-bowl-1.png";
import bowl2 from "@/assets/topping-bowl-2.png";
import bowl3 from "@/assets/topping-bowl-3.png";
import bowl4 from "@/assets/topping-bowl-4.png";
import bowl5 from "@/assets/topping-bowl-5.png";
import bowl6 from "@/assets/topping-bowl-6.png";

export const Route = createFileRoute("/toppings")({
  head: () => ({
    meta: [
      { title: "Toppings & Ingredients — Chip 'n' Mix" },
      { name: "description", content: "30+ hot & cold toppings: salts, sauces, proteins, cheeses, veg, and crunchy garnishes. Locally sourced on the Sunshine Coast." },
      { property: "og:title", content: "Toppings & Ingredients — Chip 'n' Mix" },
      { property: "og:description", content: "Build your perfect fries from 30+ locally sourced toppings." },
    ],
  }),
  component: ToppingsPage,
});

const categories = [
  {
    icon: "🧂",
    title: "Salts & Seasonings",
    color: "bg-secondary",
    items: ["Classic Salt", "Chicken Salt", "Paprika", "Togarashi Seasoning"],
  },
  {
    icon: "🥣",
    title: "Sauces & Dressings",
    color: "bg-primary text-primary-foreground",
    items: ["Liquid Cheese", "Marinara Sauce", "Katsu Sauce", "Birria Sauce", "Guacamole"],
  },
  {
    icon: "🥩",
    title: "Proteins",
    color: "bg-accent",
    items: ["Pepperoni", "Chicken Tenders", "Bacon"],
  },
  {
    icon: "🧀",
    title: "Cheese",
    color: "bg-secondary",
    items: ["Melted Cheese", "Parmesan", "Liquid Cheese"],
  },
  {
    icon: "🥦",
    title: "Vegetables & Toppings",
    color: "bg-accent",
    items: ["Onions", "Black Olives", "Beans", "Jalapeños"],
  },
  {
    icon: "🍞",
    title: "Garnishes & Crunch",
    color: "bg-primary text-primary-foreground",
    items: ["Chilli & Garlic Pangrattato", "Oregano", "Spring Onion"],
  },
];

const gallery = [
  { src: bowl1, alt: "Loaded fries with guacamole, salsa and meat" },
  { src: bowl2, alt: "Sweet potato fries with cheese, guac and bacon" },
  { src: bowl3, alt: "Fries with salsa, cheese, herbs and ranch drizzle" },
  { src: bowl4, alt: "Two bowls of loaded fries with cheese sauce and salsa" },
  { src: bowl5, alt: "Crispy fries piled with herbs and salsa" },
  { src: bowl6, alt: "Chip 'n' Mix bowls with BBQ, cheese and greens" },
];

function ToppingsPage() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <SiteHeader />

      {/* Hero */}
      <section className="checker-bg border-b-4 border-ink">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
          <Reveal>
            <span className="inline-block rounded-full border-2 border-ink bg-primary px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary-foreground shadow-chunky">
              The good stuff
            </span>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="mt-5 font-display text-6xl leading-[0.9] md:text-8xl">
              Toppings <span className="text-primary">&amp;</span>
              <span className="block bg-accent border-2 border-ink shadow-chunky-lg -rotate-2 inline-block px-3 py-1 mt-2">Ingredients</span>
            </h1>
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-6 max-w-xl text-lg">
              30+ hot &amp; cold toppings, locally sourced on the Sunshine Coast. Pile 'em high — there are no rules here.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Photo gallery */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.map((g, i) => (
            <Reveal key={i} delay={i * 90}>
              <div className="group relative overflow-hidden rounded-3xl border-4 border-ink shadow-chunky-lg bg-card">
                <img
                  src={g.src}
                  alt={g.alt}
                  loading={i < 2 ? "eager" : "lazy"}
                  className="img-pop w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Category cards */}
      <section className="border-y-4 border-ink bg-cream">
        <div className="mx-auto max-w-6xl px-4 py-20">
          <Reveal>
            <h2 className="font-display text-5xl md:text-6xl">Pick your <span className="bg-primary text-primary-foreground px-2 border-2 border-ink -rotate-1 inline-block">flavour</span></h2>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((c, i) => (
              <Reveal key={c.title} delay={i * 90}>
                <article className={`h-full rounded-3xl border-4 border-ink ${c.color} p-6 shadow-chunky-lg transition-transform hover:-translate-y-1 hover:rotate-[-1deg]`}>
                  <div className="text-6xl">{c.icon}</div>
                  <h3 className="mt-3 font-display text-3xl uppercase">{c.title}</h3>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {c.items.map((it) => (
                      <li key={it} className="rounded-full border-2 border-ink bg-card px-3 py-1 text-sm font-semibold text-foreground">
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

      <Reveal as="footer">
        <SiteFooter />
      </Reveal>
    </div>
  );
}
