import Reveal from "./Reveal";

const CHAPTERS = [
  {
    n: "01",
    title: "A Living Sanctuary",
    text: "We are creating a living sanctuary where nature, ritual, and inner stillness meet — a place to reconnect with the Earth, purify body and spirit, and return to the quiet truth within.",
  },
  {
    n: "02",
    title: "Held in Sacred Energy",
    text: "Guided by the five elements and held in sacred energy, this space invites deep emotional healing, meditation, conscious parenting, and a return to presence.",
  },
  {
    n: "03",
    title: "Every Offering Builds the Vision",
    text: "Every offering and contribution supports the vision of buying land and building a sustainable, natural environment where anyone can come to heal and grow.",
  },
];

export default function Manifesto() {
  return (
    <section id="about" className="py-24 md:py-32" data-testid="about-section">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <Reveal className="text-xs uppercase tracking-[0.3em] text-moss mb-6">
          About — The Intention
        </Reveal>
        <Reveal
          delay={0.1}
          className="font-serif font-light text-4xl sm:text-5xl lg:text-6xl max-w-2xl leading-[1.05] mb-20"
          data-testid="about-heading"
        >
          A return to the <span className="italic text-terra">quiet truth</span> within
        </Reveal>
        <div className="flex flex-col">
          {CHAPTERS.map((c, i) => (
            <Reveal
              key={c.n}
              delay={i * 0.08}
              className="grid md:grid-cols-12 gap-6 md:gap-10 py-12 border-t border-line group"
              data-testid={`manifesto-chapter-${c.n}`}
            >
              <div className="md:col-span-3">
                <span className="font-serif text-7xl md:text-8xl font-light text-terra/30 group-hover:text-terra transition-colors duration-500">
                  {c.n}
                </span>
              </div>
              <div className="md:col-span-4">
                <h3 className="font-serif text-2xl md:text-3xl font-light">{c.title}</h3>
              </div>
              <div className="md:col-span-5">
                <p className="text-base leading-relaxed text-ink/70 font-light">{c.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
