 "use client";
 import React, { useState } from "react";
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



  const slides: DeveloperCardProps[][] = [];
  for (let i = 0; i < Math.min(developers.length, 6); i += 2) {
    slides.push(developers.slice(i, i + 2));
  }




   const goToSlide = (index: number) => {
   setCurrentSlide(index);
  };




  if (developers.length === 0) {
    return <div className="text-center p-4">No developers to display</div>;
  }

  return (
    <div className="relative w-full max-w-screen-2xl  mx-auto">
  
      <div className="relative overflow-hidden">
       

        <div
          className="flex transition-transform duration-1000 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {Array.from({ length: 3 }).map((_, slideIndex) => (
            <div
              key={slideIndex}
              className="w-full flex-shrink-0 " 
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10 w-full">
                {slides[slideIndex]?.map((developer, devIndex) => (
                  <div
                    key={`${slideIndex}-${devIndex}`}
                    className="bg-white rounded-lg p-0  m-0 w-full "
                  >
                    <DeveloperCard
                      image={developer.image}
                      name={developer.name}
                      position={developer.position}
                    />
                  </div>
                )) ||
                  developers.slice(0, 2).map((developer, devIndex) => (
                    <div
                      key={`fallback-${slideIndex}-${devIndex}`}
                      className="bg-white rounded-2xl shadow-md "
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

   
      <div className="flex justify-center mt-20 space-x-6">
        {Array.from({ length: 3 }).map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-6 h-6 rounded-full transition-all duration-200 ${
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

