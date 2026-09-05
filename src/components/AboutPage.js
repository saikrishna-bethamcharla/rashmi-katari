import { Link } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";
import Landscape from "./Landscape";

const PEOPLE = [
  {
    id: "rashmi",
    name: "Rashmi Katari",
    role: "Founder | Naturopathy | Nature Cure | Holistic Wellness",
    note: "Dentist by training · Doctor of Naturopathy · Guide toward natural, medication-aware living",
    image: `${process.env.PUBLIC_URL}/art/rashmi-portrait.png`,
    imageAlt: "Portrait of Rashmi Katari in a flower field",
    intro: [
      "Namaskaram. Rashmi Katari is a Doctor of Naturopathy (N.D.) with a background in dentistry who found her calling in Nature Cure and holistic health.",
      "After years of clinical practice as a dentist, she turned toward a path that looks at the whole person — body, mind, and spirit — and at how people can move toward genuine, sustainable health with the support of nature.",
      "Her work is devoted to helping people reclaim vitality through natural living: nutrition, movement, mindfulness, and the quiet intelligence of the body. She believes healing is not only the absence of illness, but a return to balance and to one’s own essence.",
      "This same journey gave rise to Virupaksha Niramayata — a vision of land and sanctuary where the five elements, emotional freedom, conscious parenting, and sacred practice can meet.",
    ],
    sections: [
      {
        title: "Education & Learning",
        paragraphs: [
          "Rashmi’s formal path moved from dentistry into naturopathy, nutrition, yoga, and breath. Alongside practice, she has trained in:",
        ],
        list: [
          "Doctor of Naturopathy — School of Natural Therapeutics",
          "Certified Breathwork Coach — One Sky International Life Skills and Healing, USA",
          "Natural healing and holistic detoxification — International School of Detoxification, USA",
          "Certified Nature Cure Therapist — International Institute of Mahayoga & Natural Hygiene, USA",
          "Gerson Therapist — Gerson Institute, USA",
          "Advanced training in Medical Nutrition — Lincoln University, Malaysia",
          "Certified Diabetes Educator — Indo Vietnam Medical Board",
          "Diploma in Nutrition and Health Education — IGNOU, India",
          "Internationally certified Yoga teacher (ERYT-500)",
        ],
        after: [
          "These studies sit alongside lived practice: listening to the body, working with food and breath, and holding space for emotional and spiritual repair.",
        ],
      },
      {
        title: "Her Work",
        paragraphs: [
          "Rashmi works as a Nature Cure practitioner, supporting people toward a more natural, less medication-dependent way of living where that is appropriate and desired.",
          "Her approach holds physical health together with emotional well-being. She draws on natural remedies, balanced nutrition, physical activity, and mindfulness, and looks at how these weave into daily life.",
          "She has spoken of her own inner struggle — years of silenced emotion, and the ways food and habit became a hiding place — and of finding release through breathwork, inner-child healing, and related practices. That personal turning shapes how she meets others.",
          "Through sessions and through the vision of Virupaksha Niramayata, she hopes to offer a path back to nature, to feeling, and to a life that feels more true.",
        ],
      },
      {
        title: "The Heart of Her Work",
        paragraphs: [
          "At the heart of Rashmi’s work is a simple offering:",
          "To help people return to the body’s wisdom, to emotional honesty, and to a life nourished by nature and grace.",
          "Virupaksha Niramayata is her prayer given form — a sanctuary still being built, dedicated to healing that includes the body, the heart, children, and the land. She invites others to walk that path with her.",
        ],
      },
    ],
  },
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
  },,
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
        <p className="text-xs uppercase tracking-[0.22em] text-moss mb-4">{person.role}</p>
        <h2 className="font-serif font-light text-4xl md:text-5xl mb-4">{person.name}</h2>
        {person.note && (
          <p className="text-sm tracking-wide text-terra mb-8">{person.note}</p>
        )}
        {person.intro?.map((p, i) => (
          <p key={i} className="text-ink font-light leading-relaxed mb-6">
            {p}
          </p>
        ))}
        {person.sections?.map((section) => (
          <div key={section.title} className="mt-12">
            <h3 className="font-serif text-2xl md:text-3xl font-light text-terra mb-6">
              {section.title}
            </h3>
            {section.paragraphs?.map((p, i) => (
              <p key={i} className="text-ink font-light leading-relaxed mb-6">
                {p}
              </p>
            ))}
            {section.list?.length > 0 && (
              <ul className="mb-8 space-y-2 text-ink font-light">
                {section.list.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="text-terra mt-1">·</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}
            {section.after?.map((p, i) => (
              <p key={i} className="text-ink font-light leading-relaxed mb-6">
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
            <p className="text-xs uppercase tracking-[0.3em] text-moss mb-6">About</p>
            <h1 className="font-serif font-light text-5xl md:text-6xl max-w-2xl leading-[1.05] mb-6">
              The people behind this <span className="italic text-terra">work</span>
            </h1>
            <p className="text-ink/90 font-light max-w-xl mb-4">
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
