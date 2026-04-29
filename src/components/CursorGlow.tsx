import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function CursorGlow() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(max-width: 768px)").matches) {
      setHidden(true);
      return;
    }
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  if (hidden) return null;

  return (
    <>
      <motion.div
        className="pointer-events-none fixed z-[100] h-3 w-3 rounded-full bg-[var(--gold)] mix-blend-screen"
        animate={{ x: pos.x - 6, y: pos.y - 6 }}
        transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.3 }}
        style={{ boxShadow: "0 0 20px var(--gold), 0 0 40px var(--gold)" }}
      />
      <motion.div
        className="pointer-events-none fixed z-[99] h-40 w-40 rounded-full mix-blend-screen"
        animate={{ x: pos.x - 80, y: pos.y - 80 }}
        transition={{ type: "spring", stiffness: 80, damping: 20, mass: 0.8 }}
        style={{
          background: "radial-gradient(circle, oklch(0.82 0.13 85 / 0.25), transparent 70%)",
        }}
      />
    </>
  );
}
