import { useEffect, useMemo, useState } from "react";

export function Particles({ count = 40 }: { count?: number }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const particles = useMemo(
    () =>
      Array.from({ length: count }).map(() => ({
        left: Math.random() * 100,
        size: 1 + Math.random() * 3,
        delay: Math.random() * 20,
        duration: 18 + Math.random() * 18,
        opacity: 0.3 + Math.random() * 0.6,
      })),
    [count],
  );

  if (!mounted) return null;

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((p, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-[var(--gold-soft)]"
          style={{
            left: `${p.left}%`,
            bottom: 0,
            width: `${p.size}px`,
            height: `${p.size}px`,
            opacity: p.opacity,
            boxShadow: "0 0 6px var(--gold), 0 0 12px var(--gold-soft)",
            animation: `float-up ${p.duration}s linear ${p.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}
