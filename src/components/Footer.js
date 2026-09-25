import { Link, useNavigate, useLocation } from "react-router-dom";
import { scrollToSection } from "./Nav";
import { FEATURES } from "../config/features";

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
        <Link to="/" className="font-serif text-xl hover:opacity-80 transition-opacity">
          Rashmi <span className="italic text-terra">Katari</span>
        </Link>
        <nav className="flex flex-wrap gap-6 text-xs uppercase tracking-widest text-ink">
          <Link to="/" data-testid="footer-link-home" className="hover:text-terra transition-colors duration-300">
            home
          </Link>
          <Link to="/about" data-testid="footer-link-about" className="hover:text-terra transition-colors duration-300">
            about
          </Link>
          <Link to="/team" data-testid="footer-link-team" className="hover:text-terra transition-colors duration-300">
            our team
          </Link>
          <Link to="/vision" data-testid="footer-link-vision" className="hover:text-terra transition-colors duration-300">
            our vision
          </Link>
          {FEATURES.showJourneyPage && (
            <Link to="/journey" data-testid="footer-link-journey" className="hover:text-terra transition-colors duration-300">
              journey
            </Link>
          )}
          <Link to="/contact" data-testid="footer-link-contact" className="hover:text-terra transition-colors duration-300">
            contact
          </Link>
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
        <div className="text-xs text-ink space-y-2">
          <p>© Rashmi Katari</p>
          <p>
            <a href="mailto:virupakshawellness@gmail.com" className="hover:text-terra">virupakshawellness@gmail.com</a>
            <span className="mx-2">·</span>
            <a href="tel:+919704795319" className="hover:text-terra">+91 97047 95319</a>
          </p>
          <p className="flex items-center gap-1.5 text-ink/80">
            <span>Powered by</span>
            <img
              src={`${process.env.PUBLIC_URL}/art/zailabs-logo.png`}
              alt=""
              className="h-[1em] w-auto object-contain"
            />
            <span>Zailabs</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
