import React from 'react';
import { Award, Shield, CheckCircle } from 'lucide-react';

const Accreditations: React.FC = () => {
  const accreditations = [
    {
      logo: '/logo 1 copy.png',
      title: 'IAO Accreditation',
      description: 'International standards in healthcare education'
    },
    {
      logo: '/logo 2 copy.png', 
      title: 'ISO 9001:2015',
      description: 'Quality management system certification'
    },
    {
      logo: '/logo 3 copy.png',
      title: 'LSSSDC Certified',
      description: 'Life Sciences Sector approved programs'
    },
    {
      logo: '/logo 4 copy.jpeg',
      title: 'Council for Clinical Research & Education (CCRE)',
      description: 'Endorsed by regulatory authorities'
    },
    {
      logo: '/logo 5 copy.jpeg',
      title: 'Asian International University, Manipur',
      description: 'Validated by healthcare leaders'
    },
    {
      logo: '/attached_assets/Screenshot 2025-09-14 at 12.46.23 AM_1757791081237.png',
      title: 'Skill India',
      description: 'Government of India skill development initiative'
    },
    {
      logo: '/attached_assets/Screenshot 2025-09-14 at 12.46.46 AM_1757791087323.png',
      title: 'NSDC',
      description: 'National Skill Development Corporation'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 via-slate-50 to-blue-100 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-48 h-48 bg-gradient-to-r from-blue-200/20 to-indigo-200/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-56 h-56 bg-gradient-to-r from-indigo-200/20 to-blue-200/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-3 py-1 bg-blue-100 rounded-full mb-4">
            <Award className="mr-2 text-blue-600" size={16} />
            <span className="text-blue-800 font-semibold text-sm">TRUSTED & CERTIFIED</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-poppins">
            Accreditations & <span className="text-blue-600">Endorsements</span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto font-poppins">
            Our commitment to excellence is validated by prestigious accreditations and industry-recognized endorsements, 
            ensuring world-class education standards and career-ready training programs.
          </p>
        </div>

        {/* Scrolling Accreditations Container */}
        <div className="relative overflow-hidden bg-white/60 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-lg">
          {/* Gradient masks for smooth scroll effect */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white/60 to-transparent pointer-events-none z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white/60 to-transparent pointer-events-none z-10"></div>
          
          {/* Scrolling container */}
          <div className="flex animate-scroll-horizontal space-x-8">
            {/* First set of accreditations */}
            {accreditations.map((accreditation, index) => (
              <div key={`first-${index}`} className="flex-shrink-0 w-64 h-64 group">
                <div className="bg-white/80 backdrop-blur-sm border border-blue-100 rounded-2xl p-6 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-center h-full flex flex-col justify-between">
                  {/* Logo container with consistent sizing */}
                  <div className="h-20 flex items-center justify-center mb-4">
                    <div className="w-full h-full flex items-center justify-center">
                      <img 
                        src={accreditation.logo} 
                        alt={accreditation.title}
                        className="max-w-full max-h-full object-contain filter hover:brightness-110 transition-all duration-300"
                        onError={(e) => {
                          // Fallback to icon if image fails to load
                          const target = e.currentTarget as HTMLImageElement;
                          target.style.display = 'none';
                          const fallback = target.nextElementSibling as HTMLElement;
                          if (fallback) {
                            fallback.style.display = 'flex';
                          }
                        }}
                      />
                      {/* Fallback icon */}
                      <div className="hidden w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl items-center justify-center">
                        <Award className="text-white" size={24} />
                      </div>
                    </div>
                  </div>
                  
                  {/* Title and description with consistent spacing */}
                  <div className="flex-1 flex flex-col justify-center space-y-2">
                    <h3 className="text-sm font-bold text-gray-900 mb-2 font-poppins leading-tight">
                      {accreditation.title}
                    </h3>
                    <p className="text-xs text-gray-600 font-poppins leading-relaxed">
                      {accreditation.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Duplicate set for seamless infinite scroll */}
            {accreditations.map((accreditation, index) => (
              <div key={`second-${index}`} className="flex-shrink-0 w-64 h-64 group">
                <div className="bg-white/80 backdrop-blur-sm border border-blue-100 rounded-2xl p-6 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-center h-full flex flex-col justify-between">
                  {/* Logo container with consistent sizing */}
                  <div className="h-20 flex items-center justify-center mb-4">
                    <div className="w-full h-full flex items-center justify-center">
                      <img 
                        src={accreditation.logo} 
                        alt={accreditation.title}
                        className="max-w-full max-h-full object-contain filter hover:brightness-110 transition-all duration-300"
                        onError={(e) => {
                          // Fallback to icon if image fails to load
                          const target = e.currentTarget as HTMLImageElement;
                          target.style.display = 'none';
                          const fallback = target.nextElementSibling as HTMLElement;
                          if (fallback) {
                            fallback.style.display = 'flex';
                          }
                        }}
                      />
                      {/* Fallback icon */}
                      <div className="hidden w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl items-center justify-center">
                        <Award className="text-white" size={24} />
                      </div>
                    </div>
                  </div>
                  
                  {/* Title and description with consistent spacing */}
                  <div className="flex-1 flex flex-col justify-center space-y-2">
                    <h3 className="text-sm font-bold text-gray-900 mb-2 font-poppins leading-tight">
                      {accreditation.title}
                    </h3>
                    <p className="text-xs text-gray-600 font-poppins leading-relaxed">
                      {accreditation.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom trust indicator */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-2 px-6 py-3 bg-blue-50 border border-blue-200 rounded-full">
            <Shield className="text-blue-600" size={20} />
            <span className="text-blue-800 font-semibold text-sm font-poppins">
              Globally Recognized Standards
            </span>
            <CheckCircle className="text-green-600" size={20} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Accreditations;