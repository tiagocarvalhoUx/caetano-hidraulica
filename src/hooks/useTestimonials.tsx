// src/hooks/useTestimonials.js
import { useState, useEffect } from 'react';
import { TESTIMONIALS } from '../data/testimonials';

export const useTestimonials = (autoPlay = true, interval = 5000) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === TESTIMONIALS.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? TESTIMONIALS.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Auto-play functionality
  useEffect(() => {
    if (!autoPlay) return;

    const timer = setInterval(() => {
      goToNext();
    }, interval);

    return () => clearInterval(timer);
  }, [autoPlay, interval, currentIndex]);

  return {
    testimonials: TESTIMONIALS,
    currentTestimonial: TESTIMONIALS[currentIndex],
    currentIndex,
    goToNext,
    goToPrev,
    goToSlide,
    totalSlides: TESTIMONIALS.length
  };
};