import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Reveal } from "@/components/Reveal";

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
    color: "bg-mustard",
    items: ["Classic Salt", "Chicken Salt", "Paprika", "Togarashi Seasoning"],
  },
  {
    icon: "🥣",
    title: "Sauces & Dressings",
    color: "bg-teal text-cream",
    items: ["Liquid Cheese", "Marinara Sauce", "Katsu Sauce", "Birria Sauce", "Guacamole"],
  },
  {
    icon: "🥩",
    title: "Proteins",
    color: "bg-bamboo-light",
    items: ["Pepperoni", "Chicken Tenders", "Bacon"],
  },
  {
    icon: "🧀",
    title: "Cheese",
    color: "bg-mustard",
    items: ["Melted Cheese", "Parmesan", "Liquid Cheese"],
  },
  {
    icon: "🥦",
    title: "Vegetables & Toppings",
    color: "bg-bamboo-light",
    items: ["Onions", "Black Olives", "Beans", "Jalapeños"],
  },
  {
    icon: "🍞",
    title: "Garnishes & Crunch",
    color: "bg-teal text-cream",
    items: ["Chilli & Garlic Pangrattato", "Oregano", "Spring Onion"],
  },
];

// Sharp, high-quality Unsplash food photos — no upscaling issues
const gallery = [
  {
    src: "https://images.unsplash.com/photo-1630431341973-02e1b662ec35?w=800&q=85&fit=crop",
    alt: "Close up loaded fries with cheese sauce and toppings",
  },
  {
    src: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=800&q=85&fit=crop",
    alt: "Fresh guacamole in a bowl",
  },
  {
    src: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?w=800&q=85&fit=crop",
    alt: "Crispy golden french fries close up",
  },
  {
    src: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=800&q=85&fit=crop",
    alt: "Loaded fries with cheese and herbs",
  },
  {
    src: "https://images.unsplash.com/photo-1587334207408-4bbff8a94cb8?w=800&q=85&fit=crop",
    alt: "Various dipping sauces and condiments",
  },
  {
    src: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=85&fit=crop",
    alt: "Gourmet loaded burger fries overhead shot",
  },
];

function ToppingsPage() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <SiteHeader />

      {/* Hero */}
      <section className="bg-teal border-b-4 border-ink">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
          <Reveal>
            <span className="inline-block rounded-full border-2 border-ink bg-mustard px-3 py-1 text-xs font-bold uppercase tracking-wider text-ink shadow-chunky">
              The good stuff
            </span>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="mt-5 font-display text-6xl leading-[0.9] md:text-8xl text-cream">
              Toppings <span className="text-mustard">&amp;</span>
              <span className="block bg-mustard text-ink border-2 border-ink shadow-chunky-lg -rotate-2 inline-block px-3 py-1 mt-2">Ingredients</span>
            </h1>
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-6 max-w-xl text-lg text-cream/90">
              30+ hot &amp; cold toppings, locally sourced on the Sunshine Coast. Pile 'em high — there are no rules here.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Photo gallery — sharp Unsplash images, no stretching */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <Reveal>
          <h2 className="font-display text-4xl md:text-5xl mb-10">
            Fresh. <span className="text-teal">Local.</span> Delicious.
          </h2>
        </Reveal>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.map((g, i) => (
            <Reveal key={i} delay={i * 90}>
              <div className="group relative overflow-hidden rounded-3xl border-4 border-ink shadow-chunky-lg bg-card">
                <img
                  src={g.src}
                  alt={g.alt}
                  loading={i < 2 ? "eager" : "lazy"}
                  width={800}
                  height={800}
                  className="img-pop w-full aspect-square object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  style={{ imageRendering: "auto" }}
                />
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Category cards */}
      <section className="border-y-4 border-ink bg-bamboo-light">
        <div className="mx-auto max-w-6xl px-4 py-20">
          <Reveal>
            <h2 className="font-display text-5xl md:text-6xl">
              Pick your <span className="bg-teal text-cream px-2 border-2 border-ink -rotate-1 inline-block">flavour</span>
            </h2>
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
