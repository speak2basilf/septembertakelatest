import React, { useState, useEffect } from 'react';

const AnimatedSlogan: React.FC = () => {
  const slogans = [
    "Shaping Healthcare Careers",
    "Job-Ready Training",
    "Assured Job Placements"
  ];
  
  const [currentSlogan, setCurrentSlogan] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlogan((prev) => (prev + 1) % slogans.length);
    }, 3500); // Change every 3.5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-6 overflow-hidden w-full min-w-[200px]">
      {slogans.map((slogan, index) => (
        <div
          key={index}
          className={`absolute inset-0 flex items-center justify-center transition-all duration-1000 ease-in-out transform ${
            index === currentSlogan 
              ? 'translate-x-0 opacity-100' 
              : index < currentSlogan 
                ? '-translate-x-full opacity-0' 
                : 'translate-x-full opacity-0'
          }`}
        >
          <span className="font-poppins text-sm text-white font-medium whitespace-nowrap">
            {slogan}
          </span>
        </div>
      ))}
    </div>
  );
};

export default AnimatedSlogan;