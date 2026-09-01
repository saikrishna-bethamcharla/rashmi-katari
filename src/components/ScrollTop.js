import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toTop = () => {
    if (window.__lenis) {
      window.__lenis.scrollTo(0, { duration: 1.2 });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  if (!show) return null;

  return (
    <button
      type="button"
      onClick={toTop}
      aria-label="Scroll to top"
      data-testid="scroll-top-button"
      className="fixed bottom-6 right-6 z-50 w-11 h-11 flex items-center justify-center border border-line bg-sand/90 text-ink hover:bg-terra hover:text-sand hover:border-terra transition-colors duration-300"
    >
      <ArrowUp size={18} strokeWidth={1.5} />
    </button>
  );
}
