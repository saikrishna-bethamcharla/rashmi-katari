import { Link, useNavigate, useLocation } from "react-router-dom";
import { scrollToSection } from "./Nav";

export default function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const goSection = (id) => {
    const href = `#${id}`;
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => scrollToSection(href), 80);
      return;
    }
    scrollToSection(href);
  };

  return (
    <footer className="relative z-10 border-t border-line py-12" data-testid="site-footer">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <p className="font-serif text-xl">
          Rashmi <span className="italic text-terra">Katari</span>
        </p>
        <nav className="flex flex-wrap gap-6 text-xs uppercase tracking-widest text-ink/60">
          <Link to="/about" data-testid="footer-link-about" className="hover:text-terra transition-colors duration-300">
            about
          </Link>
          <Link to="/vision" data-testid="footer-link-vision" className="hover:text-terra transition-colors duration-300">
            our vision
          </Link>
          {["program", "elements", "contact"].map((id) => (
            <button
              key={id}
              onClick={() => goSection(id)}
              data-testid={`footer-link-${id}`}
              className="hover:text-terra transition-colors duration-300 capitalize"
            >
              {id}
            </button>
          ))}
          <a
            href="https://www.virupakshaniramayata.org/"
            target="_blank"
            rel="noopener noreferrer"
            data-testid="footer-link-foundation"
            className="hover:text-terra transition-colors duration-300"
          >
            foundation
          </a>
        </nav>
        <p className="text-xs text-ink/40">© Rashmi Katari</p>
      </div>
    </footer>
  );
}
