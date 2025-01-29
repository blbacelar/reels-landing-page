'use client';

import { useState, useEffect } from 'react';

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Set fixed start and end times
    const startTime = new Date('January 28, 2025 20:40:00'); // 8:40pm
    const endTime = new Date(startTime);
    endTime.setHours(startTime.getHours() + 12); // 12 hours later

    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = endTime.getTime() - now;
      
      if (difference > 0) {
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        
        return { hours, minutes, seconds };
      }
      return { hours: 0, minutes: 0, seconds: 0 };
    };

    // Initial calculation
    setTimeLeft(calculateTimeLeft());
    
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="inline-flex items-center bg-gray-900 px-3 py-1 rounded-md border-2 border-gray-700 shadow-lg">
      <div className="font-mono flex space-x-1 text-2xl md:text-4xl">
        {/* Hours */}
        <div className="flex space-x-px">
          <span className="bg-gradient-to-b from-green-400 to-green-700 text-transparent bg-clip-text px-1">
            {String(timeLeft.hours).padStart(2, '0')[0]}
          </span>
          <span className="bg-gradient-to-b from-green-400 to-green-700 text-transparent bg-clip-text px-1">
            {String(timeLeft.hours).padStart(2, '0')[1]}
          </span>
        </div>
        
        {/* Colon */}
        <span className="text-green-400 animate-pulse">:</span>
        
        {/* Minutes */}
        <div className="flex space-x-px">
          <span className="bg-gradient-to-b from-green-400 to-green-700 text-transparent bg-clip-text px-1">
            {String(timeLeft.minutes).padStart(2, '0')[0]}
          </span>
          <span className="bg-gradient-to-b from-green-400 to-green-700 text-transparent bg-clip-text px-1">
            {String(timeLeft.minutes).padStart(2, '0')[1]}
          </span>
        </div>
        
        {/* Colon */}
        <span className="text-green-400 animate-pulse">:</span>
        
        {/* Seconds */}
        <div className="flex space-x-px">
          <span className="bg-gradient-to-b from-green-400 to-green-700 text-transparent bg-clip-text px-1">
            {String(timeLeft.seconds).padStart(2, '0')[0]}
          </span>
          <span className="bg-gradient-to-b from-green-400 to-green-700 text-transparent bg-clip-text px-1">
            {String(timeLeft.seconds).padStart(2, '0')[1]}
          </span>
        </div>
      </div>
    </div>
  );
}

// Add this CSS to your globals.css or use Tailwind arbitrary variants
<style jsx>{`
  .digital-digit {
    background: linear-gradient(180deg, #00ff00 0%, #009900 100%);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    text-shadow: 0 0 8px rgba(0, 255, 0, 0.4);
    font-family: 'Courier New', monospace;
    font-weight: 700;
    padding: 0 2px;
    transition: transform 0.3s ease;
  }
`}</style> 