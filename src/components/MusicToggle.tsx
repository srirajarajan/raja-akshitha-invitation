import { useEffect, useRef, useState } from "react";
import { Music, VolumeX } from "lucide-react";
import { motion } from "framer-motion";

const TRACK = "https://cdn.pixabay.com/audio/2022/05/27/audio_1808fbf07a.mp3";

export function MusicToggle() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const a = new Audio(TRACK);
    a.loop = true;
    a.volume = 0.35;
    audioRef.current = a;

    const tryPlay = () => {
      a.play().then(() => setPlaying(true)).catch(() => {});
      window.removeEventListener("pointerdown", tryPlay);
    };
    // attempt autoplay; fallback on first user interaction
    a.play().then(() => setPlaying(true)).catch(() => {
      window.addEventListener("pointerdown", tryPlay, { once: true });
    });

    return () => {
      a.pause();
      window.removeEventListener("pointerdown", tryPlay);
    };
  }, []);

  const toggle = () => {
    const a = audioRef.current;
    if (!a) return;
    if (playing) {
      a.pause();
      setPlaying(false);
    } else {
      a.play().then(() => setPlaying(true)).catch(() => {});
    }
  };

  return (
    <motion.button
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2.5, duration: 1 }}
      onClick={toggle}
      aria-label={playing ? "Mute music" : "Play music"}
      className="glass fixed right-5 top-5 z-50 flex h-12 w-12 items-center justify-center rounded-full text-[var(--gold)] transition hover:scale-110 hover:gold-glow"
    >
      {playing ? <Music className="h-5 w-5 animate-shimmer" /> : <VolumeX className="h-5 w-5" />}
    </motion.button>
  );
}
