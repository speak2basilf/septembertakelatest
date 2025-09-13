import React from 'react';
import { Star } from 'lucide-react';

const StudentsTransformation: React.FC = () => {
  const testimonials = [
    {
      quote: "You made it so simple. My new site is so much faster and easier to work with than my old site. Just choose the page, make the change.",
      name: "Lakshmi Sundaram",
      designation: "Freelance React Developer",
      company: "Apollo Hospitals",
      src: "/attached_assets/femal2_1753103497720.jpg",
      bgColor: "bg-green-100",
    },
    {
      quote: "Simply the best. Better than all the rest. I'd recommend this product to beginners and advanced users.",
      name: "Rajesh Krishnan",
      designation: "Digital Marketer",
      company: "Fortis Healthcare",
      src: "/attached_assets/men1_1753103497721.jpg",
      bgColor: "bg-purple-100",
    },
    {
      quote: "I cannot believe that I have got a brand new landing page after getting Omega. It was super easy to edit and publish.",
      name: "Priya Venkatesh",
      designation: "Graphic Designer",
      company: "Max Healthcare",
      src: "/attached_assets/femal1_1753103497719.jpg",
      bgColor: "bg-orange-100",
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
            Our happy clients say about us
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
                <img
                  src={testimonial.src}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-900 text-lg">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {testimonial.designation}
                  </p>
                  <p className="text-gray-500 text-xs">
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