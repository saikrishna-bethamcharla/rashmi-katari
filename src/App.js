import { useEffect } from "react";
import Lenis from "lenis";
import { Toaster } from "sonner";
import Nav from "./components/Nav";
import Landscape from "./components/Landscape";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Manifesto from "./components/Manifesto";
import Program from "./components/Program";
import Elements from "./components/Elements";
import Foundation from "./components/Foundation";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.09, smoothWheel: true });
    window.__lenis = lenis;
    let rafId;
    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="bg-sand text-ink min-h-screen" data-testid="app-root">
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
      <Toaster position="bottom-center" toastOptions={{ style: { background: "#1C1D19", color: "#EAE4D8", border: "1px solid #C9714F", borderRadius: 0 } }} />
    </div>
  );
}
