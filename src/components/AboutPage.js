import { Link } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";
import Landscape from "./Landscape";

const PEOPLE = [
  {
    id: "chandana",
    name: "Chandana",
    role: "Wellness Advocate",
    image: `${process.env.PUBLIC_URL}/art/chandana.png`,
    imageAlt: "Portrait of Chandana among flowers",
    paragraphs: [
      "Having experienced deep emotional pain and suicidal thoughts from childhood, her innate introverted nature, social conditioning around her, and the ability to look through the intentions of people led her inward into a profound search for truth. What began as a journey of understanding herself gradually became an exploration into the deeper roots of suffering — beliefs and illusions, elemental imbalances, planetary influences, absorbed energies, and the many layers that shape human experience. Her journey through different teachers and healing paths gradually revealed the profound interconnectedness of the food, body, mind, emotions, energy, elements, and cosmos.",
      "She holds an MSc in Psychology, MSc in Biotechnology, and Yoga Teacher Training, and has explored and learned through various disciplines and healing approaches:",
    ],
    studies: [
      "Rebirthing Breathwork under Leonard Orr and Dr. Newton",
      "Inner Child Healing under Dr. Newton",
      "Family Constellations by Dr. Newton",
      "Sunyoga by Swami Uma Shankar",
      "Vedic Chanting",
      "Nature Cure",
      "Astrology",
      "Upanishadic knowledge and Vedic wisdom",
    ],
    closing: [
      "Each learning and experience has offered another layer of understanding, gradually moving from confusion towards clarity and from fear towards greater inner freedom.",
      "Today, she brings these understandings together along with raja yoga, karma yoga, jnana yoga and bhakti yoga to support physical, mental, and emotional well-being, integrating different sciences and healing approaches while seeking the essence that lies at the very basis of existence. Helping people move from sadness, pain, limiting patterns, and negative thinking towards greater awareness, freedom of expression, and their higher potential is the heart of her work. Through her programs and guidance, she hopes to offer the right tools and support to reconnect with oneself and experience the fullness of who we truly are.",
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
      <div className="md:col-span-5">
        <div className="overflow-hidden border border-line rounded-t-full">
          <img
            src={person.image}
            alt={person.imageAlt}
            className="w-full h-auto object-cover object-top"
          />
        </div>
      </div>
      <div className="md:col-span-7">
        <p className="text-xs uppercase tracking-[0.3em] text-moss mb-4">{person.role}</p>
        <h2 className="font-serif font-light text-4xl md:text-5xl mb-8">
          {person.name}
        </h2>
        {person.paragraphs.map((p, i) => (
          <p key={i} className="text-ink/80 font-light leading-relaxed mb-6">
            {p}
          </p>
        ))}
        {person.studies?.length > 0 && (
          <ul className="mb-8 space-y-2 text-ink/80 font-light">
            {person.studies.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="text-terra mt-1">·</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}
        {person.closing?.map((p, i) => (
          <p key={i} className="text-ink/80 font-light leading-relaxed mb-6">
            {p}
          </p>
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
            <p className="text-xs uppercase tracking-[0.3em] text-moss mb-6">About</p>
            <h1 className="font-serif font-light text-5xl md:text-6xl max-w-2xl leading-[1.05] mb-6">
              The people behind this <span className="italic text-terra">work</span>
            </h1>
            <p className="text-ink/70 font-light max-w-xl mb-4">
              Stories of practice, healing, and the search for what is true.
            </p>
            <Link
              to="/"
              className="text-xs uppercase tracking-widest text-ink/60 hover:text-terra transition-colors"
            >
              ← Back to home
            </Link>

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
