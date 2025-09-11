import React, { useState } from 'react';
import { X, Phone, ChevronDown, ChevronUp } from 'lucide-react';

const QueryWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(true);
  const [formData, setFormData] = useState({
    query: '',
    phone: '',
    email: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Query submitted:', formData);
    setFormData({ query: '', phone: '', email: '' });
    setIsOpen(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <>
      {/* Query Widget Button */}
      <div className="fixed bottom-6 right-6 z-50">
        {!isOpen && (
          <button
            onClick={() => setIsOpen(true)}
            className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2 font-semibold hover:scale-105"
          >
            <Phone size={20} />
            <span>Drop us a Query</span>
            <ChevronUp size={16} />
          </button>
        )}

        {/* Query Form Widget */}
        {isOpen && (
          <div className="bg-white rounded-lg shadow-2xl border border-gray-200 w-96 max-w-[calc(100vw-2rem)]">
            {/* Header */}
            <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white p-4 rounded-t-lg flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="flex items-center space-x-2"
                >
                  <span className="font-semibold">Drop us a Query</span>
                  {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="hover:bg-white/20 p-1 rounded transition-colors"
              >
                <X size={16} />
              </button>
            </div>

            {/* Content */}
            {isExpanded && (
              <div className="p-4">
                {/* Customer Service Images */}
                <div className="flex justify-center mb-4">
                  <div className="flex -space-x-2">
                    <div className="w-12 h-12 rounded-full bg-gray-200 border-2 border-white overflow-hidden">
                      <img 
                        src="/attached_assets/femal1_1753103497719.jpg" 
                        alt="Customer Service" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="w-12 h-12 rounded-full bg-gray-200 border-2 border-white overflow-hidden">
                      <img 
                        src="/attached_assets/men1_1753103497721.jpg" 
                        alt="Customer Service" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="w-12 h-12 rounded-full bg-gray-200 border-2 border-white overflow-hidden">
                      <img 
                        src="/attached_assets/femal2_1753103497720.jpg" 
                        alt="Customer Service" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Phone Number */}
                <div className="flex items-center justify-center mb-4 bg-gray-50 p-3 rounded-lg">
                  <Phone className="text-red-500 mr-2" size={20} />
                  <div>
                    <div className="font-semibold text-gray-800">+91 7093794447</div>
                    <div className="text-sm text-gray-600">Available 24x7 for your queries</div>
                  </div>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <textarea
                      name="query"
                      value={formData.query}
                      onChange={handleInputChange}
                      placeholder="Type your query here*"
                      className="w-full p-3 border border-gray-300 rounded-lg resize-none h-20 focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <div className="flex">
                      <select className="px-3 py-2 border border-gray-300 rounded-l-lg bg-gray-50 text-sm">
                        <option>IN</option>
                      </select>
                      <span className="px-3 py-2 border-t border-b border-gray-300 bg-gray-50 text-sm">+91</span>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Enter Phone Number*"
                        className="flex-1 p-2 border border-gray-300 rounded-r-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email Id
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email*"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-red-500 to-orange-500 text-white py-3 rounded-lg font-semibold hover:from-red-600 hover:to-orange-600 transition-all duration-300"
                  >
                    SUBMIT QUERY
                  </button>
                </form>
              </div>
            )}

            {/* Collapsed state content */}
            {!isExpanded && (
              <div className="p-4">
                <div className="flex items-center justify-center">
                  <Phone className="text-red-500 mr-2" size={20} />
                  <div>
                    <div className="font-semibold text-gray-800">+91 7093794447</div>
                    <div className="text-sm text-gray-600">Click to expand form</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default QueryWidget;