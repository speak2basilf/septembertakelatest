import React, { useState } from 'react';
import { FileText, CheckCircle, Download, Award, Heart, Star, Sparkles, GraduationCap, BookOpen, ArrowRight, Shield, CreditCard, ChevronLeft, ChevronRight } from 'lucide-react';

const Admission: React.FC = () => {
  const [activeTab, setActiveTab] = useState('apply');
  const [currentStep, setCurrentStep] = useState(0);

  const courses = [
    {
      name: 'PG Diploma in Clinical Research',
      eligibility: 'Bachelor\'s degree in Life Sciences, Medicine, Pharmacy, or related field',
      duration: '12 Months'
    },
    {
      name: 'Advanced Diploma in Clinical SAS',
      eligibility: 'Bachelor\'s degree in Statistics, Mathematics, Computer Science, or related field',
      duration: '6 Months'
    },
    {
      name: 'Advanced Diploma in Bioinformatics',
      eligibility: 'Bachelor\'s degree in Biology, Biotechnology, Computer Science, or related field',
      duration: '6 Months'
    },
    {
      name: 'Advanced Diploma in Medical Coding',
      eligibility: 'Bachelor\'s degree in any field with basic medical knowledge',
      duration: '6 Months'
    },
    {
      name: 'PG Diploma in AI & ML Healthcare',
      eligibility: 'Bachelor\'s degree in Computer Science, Engineering, Mathematics, or related field',
      duration: '12 Months'
    },
    {
      name: 'MBA in Healthcare Management',
      eligibility: 'Bachelor\'s degree in any field with minimum 50% marks',
      duration: '24 Months'
    }
  ];

  const applicationSteps = [
    {
      step: 1,
      title: 'Choose Your Course',
      description: 'Browse and select from our wide range of available courses',
      icon: BookOpen,
      color: 'blue'
    },
    {
      step: 2,
      title: 'Check Eligibility',
      description: 'Verify you meet the requirements for your chosen course',
      icon: CheckCircle,
      color: 'green'
    },
    {
      step: 3,
      title: 'Submit Application',
      description: 'Complete and submit your application form online',
      icon: FileText,
      color: 'purple'
    },
    {
      step: 4,
      title: 'Document Verification',
      description: 'Upload and verify all required documents',
      icon: Shield,
      color: 'orange'
    },
    {
      step: 5,
      title: 'Fee Payment',
      description: 'Pay the application fee securely online',
      icon: CreditCard,
      color: 'red'
    },
    {
      step: 6,
      title: 'Confirmation',
      description: 'Receive confirmation and next steps information',
      icon: Award,
      color: 'teal'
    }
  ];

  const getStepColorClasses = (color: string, isActive: boolean) => {
    const colors = {
      blue: isActive ? 'from-blue-500 to-blue-600 border-blue-500' : 'from-blue-100 to-blue-200 border-blue-200',
      green: isActive ? 'from-green-500 to-green-600 border-green-500' : 'from-green-100 to-green-200 border-green-200',
      purple: isActive ? 'from-purple-500 to-purple-600 border-purple-500' : 'from-purple-100 to-purple-200 border-purple-200',
      orange: isActive ? 'from-orange-500 to-orange-600 border-orange-500' : 'from-orange-100 to-orange-200 border-orange-200',
      red: isActive ? 'from-red-500 to-red-600 border-red-500' : 'from-red-100 to-red-200 border-red-200',
      teal: isActive ? 'from-teal-500 to-teal-600 border-teal-500' : 'from-teal-100 to-teal-200 border-teal-200'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  const getIconTextColor = (color: string) => {
    const colors = {
      blue: 'text-blue-600',
      green: 'text-green-600',
      purple: 'text-purple-600',
      orange: 'text-orange-600',
      red: 'text-red-600',
      teal: 'text-teal-600'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  const getArrowBgColor = (color: string) => {
    const colors = {
      blue: 'bg-blue-500',
      green: 'bg-green-500',
      purple: 'bg-purple-500',
      orange: 'bg-orange-500',
      red: 'bg-red-500',
      teal: 'bg-teal-500'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  const getDotBgColor = (color: string, isActive: boolean, isPast: boolean) => {
    const colors = {
      blue: isActive ? 'bg-blue-500' : isPast ? 'bg-blue-300' : 'bg-gray-300',
      green: isActive ? 'bg-green-500' : isPast ? 'bg-green-300' : 'bg-gray-300',
      purple: isActive ? 'bg-purple-500' : isPast ? 'bg-purple-300' : 'bg-gray-300',
      orange: isActive ? 'bg-orange-500' : isPast ? 'bg-orange-300' : 'bg-gray-300',
      red: isActive ? 'bg-red-500' : isPast ? 'bg-red-300' : 'bg-gray-300',
      teal: isActive ? 'bg-teal-500' : isPast ? 'bg-teal-300' : 'bg-gray-300'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  const nextStep = () => {
    if (currentStep < applicationSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const goToStep = (step: number) => {
    setCurrentStep(step);
  };


  return (
    <section id="admission" className="py-20 bg-gradient-to-br from-white via-slate-50 to-blue-50 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-r from-blue-200 to-indigo-200 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-r from-indigo-200 to-blue-200 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-500"></div>
      </div>

      {/* Floating decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <Heart className="absolute top-20 right-1/4 text-pink-400 opacity-40 animate-bounce" size={20} style={{ animationDelay: '0s', animationDuration: '4s' }} />
        <Star className="absolute bottom-32 left-1/5 text-yellow-400 opacity-50 animate-bounce" size={24} style={{ animationDelay: '1s', animationDuration: '3.5s' }} />
        <Sparkles className="absolute top-1/3 left-1/6 text-purple-400 opacity-40 animate-bounce" size={18} style={{ animationDelay: '2s', animationDuration: '4.2s' }} />
        <GraduationCap className="absolute top-2/3 right-1/6 text-blue-400 opacity-50 animate-bounce" size={22} style={{ animationDelay: '1.5s', animationDuration: '3.8s' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Admission</span> Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Start your journey towards a successful healthcare career with our comprehensive admission process
          </p>
        </div>

        {/* Admission Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-white/40 backdrop-blur-lg border border-white/20 rounded-2xl p-2 shadow-lg">
            <div className="flex flex-wrap justify-center gap-2">
              <button
                onClick={() => setActiveTab('apply')}
                className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 text-sm ${
                  activeTab === 'apply'
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-white/50'
                }`}
              >
                <FileText className="inline-block mr-2" size={16} />
                How to Apply
              </button>
              <button
                onClick={() => setActiveTab('eligibility')}
                className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 text-sm ${
                  activeTab === 'eligibility'
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-white/50'
                }`}
              >
                <CheckCircle className="inline-block mr-2" size={16} />
                Eligibility
              </button>
              <button
                onClick={() => setActiveTab('brochure')}
                className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 text-sm ${
                  activeTab === 'brochure'
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-white/50'
                }`}
              >
                <Download className="inline-block mr-2" size={16} />
                Brochure
              </button>
            </div>
          </div>
        </div>

        {/* How to Apply Tab */}
        {activeTab === 'apply' && (
          <div className="space-y-12">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Interactive Application Process</h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Follow these simple steps to secure your seat in our healthcare training programs
              </p>
            </div>

            {/* Interactive Step Flow */}
            <div className="bg-white/60 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-lg">
              {/* Desktop View - Horizontal Flow */}
              <div className="hidden lg:block">
                <div className="relative">
                  {/* Connecting Lines */}
                  <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-blue-400 to-blue-200 transform -translate-y-1/2 rounded-full"></div>
                  
                  {/* Steps Grid */}
                  <div className="grid grid-cols-6 gap-6 relative z-10">
                    {applicationSteps.map((step, index) => (
                      <div key={index} className="relative">
                        {/* Step Card */}
                        <div 
                          onClick={() => goToStep(index)}
                          data-testid={`step-card-${index + 1}`}
                          className={`bg-white rounded-2xl p-6 shadow-lg transition-all duration-300 border-2 cursor-pointer ${
                            index === currentStep 
                              ? `bg-gradient-to-br ${getStepColorClasses(step.color, true)} text-white transform scale-110 shadow-2xl` 
                              : `${index < currentStep ? 'bg-gradient-to-br ' + getStepColorClasses(step.color, false) : 'border-gray-200 opacity-60'} hover:shadow-xl hover:scale-105`
                          }`}
                        >
                          {/* Step Number Badge */}
                          <div className={`absolute -top-3 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shadow-lg ${
                            index === currentStep ? 'bg-white text-gray-900' : `bg-gradient-to-r ${getStepColorClasses(step.color, index <= currentStep)} text-white`
                          }`}>
                            {step.step}
                          </div>
                          
                          {/* Icon */}
                          <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 transition-transform duration-300 ${
                            index === currentStep ? 'bg-white/20' : `bg-gradient-to-br ${getStepColorClasses(step.color, false)}`
                          }`}>
                            <step.icon className={index === currentStep ? "text-white" : getIconTextColor(step.color)} size={28} />
                          </div>
                          
                          {/* Content */}
                          <div className="text-center">
                            <h4 className={`text-base font-bold mb-2 leading-tight ${index === currentStep ? 'text-white' : 'text-gray-900'}`}>
                              {step.title}
                            </h4>
                            <p className={`text-xs leading-relaxed ${index === currentStep ? 'text-white/90' : 'text-gray-600'}`}>
                              {step.description}
                            </p>
                          </div>
                        </div>
                        
                        {/* Arrow for connecting steps */}
                        {index < applicationSteps.length - 1 && (
                          <div className="absolute top-1/2 -right-3 transform -translate-y-1/2 z-20">
                            <div className={`w-6 h-6 rounded-full flex items-center justify-center shadow-lg transition-colors duration-300 ${
                              index < currentStep ? getArrowBgColor(applicationSteps[index + 1].color) : 'bg-gray-300'
                            }`}>
                              <ArrowRight className="text-white" size={14} />
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Mobile View - Vertical Stack */}
              <div className="lg:hidden">
                <div className="space-y-6">
                  {applicationSteps.map((step, index) => (
                    <div 
                      key={index}
                      onClick={() => goToStep(index)}
                      data-testid={`mobile-step-card-${index + 1}`}
                      className={`rounded-2xl p-6 transition-all duration-300 border-2 cursor-pointer ${
                        index === currentStep 
                          ? `bg-gradient-to-br ${getStepColorClasses(step.color, true)} text-white transform scale-105 shadow-2xl` 
                          : `${index < currentStep ? 'bg-gradient-to-br ' + getStepColorClasses(step.color, false) : 'bg-white border-gray-200 opacity-60'} hover:shadow-xl hover:scale-102`
                      }`}
                    >
                      <div className="flex items-center space-x-4">
                        {/* Step Number */}
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold ${
                          index === currentStep ? 'bg-white/20 text-white' : `bg-gradient-to-r ${getStepColorClasses(step.color, index <= currentStep)} text-white`
                        }`}>
                          {step.step}
                        </div>
                        
                        {/* Icon */}
                        <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${
                          index === currentStep ? 'bg-white/20' : `bg-gradient-to-br ${getStepColorClasses(step.color, false)}`
                        }`}>
                          <step.icon className={index === currentStep ? "text-white" : getIconTextColor(step.color)} size={24} />
                        </div>
                        
                        {/* Content */}
                        <div className="flex-1">
                          <h4 className={`text-lg font-bold mb-1 ${index === currentStep ? 'text-white' : 'text-gray-900'}`}>
                            {step.title}
                          </h4>
                          <p className={`text-sm ${index === currentStep ? 'text-white/90' : 'text-gray-600'}`}>
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Controls */}
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
                {/* Previous/Next Buttons */}
                <div className="flex items-center space-x-4">
                  <button
                    onClick={prevStep}
                    disabled={currentStep === 0}
                    className="flex items-center space-x-2 px-6 py-3 bg-gray-200 text-gray-700 rounded-lg font-medium transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-300 hover:scale-105"
                    aria-label="Previous step"
                    data-testid="button-previous"
                  >
                    <ChevronLeft size={20} />
                    <span>Previous</span>
                  </button>
                  
                  <button
                    onClick={nextStep}
                    disabled={currentStep === applicationSteps.length - 1}
                    className="flex items-center space-x-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-medium transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-700 hover:scale-105"
                    aria-label="Next step"
                    data-testid="button-next"
                  >
                    <span>Next</span>
                    <ChevronRight size={20} />
                  </button>
                </div>

                {/* Navigation Dots */}
                <div className="flex items-center space-x-2">
                  {applicationSteps.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToStep(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        getDotBgColor(applicationSteps[index].color, index === currentStep, index < currentStep)
                      } ${index === currentStep ? 'scale-125' : ''}`}
                      data-testid={`step-dot-${index + 1}`}
                      aria-label={`Go to step ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Ready to Start Section */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-8 text-center text-white">
              <h3 className="text-2xl font-bold mb-4">Ready to Start Your Journey?</h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Join thousands of students who have transformed their careers with our comprehensive healthcare training programs.
              </p>
              <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105" data-testid="button-start-application">
                Start Your Application Now
              </button>
            </div>
          </div>
        )}

        {/* Eligibility Tab */}
        {activeTab === 'eligibility' && (
          <div className="space-y-8">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Eligibility Criteria</h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Check the prerequisites for each course to ensure you meet the requirements
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {courses.map((course, index) => (
                <div key={index} className="bg-white/40 backdrop-blur-lg border border-white/20 p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:bg-white/60 transition-all duration-500">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-400/30 to-indigo-400/30 backdrop-blur-md border border-white/30 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <BookOpen className="text-blue-600" size={20} />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-gray-900 mb-3">{course.name}</h4>
                      <div className="space-y-3">
                        <div>
                          <span className="text-sm font-medium text-gray-700">Eligibility:</span>
                          <p className="text-gray-600 text-sm mt-1">{course.eligibility}</p>
                        </div>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <span className="font-medium text-gray-700">Duration:</span>
                            <p className="text-gray-600">{course.duration}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}


        {/* Brochure Tab */}
        {activeTab === 'brochure' && (
          <div className="space-y-8">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Download Course Brochures</h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Get detailed information about our courses, curriculum, and career opportunities
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {courses.map((course, index) => (
                <div key={index} className="bg-white/40 backdrop-blur-lg border border-white/20 p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:bg-white/60 hover:scale-105 transition-all duration-500">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-400/30 to-indigo-400/30 backdrop-blur-md border border-white/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <FileText className="text-blue-600" size={28} />
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-3">{course.name}</h4>
                    <p className="text-gray-600 text-sm mb-6">
                      Comprehensive course details, curriculum, faculty information, and career prospects
                    </p>
                    <button className="w-full bg-gradient-to-r from-blue-600/90 to-indigo-600/90 text-white px-6 py-3 rounded-full hover:from-blue-700/90 hover:to-indigo-700/90 transition-all duration-300 flex items-center justify-center space-x-2">
                      <Download size={16} />
                      <span>Download Brochure</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <div className="bg-white/40 backdrop-blur-lg border border-white/20 rounded-3xl p-8 shadow-lg">
                <h4 className="text-xl font-bold text-gray-900 mb-4">Complete Course Catalog</h4>
                <p className="text-gray-600 mb-6">
                  Download our complete course catalog with all programs and admission details
                </p>
                <button className="bg-gradient-to-r from-blue-600/90 to-indigo-600/90 text-white px-8 py-4 rounded-full hover:from-blue-700/90 hover:to-indigo-700/90 transition-all duration-300 flex items-center justify-center space-x-2 mx-auto">
                  <Download size={20} />
                  <span>Download Complete Catalog</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Admission;