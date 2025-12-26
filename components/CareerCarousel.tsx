import React, { useState, useRef } from 'react';
import { ArrowLeft, ArrowRight, MapPin, Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';
import { jobRoles } from '../data/jobRoles';

export function CareerCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Mobile-only helper
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  const handlePrevious = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? jobRoles.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === jobRoles.length - 1 ? 0 : prev + 1));
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;

    const diffX = touchStartX.current - touchEndX.current;

    // Only consider it a swipe if the movement is significant
    if (Math.abs(diffX) > 50) {
      if (diffX > 0) {
        // Swiped left - go to next
        handleNext();
      } else {
        // Swiped right - go to previous
        handlePrevious();
      }
    }
  };

  return (
    <div className="relative flex flex-col items-center justify-center gap-8 px-0 sm:px-2 md:px-12 w-full">
      <div 
        ref={containerRef}
        className="relative flex justify-center items-center w-full min-h-[300px] overflow-visible max-w-7xl mx-auto"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Left Arrow */}
        <button
          onClick={handlePrevious}
          className="absolute left-[-60px] md:left-[-70px] lg:left-[-80px] z-30 flex-shrink-0 w-10 h-10 md:w-14 md:h-14 rounded-full bg-white shadow-lg hover:shadow-xl transition-all flex items-center justify-center hover:scale-110 active:scale-95 opacity-0 invisible md:opacity-100 md:visible"
          aria-label="Previous career"
        >
          <ArrowLeft className="w-4 h-4 md:w-6 md:h-6" />
        </button>
        
        {jobRoles.map((career, index) => {
          const position = index - currentIndex;

          // render only previous, current, next
          if (Math.abs(position) > 1) return null;

          return (
            <motion.div
              key={career.id}
              // Mobile-only width fix — desktop untouched
              className="
                absolute
                rounded-2xl bg-white shadow-2xl overflow-hidden
                flex flex-col md:flex-row
                sm:w-[90%] md:w-[600px]
                sm:max-w-[90%] md:max-w-[600px]
              "
              style={{
                left: isMobile ? '0.5rem' : undefined,
                right: isMobile ? '0.5rem' : undefined,
                width: isMobile ? undefined : undefined,
              }}
              animate={{
                // Mobile: card positioned with proper margins, minimal side offset, Desktop: standard positioning
                x: isMobile ? position * 15 : position * 300,
                scale: position === 0 ? 1 : isMobile ? 0.85 : 0.88,
                opacity: position === 0 ? 1 : isMobile ? 0.3 : 0.35,
                filter: position === 0 ? "blur(0px)" : isMobile ? "blur(2px)" : "blur(4px)",
                zIndex: position === 0 ? 20 : 10,
              }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 28,
              }}
            >
              {/* Image Section with Department Badge */}
              <div className="relative w-full md:w-2/5 h-40 sm:h-48 md:h-auto flex-shrink-0 rounded-t-2xl md:rounded-l-2xl md:rounded-r-none overflow-hidden">
                <img 
                  src={career.imageUrl} 
                  alt={career.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />
                <div className="absolute top-2 left-2 sm:top-3 sm:left-3 md:top-4 md:left-4">
                  <span className="bg-white px-2.5 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 rounded-full shadow-lg text-xs sm:text-sm">
                    {career.department}
                  </span>
                </div>
                <div className="absolute bottom-2 left-2 right-2 sm:bottom-3 sm:left-3 sm:right-3 md:bottom-4 md:left-4 md:right-4 text-white">
                  <h3 className="mb-1 text-sm sm:text-base md:text-lg lg:text-xl font-semibold line-clamp-2">{career.title}</h3>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-1.5 sm:gap-2 md:gap-4 text-xs sm:text-sm opacity-90">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                      <span className="truncate">{career.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Briefcase className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                      <span className="truncate">{career.type}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Content Section */}
              <div className="p-3 sm:p-4 md:p-6 lg:p-8 flex-1 rounded-b-2xl md:rounded-b-2xl md:rounded-l-none md:rounded-r-2xl flex flex-col min-h-0 overflow-hidden">
                <p className="mb-3 sm:mb-4 md:mb-6 text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed line-clamp-4 sm:line-clamp-none break-words">
                  {career.description}
                </p>
                
                <div className="mb-4 sm:mb-5 md:mb-6 lg:mb-8">
                  <h4 className="mb-1.5 sm:mb-2 md:mb-3 text-xs sm:text-sm uppercase tracking-wide text-gray-500">
                    Key Skills
                  </h4>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {career.skills.slice(0, 4).map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className="px-2 py-0.5 sm:px-2.5 sm:py-1 md:px-3 md:py-1.5 bg-gray-100 rounded-full text-xs sm:text-sm whitespace-nowrap"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <a href="mailto:hr@techvitta.in" className="block w-full bg-black text-white py-2.5 sm:py-3 md:py-4 rounded-full hover:bg-gray-800 transition-all hover:shadow-lg text-center text-xs sm:text-sm md:text-base mt-auto shrink-0">
                  Email us
                </a>
              </div>
            </motion.div>
          );
        })}
        
        {/* Right Arrow */}
        <button
          onClick={handleNext}
          className="absolute right-[-60px] md:right-[-70px] lg:right-[-80px] z-30 flex-shrink-0 w-10 h-10 md:w-14 md:h-14 rounded-full bg-white shadow-lg hover:shadow-xl transition-all flex items-center justify-center hover:scale-110 active:scale-95 opacity-0 invisible md:opacity-100 md:visible"
          aria-label="Next career"
        >
          <ArrowRight className="w-4 h-4 md:w-6 md:h-6" />
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="flex gap-2 mt-8 md:mt-14 justify-center">
        {jobRoles.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1);
              setCurrentIndex(index);
            }}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex 
                ? 'bg-black w-6' 
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Go to position ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}