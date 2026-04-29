import { Reveal } from "../Reveal";

export function Footer() {
  return (
    <footer className="relative pb-12 pt-16">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <Reveal>
          <div className="divider-gold mx-auto w-40" />
          <p className="mt-10 text-xs uppercase tracking-[0.5em] text-[var(--gold)]">With Love</p>
          <h3 className="mt-6 font-display text-4xl text-gold-gradient md:text-6xl">
            Raja &amp; Akshitha
          </h3>
          <p className="mt-6 font-serif italic text-[var(--beige)]/70">
            “And they lived, happily, ever after.”
          </p>
          <p className="mt-10 text-[10px] uppercase tracking-[0.4em] text-muted-foreground">
            12 · 12 · 2026 — Salem
          </p>
        </Reveal>
      </div>
    </footer>
  );
}
