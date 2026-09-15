import { Link } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";
import Landscape from "./Landscape";

const PEOPLE = [
  {
    id: "rashmi",
    name: "Rashmi Katari",
    role: "Founder | Naturopathy | Nature Cure | Holistic Wellness",
    note: "Doctor of Naturopathy (N.D.) · Guide toward natural, medication-free living worldwide",
    image: `${process.env.PUBLIC_URL}/art/rashmi-portrait.png`,
    imageAlt: "Portrait of Rashmi Katari in a flower field",
    intro: [
      "“Namaskaram, I'm Rashmi Katari, N.D. (Doctor of Naturopathy), a dedicated professional with a background in dentistry who has found her passion in the transformative world of Nature cure. With years of experience as a dentist, I have transitioned into a Nature cure practitioner, committed to guiding individuals worldwide towards holistic health and emotional well-being.”",
      "“My mission is to empower clients from every corner of the globe to reclaim their lives naturally. Through my personalized approach, I help clients achieve a medication-free existence, guiding them toward genuine, sustainable health. I firmly believe in the power of holistic health, addressing not only physical ailments but also nurturing emotional well-being.”",
      "This same journey gave rise to Virupaksha Niramayata — a sacred vision of land and sanctuary where the five elements, emotional freedom, conscious parenting, and natural living meet.",
    ],
    sections: [
      {
        title: "Her Approach & Healing Philosophy",
        paragraphs: [
          "“In my practice, I emphasize holistic healing, focusing on the interconnectedness of the body, mind, and spirit. By integrating natural remedies, balanced nutrition, physical activity, and mindfulness, I assist my clients in achieving optimal well-being. My goal is to facilitate a transformative journey, helping individuals rediscover their true essence and live a life filled with vitality and balance.”",
          "Her work holds physical health together with deep emotional honesty. Drawing from her own lived experience of inner healing, breathwork, and releasing conditioned patterns, she creates a compassionate, judgment-free space for clients around the world.",
        ],
      },
      {
        title: "Certifications",
        paragraphs: [
          "Rashmi has completed extensive international and clinical training across naturopathy, medical nutrition, cancer nutritional therapy, yoga, and breathwork:",
        ],
        list: [
          "Certified Breathwork Coach — One Sky International Life Skills and Healing, USA",
          "Doctor of Naturopathy from School of Natural Therapeutics",
          "Internationally Certified on Natural Healing & Holistic Detoxification from International School of Detoxification (USA)",
          "Certified Nature Cure Therapist and Member of International Institute of Mahayoga & Natural Hygiene (USA)",
          "Gerson Therapist — Gerson Institute of USA (Nutritional Programme on Cancer)",
          "Certified in Advance Training on Medical Nutrition — Lincoln University, Malaysia",
          "Certified Diabetes Educator — Indo Vietnam Medical Board",
          "Diploma in \"Nutrition and Health Education\" — IGNOU, India",
          "Internationally Certified Yoga Teacher (ERYT-500)",
        ],
        after: [
          "These studies sit alongside lived practice: listening to the body's quiet intelligence, working with living foods and circular breath, and holding space for lasting spiritual and emotional repair.",
        ],
      },
      {
        title: "An Invitation to Holistic Well-Being",
        paragraphs: [
          "“Join me on this empowering journey towards authentic health. Together, we'll explore the path to holistic wellness, unveiling the immense potential within you to lead a vibrant and medicine-free life. Let's embark on this transformative experience, embracing the natural essence of true well-being.”",
          "Virupaksha Niramayata is her prayer given form — a living sanctuary dedicated to healing that includes the body, the heart, children, and the land.",
        ],
      },
    ],
  },
];

function PersonCard({ person }) {
  return (
    <article
      id={person.id}
      className="grid md:grid-cols-12 gap-10 md:gap-16 items-start py-16 md:py-20 border-b border-line last:border-b-0"
      data-testid={`about-person-${person.id}`}
    >
      <div className="md:col-span-5 md:sticky md:top-28">
        <div className="overflow-hidden border border-line rounded-t-full">
          <img
            src={person.image}
            alt={person.imageAlt}
            className="w-full h-auto object-cover object-top"
          />
        </div>
      </div>
      <div className="md:col-span-7">
        <p className="text-base md:text-lg font-bold uppercase tracking-[0.22em] text-moss mb-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">{person.role}</p>
        <h2 className="font-serif font-light text-4xl md:text-5xl lg:text-6xl mb-4">{person.name}</h2>
        {person.note && (
          <p className="text-base tracking-wide text-terra font-medium mb-8">{person.note}</p>
        )}
        {person.intro?.map((p, i) => (
          <p key={i} className="text-ink/90 font-light text-[1.05rem] md:text-[1.125rem] leading-[2.1] tracking-[0.015em] [word-spacing:0.06em] mb-8">
            {p}
          </p>
        ))}
        {person.sections?.map((section) => (
          <div key={section.title} className="mt-16 pt-8 border-t border-line/60">
            <h3 className="font-serif text-3xl md:text-4xl font-medium text-terra tracking-wide mb-6 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
              {section.title}
            </h3>
            {section.paragraphs?.map((p, i) => (
              <p key={i} className="text-ink/90 font-light text-[1rem] md:text-[1.0625rem] leading-[2.05] tracking-[0.015em] [word-spacing:0.05em] mb-8">
                {p}
              </p>
            ))}
            {section.list?.length > 0 && (
              <ul className="mb-8 space-y-3.5 text-ink/90 font-light text-base md:text-lg">
                {section.list.map((item) => (
                  <li key={item} className="flex items-start gap-3.5">
                    <span className="inline-block w-2.5 h-2.5 rounded-full bg-terra shrink-0 mt-2" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}
            {section.after?.map((p, i) => (
              <p key={i} className="text-ink/90 font-light text-base md:text-lg leading-relaxed mb-6">
                {p}
              </p>
            ))}
          </div>
        ))}
      </div>
    </article>
  );
}

export default function AboutPage() {
  return (
    <div className="bg-sand text-ink min-h-screen" data-testid="about-page">
      <div className="grain-overlay" aria-hidden="true" />
      <Landscape />
      <Nav />
      <main className="relative z-10 pt-[72px]">
        <section className="py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <p className="text-base md:text-lg font-bold uppercase tracking-[0.25em] text-moss mb-6 drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">About</p>
            <h1 className="font-serif font-light text-4xl sm:text-5xl lg:text-6xl max-w-2xl leading-[1.08] mb-6 text-white">
              About <span className="italic text-terra">Rashmi Katari</span>
            </h1>
            <p className="text-ink/90 font-light text-base md:text-lg max-w-xl mb-4 leading-relaxed">
              Doctor of Naturopathy, Nature Cure practitioner, and guide toward natural, medication-free living.
            </p>
            <div className="flex gap-6 text-xs uppercase tracking-widest mb-12">
              <Link
                to="/"
                className="text-ink/60 hover:text-terra transition-colors"
              >
                ← Back to home
              </Link>
              <Link
                to="/team"
                className="text-ink/60 hover:text-terra transition-colors"
              >
                Meet Our Team →
              </Link>
            </div>

            {PEOPLE.map((person) => (
              <PersonCard key={person.id} person={person} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
