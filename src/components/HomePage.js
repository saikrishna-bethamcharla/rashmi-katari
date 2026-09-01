import Hero from "./Hero";
import Marquee from "./Marquee";
import Manifesto from "./Manifesto";
import Program from "./Program";
import Elements from "./Elements";
import Foundation from "./Foundation";
import Contact from "./Contact";
import Footer from "./Footer";
import Nav from "./Nav";
import Landscape from "./Landscape";

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
        <Program />
        <Elements />
        <Foundation />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
