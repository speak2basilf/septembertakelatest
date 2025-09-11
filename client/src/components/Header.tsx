import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, ChevronDown, GraduationCap, UserPlus } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import AnimatedSlogan from './AnimatedSlogan';

const Header: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('home');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close dropdowns when clicking outside or navigating
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.dropdown-container')) {
        setIsCoursesOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Handle scroll to detect active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'courses', 'placements', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveTab(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleTabClick = (tabName: string, href: string) => {
    setActiveTab(tabName);
    setIsMenuOpen(false);
    setIsCoursesOpen(false);
    
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) {
          const headerHeight = 180;
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
          const offsetPosition = elementPosition - headerHeight;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
    } else {
      const element = document.querySelector(href);
      if (element) {
        const headerHeight = 180;
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - headerHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  const handleCoursesDropdown = () => {
    setIsCoursesOpen(!isCoursesOpen);
  };

  const handleCourseNavigation = (coursePath: string) => {
    setIsCoursesOpen(false);
    setIsMenuOpen(false);
    navigate(coursePath);
  };

  const getTabClasses = (tabName: string) => {
    const baseClasses = "relative text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium hover:scale-105 px-4 py-2 rounded-lg";
    const activeClasses = "text-blue-600 bg-blue-50/50 shadow-md scale-105";
    
    return activeTab === tabName ? `${baseClasses} ${activeClasses}` : baseClasses;
  };

  const getActiveIndicator = (tabName: string) => {
    if (activeTab === tabName) {
      return (
        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
      );
    }
    return null;
  };

  return (
    <header className="bg-white/95 backdrop-blur-lg border-b border-white/20 sticky top-0 z-50 shadow-lg">
      {/* Top Blue Header Background */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            {/* Left side - Contact Info */}
            <div className="flex items-center space-x-4 md:space-x-6">
              <div className="flex items-center text-white/90 hover:text-white transition-all duration-300 cursor-pointer group hover:scale-105">
                <svg className="mr-2 group-hover:scale-125 transition-transform duration-300" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                </svg>
                <span className="font-poppins text-sm group-hover:font-semibold">+91 7093794447</span>
              </div>
              <div className="flex items-center text-white/90 hover:text-white transition-all duration-300 cursor-pointer group hover:scale-105">
                <Mail size={14} className="mr-2 group-hover:scale-125 transition-transform duration-300" />
                <span className="font-poppins text-sm group-hover:font-semibold">hr@cliniglobal.com</span>
              </div>
            </div>
            
            {/* Center - Main Highlight */}
            <div className="text-center">
              <div 
                className="px-6 py-1.5 rounded-full inline-block shadow-lg" 
                style={{ 
                  backgroundColor: '#FF6A00', 
                  background: 'linear-gradient(135deg, #FF6A00 0%, #FF8533 100%)',
                }}
              >
                <span 
                  className="font-bold text-xs md:text-sm font-poppins" 
                  style={{ color: 'white', textShadow: '1px 1px 2px rgba(0,0,0,0.3)' }}
                >
                  #1 Healthcare Training Institute
                </span>
              </div>
            </div>
            
            {/* Right side - Animated Slogans */}
            <div className="text-white/90 hover:text-white transition-all duration-300 cursor-pointer hover:scale-105 flex items-center">
              <AnimatedSlogan />
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo - Properly sized and aligned */}
          <div className="flex items-center cursor-pointer" onClick={() => navigate('/')}>
            <div className="flex flex-col justify-center">
              {/* CliniGlobal text - increased size for better visibility */}
              <h1 className="text-2xl md:text-3xl font-bold cliniglobal-brand font-poppins leading-tight">
                <span className="cliniglobal-clini">Clini</span><span className="cliniglobal-global">Global</span>
              </h1>
              {/* Subtext with better visibility */}
              <p className="text-sm text-gray-500 font-poppins font-medium">Research Institute</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            <button
              onClick={() => handleTabClick('home', '#home')}
              className={getTabClasses('home')}
            >
              <span className="font-poppins">Home</span>
              {getActiveIndicator('home')}
            </button>

            <button
              onClick={() => handleTabClick('about', '#about')}
              className={getTabClasses('about')}
            >
              <span className="font-poppins">About</span>
              {getActiveIndicator('about')}
            </button>

            {/* Courses Dropdown */}
            <div 
              className="relative dropdown-container"
              onMouseEnter={() => setIsCoursesOpen(true)}
              onMouseLeave={() => setIsCoursesOpen(false)}
            >
              <button
                className="flex items-center text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium hover:scale-105 px-4 py-2 rounded-lg"
              >
                <span className="font-poppins">Courses</span>
                <ChevronDown size={16} className={`ml-1 transition-transform duration-300 ${isCoursesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isCoursesOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-gradient-to-b from-orange-100 to-orange-50 border border-orange-200 rounded-2xl shadow-2xl py-4 z-50 transform transition-all duration-300 ease-out animate-in slide-in-from-top-2">
                  <div className="px-4 py-2 border-b border-orange-200">
                    <h3 className="font-semibold text-gray-900 font-poppins">Our Programs</h3>
                  </div>
                  <div className="py-2">
                    <button
                      onClick={() => handleCourseNavigation('/courses/crm')}
                      className="w-full text-left px-4 py-3 hover:bg-orange-100 transition-colors group"
                    >
                      <div className="font-medium text-gray-900 font-poppins group-hover:text-orange-600">PG Diploma in Clinical Research</div>
                      <div className="text-sm text-orange-600 font-poppins font-semibold">Most Popular</div>
                    </button>
                    <button
                      onClick={() => handleCourseNavigation('/courses/adcr')}
                      className="w-full text-left px-4 py-3 hover:bg-orange-100 transition-colors group"
                    >
                      <div className="font-medium text-gray-900 font-poppins group-hover:text-orange-600">Advanced Diploma in Clinical Research</div>
                    </button>
                    <button
                      onClick={() => handleCourseNavigation('/courses/clinical-sas')}
                      className="w-full text-left px-4 py-3 hover:bg-orange-100 transition-colors group"
                    >
                      <div className="font-medium text-gray-900 font-poppins group-hover:text-orange-600">Advanced Diploma in Clinical SAS</div>
                    </button>
                    <button
                      onClick={() => handleCourseNavigation('/courses/medical-coding')}
                      className="w-full text-left px-4 py-3 hover:bg-orange-100 transition-colors group"
                    >
                      <div className="font-medium text-gray-900 font-poppins group-hover:text-orange-600">Advanced Diploma in Medical Coding</div>
                      <div className="text-sm text-orange-600 font-poppins font-semibold">Most Demand</div>
                    </button>
                    <button
                      onClick={() => handleCourseNavigation('/courses/ai-ml')}
                      className="w-full text-left px-4 py-3 hover:bg-orange-100 transition-colors group"
                    >
                      <div className="font-medium text-gray-900 font-poppins group-hover:text-orange-600">PG Diploma in AI & ML Healthcare</div>
                    </button>
                    <button
                      onClick={() => handleCourseNavigation('/courses/mba')}
                      className="w-full text-left px-4 py-3 hover:bg-orange-100 transition-colors group"
                    >
                      <div className="font-medium text-gray-900 font-poppins group-hover:text-orange-600">MBA in Healthcare Management</div>
                      <div className="text-sm text-orange-600 font-poppins font-semibold">Industry Endorsed</div>
                    </button>
                    <button
                      onClick={() => navigate('/courses')}
                      className="w-full text-left px-4 py-3 text-orange-600 hover:bg-orange-100 transition-colors border-t border-orange-200 mt-2 group"
                    >
                      <div className="font-medium font-poppins group-hover:text-orange-700">View All Courses →</div>
                    </button>
                  </div>
                </div>
              )}
            </div>

            <button
              onClick={() => navigate('/placements')}
              className="text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium hover:scale-105 px-4 py-2 rounded-lg font-poppins"
            >
              Placements
            </button>

            <button
              onClick={() => handleTabClick('contact', '#contact')}
              className={getTabClasses('contact')}
            >
              <span className="font-poppins">Contact</span>
              {getActiveIndicator('contact')}
            </button>

            {/* Action Buttons */}
            <div className="flex items-center space-x-3 ml-6">
              {/* Enroll Now Button - Orange */}
              <button 
                onClick={() => navigate('/courses')}
                className="flex items-center space-x-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-2.5 rounded-full transition-all duration-300 font-bold text-sm font-poppins shadow-lg hover:shadow-xl hover:scale-105"
              >
                <UserPlus size={16} />
                <span>Enroll Now</span>
              </button>

              {/* LMS Button - Cyan Blue */}
              <button 
                onClick={() => window.open('http://cliniglobal.testpress.in', '_blank')}
                className="flex items-center space-x-2 bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2.5 rounded-full transition-all duration-300 font-medium text-sm font-poppins shadow-lg hover:shadow-xl hover:scale-105"
              >
                <GraduationCap size={16} />
                <span>LMS</span>
              </button>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200">
            <nav className="space-y-2">
              <button
                onClick={() => handleTabClick('home', '#home')}
                className="block w-full text-left px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors font-medium font-poppins"
              >
                Home
              </button>
              
              <button
                onClick={() => handleTabClick('about', '#about')}
                className="block w-full text-left px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors font-medium font-poppins"
              >
                About
              </button>

              {/* Mobile Courses */}
              <div>
                <button
                  onClick={handleCoursesDropdown}
                  className="flex items-center justify-between w-full px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors font-medium font-poppins"
                >
                  Courses
                  <ChevronDown size={16} className={`transition-transform ${isCoursesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isCoursesOpen && (
                  <div className="ml-4 mt-2 space-y-1">
                    <button
                      onClick={() => handleCourseNavigation('/courses/crm')}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-600 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-colors font-poppins"
                    >
                      <div>PG Diploma in Clinical Research</div>
                      <div className="text-xs text-orange-600 font-semibold">Most Popular</div>
                    </button>
                    <button
                      onClick={() => handleCourseNavigation('/courses/adcr')}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-600 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-colors font-poppins"
                    >
                      Advanced Diploma in Clinical Research
                    </button>
                    <button
                      onClick={() => handleCourseNavigation('/courses/clinical-sas')}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-600 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-colors font-poppins"
                    >
                      Advanced Diploma in Clinical SAS
                    </button>
                    <button
                      onClick={() => handleCourseNavigation('/courses/medical-coding')}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-600 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-colors font-poppins"
                    >
                      <div>Advanced Diploma in Medical Coding</div>
                      <div className="text-xs text-orange-600 font-semibold">Most Demand</div>
                    </button>
                    <button
                      onClick={() => handleCourseNavigation('/courses/ai-ml')}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-600 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-colors font-poppins"
                    >
                      PG Diploma in AI & ML Healthcare
                    </button>
                    <button
                      onClick={() => handleCourseNavigation('/courses/mba')}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-600 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-colors font-poppins"
                    >
                      <div>MBA in Healthcare Management</div>
                      <div className="text-xs text-orange-600 font-semibold">Industry Endorsed</div>
                    </button>
                    <button
                      onClick={() => navigate('/courses')}
                      className="block w-full text-left px-4 py-2 text-sm text-orange-600 hover:bg-orange-50 rounded-lg transition-colors font-poppins"
                    >
                      View All Courses →
                    </button>
                  </div>
                )}
              </div>

              <button
                onClick={() => navigate('/placements')}
                className="block w-full text-left px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors font-medium font-poppins"
              >
                Placements
              </button>

              <button
                onClick={() => handleTabClick('contact', '#contact')}
                className="block w-full text-left px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors font-medium font-poppins"
              >
                Contact
              </button>

              {/* Mobile Action Buttons */}
              <div className="space-y-3 pt-4">
                <button 
                  onClick={() => navigate('/courses')}
                  className="flex items-center justify-center space-x-2 w-full bg-orange-500 hover:bg-orange-600 text-white px-4 py-3 rounded-lg transition-colors font-bold font-poppins"
                >
                  <UserPlus size={16} />
                  <span>Enroll Now</span>
                </button>

                <button 
                  onClick={() => window.open('http://cliniglobal.testpress.in', '_blank')}
                  className="flex items-center justify-center space-x-2 w-full bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-3 rounded-lg transition-colors font-medium font-poppins"
                >
                  <GraduationCap size={16} />
                  <span>Access LMS</span>
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;