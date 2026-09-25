import { Link } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";
import Landscape from "./Landscape";
import Stories from "./Stories";

export default function JourneyPage() {
  return (
    <div className="bg-sand text-ink min-h-screen" data-testid="journey-page">
      <div className="grain-overlay" aria-hidden="true" />
      <Landscape />
      <Nav />
      <main className="relative z-10 pt-[72px]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 pt-10">
          <Link
            to="/"
            className="text-xs uppercase tracking-widest text-ink/60 hover:text-terra transition-colors inline-block"
          >
            ← Back to home
          </Link>
        </div>
        <Stories />
      </main>
      <Footer />
    </div>
  );
}
