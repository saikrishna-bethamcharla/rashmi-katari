import { useEffect } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import Lenis from "lenis";
import { Toaster } from "sonner";
import { FEATURES } from "./config/features";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import VisionPage from "./components/VisionPage";
import TeamPage from "./components/TeamPage";
import JourneyPage from "./components/JourneyPage";
import ContactPage from "./components/ContactPage";
import ScrollTop from "./components/ScrollTop";

export default function App() {
  const location = useLocation();

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

  useEffect(() => {
    if (window.__lenis) {
      window.__lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);

  return (
    <div data-testid="app-root">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/vision" element={<VisionPage />} />
        <Route
          path="/journey"
          element={FEATURES.showJourneyPage ? <JourneyPage /> : <Navigate to="/" replace />}
        />
        <Route
          path="/stories"
          element={FEATURES.showJourneyPage ? <JourneyPage /> : <Navigate to="/" replace />}
        />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <ScrollTop />
      <Toaster position="bottom-center" toastOptions={{ style: { background: "#1C1D19", color: "#EAE4D8", border: "1px solid #C9714F", borderRadius: 0 } }} />
    </div>
  );
}
