import React, { useState, useEffect } from 'react';
import { ArrowLeft, Clock, Users, Award, BookOpen, CheckCircle, Star, Calendar, Download, Phone, Mail, MapPin, Heart, Sparkles, GraduationCap, Target, TrendingUp, Shield, FileText, MessageCircle, ChevronDown, ChevronUp, ArrowRight, Code, Database, Activity, Stethoscope, Brain, Eye, Laptop, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ContactModal from '../components/ui/ContactModal';

const MedicalCodingCourse: React.FC = () => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('about-course');
  const [showFloatingSidebar, setShowFloatingSidebar] = useState(false);
  const [contactModal, setContactModal] = useState<{
    isOpen: boolean;
    type: 'enroll' | 'counselling' | 'contact' | 'brochure';
  }>({
    isOpen: false,
    type: 'enroll'
  });

  // Handle scroll to show/hide floating sidebar
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setShowFloatingSidebar(scrollPosition > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openContactModal = (type: 'enroll' | 'counselling' | 'contact' | 'brochure') => {
    setContactModal({ isOpen: true, type });
  };

  const closeContactModal = () => {
    setContactModal({ isOpen: false, type: 'enroll' });
  };

  const navigationSections = [
    { id: 'about-course', label: 'About Course', icon: BookOpen },
    { id: 'syllabus', label: 'Syllabus', icon: FileText },
    { id: 'testimonials', label: 'Testimonials', icon: Star },
    { id: 'program-outcomes', label: 'Program Outcomes', icon: Target },
    { id: 'faqs', label: 'FAQs', icon: MessageCircle }
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 250;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const courseModules = [
    {
      title: 'Corporate Etiquette & Soft Skills',
      duration: '1 week',
      topics: ['Workplace Professionalism', 'Time Management', 'Teamwork', 'Communication Skills']
    },
    {
      title: 'Aptitude & Communication Training',
      duration: '1 week',
      topics: ['Logical Reasoning', 'Problem-solving', 'English Fluency', 'Interview Skills']
    },
    {
      title: 'Medical Terminology + Anatomy & Physiology',
      duration: '2 weeks',
      topics: ['ENT (Ear, Nose, Throat)', 'Nervous System', 'Digestive & Cardiovascular Systems', 'Respiratory, Musculoskeletal & Reproductive Systems']
    },
    {
      title: 'ICD-10-CM Coding Guidelines',
      duration: '3 weeks',
      topics: ['International Diagnostic Coding', 'Chapter-specific Rules', 'Real-world Case Applications', 'Code Selection Guidelines']
    },
    {
      title: 'CPT (Current Procedural Terminology)',
      duration: '2 weeks',
      topics: ['Medical Procedures Coding', 'Hospital Services', 'Clinic Procedures', 'Accurate Documentation']
    },
    {
      title: 'HCPCS (Healthcare Common Procedure Coding System)',
      duration: '2 weeks',
      topics: ['Services Coding', 'Supplies & Equipment', 'Non-CPT Procedures', 'Medicare Guidelines']
    },
    {
      title: 'Medical Billing & Modifiers',
      duration: '2 weeks',
      topics: ['Insurance Claims', 'Billing Processes', 'Code Modifiers', 'Precise Documentation']
    },
    {
      title: 'CPC Exam Prep + Mock Tests',
      duration: '3 weeks',
      topics: ['Practice Papers', 'Exam Strategies', 'Mock Tests', 'Time Management Techniques']
    }
  ];

  const programOutcomes = [
    'Master medical coding systems including ICD-10, CPT, and HCPCS',
    'Understand healthcare documentation and billing processes',
    'Develop proficiency in medical terminology and anatomy',
    'Gain expertise in compliance and regulatory requirements',
    'Prepare for CPC certification exam',
    'Build strong communication and professional skills',
    'Secure employment in healthcare organizations',
    'Advance to senior coding and auditing roles'
  ];

  const testimonials = [
    {
      name: 'Ayesha S.',
      role: 'Medical Coder at Optum',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      testimonial: 'The training was in-depth, and I got placed immediately after certification. Thank you CliniGlobal!'
    },
    {
      name: 'Priya M.',
      role: 'Coding Analyst at Accenture',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      testimonial: 'The faculty support and practical training helped me transition from IT to healthcare coding seamlessly.'
    },
    {
      name: 'Rajesh K.',
      role: 'Revenue Cycle Executive at Apollo',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      testimonial: 'CliniGlobal\'s placement support is exceptional. They helped me secure a great position with excellent salary.'
    }
  ];

  const faqs = [
    {
      question: 'Is medical coding hard to learn?',
      answer: 'No, with the right training and practice, anyone from a science or allied background can master it. Our structured curriculum makes it easy to understand.'
    },
    {
      question: 'Can I take this course online?',
      answer: 'Yes! We offer both online and offline batches with flexible timings to accommodate working professionals and students.'
    },
    {
      question: 'Do I need to be from a medical background?',
      answer: 'Not necessarily. Graduates in Life Sciences, IT, Nursing, and even BCA/B.Tech are eligible. We provide foundational medical knowledge.'
    },
    {
      question: 'Is CPC certification mandatory?',
      answer: 'While not mandatory, CPC certification enhances your job prospects and salary significantly. We provide complete exam preparation.'
    },
    {
      question: 'What is the job market like for medical coders?',
      answer: 'The demand for medical coders is growing rapidly with digitization of healthcare. Remote work opportunities are also abundant.'
    },
    {
      question: 'How much can I earn as a medical coder?',
      answer: 'Entry-level medical coders can earn ₹2.5-4 LPA, with experienced professionals earning ₹6-10 LPA or more.'
    }
  ];

  const highlights = [
    'Advanced LMS Support',
    'Experienced & Certified Trainers',
    '100% Placement Guarantee',
    'Flexible Batches – Online & Offline, Weekdays/Weekends',
    'Access to Mock Exams & Practice Sheets',
    'CPC Certification Preparation',
    'Education Loan Facility Available'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-slate-50 to-blue-50">
      {/* Floating Sidebar */}
      {showFloatingSidebar && (
        <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50 space-y-4">
          {/* Contact Form */}
          <div 
            onClick={() => openContactModal('contact')}
            className="bg-white/90 backdrop-blur-lg border border-white/20 rounded-2xl p-4 shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer group"
          >
            <div className="text-center">
              <MessageCircle className="text-blue-600 mx-auto mb-2 group-hover:scale-110 transition-transform" size={24} />
              <p className="text-xs font-medium text-gray-700">Contact Form</p>
            </div>
          </div>

          {/* Download Brochure */}
          <div 
            onClick={() => openContactModal('brochure')}
            className="bg-white/90 backdrop-blur-lg border border-white/20 rounded-2xl p-4 shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer group"
          >
            <div className="text-center">
              <Download className="text-green-600 mx-auto mb-2 group-hover:scale-110 transition-transform" size={24} />
              <p className="text-xs font-medium text-gray-700">Download Brochure</p>
            </div>
          </div>

          {/* Schedule Call */}
          <div 
            onClick={() => openContactModal('counselling')}
            className="bg-white/90 backdrop-blur-lg border border-white/20 rounded-2xl p-4 shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer group"
          >
            <div className="text-center">
              <Phone className="text-orange-600 mx-auto mb-2 group-hover:scale-110 transition-transform" size={24} />
              <p className="text-xs font-medium text-gray-700">Schedule Call</p>
            </div>
          </div>

          {/* WhatsApp Contact */}
          <div 
            onClick={() => window.open('https://wa.me/917093794447', '_blank')}
            className="bg-white/90 backdrop-blur-lg border border-white/20 rounded-2xl p-4 shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer group"
          >
            <div className="text-center">
              <svg className="text-green-600 mx-auto mb-2 group-hover:scale-110 transition-transform" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              </svg>
              <p className="text-xs font-medium text-gray-700">WhatsApp</p>
            </div>
          </div>
        </div>
      )}

      {/* Modern Visual Hero Section */}
      <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white py-20 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-yellow-400/20 rounded-lg animate-bounce"></div>
          <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-white/10 rounded-full animate-pulse"></div>
          <div className="absolute top-1/2 right-1/3 w-18 h-18 bg-orange-400/20 rounded-lg animate-bounce"></div>
        </div>

        {/* Medical Coding Visual Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-16 left-1/4 flex items-center space-x-2 opacity-30">
            <Code className="text-white" size={24} />
            <span className="text-white font-mono">ICD-10</span>
          </div>
          <div className="absolute top-1/3 right-1/4 flex items-center space-x-2 opacity-30">
            <Database className="text-yellow-400" size={24} />
            <span className="text-white font-mono">CPT</span>
          </div>
          <div className="absolute bottom-1/3 left-1/6 flex items-center space-x-2 opacity-30">
            <Activity className="text-orange-400" size={24} />
            <span className="text-white font-mono">HCPCS</span>
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <button
              onClick={() => navigate('/')}
              className="flex items-center text-white hover:text-yellow-400 transition-colors font-medium bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm"
            >
              <ArrowLeft className="mr-2" size={20} />
              Back to Home
            </button>
          </div>

          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-white/20 px-4 py-2 rounded-full mb-6">
              <Stethoscope className="mr-2 text-yellow-400" size={20} />
              <span className="text-white font-medium">Most Demand Program</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
              Medical Coding
            </h1>
            <p className="text-2xl text-gray-100 max-w-4xl mx-auto mb-8 leading-relaxed">
              Master the art of transforming medical records into universal codes
            </p>
          </div>

          {/* Visual Journey Flow */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-center mb-8 text-white">Your Learning Journey</h3>
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
              <div className="bg-white/15 backdrop-blur-lg rounded-2xl p-6 text-center border border-white/20">
                <Brain className="text-yellow-400 mx-auto mb-3" size={32} />
                <h4 className="font-bold text-white mb-2">Learn</h4>
                <p className="text-gray-200 text-sm">Master coding systems</p>
              </div>
              <ArrowRight className="text-white/50 rotate-90 md:rotate-0" size={24} />
              <div className="bg-white/15 backdrop-blur-lg rounded-2xl p-6 text-center border border-white/20">
                <Laptop className="text-orange-400 mx-auto mb-3" size={32} />
                <h4 className="font-bold text-white mb-2">Practice</h4>
                <p className="text-gray-200 text-sm">Hands-on coding</p>
              </div>
              <ArrowRight className="text-white/50 rotate-90 md:rotate-0" size={24} />
              <div className="bg-white/15 backdrop-blur-lg rounded-2xl p-6 text-center border border-white/20">
                <Award className="text-green-400 mx-auto mb-3" size={32} />
                <h4 className="font-bold text-white mb-2">Certify</h4>
                <p className="text-gray-200 text-sm">Get CPC certified</p>
              </div>
              <ArrowRight className="text-white/50 rotate-90 md:rotate-0" size={24} />
              <div className="bg-white/15 backdrop-blur-lg rounded-2xl p-6 text-center border border-white/20">
                <TrendingUp className="text-purple-400 mx-auto mb-3" size={32} />
                <h4 className="font-bold text-white mb-2">Career</h4>
                <p className="text-gray-200 text-sm">Land your dream job</p>
              </div>
            </div>
          </div>

          {/* Visual Stats Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <div className="bg-white/15 backdrop-blur-lg border border-white/20 rounded-3xl p-6 text-center hover:bg-white/20 transition-all duration-300">
              <div className="bg-yellow-400/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="text-yellow-400" size={28} />
              </div>
              <h3 className="font-bold text-white mb-2 text-lg">Duration</h3>
              <p className="text-gray-200 text-xl font-semibold">6 Months</p>
            </div>
            <div className="bg-white/15 backdrop-blur-lg border border-white/20 rounded-3xl p-6 text-center hover:bg-white/20 transition-all duration-300">
              <div className="bg-orange-400/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-orange-400" size={28} />
              </div>
              <h3 className="font-bold text-white mb-2 text-lg">Batch Size</h3>
              <p className="text-gray-200 text-xl font-semibold">25 Students</p>
            </div>
            <div className="bg-white/15 backdrop-blur-lg border border-white/20 rounded-3xl p-6 text-center hover:bg-white/20 transition-all duration-300">
              <div className="bg-green-400/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-green-400" size={28} />
              </div>
              <h3 className="font-bold text-white mb-2 text-lg">Certification</h3>
              <p className="text-gray-200 text-xl font-semibold">CPC Ready</p>
            </div>
            <div className="bg-white/15 backdrop-blur-lg border border-white/20 rounded-3xl p-6 text-center hover:bg-white/20 transition-all duration-300">
              <div className="bg-purple-400/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="text-purple-400" size={28} />
              </div>
              <h3 className="font-bold text-white mb-2 text-lg">Placement</h3>
              <p className="text-gray-200 text-xl font-semibold">90% Success</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button
              onClick={() => openContactModal('enroll')}
              className="flex items-center justify-center bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-10 py-4 rounded-full font-bold text-xl hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              <Heart className="mr-3" size={24} />
              Enroll Now
            </button>
            <button
              onClick={() => openContactModal('counselling')}
              className="flex items-center justify-center bg-white/20 hover:bg-white/30 text-white px-10 py-4 rounded-full font-bold text-xl transition-all duration-300 transform hover:scale-105 border-2 border-white/30"
            >
              <Phone className="mr-3" size={24} />
              Free Counselling
            </button>
            <button
              onClick={() => openContactModal('brochure')}
              className="flex items-center justify-center bg-transparent hover:bg-white/10 text-white px-10 py-4 rounded-full font-bold text-xl transition-all duration-300 transform hover:scale-105 border-2 border-white/30"
            >
              <Download className="mr-3" size={24} />
              Download Brochure
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="bg-white/95 backdrop-blur-lg border-b border-white/30 sticky top-[128px] z-40 shadow-xl border-t-2 border-t-green-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center space-x-2 py-4 overflow-x-auto scrollbar-hide">
            {navigationSections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 whitespace-nowrap font-semibold border-2 shadow-lg hover:shadow-xl ${
                  activeSection === section.id
                    ? 'bg-gradient-to-r from-green-600 to-blue-600 text-white scale-110 border-green-600 shadow-green-500/30'
                    : 'text-gray-700 hover:text-green-600 hover:bg-green-50 hover:scale-105 border-gray-200 hover:border-green-300 bg-white/80'
                }`}
              >
                <section.icon size={20} />
                <span>{section.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Course Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* About Course Section - Visual & Diagrammatic */}
        <section id="about-course" className="mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            <span className="bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">About Medical Coding Course</span>
          </h2>
          
          {/* Visual Process Flow */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-center mb-8 text-gray-800">How Medical Coding Works</h3>
            <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 border border-white/30 shadow-2xl">
              <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-8">
                <div className="text-center">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FileText className="text-white" size={32} />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">Patient Records</h4>
                  <p className="text-gray-600 text-sm">Medical diagnoses & procedures</p>
                </div>
                <ArrowRight className="text-emerald-500 rotate-90 md:rotate-0" size={32} />
                <div className="text-center">
                  <div className="bg-gradient-to-r from-emerald-500 to-teal-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Code className="text-white" size={32} />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">Medical Coding</h4>
                  <p className="text-gray-600 text-sm">Transform to universal codes</p>
                </div>
                <ArrowRight className="text-emerald-500 rotate-90 md:rotate-0" size={32} />
                <div className="text-center">
                  <div className="bg-gradient-to-r from-orange-500 to-red-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Database className="text-white" size={32} />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">Healthcare System</h4>
                  <p className="text-gray-600 text-sm">Billing, insurance & records</p>
                </div>
              </div>
            </div>
          </div>

          {/* Three Pillars Visual */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-center mb-8 text-gray-800">Three Pillars of Medical Coding</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-8 text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Eye className="text-white" size={36} />
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-4">ICD-10</h4>
                <p className="text-gray-700 mb-4">International Classification of Diseases</p>
                <ul className="text-left space-y-2 text-gray-600">
                  <li className="flex items-center"><CheckCircle className="text-blue-500 mr-2" size={16} />Diagnosis coding</li>
                  <li className="flex items-center"><CheckCircle className="text-blue-500 mr-2" size={16} />Disease classification</li>
                  <li className="flex items-center"><CheckCircle className="text-blue-500 mr-2" size={16} />Medical conditions</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-3xl p-8 text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Activity className="text-white" size={36} />
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-4">CPT</h4>
                <p className="text-gray-700 mb-4">Current Procedural Terminology</p>
                <ul className="text-left space-y-2 text-gray-600">
                  <li className="flex items-center"><CheckCircle className="text-emerald-500 mr-2" size={16} />Procedure coding</li>
                  <li className="flex items-center"><CheckCircle className="text-emerald-500 mr-2" size={16} />Medical services</li>
                  <li className="flex items-center"><CheckCircle className="text-emerald-500 mr-2" size={16} />Treatment documentation</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-3xl p-8 text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="bg-gradient-to-r from-orange-500 to-orange-600 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="text-white" size={36} />
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-4">HCPCS</h4>
                <p className="text-gray-700 mb-4">Healthcare Common Procedure Coding</p>
                <ul className="text-left space-y-2 text-gray-600">
                  <li className="flex items-center"><CheckCircle className="text-orange-500 mr-2" size={16} />Healthcare services</li>
                  <li className="flex items-center"><CheckCircle className="text-orange-500 mr-2" size={16} />Medical supplies</li>
                  <li className="flex items-center"><CheckCircle className="text-orange-500 mr-2" size={16} />Equipment coding</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Key Features Visual Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white/70 backdrop-blur-lg rounded-3xl p-6 border border-white/30 shadow-lg hover:shadow-2xl transition-all duration-300 group">
              <div className="bg-gradient-to-r from-green-500 to-blue-500 w-16 h-16 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Target className="text-white" size={28} />
              </div>
              <h4 className="font-bold text-gray-900 mb-2 text-lg">Industry-Focused</h4>
              <p className="text-gray-600">Curriculum designed with industry experts and real-world applications</p>
            </div>
            
            <div className="bg-white/70 backdrop-blur-lg rounded-3xl p-6 border border-white/30 shadow-lg hover:shadow-2xl transition-all duration-300 group">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-16 h-16 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Award className="text-white" size={28} />
              </div>
              <h4 className="font-bold text-gray-900 mb-2 text-lg">CPC Certification</h4>
              <p className="text-gray-600">Complete preparation for AAPC certification with mock exams</p>
            </div>
            
            <div className="bg-white/70 backdrop-blur-lg rounded-3xl p-6 border border-white/30 shadow-lg hover:shadow-2xl transition-all duration-300 group">
              <div className="bg-gradient-to-r from-orange-500 to-red-500 w-16 h-16 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <TrendingUp className="text-white" size={28} />
              </div>
              <h4 className="font-bold text-gray-900 mb-2 text-lg">Career Growth</h4>
              <p className="text-gray-600">100% placement assistance with salary growth guarantee</p>
            </div>
          </div>
        </section>

        {/* Syllabus Section */}
        <section id="syllabus" className="mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Course Syllabus</span>
          </h2>
          <div className="bg-gradient-to-r from-green-50 to-blue-50 backdrop-blur-lg rounded-3xl p-8 border border-green-200 shadow-lg mb-8">
            <p className="text-gray-700 leading-relaxed mb-6 text-lg text-center">
              Master medical coding with our comprehensive curriculum designed by industry experts. 
              Learn ICD-10, CPT, HCPCS coding systems with hands-on practice and real-world applications.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {courseModules.map((module, index) => (
              <div key={index} className="bg-white/70 backdrop-blur-lg rounded-3xl p-8 border border-white/30 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-500 group">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-green-600 transition-colors">{module.title}</h3>
                  </div>
                  <span className="bg-gradient-to-r from-green-100 to-blue-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold border border-green-200">
                    {module.duration}
                  </span>
                </div>
                <ul className="space-y-3">
                  {module.topics.map((topic, topicIndex) => (
                    <li key={topicIndex} className="flex items-start text-gray-700 group-hover:text-gray-800 transition-colors">
                      <div className="w-3 h-3 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mr-3 mt-1.5 flex-shrink-0"></div>
                      <span className="font-medium">{topic}</span>
                    </li>
                  ))}
                </ul>
                
                {/* Progress indicator */}
                <div className="mt-6 pt-4 border-t border-gray-200">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Module {index + 1} of {courseModules.length}</span>
                    <span className="text-green-600 font-semibold">{module.duration}</span>
                  </div>
                  <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-green-500 to-blue-500 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${((index + 1) / courseModules.length) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Course Summary */}
          <div className="mt-12 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-3xl p-8 shadow-2xl">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">Complete Course Overview</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">{courseModules.length}</div>
                  <div className="text-white/80">Total Modules</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">16</div>
                  <div className="text-white/80">Weeks Training</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">8</div>
                  <div className="text-white/80">Weeks Internship</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Student Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/60 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="text-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-20 h-20 rounded-full mx-auto mb-4 border-4 border-white/50 shadow-lg"
                  />
                  <h4 className="text-xl font-bold text-gray-900 mb-1">{testimonial.name}</h4>
                  <p className="text-green-600 font-medium">{testimonial.role}</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl text-green-600 mb-4">"</div>
                  <p className="text-gray-700 italic leading-relaxed">
                    {testimonial.testimonial}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Program Outcomes Section */}
        <section id="program-outcomes" className="mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Program Outcomes</h2>
          <div className="bg-white/60 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-lg">
            <p className="text-gray-700 mb-8 text-center text-lg">
              Upon successful completion of this program, you will be able to:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {programOutcomes.map((outcome, index) => (
                <div key={index} className="flex items-start p-4 bg-green-50 rounded-xl">
                  <CheckCircle className="text-green-600 mr-3 mt-1" size={20} />
                  <span className="text-gray-800 font-medium">{outcome}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs Section */}
        <section id="faqs" className="mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white/60 backdrop-blur-lg rounded-3xl p-6 border border-white/20 shadow-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                  <MessageCircle className="text-green-600 mr-3" size={20} />
                  {faq.question}
                </h3>
                <p className="text-gray-700 pl-8">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-3xl p-12 shadow-2xl">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Medical Coding Career?</h2>
            <p className="text-xl text-white/90 mb-8">
              Join thousands of successful medical coders who transformed their careers with CliniGlobal
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => window.open('http://cliniglobal.testpress.in', '_blank')}
                  className="flex items-center justify-center space-x-2 bg-gradient-to-r from-[#1BA7C9] to-[#1BA7C9]/90 text-white px-8 py-4 rounded-full hover:from-[#1BA7C9]/90 hover:to-[#1BA7C9]/80 transition-colors text-lg font-medium"
                >
                  <GraduationCap size={20} />
                  <span>Access LMS</span>
                </button>
                <button 
                  onClick={() => openContactModal('enroll')}
                  className="bg-white text-green-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors text-lg"
                >
                  Enroll Now
                </button>
              </div>
              <button 
                onClick={() => openContactModal('counselling')}
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-colors text-lg"
              >
                Schedule Free Counselling
              </button>
            </div>
          </div>
        </section>
      </div>

      {/* Contact Modal */}
      <ContactModal
        isOpen={contactModal.isOpen}
        onClose={closeContactModal}
        buttonType={contactModal.type}
        courseName="Advanced Diploma in Medical Coding"
      />
    </div>
  );
};

export default MedicalCodingCourse;