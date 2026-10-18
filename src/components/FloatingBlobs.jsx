import { motion } from 'motion/react';
import usePrefersReducedMotion from '../hooks/usePrefersReducedMotion';

const blobs = [
  { className: 'bg-sage/35 dark:bg-sage/20 -left-16 top-24 h-64 w-64', duration: 22, x: 40, y: 30 },
  { className: 'bg-sky-soft/40 dark:bg-sky-soft/15 right-0 top-40 h-72 w-72', duration: 28, x: -50, y: 40 },
  { className: 'bg-lavender/40 dark:bg-lavender/15 bottom-32 left-1/3 h-56 w-56', duration: 24, x: 30, y: -35 },
];

export default function FloatingBlobs() {
  const reduced = usePrefersReducedMotion();

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      {blobs.map((blob, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full blur-3xl ${blob.className}`}
          animate={
            reduced
              ? { opacity: 0.55 }
              : {
                  x: [0, blob.x, 0],
                  y: [0, blob.y, 0],
                  opacity: [0.45, 0.7, 0.45],
                }
          }
          transition={{
            duration: blob.duration,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}
