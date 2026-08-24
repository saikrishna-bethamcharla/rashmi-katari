const ITEMS = ["Earth", "Water", "Fire", "Air", "Space", "Healing", "Stillness", "Presence"];

export default function Marquee() {
  const row = [...ITEMS, ...ITEMS];
  return (
    <div className="border-y border-line py-10 overflow-hidden" data-testid="marquee-strip" aria-hidden="true">
      <div className="animate-marquee flex whitespace-nowrap w-max">
        {[0, 1].map((half) => (
          <div key={half} className="flex">
            {row.map((item, i) => (
              <span key={`${half}-${i}`} className="flex items-center">
                <span className="font-serif text-4xl md:text-6xl font-light px-10 md:px-16">{item}</span>
                <span className="w-2 h-2 rounded-full bg-terra/60" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
