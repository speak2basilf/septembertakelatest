import React from 'react';
import { CircularTestimonials } from './ui/circular-testimonials';
import { Heart, Star, Sparkles, GraduationCap } from 'lucide-react';

const StudentsTransformation: React.FC = () => {
  const testimonials = [
    {
      quote: "CliniGlobal completely transformed my career. After 6 months of intensive training in Clinical Research, I secured a position as Clinical Data Analyst at Apollo Hospitals. The faculty support and practical training were exceptional!",
      name: "Priya Nair",
      designation: "Clinical Data Analyst @ Apollo Hospitals",
      src: "/attached_assets/femal2_1753103497720.jpg",
    },
    {
      quote: "Thanks to CliniGlobal's comprehensive Clinical Research program, I mastered GCP guidelines and regulatory processes. Now I work as a Clinical Research Associate at Cipla with 200% salary hike. Best decision of my life!",
      name: "Rohit Verma",
      designation: "Clinical Research Associate @ Cipla",
      src: "/attached_assets/men1_1753103497721.jpg",
    },
    {
      quote: "The mentors at CliniGlobal guided me step by step through Pharmacovigilance training. Today, I am proud to be part of Biocon's Drug Safety team. The placement support was incredible - got placed within 2 weeks!",
      name: "Sneha Kulkarni",
      designation: "Drug Safety Associate @ Biocon",
      src: "/attached_assets/femal2_1753103497720.jpg",
    },
    {
      quote: "The hands-on projects and real clinical trial experience were amazing! CliniGlobal's Clinical Data Management course helped me crack my interview at Fortis Healthcare as a Data Manager within weeks of completion.",
      name: "Aditya Sharma",
      designation: "Clinical Data Manager @ Fortis Healthcare",
      src: "/attached_assets/men2_1753103497722.jpg",
    },
    {
      quote: "CliniGlobal's mock interviews, resume building, and practical Medical Coding training helped me land my first job in Clinical Research at Sun Pharma. From fresher to professional in just 4 months!",
      name: "Aarti Mishra",
      designation: "Clinical Research Coordinator @ Sun Pharma",
      src: "/attached_assets/femal1_1753103497719.jpg",
    },
  ];



  return (
    <section className="py-20 bg-gradient-to-br from-white via-slate-50 to-blue-50 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-r from-blue-200 to-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-indigo-200 to-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-1000"></div>
      </div>

      {/* Floating decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <Heart className="absolute top-1/4 left-1/6 text-pink-400 opacity-50 animate-bounce" size={22} style={{ animationDelay: '0s', animationDuration: '3.5s' }} />
        <Star className="absolute top-3/4 right-1/5 text-yellow-400 opacity-60 animate-bounce" size={24} style={{ animationDelay: '1s', animationDuration: '4s' }} />
        <Sparkles className="absolute top-1/2 left-3/4 text-purple-400 opacity-40 animate-bounce" size={20} style={{ animationDelay: '2s', animationDuration: '3.8s' }} />
        <GraduationCap className="absolute top-2/3 right-1/6 text-blue-400 opacity-50 animate-bounce" size={22} style={{ animationDelay: '1.5s', animationDuration: '3.8s' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-poppins">
            Students <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Transformation</span> at CliniGlobal
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-poppins">
            Discover how our students transformed their careers and secured dream jobs in top healthcare companies across India
          </p>
        </div>



        {/* Circular Testimonials */}
        <div className="bg-white/40 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-lg mb-12">
          <div className="flex items-center justify-center">
            <CircularTestimonials
              testimonials={testimonials}
              autoplay={true}
              colors={{
                name: "#1f2937",
                designation: "#3b82f6",
                testimony: "#374151",
                arrowBackground: "#3b82f6",
                arrowForeground: "#ffffff",
                arrowHoverBackground: "#1d4ed8",
              }}
              fontSizes={{
                name: "24px",
                designation: "16px",
                quote: "18px",
              }}
            />
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-3xl p-12 shadow-2xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 font-poppins">
              Join the Success Stories
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-8 font-poppins">
              Transform your career with CliniGlobal's industry-leading healthcare training programs
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors text-lg font-poppins">
                Start Your Transformation
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-colors text-lg font-poppins">
                View All Success Stories
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentsTransformation;