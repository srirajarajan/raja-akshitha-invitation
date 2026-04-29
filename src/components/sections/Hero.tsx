import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";
import { Particles } from "../Particles";
import { ChevronDown } from "lucide-react";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 animate-slow-pan bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background" />
      <div className="absolute inset-0" style={{ background: "var(--gradient-radial-gold)" }} />

      {/* Light rays */}
      <div className="pointer-events-none absolute inset-0">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="absolute top-0 h-full w-[2px] origin-top"
            style={{
              left: `${30 + i * 20}%`,
              background: "linear-gradient(180deg, oklch(0.88 0.09 88 / 0.5), transparent 70%)",
              transform: `rotate(${-8 + i * 8}deg)`,
              filter: "blur(6px)",
              animation: `ray-pulse ${6 + i}s ease-in-out infinite`,
            }}
          />
        ))}
      </div>

      <Particles count={50} />

      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center justify-center px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.8, duration: 1.4 }}
          className="text-[10px] uppercase tracking-[0.6em] text-[var(--gold)] md:text-xs"
        >
          Together with their families
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.0, duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 flex flex-nowrap items-center justify-center gap-x-4 whitespace-nowrap font-display text-5xl leading-[1.05] md:gap-x-6 md:text-7xl lg:text-8xl"
        >
          <span className="text-gold-gradient">Raja</span>
          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 3.6, duration: 1 }}
            className="inline-flex items-center justify-center text-3xl text-[var(--gold)] md:text-5xl"
            style={{ filter: "drop-shadow(0 0 20px var(--gold))" }}
          >
            ♥
          </motion.span>
          <span className="text-gold-gradient">Akshitha</span>
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 3.8, duration: 1.4 }}
          className="divider-gold mx-auto mt-8 w-56 origin-center"
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4.0, duration: 1.4 }}
          className="mt-6 font-serif text-lg italic text-[var(--beige)] md:text-2xl"
        >
          A celebration of love, destiny, and forever
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4.4, duration: 1.4 }}
          className="mt-3 text-sm tracking-wider text-muted-foreground md:text-base"
        >
          “Two souls, one journey, a lifetime to go…”
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { delay: 5, duration: 1 },
          y: { delay: 5, duration: 2.5, repeat: Infinity, ease: "easeInOut" },
        }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-[var(--gold)]"
      >
        <ChevronDown className="h-6 w-6" />
      </motion.div>
    </section>
  );
}
