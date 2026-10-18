import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import usePrefersReducedMotion from '../hooks/usePrefersReducedMotion';

const ease = [0.22, 1, 0.36, 1];

export default function Reveal({ children, delay = 0, className = '', as = 'div' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-64px' });
  const reduced = usePrefersReducedMotion();
  const MotionTag = motion[as] ?? motion.div;

  return (
    <MotionTag
      ref={ref}
      className={className}
      initial={reduced ? false : { opacity: 0, y: 28 }}
      animate={reduced || inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
      transition={{ duration: 0.7, delay, ease }}
    >
      {children}
    </MotionTag>
  );
}
