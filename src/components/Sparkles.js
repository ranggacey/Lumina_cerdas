// src/components/Sparkles.js
"use client";

import { useEffect } from 'react';
import { gsap } from 'gsap';

export const Sparkles = () => {
  useEffect(() => {
    const createSparkle = () => {
      const sparkle = document.createElement('div');
      sparkle.className = 'absolute w-2 h-2 bg-white rounded-full shadow-xl';
      
      gsap.set(sparkle, {
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        scale: 0
      });

      gsap.to(sparkle, {
        duration: 2,
        scale: Math.random() * 0.5 + 0.5,
        opacity: 0,
        onComplete: () => sparkle.remove()
      });

      document.body.appendChild(sparkle);
    };

    const interval = setInterval(createSparkle, 100);
    return () => clearInterval(interval);
  }, []);

  return null;
};