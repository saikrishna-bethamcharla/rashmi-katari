import { Link } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";
import Landscape from "./Landscape";
import Program from "./Program";
import Elements from "./Elements";

export default function VisionPage() {
  return (
    <div className="bg-sand text-ink min-h-screen" data-testid="vision-page">
      <div className="grain-overlay" aria-hidden="true" />
      <Landscape />
      <Nav />
      <main className="relative z-10 pt-[72px]">
        {/* Top Back Link & Page Introduction Banner */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 pt-10 pb-4">
          <Link
            to="/"
            className="text-xs uppercase tracking-widest text-ink/60 hover:text-terra transition-colors inline-block"
          >
            ← Back to home
          </Link>
        </div>

        {/* Section 1: The Program (Four Paths) */}
        <Program />

        {/* Section 2: The Five Elements */}
        <Elements />

        {/* Section 3: Our Vision Philosophy & Statement (Wide layout at the bottom) */}
        <section className="py-24 md:py-32 border-t border-line" data-testid="vision-philosophy-section">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            
            {/* Wide Header Grid */}
            <div className="grid md:grid-cols-12 gap-8 items-start mb-20">
              <div className="md:col-span-4">
                <p className="text-base md:text-lg font-bold uppercase tracking-[0.25em] text-moss mb-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
                  Our Vision
                </p>
                <p className="font-serif italic text-2xl md:text-3xl text-terra leading-snug">
                  “What if we understood ourselves before trying to change ourselves?”
                </p>
              </div>
              <div className="md:col-span-8">
                <h1 className="font-serif font-light text-4xl sm:text-5xl lg:text-6xl leading-[1.08] text-white mb-8">
                  Nourishing the Body. <span className="text-white">Understanding the Emotions.</span>{" "}
                  <span className="italic text-terra">Connecting with Nature.</span>
                </h1>
                <div className="grid md:grid-cols-2 gap-8 text-ink/90 font-light text-base md:text-lg leading-relaxed">
                  <p>
                    We believe that true wellbeing begins when we stop looking at the body, food and emotions as separate things. Our vision is to create a space where people can explore the deeper relationship between what they eat, what they feel, how they live and how they connect with nature.
                  </p>
                  <p>
                    We believe food can be nourishment, but it can also be connected to memories, emotions, habits and unmet needs. We believe nature can teach us about balance, patience and interconnectedness. And we believe that greater awareness can transform the way we relate to ourselves, to food, to other people and to the Earth.
                  </p>
                </div>
              </div>
            </div>

            {/* Perspectives Grid (2 Wide Cards Spanned Across Width) */}
            <div className="grid md:grid-cols-2 gap-8 mb-20">
              <div className="p-8 md:p-12 border border-line bg-white/[0.02] rounded-sm">
                <span className="text-xs uppercase tracking-widest text-terra font-medium block mb-3">
                  Emotional &amp; Inner Dimensions
                </span>
                <h3 className="font-serif text-2xl md:text-3xl font-light text-white mb-4">
                  Rashmi &amp; Chandana
                </h3>
                <p className="text-ink/90 font-light text-base md:text-lg leading-relaxed">
                  Exploring the emotional and inner dimensions of wellbeing—helping people become aware of emotional patterns, relationships, beliefs, inner needs and the ways these experiences influence everyday life.
                </p>
              </div>

              <div className="p-8 md:p-12 border border-line bg-white/[0.02] rounded-sm">
                <span className="text-xs uppercase tracking-widest text-terra font-medium block mb-3">
                  Food &amp; Conscious Eating
                </span>
                <h3 className="font-serif text-2xl md:text-3xl font-light text-white mb-4">
                  Rashmi &amp; Ram
                </h3>
                <p className="text-ink/90 font-light text-base md:text-lg leading-relaxed">
                  Bringing together an understanding of the body with Ram’s seven-year journey as a raw vegan and natural farmer, exploring living foods and his experience creating a biodiverse food forest.
                </p>
              </div>
            </div>

            {/* Inquiries Comparison Grid (Wide 2-column) */}
            <div className="p-8 md:p-14 border border-line bg-white/[0.03] mb-20 rounded-sm">
              <div className="max-w-2xl mb-10">
                <p className="text-xs uppercase tracking-widest text-moss font-bold mb-2">Deep Inquiries</p>
                <h3 className="font-serif text-3xl md:text-4xl font-light text-white">
                  Inviting deeper curiosity into our choices
                </h3>
              </div>
              <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                <div className="space-y-4 border-l-2 border-line pl-6">
                  <p className="text-xs uppercase tracking-widest text-ink/60">Instead of asking:</p>
                  <p className="font-serif italic text-2xl text-ink/70">“What should I eat?”</p>
                  <p className="text-xs uppercase tracking-widest text-terra pt-2">We invite you to ask:</p>
                  <p className="font-serif text-2xl md:text-3xl text-white">“What does my body need?”</p>
                </div>
                <div className="space-y-4 border-l-2 border-terra/60 pl-6">
                  <p className="text-xs uppercase tracking-widest text-ink/60">Instead of asking:</p>
                  <p className="font-serif italic text-2xl text-ink/70">“How do I control my emotions?”</p>
                  <p className="text-xs uppercase tracking-widest text-terra pt-2">We invite you to ask:</p>
                  <p className="font-serif text-2xl md:text-3xl text-white">“What is this emotion trying to tell me?”</p>
                </div>
              </div>
            </div>

            {/* A Space For Exploration (7 Elements Spanned in a Grid) */}
            <div className="mb-20">
              <div className="mb-8">
                <p className="text-xs uppercase tracking-widest text-moss font-bold mb-2">The Sanctuary Intention</p>
                <h3 className="font-serif text-3xl md:text-4xl font-light text-white">
                  We are here to create a space for exploration
                </h3>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  "A space to slow down",
                  "To listen to the body",
                  "To understand the emotions",
                  "To become conscious of our choices",
                  "To reconnect with food",
                  "To reconnect with nature",
                  "And ultimately, to reconnect with ourselves",
                ].map((line, idx) => (
                  <div key={idx} className="p-6 border border-line bg-white/[0.02] flex items-start gap-3 rounded-sm">
                    <span className="inline-block w-2.5 h-2.5 rounded-full bg-terra shrink-0 mt-1.5" aria-hidden="true" />
                    <span className="text-ink/90 font-light text-base md:text-lg">{line}.</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Final Vision Banner */}
            <div className="p-10 md:p-14 border border-terra/30 bg-[#141514] text-center max-w-4xl mx-auto rounded-sm">
              <p className="text-xs uppercase tracking-widest text-moss font-bold mb-4">Our Vision Is Simple</p>
              <p className="font-serif italic text-2xl sm:text-3xl md:text-4xl text-terra leading-relaxed">
                “To help people move from unconscious living to conscious living—one meal, one emotion, one breath and one connection at a time.”
              </p>
            </div>

          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
