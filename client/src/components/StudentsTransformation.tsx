import React from 'react';
import { Star } from 'lucide-react';

const StudentsTransformation: React.FC = () => {
  const testimonials = [
    {
      quote: "CliniGlobal's Clinical Research Course completely transformed my career. The comprehensive training helped me understand GCP guidelines and regulatory processes. I secured a position at Apollo Hospitals within 3 weeks of completing the course.",
      name: "Lakshmi Sundaram",
      company: "Apollo Hospitals",
      initials: "LS",
      bgColor: "bg-green-100",
      avatarColor: "bg-green-500",
    },
    {
      quote: "The Medical Coding Training at CliniGlobal was exceptional. The hands-on practice with ICD-10 and CPT codes gave me the confidence to crack my interview. Now I'm working with one of India's leading healthcare providers.",
      name: "Rajesh Krishnan",
      company: "Fortis Healthcare",
      initials: "RK",
      bgColor: "bg-purple-100",
      avatarColor: "bg-purple-500",
    },
    {
      quote: "Clinical SAS Training at CliniGlobal opened doors I never imagined. The real-world projects and expert mentorship helped me land my dream job in clinical data analysis. Highly recommend to anyone looking to advance their career.",
      name: "Priya Venkatesh",
      company: "Max Healthcare",
      initials: "PV",
      bgColor: "bg-orange-100",
      avatarColor: "bg-orange-500",
    },
  ];

  const StarRating = () => (
    <div className="flex gap-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
      ))}
    </div>
  );

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-poppins">
            Student Testimonials
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`${testimonial.bgColor} rounded-2xl p-8 shadow-sm`}
            >
              {/* Star Rating */}
              <StarRating />
              
              {/* Testimonial Quote */}
              <p className="text-gray-800 text-lg mb-8 leading-relaxed">
                "{testimonial.quote}"
              </p>
              
              {/* Author Info */}
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-full ${testimonial.avatarColor} flex items-center justify-center`}>
                  <span className="text-white font-semibold text-sm">
                    {testimonial.initials}
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-lg">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudentsTransformation;