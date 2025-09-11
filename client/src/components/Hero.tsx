import React from 'react';
import { ArrowRight, Calendar, Award, Users, BookOpen, Heart, Star, Sparkles, Stethoscope, Activity, Brain, Microscope, Pill, Shield, Zap, Database } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import cliniglobalImage from '@assets/ChatGPT Image Jul 21, 2025, 04_36_06 PM_1753096002378.png';

const Hero: React.FC = () => {
  const navigate = useNavigate();

  const handleExploreCourses = () => {
    navigate('/courses');
  };

  const handleEnrollNow = () => {
    // Scroll to contact section if on home page, or navigate to home and then scroll
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    } else {
      // If not on home page, navigate home and then scroll
      navigate('/');
      setTimeout(() => {
        const contactElement = document.getElementById('contact');
        if (contactElement) {
          contactElement.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <section id="home" className="relative py-20 overflow-hidden min-h-screen flex items-center" style={{ backgroundColor: '#EAF4FF' }}>

      {/* Enhanced Moving Background with Higher Opacity */}
      <div className="absolute inset-0">
        {/* Large moving gradient orbs - More visible */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-r from-blue-300/30 to-indigo-300/30 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-indigo-300/30 to-blue-300/30 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-blue-200/25 to-indigo-200/25 rounded-full mix-blend-multiply filter blur-2xl animate-pulse delay-500"></div>
        
        {/* Additional moving background elements - More visible */}
        <div className="absolute top-10 left-1/3 w-48 h-48 bg-gradient-to-r from-cyan-300/25 to-blue-300/25 rounded-full mix-blend-multiply filter blur-2xl animate-pulse delay-2000"></div>
        <div className="absolute bottom-32 right-1/3 w-56 h-56 bg-gradient-to-r from-indigo-300/25 to-purple-300/25 rounded-full mix-blend-multiply filter blur-2xl animate-pulse delay-3000"></div>
      </div>

      {/* Floating Healthcare Icons with Enhanced Visibility */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Row 1 - Top floating icons - More visible */}
        <Stethoscope className="absolute top-1/6 left-1/12 text-blue-500 opacity-40 animate-bounce" size={32} style={{ animationDelay: '0s', animationDuration: '4s' }} />
        <Activity className="absolute top-1/5 left-1/4 text-green-500 opacity-50 animate-bounce" size={28} style={{ animationDelay: '0.5s', animationDuration: '3.5s' }} />
        <Brain className="absolute top-1/4 left-1/2 text-purple-500 opacity-45 animate-bounce" size={30} style={{ animationDelay: '1s', animationDuration: '4.2s' }} />
        <Microscope className="absolute top-1/6 right-1/4 text-indigo-500 opacity-50 animate-bounce" size={34} style={{ animationDelay: '1.5s', animationDuration: '3.8s' }} />
        <Shield className="absolute top-1/5 right-1/12 text-blue-600 opacity-45 animate-bounce" size={29} style={{ animationDelay: '2s', animationDuration: '4.5s' }} />
        
        {/* Row 2 - Middle floating icons - More visible */}
        <Pill className="absolute top-2/5 left-1/8 text-red-500 opacity-40 animate-bounce" size={26} style={{ animationDelay: '0.8s', animationDuration: '3.2s' }} />
        <Database className="absolute top-1/2 left-1/3 text-cyan-500 opacity-50 animate-bounce" size={28} style={{ animationDelay: '1.2s', animationDuration: '4.8s' }} />
        <Zap className="absolute top-2/5 right-1/3 text-yellow-500 opacity-45 animate-bounce" size={32} style={{ animationDelay: '1.8s', animationDuration: '3.6s' }} />
        <BookOpen className="absolute top-1/2 right-1/8 text-blue-500 opacity-50 animate-bounce" size={30} style={{ animationDelay: '2.2s', animationDuration: '4.1s' }} />
        
        {/* Row 3 - Bottom floating icons - More visible */}
        <Heart className="absolute bottom-1/4 left-1/6 text-pink-500 opacity-45 animate-bounce" size={28} style={{ animationDelay: '0.3s', animationDuration: '3.7s' }} />
        <Star className="absolute bottom-1/3 left-1/2 text-yellow-500 opacity-50 animate-bounce" size={26} style={{ animationDelay: '0.7s', animationDuration: '4.3s' }} />
        <Sparkles className="absolute bottom-1/5 right-1/4 text-purple-500 opacity-40 animate-bounce" size={32} style={{ animationDelay: '1.1s', animationDuration: '3.9s' }} />
        <Award className="absolute bottom-2/5 right-1/6 text-indigo-500 opacity-45 animate-bounce" size={28} style={{ animationDelay: '1.6s', animationDuration: '4.4s' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-orange-500 to-orange-600 text-white text-xs font-semibold tracking-wide rounded-full shadow-md">
                <Award className="mr-1" size={12} />
                #1 Healthcare Training Institute
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-gray-800 leading-tight">
                Learn, Advance,
                <span className="block text-blue-600">
                  Accelerate Your Career
                </span>
                <span className="block text-2xl md:text-4xl group cursor-pointer font-poppins text-gray-800">
                  With 
                  <span className="relative inline-block ml-2 underline-hover-continuous font-bold cliniglobal-brand font-poppins">
                    <span className="cliniglobal-clini text-blue-600">Clini</span><span className="cliniglobal-global text-blue-800">Global</span>
                  </span>
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-medium font-poppins">
                Step into the Future of Healthcare with New-Age Programs like Clinical Research, Medical Coding, 
                Clinical SAS, Bioinformatics, AI & ML in Healthcare, MBA in Healthcare, and more – designed to 
                equip you for tomorrow's medical and healthcare landscape.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={handleExploreCourses}
                className="group inline-flex items-center px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-blue-600/95 to-indigo-600/95 backdrop-blur-md border border-white/30 text-white rounded-full hover:from-blue-700/95 hover:to-indigo-700/95 hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl font-poppins"
              >
                <span className="font-medium text-sm md:text-base">Explore Courses</span>
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </button>
              
              <button 
                onClick={handleEnrollNow}
                className="group inline-flex items-center px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-green-600/95 to-emerald-600/95 backdrop-blur-md border border-white/30 text-white rounded-full hover:from-green-700/95 hover:to-emerald-700/95 hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl font-poppins"
              >
                <span className="font-medium text-sm md:text-base">Enroll Now</span>
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 md:gap-8 pt-8">
              <div className="text-center p-4 bg-white/30 backdrop-blur-md rounded-2xl border border-white/30 shadow-lg hover:scale-105 transition-transform duration-300">
                <div className="text-2xl md:text-3xl font-bold text-blue-600 font-poppins">5000+</div>
                <div className="text-xs md:text-sm text-gray-700 font-medium font-poppins">Students Trained</div>
              </div>
              <div className="text-center p-4 bg-white/30 backdrop-blur-md rounded-2xl border border-white/30 shadow-lg hover:scale-105 transition-transform duration-300">
                <div className="text-2xl md:text-3xl font-bold text-indigo-600 font-poppins">95%</div>
                <div className="text-xs md:text-sm text-gray-700 font-medium font-poppins">Placement Rate</div>
              </div>
              <div className="text-center p-4 bg-white/30 backdrop-blur-md rounded-2xl border border-white/30 shadow-lg hover:scale-105 transition-transform duration-300">
                <div className="text-2xl md:text-3xl font-bold text-blue-600 font-poppins">50+</div>
                <div className="text-xs md:text-sm text-gray-700 font-medium font-poppins">Industry Partners</div>
              </div>
            </div>
          </div>

          {/* Right Content - CliniGlobal Instagram Post */}
          <div className="relative">
            <div className="relative bg-white/40 backdrop-blur-lg border border-white/30 p-6 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500">
              {/* CliniGlobal Instagram Post Image */}
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-lg bg-gray-100">
                <img 
                  src={cliniglobalImage}
                  alt="CliniGlobal Research Institute - Happy Student" 
                  className="w-full h-full object-contain hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              {/* Course Highlights with Healthcare Icons */}
              <div className="mt-6 space-y-4">
                <div className="flex items-center space-x-3 p-3 bg-white/30 backdrop-blur-md rounded-xl border border-white/30 hover:bg-white/40 transition-all duration-300">
                  <div className="w-8 h-8 bg-blue-100/80 rounded-full flex items-center justify-center">
                    <BookOpen className="text-blue-600" size={16} />
                  </div>
                  <span className="text-gray-700 font-medium">Advanced LMS Support</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-white/30 backdrop-blur-md rounded-xl border border-white/30 hover:bg-white/40 transition-all duration-300">
                  <div className="w-8 h-8 bg-indigo-100/80 rounded-full flex items-center justify-center">
                    <Users className="text-indigo-600" size={16} />
                  </div>
                  <span className="text-gray-700 font-medium">100% Placement Assistance</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-white/30 backdrop-blur-md rounded-xl border border-white/30 hover:bg-white/40 transition-all duration-300">
                  <div className="w-8 h-8 bg-blue-100/80 rounded-full flex items-center justify-center">
                    <Award className="text-blue-600" size={16} />
                  </div>
                  <span className="text-gray-700 font-medium">Industry Recognised Accreditations and Certification</span>
                </div>
              </div>
            </div>
            
            {/* Enhanced Floating Cards with Healthcare Theme */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-blue-400/70 to-indigo-400/70 backdrop-blur-md rounded-2xl shadow-lg animate-bounce border border-white/30 flex items-center justify-center">
              <Stethoscope className="text-blue-600" size={24} />
            </div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-indigo-400/70 to-blue-400/70 backdrop-blur-md rounded-2xl shadow-lg animate-bounce delay-1000 border border-white/30 flex items-center justify-center">
              <Activity className="text-indigo-600" size={20} />
            </div>
            <div className="absolute top-1/2 -left-6 w-12 h-12 bg-gradient-to-br from-purple-400/70 to-pink-400/70 backdrop-blur-md rounded-full shadow-lg animate-bounce delay-2000 border border-white/30 flex items-center justify-center">
              <Brain className="text-purple-600" size={16} />
            </div>
            <div className="absolute top-1/4 -right-6 w-14 h-14 bg-gradient-to-br from-cyan-400/70 to-blue-400/70 backdrop-blur-md rounded-2xl shadow-lg animate-bounce delay-1500 border border-white/30 flex items-center justify-center">
              <Microscope className="text-cyan-600" size={18} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;