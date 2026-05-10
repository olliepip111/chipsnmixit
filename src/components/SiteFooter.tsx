export function SiteFooter() {
  return (
    <footer className="border-t-4 border-ink bg-ink text-cream">
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
