import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { scrollToSection } from "./Nav";

const MaskedLine = ({ children, delay = 0 }) => (
  <span className="block overflow-hidden">
    <motion.span
      className="block"
      initial={{ y: "110%" }}
      animate={{ y: 0 }}
      transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.span>
  </span>
);

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);

  return (
    <section id="top" ref={ref} className="relative pt-[72px] min-h-screen flex items-center overflow-hidden" data-testid="hero-section">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid md:grid-cols-12 gap-12 items-center py-24">
        <div className="md:col-span-7 md:order-2">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xs uppercase tracking-[0.3em] text-moss mb-8"
            data-testid="hero-eyebrow"
          >
            A sacred space · Guided by the five elements
          </motion.p>
          <h1 className="font-serif font-light text-[16vw] md:text-[7.5rem] leading-[0.95] tracking-tight" data-testid="hero-heading">
            <MaskedLine delay={0.35}>Rashmi</MaskedLine>
            <MaskedLine delay={0.5}>
              <span className="italic text-terra">Katari</span>
            </MaskedLine>
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1 }}
            className="mt-10 max-w-md text-base md:text-lg leading-relaxed text-ink/70 font-light"
            data-testid="hero-subtitle"
          >
            For healing, grounding, and conscious living — where nature, ritual,
            and inner stillness meet.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.2 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <button
              onClick={() => scrollToSection("#elements")}
              data-testid="hero-explore-button"
              className="group bg-ink text-sand px-8 py-4 text-xs uppercase tracking-widest hover:bg-terra transition-colors duration-300 flex items-center gap-3"
            >
              Explore the Elements
              <ArrowDown size={14} className="group-hover:translate-y-1 transition-transform duration-300" />
            </button>
            <button
              onClick={() => scrollToSection("#program")}
              data-testid="hero-program-button"
              className="px-8 py-4 text-xs uppercase tracking-widest border border-ink/30 hover:border-terra hover:text-terra transition-colors duration-300"
            >
              Our Program
            </button>
          </motion.div>
        </div>
        <div className="md:col-span-5 relative md:order-1">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-hidden rounded-t-full border border-line max-h-[80vh] md:max-h-none"
          >
            <motion.div style={{ y: imgY }} className="relative w-full h-[60vh] md:h-[75vh] scale-110">
              <img
                src={`${process.env.PUBLIC_URL}/art/mountains-hero-day.png?v=3`}
                alt="Color-sketch of bright mountain peaks with a meditating figure"
                className="w-full h-full object-cover"
                data-testid="hero-image"
              />
            </motion.div>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 1 }}
            className="absolute -bottom-6 -right-6 md:-right-12 font-serif italic text-lg text-moss bg-sand px-4 py-2 border border-line"
          >
            est. in devotion
          </motion.p>
        </div>
      </div>
    </section>
  );
}
