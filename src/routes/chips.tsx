import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Reveal } from "@/components/Reveal";
import fryBar from "@/assets/chipnmix-sauces.jpg";

export const Route = createFileRoute("/chips")({
  head: () => ({
    meta: [
      { title: "Our Chips — Chip 'n' Mix" },
      { name: "description", content: "Three fresh-fried chip types: classic shoestring, sweet potato, and crinkle. Pull the lever, fill your bowl." },
      { property: "og:title", content: "Our Chips — Chip 'n' Mix" },
      { property: "og:description", content: "Three types of fresh-fried chips. You pull the lever." },
    ],
  }),
  component: ChipsPage,
});

const chips = [
  { name: "Classic Shoestring", emoji: "🍟", body: "Skinny, crispy, addictive. The original loaded-fry canvas.", color: "bg-secondary" },
  { name: "Sweet Potato", emoji: "🍠", body: "Crunchy edges, fluffy middles. A little sweet, a lot good.", color: "bg-primary text-primary-foreground" },
  { name: "Crinkle Cut", emoji: "〰️", body: "Ridges built for sauce. Maximum surface area for maximum flavour.", color: "bg-accent" },
];

function ChipsPage() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <SiteHeader />

      <section className="border-b-4 border-ink bg-accent">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
          <Reveal>
            <span className="inline-block rounded-full border-2 border-ink bg-card px-3 py-1 text-xs font-bold uppercase shadow-chunky">The base</span>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="mt-5 font-display text-6xl leading-[0.9] md:text-8xl">
              Our <span className="bg-primary text-primary-foreground px-3 py-1 inline-block border-2 border-ink shadow-chunky-lg -rotate-2">Chips.</span>
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-6 max-w-xl text-lg">
              Three types. Freshly cut. Fried to crisp perfection. Pull the lever — fill it up.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20">
        <div className="grid gap-6 md:grid-cols-3">
          {chips.map((c, i) => (
            <Reveal key={c.name} delay={i * 120}>
              <div className={`rounded-3xl border-4 border-ink ${c.color} p-6 shadow-chunky-lg h-full`}>
                <div className="text-7xl">{c.emoji}</div>
                <h3 className="mt-4 font-display text-3xl uppercase">{c.name}</h3>
                <p className="mt-2 text-base">{c.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <img
            src={fryBar}
            alt="Self-serve fry bar with yellow lever dispensers"
            className="img-pop mt-12 rounded-3xl border-4 border-ink shadow-chunky-lg w-full aspect-[16/9] object-cover"
          />
        </Reveal>

        <Reveal delay={150}>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link to="/toppings" className="rounded-full border-2 border-ink bg-primary px-6 py-3 font-bold text-primary-foreground shadow-chunky-lg transition-transform hover:-translate-y-1">
              Now load 'em up →
            </Link>
            <Link to="/find-us" className="rounded-full border-2 border-ink bg-card px-6 py-3 font-bold shadow-chunky transition-transform hover:-translate-y-1">
              Find us in Noosa
            </Link>
          </div>
        </Reveal>
      </section>

      <SiteFooter />
    </div>
  );
}
