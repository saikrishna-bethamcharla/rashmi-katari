import Reveal from "./Reveal";

export default function Foundation() {
  return (
    <section
      id="foundation"
      className="relative z-10 py-16 md:py-24 border-b border-line"
      data-testid="foundation-section"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <Reveal className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <p className="font-serif italic text-2xl md:text-3xl font-light text-[#EAE4D8]/90 max-w-xl leading-relaxed">
            “You are welcome to support this dream from your heart and become part of something sacred.”
          </p>
          <a
            href="https://www.virupakshaniramayata.org/about-4-1"
            target="_blank"
            rel="noopener noreferrer"
            data-testid="foundation-support-button"
            className="shrink-0 bg-terra text-[#101110] px-8 py-4 text-xs uppercase tracking-widest hover:bg-[#EAE4D8] hover:text-[#101110] transition-colors duration-300 inline-block text-center font-medium"
          >
            Donation
          </a>
        </Reveal>
      </div>
    </section>
  );
}
