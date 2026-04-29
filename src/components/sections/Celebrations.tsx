import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Reveal } from "../Reveal";

const events = [
  { name: "Engagement", date: "8 Dec 2026 · 7:00 PM", text: "Where two families came together to bless a forever promise." },
  { name: "Mehendi", date: "9 Dec 2026 · 11:00 AM", text: "A morning painted in henna, laughter, and golden glow." },
  { name: "Haldi", date: "10 Dec 2026 · 10:00 AM", text: "A ritual of warmth, light, and blessings before the vows." },
  { name: "Sangeet", date: "11 Dec 2026 · 7:30 PM", text: "An evening of music, dance, and joyous celebrations." },
  { name: "Wedding", date: "12 Dec 2026 · 6:30 PM", text: "The sacred moment when two souls become one, forever." },
  { name: "Reception", date: "13 Dec 2026 · 7:00 PM", text: "A grand celebration to share our happiness with you." },
];

function Card({ e, left }: { e: (typeof events)[number]; left: boolean }) {
  return (
    <div className={`glass rounded-2xl p-7 transition-all duration-700 hover:gold-glow ${left ? "md:text-right" : "md:text-left"}`}>
      <p className="text-[10px] uppercase tracking-[0.4em] text-[var(--gold)]">{e.date}</p>
      <h3 className="mt-3 font-display text-3xl text-gold-gradient">{e.name}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{e.text}</p>
    </div>
  );
}

function Row({ e, i }: { e: (typeof events)[number]; i: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const left = i % 2 === 0;

  return (
    <div ref={ref} className="relative">
      {/* Mobile dot */}
      <div className="absolute left-0 top-6 z-10 flex h-5 w-5 items-center justify-center md:hidden">
        <span className="absolute h-5 w-5 rounded-full bg-[var(--gold)]/30" />
        <span className="h-2.5 w-2.5 rounded-full bg-[var(--gold)] gold-glow" />
      </div>

      {/* Desktop center dot */}
      <div className="absolute left-1/2 top-8 z-10 hidden -translate-x-1/2 items-center justify-center md:flex">
        <span className="absolute h-5 w-5 rounded-full bg-[var(--gold)]/30" />
        <span className="h-2.5 w-2.5 rounded-full bg-[var(--gold)] gold-glow" />
      </div>

      <div className="grid grid-cols-1 gap-y-4 pl-10 md:grid-cols-2 md:gap-x-12 md:pl-0">
        {/* Left column */}
        <div className="md:pr-10">
          {left && (
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="hidden md:block"
            >
              <Card e={e} left />
            </motion.div>
          )}
        </div>
        {/* Right column */}
        <div className="md:pl-10">
          {!left && (
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="hidden md:block"
            >
              <Card e={e} left={false} />
            </motion.div>
          )}
        </div>
        {/* Mobile (always shown, full width, stacked) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="col-span-full md:hidden"
        >
          <Card e={e} left={false} />
        </motion.div>
      </div>
    </div>
  );
}

export function Celebrations() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 20%"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="relative py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="text-center">
          <p className="text-xs uppercase tracking-[0.5em] text-[var(--gold)]">The Rituals</p>
          <h2 className="mt-6 font-display text-4xl md:text-6xl text-gold-gradient">
            Wedding Celebrations
          </h2>
          <div className="divider-gold mx-auto mt-6 w-32" />
          <p className="mx-auto mt-6 max-w-xl font-serif italic text-lg text-[var(--beige)]/80">
            Six days, six rituals, one unforgettable beginning.
          </p>
        </Reveal>

        <div ref={containerRef} className="relative mt-14">
          {/* Mobile vertical track */}
          <div className="absolute left-[9px] top-0 h-full w-px bg-[var(--gold)]/15 md:hidden" />
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-[9px] top-0 w-px md:hidden"
          >
            <div className="h-full w-full" style={{ background: "linear-gradient(180deg, transparent, var(--gold), transparent)" }} />
          </motion.div>

          {/* Desktop center track */}
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-[var(--gold)]/15 md:block" />
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-1/2 top-0 hidden w-px -translate-x-1/2 md:block"
          >
            <div className="h-full w-full" style={{ background: "linear-gradient(180deg, transparent, var(--gold), transparent)" }} />
          </motion.div>

          <div className="space-y-8 md:space-y-12">
            {events.map((e, i) => (
              <Row key={e.name} e={e} i={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
