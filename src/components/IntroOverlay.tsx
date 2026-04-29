import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function IntroOverlay() {
  const [show, setShow] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setShow(false), 2600);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-background"
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, letterSpacing: "0.1em" }}
              animate={{ opacity: 1, letterSpacing: "0.4em" }}
              transition={{ duration: 1.8, ease: "easeOut" }}
              className="font-display text-2xl uppercase text-gold-gradient md:text-4xl"
            >
              R &nbsp;&amp;&nbsp; A
            </motion.div>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.6, duration: 1.4, ease: "easeInOut" }}
              className="divider-gold mx-auto mt-6 w-48 origin-center"
            />
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 1 }}
              className="mt-4 text-xs uppercase tracking-[0.5em] text-muted-foreground"
            >
              An Invitation
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
