import { Link } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";
import Landscape from "./Landscape";

const TEAM = [
  {
    id: "chandana",
    name: "Chandana",
    role: "Wellness Advocate | Psychology | Yoga | Emotional Well-being",
    note: "12+ years of experience in mental, emotional, and inner well-being",
    image: `${process.env.PUBLIC_URL}/art/chandana.png`,
    imageAlt: "Portrait of Chandana among flowers",
    intro: [
      "Chandana is a Wellness Advocate whose personal journey of self-discovery has evolved into a deeper exploration of human suffering, emotional well-being, consciousness, and inner transformation.",
      "Her journey began with a deep search to understand herself and the suffering she experienced from childhood. Her innate introverted nature, social conditioning, and sensitivity to the intentions and experiences of people around her gradually led her inward, into a profound search for truth.",
      "What began as a journey of understanding herself slowly became an exploration into the deeper roots of human suffering—beliefs and conditioning, elemental imbalances, planetary influences, absorbed energies, and the many layers that shape the human experience.",
      "Over the past 12+ years, Chandana has explored different teachers, traditions, sciences, and experiential approaches. Each experience opened another layer of understanding and revealed to her the interconnectedness of the mind, emotions, energy, elements, relationships, and consciousness.",
    ],
    sections: [
      {
        title: "Education & Learning",
        paragraphs: [
          "Chandana holds an MSc in Psychology, MSc in Biotechnology, and Yoga Teacher Training. Alongside her academic education, she has explored and learned through various disciplines and experiential approaches, including:",
        ],
        list: [
          "Rebirthing Breathwork",
          "Inner Child Healing",
          "Family Constellation",
          "Emotional Awareness and Understanding",
          "Relationship and Connection Work",
          "Raja Yoga",
          "Karma Yoga",
          "Jnana Yoga",
          "Bhakti Yoga",
        ],
        after: ["Each path has offered her a different perspective and another piece of the larger picture."],
      },
      {
        title: "Her Work",
        paragraphs: [
          "Today, Chandana brings these understandings together to support mental and emotional well-being.",
          "Her work integrates psychology, yoga, emotional awareness, breathwork, inner-child exploration, relationship work, and other approaches that can support deeper self-understanding.",
          "She believes that many of the struggles people experience—emotional pain, fear, limiting patterns, negative thinking, relationship difficulties, and disconnection from oneself—can become opportunities for greater awareness and understanding.",
          "Chandana creates a supportive space where individuals can explore their inner world, understand their emotional and behavioural patterns, express what they truly feel, and reconnect with themselves.",
          "Her intention is not to tell people who they should become, but to help them see, understand, and experience themselves more clearly.",
        ],
      },
      {
        title: "The Heart of Her Work",
        paragraphs: [
          "At the heart of Chandana’s work is a simple intention:",
          "To help people move from pain towards understanding, from limitation towards freedom, and from unconscious patterns towards greater awareness.",
          "Her journey continues to be a search for deeper truth and the essence of human existence. Through her work, she invites others to explore that journey within themselves.",
        ],
      },
    ],
  },
  {
    id: "tikkaram",
    name: "Tikkaram",
    role: "Raw Vegan for 7 Years | Natural Farmer | Food Forest Creator | Nature-Based Living",
    note: "Exploring natural living, conscious eating, and the intelligence of the soil",
    image: `${process.env.PUBLIC_URL}/art/tikkaram.png`,
    imageAlt: "Portrait of Tikkaram holding a frangipani flower",
    intro: [
      "Tikkaram is a raw vegan practitioner and natural farmer who has been exploring natural living and conscious eating for the past seven years. His work is centred around reconnecting people with natural food, the soil, the body and the intelligence of nature.",
      "Tikkaram’s journey is an exploration of what it means to live in closer harmony with nature.",
      "For the past seven years, he has followed a raw vegan lifestyle, making natural, living foods an important part of his personal journey. Through his own experience, he has explored the relationship between food, the body, energy, health and conscious living.",
      "For him, raw veganism is not simply a dietary choice. It is a way of becoming more aware of where food comes from, how it affects the body, and how our choices connect us with the natural world.",
      "His journey has naturally led him towards natural farming and food-forest development. He is creating a food forest where different plants, fruit trees and food-producing species can grow together as part of a living ecosystem.",
    ],
    sections: [
      {
        title: "His Work With Nature",
        paragraphs: [
          "Tikkaram’s work begins with the soil.",
          "He is interested in growing food in ways that respect natural cycles, biodiversity and the living ecosystem, rather than treating farming only as a method of producing crops.",
          "Through the food forest, he is exploring how we can create spaces that provide food while also supporting the soil, plants, insects, trees and the wider environment.",
          "For him, farming is not only about producing food—it is a way of learning from nature.",
        ],
      },
      {
        title: "His Philosophy",
        paragraphs: [
          "Tikkaram believes that our relationship with food starts much earlier than the moment we sit down to eat.",
          "It begins with the seed, soil, water, sunlight and the way the food is grown.",
          "This perspective influences the way he approaches raw vegan living and natural farming. He encourages people to become more conscious of their food choices and to develop a closer connection with the source of their nourishment.",
          "His work brings together:",
        ],
        list: [
          "Raw vegan living",
          "Natural farming",
          "Food-forest creation",
          "Natural and conscious eating",
          "Ecological awareness",
          "Connection with nature",
          "Simple, sustainable living",
        ],
      },
      {
        title: "Experience as His Teacher",
        paragraphs: [
          "Much of Tikkaram’s understanding comes through direct experience—living the lifestyle, growing food, observing nature and learning through the changing seasons.",
          "He continues to experiment, observe and learn rather than presenting one rigid way of living.",
          "His intention is to share this journey with others and inspire people to become more curious about their food, their bodies and their relationship with nature.",
        ],
      },
      {
        title: "His Vision",
        paragraphs: [
          "Tikkaram dreams of creating living spaces where people can experience food differently—not simply as something purchased and consumed, but as something connected to soil, plants, nature and life itself.",
          "Through his raw vegan journey and food-forest work, he hopes to inspire a simpler question:",
          "“Can we live in a way that nourishes both ourselves and the Earth?”",
          "“When we understand where our food comes from, we begin to understand our connection with nature.”",
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
      data-testid={`team-person-${person.id}`}
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
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-moss mb-4 drop-shadow-[0_1px_3px_rgba(0,0,0,0.85)]">{person.role}</p>
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

export default function TeamPage() {
  return (
    <div className="bg-sand text-ink min-h-screen" data-testid="team-page">
      <div className="grain-overlay" aria-hidden="true" />
      <Landscape />
      <Nav />
      <main className="relative z-10 pt-[72px]">
        <section className="py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-moss mb-6 drop-shadow-[0_1px_4px_rgba(0,0,0,0.85)]">Our Team</p>
            <h1 className="font-serif font-light text-4xl sm:text-5xl lg:text-6xl max-w-2xl leading-[1.08] mb-6 text-white">
              Guiding minds and <span className="italic text-terra">guardians</span> of the land
            </h1>
            <p className="text-ink/90 font-light text-base md:text-lg max-w-xl mb-4 leading-relaxed">
              Dedicated practitioners bringing psychology, emotional awareness, conscious eating, and natural farming together.
            </p>
            <div className="flex gap-6 text-xs uppercase tracking-widest mb-12">
              <Link
                to="/"
                className="text-ink/60 hover:text-terra transition-colors"
              >
                ← Home
              </Link>
              <Link
                to="/about"
                className="text-ink/60 hover:text-terra transition-colors"
              >
                About Rashmi Katari →
              </Link>
            </div>

            {TEAM.map((person) => (
              <PersonCard key={person.id} person={person} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
