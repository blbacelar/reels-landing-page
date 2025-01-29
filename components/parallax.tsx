'use client';

import { useScroll, motion, useTransform } from 'framer-motion';
import { useRef } from 'react';

export function ParallaxSection({ children, speed = 0.5 }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', `${100 * speed}%`]);

  return (
    <motion.section 
      ref={ref}
      style={{ y }}
      className="relative h-screen w-full overflow-hidden"
    >
      {children}
    </motion.section>
  );
} 