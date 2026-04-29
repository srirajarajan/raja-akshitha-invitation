import { useEffect, useState } from "react";
import { Reveal } from "../Reveal";
import { AnimatePresence, motion } from "framer-motion";

const TARGET = new Date("2026-12-12T18:30:00").getTime();

function calc() {
  const diff = Math.max(0, TARGET - Date.now());
  const d = Math.floor(diff / 86400000);
  const h = Math.floor((diff / 3600000) % 24);
  const m = Math.floor((diff / 60000) % 60);
  const s = Math.floor((diff / 1000) % 60);
  return { d, h, m, s };
}

function Unit({ value, label }: { value: number; label: string }) {
  const v = String(value).padStart(2, "0");
  return (
    <div className="glass relative flex flex-col items-center rounded-xl px-4 py-6 md:px-8 md:py-10">
      <div className="relative h-16 w-16 overflow-hidden md:h-24 md:w-28">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={v}
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 40, opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 flex items-center justify-center font-display text-5xl text-gold-gradient md:text-7xl"
          >
            {v}
          </motion.div>
        </AnimatePresence>
      </div>
      <p className="mt-3 text-[10px] uppercase tracking-[0.4em] text-muted-foreground md:text-xs">
        {label}
      </p>
    </div>
  );
}

export function Countdown() {
  const [t, setT] = useState(calc());
  useEffect(() => {
    const id = setInterval(() => setT(calc()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative py-16 md:py-24">
      <div className="absolute inset-0" style={{ background: "var(--gradient-radial-gold)" }} />
      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.5em] text-[var(--gold)]">Save the Date</p>
          <h2 className="mt-6 font-serif text-2xl italic text-[var(--beige)] md:text-3xl">
            Counting the moments until forever begins…
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="mt-10 grid grid-cols-4 gap-3 md:gap-6">
            <Unit value={t.d} label="Days" />
            <Unit value={t.h} label="Hours" />
            <Unit value={t.m} label="Minutes" />
            <Unit value={t.s} label="Seconds" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
