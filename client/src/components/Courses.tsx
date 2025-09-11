import React, { useState } from 'react';
import { BookOpen, Clock, Users, Award, ArrowRight, ArrowLeft, ChevronLeft, ChevronRight, Heart, Star, Sparkles, Calendar, CheckCircle } from 'lucide-react';

// Import updated banner images
import mbaHealthcareBanner from '@assets/MBA in Healthcare_1752669510321.png';
import medicalCodingBanner from '@assets/Medical Coding_1752669510322.png';
import advancedClinicalResearchBanner from '@assets/Advanced Clinical Research_1752669510318.png';
import aiMlHealthcareBanner from '@assets/AI & ML Healthcare_1752669510319.png';
import clinicalResearchBanner from '@assets/Clinical Research_1752669510320.png';
import clinicalSASBanner from '@assets/Clinical SAS_1752669510320.png';

const Courses: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const courses = [
    {
      id: 'pgdcr',
      title: 'PG Diploma in Clinical Research',
      duration: '6 Months',
      students: '300+ Enrolled',
      rating: '4.9',
      description: 'Comprehensive training in clinical trial management, GCP guidelines, and regulatory compliance.',
      features: [
        'Live Interactive Sessions',
        'Real Project Experience',
        'Industry Certification',
        '100% Placement Support',
        'Expert Mentorship'
      ],
      popular: true,
      image: clinicalResearchBanner,
      jobGuarantee: true,
      batchInfo: 'Batch Starts Every 1st & 3rd Week of Month',
      whatYouLearn: [
        'Clinical Trial Management',
        'GCP Guidelines',
        'Regulatory Compliance',
        'Data Management',
        'Statistical Analysis'
      ]
    },
    {
      id: 'clinical-sas',
      title: 'Advanced Diploma in Clinical SAS',
      duration: '6 Months',
      students: '300+ Enrolled',
      rating: '4.8',
      description: 'Master SAS programming for clinical data analysis, statistical reporting, and regulatory submissions.',
      features: [
        'SAS Programming',
        'Statistical Analysis',
        'Clinical Reporting',
        'Data Validation',
        'Career Guidance'
      ],
      image: clinicalSASBanner,
      jobGuarantee: true,
      batchInfo: 'Batch Starts Every 1st & 3rd Week of Month',
      whatYouLearn: [
        'SAS Programming',
        'Statistical Analysis',
        'Clinical Reporting',
        'Data Validation',
        'CDISC Standards'
      ]
    },
    {
      id: 'advanced-clinical-research',
      title: 'Advanced Diploma in Clinical Research',
      duration: '6 Months',
      students: '300+ Enrolled',
      rating: '4.7',
      description: 'Advanced training in clinical research methodologies, data management, and regulatory affairs.',
      features: [
        'Advanced Research Methods',
        'Data Management',
        'Regulatory Affairs',
        'Quality Assurance',
        'Job Placement'
      ],
      image: advancedClinicalResearchBanner,
      jobGuarantee: true,
      batchInfo: 'Batch Starts Every 1st & 3rd Week of Month',
      whatYouLearn: [
        'Advanced Research Methods',
        'Data Management',
        'Regulatory Affairs',
        'Quality Assurance',
        'Clinical Operations'
      ]
    },
    {
      id: 'medical-coding',
      title: 'Advanced Diploma in Medical Coding',
      duration: '6 Months',
      students: '450+ Enrolled',
      rating: '4.8',
      description: 'Master medical coding systems including ICD-10, CPT, and HCPCS for healthcare documentation.',
      features: [
        'ICD-10 Coding',
        'CPT Procedures',
        'Medical Terminology',
        'Healthcare Documentation',
        'Industry Projects'
      ],
      image: medicalCodingBanner,
      jobGuarantee: true,
      batchInfo: 'Batch Starts Every 1st & 3rd Week of Month',
      whatYouLearn: [
        'ICD-10 Coding',
        'CPT Procedures',
        'Medical Terminology',
        'Healthcare Documentation',
        'Billing Processes'
      ]
    },
    {
      id: 'ai-ml',
      title: 'PG Diploma in AI & ML Healthcare',
      duration: '6 Months',
      students: '300+ Enrolled',
      rating: '4.8',
      description: 'Expertise in artificial intelligence and machine learning applications in healthcare and medical research.',
      features: [
        'Machine Learning',
        'Healthcare AI',
        'Predictive Analytics',
        'Medical Imaging AI',
        'Industry Projects'
      ],
      image: aiMlHealthcareBanner,
      jobGuarantee: true,
      batchInfo: 'Batch Starts Every 1st & 3rd Week of Month',
      whatYouLearn: [
        'Machine Learning',
        'Healthcare AI',
        'Predictive Analytics',
        'Medical Imaging AI',
        'Deep Learning'
      ],
      popular: true,
      mostPopular: true
    },
    {
      id: 'mba',
      title: 'MBA in Healthcare Management',
      duration: '2 Years',
      students: '+440 Enrolled',
      rating: '4.9',
      description: 'Comprehensive business administration program focused on healthcare industry management and leadership.',
      features: [
        'Healthcare Strategy',
        'Operations Management',
        'Financial Planning',
        'Leadership Skills',
        'Executive Placement'
      ],
      image: mbaHealthcareBanner,
      jobGuarantee: true,
      batchInfo: 'Check For Admission Eligibility',
      whatYouLearn: [
        'Healthcare Strategy',
        'Operations Management',
        'Financial Planning',
        'Leadership Skills',
        'Strategic Planning'
      ],
      industryEndorsed: true
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

  return (
    <section id="courses" className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
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
        <BookOpen className="absolute top-2/3 right-1/6 text-blue-400 opacity-50 animate-bounce" size={22} style={{ animationDelay: '1.5s', animationDuration: '3.8s' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Courses</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Industry-focused programs designed to make you job-ready with hands-on training and 100% placement support
          </p>
        </div>

        {/* Course Carousel */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-white/90 backdrop-blur-md border border-white/30 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
          >
            <ChevronLeft className="text-blue-600" size={24} />
          </button>

          <button
            onClick={nextSlide}
            disabled={currentIndex + coursesPerPage >= courses.length}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-white/90 backdrop-blur-md border border-white/30 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
          >
            <ChevronRight className="text-blue-600" size={24} />
          </button>

          {/* Courses Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-500">
            {getCurrentCourses().map((course, index) => (
              <div
                key={currentIndex + index}
                className={`group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:scale-105 ${
                  course.popular ? 'ring-2 ring-blue-500/50' : ''
                }`}
              >
                {/* Special Badges */}
                {course.mostPopular && (
                  <div className="absolute top-0 right-0 z-10">
                    <div className="bg-gradient-to-r from-pink-500 to-red-500 text-white px-4 py-2 text-xs font-bold shadow-lg">
                      MOST POPULAR
                    </div>
                  </div>
                )}
                
                {course.industryEndorsed && (
                  <div className="absolute top-12 right-8 z-10">
                    <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-2 text-xs font-bold rounded-full shadow-lg">
                      Industry-Endorsed
                    </div>
                  </div>
                )}
                
                {/* Course Banner Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="w-full h-full object-cover object-center brightness-110 contrast-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                </div>
                
                {/* Course Content Section - This is now part of the banner image */}
                <div className="p-6">
                  {/* Additional Course Information */}
                  <div className="mb-6">
                    <div className="space-y-3">
                      <div className="flex items-center text-gray-700">
                        <Calendar className="text-orange-500 mr-3" size={20} />
                        <span className="font-poppins font-medium">{course.duration}</span>
                      </div>
                      <div className="flex items-center text-gray-700">
                        <Users className="text-orange-500 mr-3" size={20} />
                        <span className="font-poppins font-medium">{course.students}</span>
                      </div>
                      <div className="flex items-center text-gray-700">
                        <Calendar className="text-orange-500 mr-3" size={20} />
                        <span className="font-poppins font-medium">{course.batchInfo}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Course Features */}
                  <div className="mb-6">
                    <ul className="space-y-2">
                      {course.whatYouLearn.slice(0, 3).map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start text-sm text-gray-700">
                          <CheckCircle className="text-green-500 mr-2 mt-0.5 flex-shrink-0" size={16} />
                          <span className="font-poppins">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* CTA Buttons */}
                  <div className="space-y-3">
                    <button className="w-full bg-gradient-to-r from-gray-800 to-gray-900 text-white py-3 px-6 rounded-xl font-semibold font-poppins hover:from-gray-900 hover:to-black transition-all duration-300 transform hover:scale-105">
                      {course.id === 'mba' ? 'Check Admission Eligibility' : 'Enroll Now'}
                    </button>
                    <button className="w-full text-orange-600 py-2 px-6 rounded-xl font-semibold font-poppins hover:text-orange-700 transition-all duration-300 transform hover:scale-105 border border-orange-200 hover:border-orange-300">
                      Get Free Counseling
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i * coursesPerPage)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  Math.floor(currentIndex / coursesPerPage) === i
                    ? 'bg-blue-600 scale-125'
                    : 'bg-gray-300 hover:bg-blue-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white/40 backdrop-blur-lg border border-white/20 rounded-3xl p-8 shadow-2xl hover:bg-white/50 transition-all duration-500">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Not sure which course is right for you?
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

export default Courses;