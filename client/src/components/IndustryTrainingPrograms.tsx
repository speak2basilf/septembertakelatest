import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Import banner images
import advancedClinicalResearchBanner from '@assets/Advanced Clinical Research_1752670358492.png';
import aiMlHealthcareBanner from '@assets/AI & ML Healthcare_1752670358493.png';
import clinicalResearchBanner from '@assets/Clinical Research_1752670358494.png';
import clinicalSASBanner from '@assets/Clinical SAS_1752670358495.png';
import mbaHealthcareBanner from '@assets/MBA in Healthcare_1752670358496.png';
import medicalCodingBanner from '@assets/Medical Coding_1752670358497.png';

const IndustryTrainingPrograms: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const courses = [
    {
      id: 'pgdcr',
      title: 'PG Diploma in Clinical Research',
      image: clinicalResearchBanner,
      route: '/courses/pgdcr'
    },
    {
      id: 'clinical-sas',
      title: 'Advanced Diploma in Clinical SAS',
      image: clinicalSASBanner,
      route: '/courses/clinical-sas'
    },
    {
      id: 'advanced-clinical-research',
      title: 'Advanced Diploma in Clinical Research',
      image: advancedClinicalResearchBanner,
      route: '/courses/adcr'
    },
    {
      id: 'medical-coding',
      title: 'Advanced Diploma in Medical Coding',
      image: medicalCodingBanner,
      route: '/courses/medical-coding'
    },
    {
      id: 'ai-ml-healthcare',
      title: 'PG Diploma in AI & ML Healthcare',
      image: aiMlHealthcareBanner,
      route: '/courses/ai-ml'
    },
    {
      id: 'mba-healthcare',
      title: 'MBA in Healthcare Management',
      image: mbaHealthcareBanner,
      route: '/courses/mba'
    }
  ];

  const coursesPerPage = 3;
  const totalPages = Math.ceil(courses.length / coursesPerPage);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + coursesPerPage >= courses.length ? 0 : prevIndex + coursesPerPage
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? Math.max(0, courses.length - coursesPerPage) : Math.max(0, prevIndex - coursesPerPage)
    );
  };

  const getCurrentCourses = () => {
    return courses.slice(currentIndex, currentIndex + coursesPerPage);
  };

  const handleCourseClick = (course: typeof courses[0]) => {
    window.location.href = course.route;
  };

  return (
    <section id="industry-training" className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-r from-blue-200 to-indigo-200 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-r from-indigo-200 to-blue-200 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-500"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-poppins">
            Industry-Focused <span className="text-blue-600">Training Programs</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto font-poppins">
            Transform your healthcare career with our comprehensive, industry-aligned programs designed to meet current market demands
          </p>
        </div>

        {/* Course Slider */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-md border border-white/20 p-3 rounded-full shadow-lg hover:bg-white hover:scale-110 transition-all duration-300"
            disabled={currentIndex === 0}
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-md border border-white/20 p-3 rounded-full shadow-lg hover:bg-white hover:scale-110 transition-all duration-300"
            disabled={currentIndex + coursesPerPage >= courses.length}
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>

          {/* Course Cards Container */}
          <div className="overflow-hidden mx-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {getCurrentCourses().map((course, index) => (
                <div
                  key={course.id}
                  className="group cursor-pointer transform hover:scale-105 transition-all duration-500"
                  onClick={() => handleCourseClick(course)}
                >
                  <div className="bg-white/60 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/20 shadow-lg hover:shadow-2xl transition-all duration-500">
                    <div className="relative">
                      <img 
                        src={course.image} 
                        alt={course.title}
                        className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index * coursesPerPage)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  Math.floor(currentIndex / coursesPerPage) === index
                    ? 'bg-blue-600 w-8'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white/40 backdrop-blur-lg border border-white/20 rounded-3xl p-8 shadow-2xl hover:bg-white/50 transition-all duration-500">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Not sure which program is right for you?
            </h3>
            <p className="text-gray-600 mb-6">
              Book a free consultation with our career counselors to find the perfect program for your goals.
            </p>
            <button className="bg-gradient-to-r from-blue-600/90 to-indigo-600/90 backdrop-blur-md border border-white/20 text-white px-8 py-3 rounded-full hover:from-blue-700/90 hover:to-indigo-700/90 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl">
              Book Free Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustryTrainingPrograms;