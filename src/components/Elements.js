import Reveal from "./Reveal";
import { Mountain, Droplets, Flame, Wind, Sparkles } from "lucide-react";

const ELEMENTS = [
  {
    n: "I",
    icon: Mountain,
    title: "Earth",
    sub: "Food Forest and Grounding",
    text: "A natural food forest that follows nature's own rhythm — no chemicals, only living soil and pure intention. Forest walking, barefoot on dry leaves and soil, grounds our energy.",
  },
  {
    n: "II",
    icon: Droplets,
    title: "Water",
    sub: "Sacred Waters",
    text: "Mineral-rich, rain-fed pond water, naturally alkaline and deeply nourishing. Bathing in ponds and water ceremonies cleanse the body, mind, and energy field.",
  },
  {
    n: "III",
    icon: Flame,
    title: "Fire",
    sub: "Rituals and Sun Energy",
    text: "Agnihotra, Homas, and fire rituals purify the space and raise spiritual energy. Sunbathing absorbs the life-giving energy of the sun — transformation, power, and light.",
  },
  {
    n: "IV",
    icon: Wind,
    title: "Air",
    sub: "Breath and Life Force",
    text: "Clean, fresh air surrounded by trees and silence. Daily breathwork and pranayama rejuvenate body and mind, reconnecting us with the prana that flows through all living things.",
  },
  {
    n: "V",
    icon: Sparkles,
    title: "Space",
    sub: "Fasting and Inner Stillness",
    text: "Space for fasting, detox, and deep inner silence. A quiet, sacred environment to reset the nervous system — the element that allows all healing to unfold.",
  },
];

export default function Elements() {
  return (
    <section id="elements" className="py-24 md:py-32" data-testid="elements-section">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <Reveal className="text-xs uppercase tracking-[0.3em] text-moss mb-6">
          The Five Elements
        </Reveal>
        <Reveal
          delay={0.1}
          className="font-serif font-light text-4xl sm:text-5xl lg:text-6xl leading-[1.05] mb-20"
          data-testid="elements-heading"
        >
          Earth · Water · Fire · <span className="italic text-terra">Air · Space</span>
        </Reveal>

        <div className="flex flex-col">
          {ELEMENTS.map((el, i) => (
            <Reveal
              key={el.title}
              delay={i * 0.05}
              className="group grid md:grid-cols-12 gap-6 items-baseline py-12 border-t border-line last:border-b hover:bg-white/[0.03] transition-colors duration-500 px-2 md:px-4 -mx-2 md:-mx-4"
              data-testid={`element-${el.title.toLowerCase()}`}
            >
              <div className="md:col-span-2 flex items-center gap-4">
                <span className="font-serif text-4xl font-light text-terra/40 group-hover:text-terra transition-colors duration-500">{el.n}</span>
                <el.icon size={20} strokeWidth={1.5} className="text-moss" />
              </div>
              <div className="md:col-span-4">
                <h3 className="font-serif text-3xl md:text-4xl font-light group-hover:translate-x-2 transition-transform duration-500">
                  {el.title}
                </h3>
                <p className="text-xs uppercase tracking-widest text-moss mt-2">{el.sub}</p>
              </div>
              <p className="md:col-span-6 text-base leading-relaxed text-ink/70 font-light">{el.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
