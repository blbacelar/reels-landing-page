'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const reelPreviews = [
  '/reels/reel-1.mp4',
  '/reels/reel-2.mp4',
  '/reels/reel-3.mp4',
  '/reels/reel-4.mp4',
  '/reels/reel-5.mp4',
];

export function ReelCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reelPreviews.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full overflow-hidden rounded-2xl shadow-2xl">
      <AnimatePresence mode='wait'>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          <video 
            src={reelPreviews[currentIndex]}
            autoPlay
            muted
            loop
            className="h-full w-full object-cover"
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
} 