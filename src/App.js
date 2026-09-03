import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Lenis from "lenis";
import { Toaster } from "sonner";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import VisionPage from "./components/VisionPage";
import ScrollTop from "./components/ScrollTop";

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
    <div data-testid="app-root">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/vision" element={<VisionPage />} />
      </Routes>
      <ScrollTop />
      <Toaster position="bottom-center" toastOptions={{ style: { background: "#1C1D19", color: "#EAE4D8", border: "1px solid #C9714F", borderRadius: 0 } }} />
    </div>
  );
}
