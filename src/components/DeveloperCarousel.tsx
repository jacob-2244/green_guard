"use client";
import React, { useState, useEffect } from "react";
import DeveloperCard from "@/components/DeveloperCard";

type DeveloperCardProps = {
  image: string;
  name: string;
  position: string;
};

type DeveloperCarouselProps = {
  developers: DeveloperCardProps[];
};

const DeveloperCarousel = ({ developers }: DeveloperCarouselProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024); // lg breakpoint
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Always create exactly 3 slides
  const slides: DeveloperCardProps[][] = [];

  if (isMobile) {
    // 👉 Mobile: 1 card per slide (3 slides max)
    for (let i = 0; i < Math.min(developers.length, 3); i++) {
      slides.push([developers[i]]);
    }
  } else {
    // 👉 Desktop: 2 cards per slide (3 slides max)
    for (let i = 0; i < Math.min(developers.length, 6); i += 2) {
      slides.push(developers.slice(i, i + 2));
    }
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  if (developers.length === 0) {
    return <div className="text-center p-4">No developers to display</div>;
  }

  return (
    <div className="relative w-full max-w-screen-2xl mx-auto">
      {/* Slider */}
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, slideIndex) => (
            <div key={slideIndex} className="w-full flex-shrink-0">
              <div
                className={`grid gap-10 mt-10 w-full ${
                  isMobile ? "grid-cols-1" : "grid-cols-2"
                }`}
              >
                {slide.map((developer, devIndex) => (
                  <div
                    key={`${slideIndex}-${devIndex}`}
                    className="bg-white rounded-lg w-full"
                  >
                    <DeveloperCard
                      image={developer.image}
                      name={developer.name}
                      position={developer.position}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Radio Buttons */}

      <div className="flex justify-center mt-10 space-x-4 flex-nowrap">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-4 h-4 rounded-full transition-all duration-200 ${
              index === currentSlide
                ? "bg-app_primary scale-110"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default DeveloperCarousel;
