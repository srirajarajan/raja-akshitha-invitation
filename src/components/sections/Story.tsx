import { useRef, useState } from "react";
import { Reveal } from "../Reveal";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import heroBg from "@/assets/hero-bg.jpg";

const moments = [
  { src: g1, caption: "The day we met ❤️" },
  { src: g2, caption: "From strangers to everything ✨" },
  { src: g3, caption: "Moments that became memories 💫" },
  { src: heroBg, caption: "Forever starts here 💍" },
];

// duplicate for seamless infinite loop
const loop = [...moments, ...moments];

export function Story() {
  const [paused, setPaused] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);

  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="text-center">
          <p className="text-xs uppercase tracking-[0.5em] text-[var(--gold)]">Our Story</p>
          <h2 className="mt-6 font-display text-4xl md:text-6xl text-gold-gradient">
            Our Journey
          </h2>
          <div className="divider-gold mx-auto mt-6 w-32" />
          <p className="mx-auto mt-6 max-w-xl font-serif italic text-lg text-[var(--beige)]/80">
            Every great love story has a beginning. Here is ours.
          </p>
        </Reveal>
      </div>

      <Reveal delay={0.15} className="mt-12">
        <div
          className="group relative w-full"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* edge fades */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent md:w-32" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent md:w-32" />

          <div
            ref={trackRef}
            className="flex w-max gap-6 px-6 md:gap-8 md:px-10 marquee-track overflow-x-auto md:overflow-hidden snap-x snap-mandatory md:snap-none"
            style={{
              animation: "marquee 40s linear infinite",
              animationPlayState: paused ? "paused" : "running",
            }}
          >
            {loop.map((m, i) => (
              <figure
                key={i}
                className="group/card relative h-72 w-64 shrink-0 snap-center overflow-hidden rounded-2xl border border-[var(--gold)]/30 shadow-[0_10px_40px_-10px_oklch(0.82_0.13_85_/_0.3)] transition-all duration-700 hover:scale-[1.04] hover:border-[var(--gold)] hover:gold-glow md:h-80 md:w-72"
              >
                <img
                  src={m.src}
                  alt={m.caption}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1.4s] ease-out group-hover/card:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                <figcaption className="absolute inset-x-0 bottom-0 p-5 text-center font-serif italic text-base text-[var(--beige)] md:text-lg">
                  {m.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </Reveal>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @media (max-width: 768px) {
          .marquee-track { animation: none !important; }
        }
      `}</style>
    </section>
  );
}
