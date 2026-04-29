import { Reveal } from "../Reveal";
import { MapPin } from "lucide-react";

const MAP_URL = "https://maps.app.goo.gl/gTHgoyDxydbFdgX99?g_st=aw";

export function Location() {
  return (
    <section className="relative py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="text-center">
          <p className="text-xs uppercase tracking-[0.5em] text-[var(--gold)]">Find Us</p>
          <h2 className="mt-6 font-display text-4xl md:text-6xl text-gold-gradient">The Venue</h2>
          <div className="divider-gold mx-auto mt-6 w-32" />
          <p className="mx-auto mt-6 max-w-xl font-serif italic text-lg text-[var(--beige)]/85">
            Salem, Tamil Nadu
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <a
            href={MAP_URL}
            target="_blank"
            rel="noreferrer"
            aria-label="Open venue location in Google Maps"
            className="glass relative mt-10 block cursor-pointer overflow-hidden rounded-2xl p-2 transition-all duration-500 hover:gold-glow"
          >
            <div
              className="pointer-events-none absolute inset-0 z-10"
              style={{
                background:
                  "radial-gradient(ellipse at center, transparent 50%, oklch(0.13 0.008 60 / 0.7) 100%)",
              }}
            />
            <iframe
              title="Venue map — Salem"
              src="https://www.openstreetmap.org/export/embed.html?bbox=78.10%2C11.62%2C78.20%2C11.70&layer=mapnik&marker=11.6643%2C78.1460"
              className="pointer-events-none h-[420px] w-full rounded-xl"
              style={{ filter: "invert(0.92) hue-rotate(180deg) saturate(0.4) contrast(0.95)" }}
              loading="lazy"
            />
          </a>
        </Reveal>

        <Reveal delay={0.3} className="mt-8 text-center">
          <a
            href={MAP_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 rounded-full border border-[var(--gold)] px-8 py-4 text-sm uppercase tracking-[0.3em] text-[var(--gold)] transition-all duration-500 hover:bg-[var(--gold)] hover:text-background hover:gold-glow"
          >
            <MapPin className="h-4 w-4" />
            View on Map
          </a>
        </Reveal>
      </div>
    </section>
  );
}
