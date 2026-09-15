import { useState } from "react";
import Reveal from "./Reveal";
import { Eye, Heart, ArrowUpRight, X, Calendar, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const STORIES = [
  {
    id: "darkness-that-taught-me-to-see",
    year: "2009",
    date: "Feb 14, 2025",
    readTime: "2 min read",
    category: "Inner Awakening & Naturopathy",
    icon: Eye,
    title: "The Darkness That Taught Me to See",
    snippet:
      "In 2009, my world collapsed in a single night. I woke up and found myself in complete darkness—my vision was gone. Acute glaucoma had taken my sight, plunging me into fear and uncertainty. Yet within that profound silence, a deeper awakening began.",
    quote: "“When my physical vision went dark, an inner sight began to awaken.”",
    fullStory: [
      "In 2009, my world collapsed in a single night. I woke up and found myself in complete darkness—my vision was gone. Acute glaucoma had struck without warning, stripping away my ability to see the world around me.",
      "As someone trained in conventional healthcare, panic was my first response. The prognosis was terrifying, and the standard medical interventions offered little hope of restoring true, holistic sight. I was forced into absolute stillness.",
      "In that pitch-black void, stripped of external distractions, I was guided to look inward. I turned to ancient Nature Cure principles, physiological resting through therapeutic fasting, cellular detox, and deep meditation.",
      "Slowly, day by day, cell by cell, my body answered. The ocular pressure normalized, inflammation receded, and the light began to return. But I did not return as the same person. I realized the human body possesses a miraculous, innate intelligence to heal when we stop interfering and align with nature's laws.",
      "That darkness was not a punishment—it was the profound gift that redirected my life toward Naturopathy and true healing."
    ]
  },
  {
    id: "mothers-healing-journey",
    year: "2013",
    date: "Feb 14, 2025",
    readTime: "2 min read",
    category: "Reversing Chronic Illness",
    icon: Heart,
    title: "A Mother’s Healing: A Journey Back to Nature",
    snippet:
      "In 2013, I faced another life-altering challenge. My mother, who had been battling high blood pressure and heart issues for over 20 years, was trapped in a cycle of escalating medications. We chose a different path—one rooted in nature.",
    quote: "“Nature does not simply manage illness; it gently restores wholeness.”",
    fullStory: [
      "In 2013, I faced another life-altering challenge. My mother, who had been battling high blood pressure and heart issues for over 20 years, was caught in an exhausting cycle of daily pills, side effects, and diminishing vitality.",
      "Watching your own mother suffer is a pain that words cannot easily describe. Despite adhering strictly to medical advice for two decades, her health was steadily deteriorating. We knew we had to step outside the symptom-suppression model.",
      "Together, we embarked on a journey of pure Nature Cure. We removed processed stimulants, introduced live, sun-ripened foods, integrated therapeutic hydropathy, and allowed her cardiovascular system the rest it needed to regenerate.",
      "Within months, the transformation was undeniable. Her blood pressure stabilized to healthy youthful levels, her cardiac strain lifted, and she was able to step away completely from decades of heavy medications.",
      "Witnessing my mother reclaim her vitality solidified my conviction forever: true healing does not come from a bottle. It comes when we honor the body with the right food, pure water, emotional release, and reverence for life."
    ]
  }
];

export default function Stories() {
  const [activeStory, setActiveStory] = useState(null);

  return (
    <section id="stories" className="py-24 md:py-32 border-t border-line relative" data-testid="stories-section">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <Reveal className="text-sm font-semibold uppercase tracking-[0.25em] text-moss mb-6 drop-shadow-[0_1px_4px_rgba(0,0,0,0.85)]">
          The Journey
        </Reveal>
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <Reveal
              delay={0.1}
              className="font-serif font-light text-4xl sm:text-5xl lg:text-6xl max-w-2xl leading-[1.08] mb-6 text-white"
              data-testid="stories-heading"
            >
              Stories born from <span className="italic text-terra">lived experience</span>
            </Reveal>
            <Reveal delay={0.15} className="text-ink/90 font-light text-base md:text-lg max-w-xl leading-relaxed">
              Dr. Rashmi’s path into Naturopathy wasn’t theoretical—it was forged through personal health crises that revealed the body’s miraculous capacity to restore itself.
            </Reveal>
          </div>
          <Reveal delay={0.2} className="shrink-0">
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-terra hover:text-ink transition-colors font-medium border-b border-terra/40 pb-1"
            >
              Explore her certifications &amp; approach →
            </Link>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {STORIES.map((s, i) => (
            <Reveal
              key={s.id}
              delay={i * 0.1}
              className="group flex flex-col justify-between p-8 md:p-12 border border-line bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-500 rounded-sm"
              data-testid={`story-card-${s.id}`}
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-6">
                  <div className="flex items-center gap-3">
                    <span className="inline-block w-2.5 h-2.5 rounded-full bg-terra shrink-0" aria-hidden="true" />
                    <span className="text-xs uppercase tracking-widest text-terra font-medium">{s.category}</span>
                  </div>
                  <span className="font-serif text-2xl font-light text-white/50">{s.year}</span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-light text-white group-hover:text-terra transition-colors duration-300 mb-4 leading-snug">
                  {s.title}
                </h3>

                <p className="text-ink/90 font-light text-base md:text-lg leading-relaxed mb-6">
                  {s.snippet}
                </p>

                <p className="font-serif italic text-lg text-moss pt-4 border-t border-line/60 drop-shadow-[0_1px_3px_rgba(0,0,0,0.85)]">
                  {s.quote}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-line/40 flex items-center justify-between">
                <div className="flex items-center gap-4 text-xs text-ink/60 uppercase tracking-wider">
                  <span className="flex items-center gap-1.5"><Calendar size={13} /> {s.date}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1.5"><Clock size={13} /> {s.readTime}</span>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveStory(s)}
                  className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-terra hover:text-white font-medium transition-colors"
                  aria-label={`Read full story: ${s.title}`}
                >
                  Read Story <ArrowUpRight size={15} />
                </button>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Modal for Reading Full Story */}
      {activeStory && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 md:p-12 overflow-y-auto"
          onClick={() => setActiveStory(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="bg-sand border border-line max-w-2xl w-full p-8 md:p-12 relative my-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveStory(null)}
              className="absolute top-6 right-6 text-ink/60 hover:text-terra transition-colors"
              aria-label="Close modal"
            >
              <X size={24} />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <span className="inline-block w-2.5 h-2.5 rounded-full bg-terra shrink-0" aria-hidden="true" />
              <span className="text-xs uppercase tracking-widest text-terra font-medium">{activeStory.category} · {activeStory.year}</span>
            </div>

            <h3 className="font-serif text-3xl sm:text-4xl font-light text-white mb-6 leading-tight">
              {activeStory.title}
            </h3>

            <div className="flex items-center gap-4 text-xs text-ink/60 uppercase tracking-wider mb-8 pb-6 border-b border-line">
              <span>{activeStory.date}</span>
              <span>•</span>
              <span>{activeStory.readTime}</span>
              <span>•</span>
              <span>By Rashmi Katari, N.D.</span>
            </div>

            <div className="space-y-5 text-ink/90 font-light text-base sm:text-lg leading-[1.9]">
              {activeStory.fullStory.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-line flex items-center justify-between">
              <p className="font-serif italic text-base sm:text-lg text-moss">
                {activeStory.quote}
              </p>
              <button
                type="button"
                onClick={() => setActiveStory(null)}
                className="shrink-0 ml-4 px-5 py-2.5 bg-terra text-sand text-xs uppercase tracking-widest font-medium hover:bg-ink transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
