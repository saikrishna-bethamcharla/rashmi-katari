import { scrollToSection } from "./Nav";

export default function Footer() {
  return (
    <footer className="border-t border-line py-12" data-testid="site-footer">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <p className="font-serif text-xl">
          Rashmi <span className="italic text-terra">Katari</span> Organisation
        </p>
        <nav className="flex flex-wrap gap-6 text-xs uppercase tracking-widest text-ink/60">
          {["about", "program", "elements", "foundation", "contact"].map((id) => (
            <button
              key={id}
              onClick={() => scrollToSection(`#${id}`)}
              data-testid={`footer-link-${id}`}
              className="hover:text-terra transition-colors duration-300 capitalize"
            >
              {id}
            </button>
          ))}
        </nav>
        <p className="text-xs text-ink/40">© Rashmi Katari Organisation — a sample website</p>
      </div>
    </footer>
  );
}
