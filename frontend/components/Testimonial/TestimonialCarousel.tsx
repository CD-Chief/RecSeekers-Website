"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const placeHolderProfile = '/profile.png';

type Testimonial = {
  name: string;
  role: string;
  image: string;
  quote: string;
  author: string;
};

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
  fontClass: string;
}

export default function TestimonialCarousel({ testimonials, fontClass }: TestimonialCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // States for tracking swipe gestures
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);

  // Minimum distance (in pixels) to be considered a swipe
  const minSwipeDistance = 50;

  // Auto-cycle every 8 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 8000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  // --- Touch Event Handlers ---
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEndX(null); // Reset touch end
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStartX || !touchEndX) return;
    
    const distance = touchStartX - touchEndX;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrev();
    }
  };

  return (
    <div className="flex flex-col items-center w-full">
      {/* Controls & Cards Container */}
      <div 
        className="relative w-full max-w-sm h-[500px] flex items-center justify-center mb-8"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        
        {/* Left Arrow (Hidden on mobile, visible on medium screens and up) */}
        <button 
          onClick={handlePrev} 
          className="absolute left-[-60px] z-50 p-3 bg-white border-4 border-black rounded-full shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all hidden md:block"
        >
          &#8592;
        </button>

        {/* Card Stack */}
        <div className="relative w-full h-full max-w-xs">
          {testimonials.map((t, index) => {
            const diff = (index - currentIndex + testimonials.length) % testimonials.length;
            if (diff > 2) return null;

            const imageSrc = (t.image !== "no image" && t.image !== "" && t.image !== " ") ? t.image : placeHolderProfile;

            return (
              <div
                key={index}
                className="group absolute top-0 left-0 w-full h-full bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-10 flex flex-col items-center transition-all duration-500 ease-in-out cursor-pointer overflow-hidden"
                style={{
                  zIndex: 30 - diff * 10,
                  transform: `translateY(${diff * 20}px) scale(${1 - diff * 0.05})`,
                  opacity: diff === 2 ? 0.5 : 1,
                }}
                onClick={handleNext} 
              >
                {/* 1. DEFAULT VIEW */}
                <div className="relative z-10 w-full h-full flex flex-col items-center transition-all duration-300 group-hover:blur-md group-hover:opacity-20">
                  <h3 className={`${fontClass} text-3xl text-black text-center mb-10`}>
                    {t.name}
                  </h3>
                  <div className="w-32 h-32 rounded-full border-4 border-black overflow-hidden mb-10 bg-gray-100 flex-shrink-0 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    <Image
                      src={imageSrc}
                      alt={t.name}
                      width={256}
                      height={256}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-center text-black text-xl italic font-medium">
                    {t.role}
                  </p>
                </div>

                {/* 2. HOVER REVEAL VIEW */}
                <div className="absolute inset-0 z-20 flex flex-col items-center justify-center p-8 opacity-0 transition-opacity duration-100 group-hover:opacity-100 bg-white/60">
                  <p className="text-black text-xl text-center font-bold mb-6 leading-relaxed">
                    "{t.quote}"
                  </p>
                  <p className={`${fontClass} text-lg text-black text-center`}>
                    - {t.author}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Arrow (Hidden on mobile) */}
        <button 
          onClick={handleNext} 
          className="absolute right-[-60px] z-50 p-3 bg-white border-4 border-black rounded-full shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all hidden md:block"
        >
          &#8594;
        </button>
      </div>

      {/* Pagination Dots */}
      <div className="flex gap-3">
        {testimonials.map((_, index) => (
          <div 
            key={index} 
            className={`w-3 h-3 rounded-full border-2 border-black ${index === currentIndex ? 'bg-black' : 'bg-transparent'}`}
          />
        ))}
      </div>
    </div>
  );
}