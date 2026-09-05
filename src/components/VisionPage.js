import { Link } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";
import Landscape from "./Landscape";

export default function VisionPage() {
  return (
    <div className="bg-sand text-ink min-h-screen" data-testid="vision-page">
      <div className="grain-overlay" aria-hidden="true" />
      <Landscape />
      <Nav />
      <main className="relative z-10 pt-[72px]">
        <section className="py-20 md:py-28">
          <div className="max-w-3xl mx-auto px-6 md:px-12">
            <p className="text-xs uppercase tracking-[0.3em] text-moss mb-6">Our Vision</p>
            <h1 className="font-serif font-light text-4xl sm:text-5xl lg:text-6xl leading-[1.08] mb-8">
              Nourishing the Body. Understanding the Emotions.{" "}
              <span className="italic text-terra">Connecting with Nature.</span>
            </h1>
            <Link
              to="/"
              className="text-xs uppercase tracking-widest text-ink/60 hover:text-terra transition-colors inline-block mb-16"
            >
              ← Back to home
            </Link>

            <div className="space-y-7 text-ink font-light leading-relaxed text-base md:text-lg">
              <p>
                We believe that true wellbeing begins when we stop looking at the body, food and emotions as separate things.
              </p>
              <p>
                Our vision is to create a space where people can explore the deeper relationship between what they eat, what they feel, how they live and how they connect with nature.
              </p>
              <p>
                Together, Rashmi, Chandana and Ram bring three complementary perspectives to this journey.
              </p>
              <p>
                Rashmi &amp; Chandana explore the emotional and inner dimensions of wellbeing—helping people become aware of emotional patterns, relationships, beliefs, inner needs and the ways these experiences influence everyday life.
              </p>
              <p>
                Rashmi &amp; Ram explore food and conscious eating—bringing together an understanding of the body with Ram’s seven-year journey as a raw vegan and natural farmer, and his experience of creating a food forest.
              </p>
            </div>

            <h2 className="font-serif font-light text-3xl md:text-4xl mt-16 mb-8">
              At the heart of our work is a simple question:
            </h2>
            <p className="font-serif italic text-2xl md:text-3xl text-terra mb-10 leading-snug">
              What if we understood ourselves before trying to change ourselves?
            </p>

            <div className="space-y-7 text-ink font-light leading-relaxed text-base md:text-lg">
              <p>We want to help people become more curious about their own bodies, emotions and choices.</p>
              <p>Instead of simply asking:</p>
              <p className="font-serif italic text-xl text-ink">“What should I eat?”</p>
              <p>we invite people to ask:</p>
              <p className="font-serif italic text-xl text-ink">“What does my body need?”</p>
              <p>And instead of asking only:</p>
              <p className="font-serif italic text-xl text-ink">“How do I control my emotions?”</p>
              <p>we invite people to ask:</p>
              <p className="font-serif italic text-xl text-ink">“What is this emotion trying to tell me?”</p>
              <p>
                We believe food can be nourishment, but it can also be connected to memories, emotions, habits and unmet needs. We believe nature can teach us about balance, patience and interconnectedness. And we believe that greater awareness can transform the way we relate to ourselves, to food, to other people and to the Earth.
              </p>
              <p>
                Our work brings together food, emotions, body awareness, natural living, yoga, meditation, conscious connection and nature.
              </p>
              <p>We are not here to give people one fixed formula for living.</p>
              <p>We are here to create a space for exploration.</p>
            </div>

            <ul className="mt-10 mb-12 space-y-3 text-ink font-light text-base md:text-lg">
              {[
                "A space to slow down.",
                "To listen to the body.",
                "To understand the emotions.",
                "To become conscious of our choices.",
                "To reconnect with food.",
                "To reconnect with nature.",
                "And ultimately, to reconnect with ourselves.",
              ].map((line) => (
                <li key={line} className="flex gap-3">
                  <span className="text-terra mt-1">·</span>
                  <span>{line}</span>
                </li>
              ))}
            </ul>

            <h2 className="font-serif font-light text-3xl md:text-4xl mb-6">Our vision is simple:</h2>
            <p className="font-serif italic text-2xl md:text-3xl leading-snug text-[#EAE4D8]">
              To help people move from unconscious living to conscious living—one meal, one emotion, one breath and one connection at a time.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
