import React from 'react';
import { ArrowRight, Calendar, Award, Users, BookOpen, Heart, Star, Sparkles, Stethoscope, Activity, Brain, Microscope, Pill, Shield, Zap, Database, Laptop, Briefcase, Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

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
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-center">
          {/* Left Content - Takes up 2/3 of the space */}
          <div className="lg:col-span-2 space-y-6 text-left">
            <div className="space-y-6">
              <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-orange-500 to-orange-600 text-white text-xs font-semibold tracking-wide rounded-full shadow-md">
                <Award className="mr-1" size={12} />
                #1 Healthcare Training Institute
              </div>
              
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
                <span className="font-normal">Learn, Advance,</span>
                <br />
                <span className="text-blue-600 font-normal">Accelerate Your Career</span>
                <br />
                <span className="text-2xl md:text-3xl lg:text-4xl text-gray-800 font-normal">
                  With{' '}
                  <span className="relative inline-block underline-hover-continuous font-bold">
                    <span className="text-blue-600">Clini</span><span className="text-orange-500">Global</span>
                  </span>
                </span>
              </h1>
              
              <p className="text-base md:text-lg text-gray-700 leading-relaxed font-normal max-w-2xl">
                Step into the Future of Healthcare with New-Age Programs like Clinical Research, Medical Coding, Clinical SAS, Bioinformatics, AI & ML in Healthcare, MBA in Healthcare, and more – designed to equip you for tomorrow's medical and healthcare landscape.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={handleExploreCourses}
                className="group inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl font-medium"
                data-testid="button-explore-courses"
              >
                <span>Explore Courses</span>
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </button>
              
              <button 
                onClick={handleEnrollNow}
                className="group inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition-all duration-300 shadow-lg hover:shadow-xl font-medium"
                data-testid="button-enroll-now"
              >
                <span>Enroll Now</span>
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </button>
            </div>
            
            {/* Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 max-w-2xl">
              {/* Advanced LMS Support */}
              <div className="group bg-white/70 backdrop-blur-sm rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 border border-white/20 hover:border-blue-300/30" data-testid="card-lms-support">
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <div className="absolute inset-0 bg-blue-500/20 rounded-lg blur-sm group-hover:blur-md group-hover:bg-blue-500/30 transition-all duration-500"></div>
                    <Laptop className="relative text-blue-600 group-hover:scale-110 transition-transform duration-300" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">Advanced LMS</h3>
                    <p className="text-xs text-gray-600">Support</p>
                  </div>
                </div>
              </div>

              {/* 100% Placement Assistance */}
              <div className="group bg-white/70 backdrop-blur-sm rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 border border-white/20 hover:border-green-300/30" data-testid="card-placement-assistance">
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <div className="absolute inset-0 bg-green-500/20 rounded-lg blur-sm group-hover:blur-md group-hover:bg-green-500/30 transition-all duration-500"></div>
                    <div className="relative flex items-center">
                      <Briefcase className="text-green-600 group-hover:scale-110 transition-transform duration-300" size={20} />
                      <Check className="text-green-500 -ml-1 group-hover:animate-bounce" size={14} />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-semibold text-gray-800 group-hover:text-green-600 transition-colors duration-300">100% Placement</h3>
                    <p className="text-xs text-gray-600">Assistance</p>
                  </div>
                </div>
              </div>

              {/* Industry Recognised Certifications */}
              <div className="group bg-white/70 backdrop-blur-sm rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 border border-white/20 hover:border-yellow-300/30" data-testid="card-certifications">
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <div className="absolute inset-0 bg-yellow-400/30 rounded-lg blur-md group-hover:blur-lg group-hover:bg-yellow-400/50 transition-all duration-500 animate-pulse"></div>
                    <Award className="relative text-yellow-600 group-hover:scale-110 transition-transform duration-300 drop-shadow-md" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-semibold text-gray-800 group-hover:text-yellow-600 transition-colors duration-300">Industry Recognised</h3>
                    <p className="text-xs text-gray-600">Certifications</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - CliniGlobal Professional Banner - Takes up 1/3 of the space */}
          <div className="lg:col-span-1 flex justify-center lg:justify-end">
            <div className="relative">
              {/* CliniGlobal Professional Banner Image - Instagram Style Post */}
              <img 
                src="/cliniglobal-hero-banner.png"
                alt="CliniGlobal Research Institute - Empowering Clinical Careers" 
                className="w-full max-w-sm h-auto rounded-2xl shadow-2xl object-cover"
                data-testid="img-hero-banner"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;