import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/chips", label: "Our Chips" },
  { to: "/toppings", label: "Toppings & Ingredients" },
  { to: "/find-us", label: "Find Us" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      {/* Main header (visible at top of page) */}
      <header className="border-b-4 border-ink bg-teal">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <button
            aria-label="Open menu"
            onClick={() => setOpen(true)}
            className="grid h-12 w-12 place-items-center rounded-full border-2 border-ink bg-cream shadow-chunky transition-transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <Menu className="h-6 w-6 text-ink" strokeWidth={3} />
          </button>

          <Link to="/" className="inline-flex items-center gap-2 font-display text-2xl text-cream">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-mustard border-2 border-ink shadow-chunky text-xl">🍟</span>
            <span className="leading-none">
              Chip <span className="text-mustard">'n'</span> Mix
            </span>
          </Link>

          <Link
            to="/find-us"
            className="hidden sm:inline-flex rounded-full border-2 border-ink bg-mustard px-4 py-2 text-sm font-bold text-ink shadow-chunky transition-transform hover:-translate-y-0.5"
          >
            Find Us
          </Link>
          <span className="sm:hidden w-12" aria-hidden />
        </div>
      </header>

      {/* Sticky navbar — slides in when scrolled past hero */}
      <div
        className={`fixed top-0 left-0 right-0 z-40 border-b-4 border-ink bg-teal shadow-chunky transition-transform duration-300 ease-out ${
          scrolled ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2">
          <button
            aria-label="Open menu"
            onClick={() => setOpen(true)}
            className="grid h-10 w-10 place-items-center rounded-full border-2 border-ink bg-cream shadow-chunky transition-transform hover:-translate-y-0.5"
          >
            <Menu className="h-5 w-5 text-ink" strokeWidth={3} />
          </button>

          <Link to="/" className="inline-flex items-center gap-2 font-display text-xl text-cream">
            <span className="grid h-8 w-8 place-items-center rounded-full bg-mustard border-2 border-ink text-lg">🍟</span>
            <span>Chip <span className="text-mustard">'n'</span> Mix</span>
          </Link>

          <Link
            to="/find-us"
            className="hidden sm:inline-flex rounded-full border-2 border-ink bg-mustard px-4 py-1.5 text-sm font-bold text-ink shadow-chunky transition-transform hover:-translate-y-0.5"
          >
            Find Us
          </Link>
          <span className="sm:hidden w-10" aria-hidden />
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
        className={`fixed inset-y-0 left-0 z-50 w-[88%] max-w-sm transform border-r-4 border-teal bg-ink text-cream shadow-chunky-lg transition-transform duration-300 ease-out ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b-2 border-cream/15 px-6 py-5">
          <span className="font-display text-2xl text-mustard">Menu</span>
          <button
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="grid h-11 w-11 place-items-center rounded-full border-2 border-cream bg-teal text-cream transition-transform hover:rotate-90"
          >
            <X className="h-5 w-5" strokeWidth={3} />
          </button>
        </div>
        <nav className="flex flex-col gap-1 px-4 py-6">
          {links.map((l, i) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              activeOptions={{ exact: true }}
              activeProps={{ className: "bg-teal text-cream" }}
              className="block rounded-2xl border-2 border-transparent px-4 py-4 font-display text-3xl uppercase tracking-tight text-cream transition-colors hover:bg-teal/90 hover:text-cream"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <span className="text-mustard mr-2">0{i + 1}</span>
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="absolute bottom-0 left-0 right-0 border-t-2 border-cream/15 px-6 py-5 text-sm text-cream/70">
          <div className="font-display text-mustard text-lg">Hastings St, Noosa</div>
          <div>chipnmix.com.au · @chipnmixit</div>
        </div>
      </aside>
    </>
  );
}
