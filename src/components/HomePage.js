import Hero from "./Hero";
import Marquee from "./Marquee";
import Manifesto from "./Manifesto";
import Footer from "./Footer";
import Nav from "./Nav";
import Landscape from "./Landscape";
import Foundation from "./Foundation";
import { FEATURES } from "../config/features";

export default function HomePage() {
  return (
    <div className="bg-sand text-ink min-h-screen" data-testid="home-page">
      <div className="grain-overlay" aria-hidden="true" />
      <Landscape />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Manifesto />
        {FEATURES.showFoundationDonation && <Foundation />}
      </main>
      <Footer />
    </div>
  );
}
