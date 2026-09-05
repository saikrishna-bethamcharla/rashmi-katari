import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Reveal from "./Reveal";
import { Flame, Heart, Moon, Sprout } from "lucide-react";

const PILLARS = [
  {
    icon: Flame,
    title: "Energy",
    sub: "High-Vibration Field",
    points: [
      "Sacred energy maintained through rituals, sound, mantra, and presence.",
      "Every corner of the space is consecrated with love and prayer.",
      "A place where you will instantly feel safe, uplifted, and held.",
    ],
  },
  {
    icon: Heart,
    title: "Emotions",
    sub: "Deep Emotional Healing",
    points: [
      "A safe environment to heal womb trauma, inner child pain, and past life wounds.",
      "Gentle support for emotional release and inner integration.",
      "This is a space that listens to your heart.",
    ],
  },
  {
    icon: Moon,
    title: "Mind",
    sub: "Meditation and Stillness",
    points: [
      "Spaces for silent retreats, moon meditations, and spiritual practices.",
      "No rush, no noise — just the opportunity to meet yourself fully.",
      "A return to peace, mindfulness, and clarity.",
    ],
  },
  {
    icon: Sprout,
    title: "Parenting",
    sub: "Conscious Living",
    points: [
      "Courses for parents on raising trauma-free, emotionally aware children.",
      "Tools for gentle parenting, emotional intelligence, and conscious living.",
      "Building a healthier, more connected future generation.",
    ],
  },
];

export default function Program() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <section id="program" ref={ref} className="py-24 md:py-32 bg-white/[0.03] border-y border-line" data-testid="program-section">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <Reveal className="text-xs uppercase tracking-[0.3em] text-moss mb-6">
          The Program
        </Reveal>
        <Reveal
          delay={0.1}
          className="font-serif font-light text-4xl sm:text-5xl lg:text-6xl max-w-3xl leading-[1.05] mb-20"
          data-testid="program-heading"
        >
          Four paths into <span className="italic text-terra">presence</span>
        </Reveal>

        <div className="grid md:grid-cols-12 gap-8 md:gap-12">
          <div className="md:col-span-5 relative">
            <div className="md:sticky md:top-28">
              <div className="overflow-hidden border border-line max-h-[60vh] md:max-h-none">
                <motion.img
                  src={`${process.env.PUBLIC_URL}/art/program-portrait.png`}
                  alt="Family portrait in celebration"
                  style={{ y: y1 }}
                  className="w-full h-[50vh] md:h-[65vh] object-cover scale-110" style={{ objectPosition: "center 30%" }}
                  data-testid="program-image"
                />
              </div>
              <p className="font-serif italic text-lg text-moss mt-4 -ml-1">
                “No rush, no noise — just the opportunity to meet yourself fully.”
              </p>
            </div>
          </div>
          <div className="md:col-span-7 flex flex-col">
            {PILLARS.map((p, i) => (
              <Reveal
                key={p.title}
                delay={i * 0.06}
                className="group py-10 border-t border-line first:border-t-0 md:first:border-t grid grid-cols-12 gap-4 hover:bg-white/[0.04] transition-colors duration-500 px-2 md:px-4 -mx-2 md:-mx-4"
                data-testid={`program-pillar-${p.title.toLowerCase()}`}
              >
                <div className="col-span-2 md:col-span-1 flex items-start pt-1">
                  <p.icon size={22} strokeWidth={1.5} className="text-terra" />
                </div>
                <div className="col-span-10 md:col-span-4">
                  <h3 className="font-serif text-2xl md:text-3xl font-light group-hover:translate-x-1 group-hover:text-terra transition-all duration-500">
                    {p.title}
                  </h3>
                  <p className="text-xs uppercase tracking-widest text-moss mt-2">{p.sub}</p>
                </div>
                <ul className="col-span-12 md:col-span-7 space-y-2 text-sm leading-relaxed text-ink font-light md:pt-1">
                  {p.points.map((pt, j) => (
                    <li key={j} className="flex gap-3">
                      <span className="text-terra mt-1">·</span>
                      {pt}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
