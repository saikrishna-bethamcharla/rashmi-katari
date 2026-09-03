import { useState } from "react";
import Reveal from "./Reveal";
import { toast } from "sonner";
import { ArrowRight, Loader2 } from "lucide-react";

const MAIL = "virupakshaniramayata@gmail.com";

const inputCls =
  "w-full bg-transparent border-0 border-b border-ink/25 focus:border-terra focus:ring-0 outline-none py-4 text-base font-light placeholder:text-ink/35 transition-colors duration-300";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    setSending(true);
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${MAIL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
          _subject: `Rashmi Katari site — message from ${form.name}`,
          _template: "table",
        }),
      });
      const data = await res.json();
      if (!res.ok || data.success === "false") {
        throw new Error(data.message || "Send failed");
      }
      toast.success("Thank you — your message has been received with love.");
      setForm({ name: "", email: "", message: "" });
    } catch {
      toast.error("Something went wrong. Please try again, or email us directly.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32" data-testid="contact-section">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-16 md:gap-24">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.3em] text-moss mb-6">Contact</p>
          <h2 className="font-serif font-light text-4xl sm:text-5xl lg:text-6xl leading-[1.05]" data-testid="contact-heading">
            Begin a <span className="italic text-terra">conversation</span>
          </h2>
          <p className="mt-8 text-base leading-relaxed text-ink/70 font-light max-w-md">
            Whether you feel called to visit, contribute, or simply sit in stillness
            with us — write to us. Every message is read with presence.
          </p>
          <a
            href={`mailto:${MAIL}`}
            className="mt-8 inline-block text-sm tracking-wide text-terra hover:underline"
            data-testid="contact-email-link"
          >
            {MAIL}
          </a>
        </Reveal>

        <Reveal
          as="form"
          onSubmit={submit}
          delay={0.15}
          className="flex flex-col gap-8"
          data-testid="contact-form"
        >
          <div>
            <label htmlFor="contact-name" className="text-xs uppercase tracking-widest text-moss">Your Name</label>
            <input
              id="contact-name"
              data-testid="contact-name-input"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="Full name"
              className={inputCls}
            />
          </div>
          <div>
            <label htmlFor="contact-email" className="text-xs uppercase tracking-widest text-moss">Email</label>
            <input
              id="contact-email"
              type="email"
              data-testid="contact-email-input"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="you@example.com"
              className={inputCls}
            />
          </div>
          <div>
            <label htmlFor="contact-message" className="text-xs uppercase tracking-widest text-moss">Message</label>
            <textarea
              id="contact-message"
              rows={4}
              data-testid="contact-message-input"
              required
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder="What calls you here?"
              className={`${inputCls} resize-none`}
            />
          </div>
          <button
            type="submit"
            disabled={sending}
            data-testid="contact-submit-button"
            className="group self-start bg-ink text-sand px-10 py-4 text-xs uppercase tracking-widest hover:bg-terra transition-colors duration-300 flex items-center gap-3 disabled:opacity-50"
          >
            {sending ? "Sending" : "Send with Presence"}
            {sending ? (
              <Loader2 size={14} className="animate-spin" />
            ) : (
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
            )}
          </button>
        </Reveal>
      </div>
    </section>
  );
}
