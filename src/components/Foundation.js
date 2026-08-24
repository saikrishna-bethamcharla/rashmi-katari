import Reveal from "./Reveal";
import { LandPlot, Leaf, HandHeart } from "lucide-react";
import { scrollToSection } from "./Nav";

const PILLARS = [
  {
    icon: LandPlot,
    title: "Sacred Land",
    text: "Every contribution and offering received will go towards buying the land and building this sacred space.",
  },
  {
    icon: Leaf,
    title: "Sustainable Healing",
    text: "We are committed to creating a sustainable, healing, natural environment where anyone can come to heal and grow.",
  },
  {
    icon: HandHeart,
    title: "Annadhanam",
    text: "Free food service will be offered every month on Ashtami as a humble offering back to the divine.",
  },
];

export default function Foundation() {
  return (
    <section id="foundation" className="py-24 md:py-32 bg-ink text-sand" data-testid="foundation-section">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <Reveal className="text-xs uppercase tracking-[0.3em] text-sand/50 mb-6">
          The Foundation
        </Reveal>
        <Reveal
          delay={0.1}
          className="font-serif font-light text-4xl sm:text-5xl lg:text-6xl max-w-3xl leading-[1.05] mb-6"
          data-testid="foundation-heading"
        >
          A vision of <span className="italic text-terra">devotion</span>
        </Reveal>
        <Reveal delay={0.2} className="text-sand/60 font-light max-w-xl mb-20">
          Buying land and creating the space — brick by brick, prayer by prayer.
        </Reveal>

        <div className="grid md:grid-cols-3 gap-px bg-sand/10 border border-sand/10">
          {PILLARS.map((p, i) => (
            <Reveal
              key={p.title}
              delay={i * 0.1}
              className="bg-ink p-10 md:p-12 group"
              data-testid={`foundation-${p.title.toLowerCase().replace(/\s/g, "-")}`}
            >
              <p.icon size={26} strokeWidth={1.25} className="text-terra mb-8 group-hover:-translate-y-1 transition-transform duration-500" />
              <h3 className="font-serif text-2xl md:text-3xl font-light mb-4">{p.title}</h3>
              <p className="text-sm leading-relaxed text-sand/60 font-light">{p.text}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-20 flex flex-col md:flex-row md:items-center md:justify-between gap-8 border-t border-sand/10 pt-12">
          <p className="font-serif italic text-2xl md:text-3xl font-light text-sand/80 max-w-xl">
            “You are welcome to support this dream from your heart and become part of something sacred.”
          </p>
          <button
            onClick={() => scrollToSection("#contact")}
            data-testid="foundation-support-button"
            className="shrink-0 bg-terra text-sand px-8 py-4 text-xs uppercase tracking-widest hover:bg-sand hover:text-ink transition-colors duration-300"
          >
            Support this Dream
          </button>
        </Reveal>
      </div>
    </section>
  );
}
