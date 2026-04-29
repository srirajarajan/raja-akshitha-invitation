import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import { Reveal } from "../Reveal";

const items = [
  { src: g1, caption: "The day we met ❤️", rotate: "-rotate-3" },
  { src: g2, caption: "Unforgettable moments ✨", rotate: "rotate-2" },
  { src: g3, caption: "Forever starts here 💍", rotate: "-rotate-2" },
];

export function Gallery() {
  return (
    <section className="relative py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="text-center">
          <p className="text-xs uppercase tracking-[0.5em] text-[var(--gold)]">Memories</p>
          <h2 className="mt-6 font-display text-4xl md:text-6xl text-gold-gradient">
            Moments in Time
          </h2>
          <div className="divider-gold mx-auto mt-6 w-32" />
        </Reveal>

        <div className="mt-10 grid gap-10 md:grid-cols-3 md:gap-8">
          {items.map((it, i) => (
            <Reveal key={i} delay={i * 0.15}>
              <figure
                className={`group mx-auto max-w-sm transform-gpu transition-all duration-700 hover:!rotate-0 hover:scale-[1.03] ${it.rotate}`}
              >
                <div className="glass overflow-hidden rounded-sm bg-[var(--beige)]/95 p-3 pb-16 shadow-[0_25px_60px_-20px_rgba(0,0,0,0.7)]">
                  <div className="relative overflow-hidden">
                    <img
                      src={it.src}
                      alt={it.caption}
                      loading="lazy"
                      width={800}
                      height={1024}
                      className="h-[26rem] w-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
                  </div>
                  <figcaption className="mt-6 text-center font-serif text-lg italic text-[oklch(0.25_0.02_60)]">
                    {it.caption}
                  </figcaption>
                </div>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
