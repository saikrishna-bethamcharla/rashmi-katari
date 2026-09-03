import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const LINKS = [
  { label: "About", to: "/about", id: "nav-link-about" },
  { label: "Our Vision", to: "/vision", id: "nav-link-vision" },
  { label: "Program", href: "#program", id: "nav-link-program" },
  { label: "Five Elements", href: "#elements", id: "nav-link-elements" },
  { label: "Foundation", href: "https://www.virupakshaniramayata.org/", id: "nav-link-foundation", external: true },
];

export const scrollToSection = (href) => {
  if (window.__lenis) {
    window.__lenis.scrollTo(href, { offset: -72, duration: 1.4 });
  } else {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  }
};

export default function Nav() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const goSection = (e, href) => {
    e.preventDefault();
    setOpen(false);
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => scrollToSection(href), 80);
      return;
    }
    scrollToSection(href);
  };

  const go = (e, link) => {
    if (link.external) {
      setOpen(false);
      return;
    }
    if (link.to) {
      setOpen(false);
      return;
    }
    goSection(e, link.href);
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-sand/80 backdrop-blur-md border-b border-line" data-testid="site-nav">
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-[72px] flex items-center justify-between">
        <Link to="/" onClick={() => setOpen(false)} className="font-serif text-xl md:text-2xl tracking-tight" data-testid="nav-brand">
          Rashmi <span className="italic text-terra">Katari</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {LINKS.map((l) =>
            l.to ? (
              <Link
                key={l.id}
                to={l.to}
                onClick={() => setOpen(false)}
                data-testid={l.id}
                className="text-xs uppercase tracking-widest text-ink/70 hover:text-terra transition-colors duration-300"
              >
                {l.label}
              </Link>
            ) : (
              <a
                key={l.id}
                href={l.href}
                onClick={(e) => go(e, l)}
                target={l.external ? "_blank" : undefined}
                rel={l.external ? "noopener noreferrer" : undefined}
                data-testid={l.id}
                className="text-xs uppercase tracking-widest text-ink/70 hover:text-terra transition-colors duration-300"
              >
                {l.label}
              </a>
            )
          )}
          <button
            onClick={(e) => goSection(e, "#contact")}
            data-testid="nav-contact-button"
            className="text-xs uppercase tracking-widest border border-ink px-5 py-2.5 hover:bg-ink hover:text-sand transition-colors duration-300"
          >
            Begin a Conversation
          </button>
        </nav>
        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Menu" data-testid="mobile-menu-button">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden overflow-hidden border-t border-line bg-sand"
            data-testid="mobile-menu"
          >
            <div className="px-6 py-6 flex flex-col gap-5">
              {LINKS.map((l) =>
                l.to ? (
                  <Link
                    key={l.id}
                    to={l.to}
                    onClick={() => setOpen(false)}
                    data-testid={`mobile-${l.id}`}
                    className="font-serif text-2xl"
                  >
                    {l.label}
                  </Link>
                ) : (
                  <a
                    key={l.id}
                    href={l.href}
                    onClick={(e) => go(e, l)}
                    target={l.external ? "_blank" : undefined}
                    rel={l.external ? "noopener noreferrer" : undefined}
                    data-testid={`mobile-${l.id}`}
                    className="font-serif text-2xl"
                  >
                    {l.label}
                  </a>
                )
              )}
              <button onClick={(e) => goSection(e, "#contact")} data-testid="mobile-nav-contact" className="font-serif text-2xl italic text-terra text-left">
                Begin a Conversation
              </button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
