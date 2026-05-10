import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Reveal } from "@/components/Reveal";
import storefront from "@/assets/chipnmix-storefront.jpg";

export const Route = createFileRoute("/find-us")({
  head: () => ({
    meta: [
      { title: "Find Us — Chip 'n' Mix, Hastings St Noosa" },
      { name: "description", content: "Visit Chip 'n' Mix at 8 Hastings St, Noosa Heads QLD. Open 7 days. Dine-in, takeaway and delivery." },
      { property: "og:title", content: "Find Chip 'n' Mix in Noosa" },
      { property: "og:description", content: "8 Hastings St, Noosa Heads. Open 7 days." },
    ],
  }),
  component: FindUsPage,
});

const hours: Array<[string, string]> = [
  ["Mon – Thu", "11:00 – 21:00"],
  ["Fri – Sat", "11:00 – 22:00"],
  ["Sunday", "11:00 – 21:00"],
];

function FindUsPage() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <SiteHeader />

      <section className="border-b-4 border-ink bamboo-bg">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
          <div>
            <Reveal>
              <span className="inline-block rounded-full border-2 border-ink bg-card px-3 py-1 text-xs font-bold uppercase shadow-chunky">Visit us</span>
            </Reveal>
            <Reveal delay={100}>
              <h1 className="mt-5 font-display text-6xl leading-[0.9] md:text-7xl">
                Come say <span className="bg-secondary text-ink px-2 border-2 border-ink -rotate-2 inline-block">hi 👋</span>
              </h1>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-6 text-lg">Tucked on the buzziest stretch of Hastings Street. Salt in the air, vinegar on the chips.</p>
            </Reveal>

            <Reveal delay={250}>
              <img
                src={storefront}
                alt="Chip 'n' Mix storefront on Hastings Street, Noosa Heads"
                className="img-pop mt-6 rounded-3xl border-4 border-ink shadow-chunky-lg w-full aspect-[4/5] object-cover max-w-sm"
              />
            </Reveal>

            <Reveal delay={300}>
              <div className="mt-8 rounded-3xl border-4 border-ink bg-card p-6 shadow-chunky-lg">
                <div className="font-display text-2xl">📍 8 Hastings St</div>
                <div className="text-muted-foreground">Noosa Heads QLD 4567, Australia</div>
                <a
                  href="https://maps.google.com/?q=8+Hastings+St+Noosa+Heads"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-block font-bold text-primary underline"
                >
                  Open in Maps →
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={150}>
            <div className="rounded-3xl border-4 border-ink bg-card p-6 shadow-chunky-lg">
              <h3 className="font-display text-3xl">Opening Hours</h3>
              <ul className="mt-4 divide-y-2 divide-ink/10">
                {hours.map(([d, h]) => (
                  <li key={d} className="flex items-center justify-between py-3">
                    <span className="font-semibold">{d}</span>
                    <span className="font-display">{h}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 rounded-2xl border-2 border-ink bg-secondary p-4">
                <div className="font-display">💸 $20–40 per person</div>
                <div className="text-sm opacity-80">Dine-in upstairs · Takeaway · Delivery</div>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="https://instagram.com/chipnmixit" target="_blank" rel="noreferrer" className="rounded-full border-2 border-ink bg-primary px-5 py-2 font-bold text-primary-foreground shadow-chunky transition-transform hover:-translate-y-1">📸 @chipnmixit</a>
                <a href="https://tiktok.com/@chipnmixit" target="_blank" rel="noreferrer" className="rounded-full border-2 border-ink bg-accent px-5 py-2 font-bold shadow-chunky transition-transform hover:-translate-y-1">🎵 TikTok</a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
