import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/menu", label: "Chips & Toppings" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Main top header — only visible when at top */}
      <header className="relative z-30 bg-cream/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <button
            aria-label="Open menu"
            onClick={() => setOpen(true)}
            className="grid h-11 w-11 place-items-center rounded-full bg-card shadow-soft ring-1 ring-ink/10 transition-transform hover:-translate-y-0.5"
          >
            <Menu className="h-5 w-5 text-ink" strokeWidth={2.5} />
          </button>

          <Link to="/" className="inline-flex items-center gap-2 font-display text-2xl text-ink">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-secondary ring-1 ring-ink/10 text-lg">🍟</span>
            <span className="leading-none">
              Chip <span className="text-primary">'n'</span> Mix
            </span>
          </Link>

          <span className="w-11" aria-hidden />
        </div>
      </header>

      {/* Slim sticky bar — slides down on scroll */}
      <div
        aria-hidden={!scrolled}
        className={`fixed inset-x-0 top-0 z-40 transition-transform duration-300 ease-out ${
          scrolled ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="bg-cream/95 backdrop-blur-md border-b border-ink/10 shadow-soft">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2.5">
            <button
              aria-label="Open menu"
              onClick={() => setOpen(true)}
              className="grid h-9 w-9 place-items-center rounded-full bg-card ring-1 ring-ink/10 transition-transform hover:-translate-y-0.5"
            >
              <Menu className="h-4 w-4 text-ink" strokeWidth={2.5} />
            </button>

            <Link to="/" className="inline-flex items-center gap-2 font-display text-lg text-ink">
              <span className="grid h-7 w-7 place-items-center rounded-full bg-secondary text-sm">🍟</span>
              <span>Chip <span className="text-primary">'n'</span> Mix</span>
            </Link>

            <span className="w-9" aria-hidden />
          </div>
        </div>
      </div>

      {/* Backdrop */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-50 bg-ink/60 backdrop-blur-sm transition-opacity duration-300 ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden
      />

      {/* Slide-out panel */}
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
        className={`fixed inset-y-0 left-0 z-50 w-[88%] max-w-sm transform bg-ink text-cream transition-transform duration-300 ease-out ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-cream/15 px-6 py-5">
          <span className="font-display text-2xl text-secondary">Menu</span>
          <button
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="grid h-10 w-10 place-items-center rounded-full bg-cream/10 text-cream transition-transform hover:rotate-90"
          >
            <X className="h-5 w-5" strokeWidth={2.5} />
          </button>
        </div>
        <nav className="flex flex-col gap-1 px-4 py-6">
          {links.map((l, i) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              activeOptions={{ exact: true }}
              activeProps={{ className: "bg-primary/90 text-cream" }}
              className="block rounded-2xl px-4 py-4 font-display text-3xl uppercase tracking-tight text-cream transition-colors hover:bg-cream/10"
            >
              <span className="text-secondary mr-2">0{i + 1}</span>
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="absolute bottom-0 left-0 right-0 border-t border-cream/15 px-6 py-5 text-sm text-cream/70">
          <div className="font-display text-secondary text-lg">Hastings St, Noosa</div>
          <div>chipnmix.com.au · @chipnmixit</div>
        </div>
      </aside>
    </>
  );
}
