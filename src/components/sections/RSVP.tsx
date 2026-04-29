import { useState } from "react";
import { motion } from "framer-motion";
import { Reveal } from "../Reveal";
import { Heart, Send } from "lucide-react";

const GUEST_OPTIONS = ["Only Me", "1", "2", "3", "4", "5+"];
const DIET_OPTIONS = ["No Restrictions", "Vegetarian", "Vegan", "Jain", "Gluten-Free"];

export function RSVP() {
  const [attendance, setAttendance] = useState<"accept" | "afar" | null>(null);
  const [guests, setGuests] = useState<string>("Only Me");
  const [diet, setDiet] = useState<string>("No Restrictions");
  const [submitted, setSubmitted] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="relative py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-6">
        <Reveal className="text-center">
          <p className="text-xs uppercase tracking-[0.5em] text-[var(--gold)]">RSVP</p>
          <h2 className="mt-6 font-display text-4xl md:text-6xl text-gold-gradient">
            Will You Join Us?
          </h2>
          <div className="divider-gold mx-auto mt-6 w-32" />
          <p className="mx-auto mt-6 max-w-xl font-serif italic text-lg text-[var(--beige)]/85">
            Your presence is not just invited, it is awaited. Celebrate this unforgettable moment
            with us.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="glass mt-10 rounded-2xl p-8 md:p-12">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="py-12 text-center"
              >
                <Heart
                  className="mx-auto h-12 w-12 text-[var(--gold)] gold-glow"
                  style={{ filter: "drop-shadow(0 0 20px var(--gold))" }}
                />
                <h3 className="mt-6 font-display text-3xl text-gold-gradient">
                  Thank you, with love.
                </h3>
                <p className="mt-3 text-muted-foreground">
                  Your message has reached our hearts. See you soon.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={submit} className="space-y-6">
                <div>
                  <label className="text-[10px] uppercase tracking-[0.4em] text-[var(--gold)]">
                    Your Name
                  </label>
                  <input
                    required
                    type="text"
                    className="mt-2 w-full border-b border-[var(--gold)]/30 bg-transparent py-3 font-serif text-lg text-foreground outline-none transition-all focus:border-[var(--gold)]"
                  />
                </div>
                <div>
                  <label className="text-[10px] uppercase tracking-[0.4em] text-[var(--gold)]">
                    Email
                  </label>
                  <input
                    required
                    type="email"
                    className="mt-2 w-full border-b border-[var(--gold)]/30 bg-transparent py-3 font-serif text-lg text-foreground outline-none transition-all focus:border-[var(--gold)]"
                  />
                </div>
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label className="text-[10px] uppercase tracking-[0.4em] text-[var(--gold)]">
                      Number of Guests
                    </label>
                    <div className="relative mt-2">
                      <select
                        value={guests}
                        onChange={(e) => setGuests(e.target.value)}
                        className="w-full appearance-none border-b border-[var(--gold)]/30 bg-transparent py-3 pr-8 font-serif text-lg text-foreground outline-none transition-all duration-300 focus:border-[var(--gold)] focus:[box-shadow:0_4px_20px_-10px_var(--gold)]"
                      >
                        {GUEST_OPTIONS.map((o) => (
                          <option key={o} value={o} className="bg-background text-foreground">
                            {o}
                          </option>
                        ))}
                      </select>
                      <span className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-[var(--gold)]">
                        ▾
                      </span>
                    </div>
                  </div>
                  <div>
                    <label className="text-[10px] uppercase tracking-[0.4em] text-[var(--gold)]">
                      Dietary Preference
                    </label>
                    <div className="relative mt-2">
                      <select
                        value={diet}
                        onChange={(e) => setDiet(e.target.value)}
                        className="w-full appearance-none border-b border-[var(--gold)]/30 bg-transparent py-3 pr-8 font-serif text-lg text-foreground outline-none transition-all duration-300 focus:border-[var(--gold)] focus:[box-shadow:0_4px_20px_-10px_var(--gold)]"
                      >
                        {DIET_OPTIONS.map((o) => (
                          <option key={o} value={o} className="bg-background text-foreground">
                            {o}
                          </option>
                        ))}
                      </select>
                      <span className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-[var(--gold)]">
                        ▾
                      </span>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="text-[10px] uppercase tracking-[0.4em] text-[var(--gold)]">
                    A Message (optional)
                  </label>
                  <textarea
                    rows={3}
                    className="mt-2 w-full resize-none border-b border-[var(--gold)]/30 bg-transparent py-3 font-serif text-foreground outline-none transition-all focus:border-[var(--gold)]"
                  />
                </div>

                <div className="grid gap-4 pt-4 md:grid-cols-2">
                  {[
                    { id: "accept", label: "Accept with Love" },
                    { id: "afar", label: "Celebrate from Afar" },
                  ].map((o) => (
                    <button
                      key={o.id}
                      type="button"
                      onClick={() => setAttendance(o.id as "accept" | "afar")}
                      className={`rounded-full border px-6 py-4 text-xs uppercase tracking-[0.3em] transition-all duration-500 ${
                        attendance === o.id
                          ? "border-[var(--gold)] bg-[var(--gold)] text-background gold-glow"
                          : "border-[var(--gold)]/40 text-[var(--gold)] hover:border-[var(--gold)]"
                      }`}
                    >
                      {o.label}
                    </button>
                  ))}
                </div>

                <button
                  type="submit"
                  disabled={!attendance}
                  className="group mx-auto mt-6 flex items-center gap-3 rounded-full bg-gradient-to-r from-[var(--gold-deep)] via-[var(--gold)] to-[var(--gold-deep)] px-10 py-4 text-sm uppercase tracking-[0.3em] text-background transition-all duration-500 hover:gold-glow disabled:opacity-30"
                >
                  Send With Love
                  <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
