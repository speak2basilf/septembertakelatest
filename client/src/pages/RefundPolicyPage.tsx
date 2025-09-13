import React from 'react';
import { CreditCard, DollarSign, Clock, FileText, Users, Globe, Mail, Phone, AlertCircle } from 'lucide-react';

const RefundPolicyPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-slate-50 to-blue-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/80 via-blue-600/60 to-indigo-600/80"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-lg rounded-2xl flex items-center justify-center">
                <CreditCard className="text-white" size={32} />
              </div>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 font-poppins">
              Refund <span className="text-yellow-400">Policy</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-4 max-w-3xl mx-auto font-poppins">
              Clear and transparent refund guidelines for CliniGlobal training programs and services.
            </p>
            <p className="text-sm text-white/80 font-poppins">
              Last updated: January 15, 2025
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Introduction */}
        <div className="bg-white/60 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-lg mb-12">
          <div className="flex items-center mb-6">
            <FileText className="text-blue-600 mr-4" size={28} />
            <h2 className="text-2xl font-bold text-gray-900 font-poppins">Introduction</h2>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4 font-poppins">
            CliniGlobal Research Institute Private Limited ("CliniGlobal") is committed to providing high-quality education and training services. This Refund Policy outlines the terms and conditions under which refunds may be requested and processed for our courses and services.
          </p>
          <p className="text-gray-700 leading-relaxed font-poppins">
            By enrolling in our programs, you acknowledge that you have read, understood, and agree to the terms of this Refund Policy.
          </p>
        </div>

        {/* Refund Eligibility */}
        <div className="bg-white/60 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-lg mb-12">
          <div className="flex items-center mb-6">
            <DollarSign className="text-green-600 mr-4" size={28} />
            <h2 className="text-2xl font-bold text-gray-900 font-poppins">Refund Eligibility</h2>
          </div>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3 font-poppins">Cooling-Off Period</h3>
              <p className="text-gray-700 mb-3 font-poppins">Students have a 7-day cooling-off period from the date of enrollment to request a full refund, provided:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 font-poppins">
                <li>No more than 10% of course content has been accessed</li>
                <li>No downloadable materials have been accessed</li>
                <li>No live sessions have been attended</li>
                <li>Request is made in writing within the cooling-off period</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3 font-poppins">Course Cancellation by CliniGlobal</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 font-poppins">
                <li>100% refund if course is cancelled due to insufficient enrollment</li>
                <li>Full refund if course is cancelled due to technical issues</li>
                <li>Alternative course placement or full refund options available</li>
                <li>Refund processed within 15 business days</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Partial Refunds */}
        <div className="bg-white/60 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-lg mb-12">
          <div className="flex items-center mb-6">
            <Clock className="text-orange-600 mr-4" size={28} />
            <h2 className="text-2xl font-bold text-gray-900 font-poppins">Partial Refund Conditions</h2>
          </div>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3 font-poppins">Timeline-Based Refunds</h3>
              <div className="overflow-x-auto">
                <table className="w-full border border-gray-200 rounded-lg">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 font-poppins">Period</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 font-poppins">Refund Amount</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-4 py-3 text-sm text-gray-700 font-poppins">Within 7 days (Cooling-off)</td>
                      <td className="px-4 py-3 text-sm text-gray-700 font-poppins">100% refund</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm text-gray-700 font-poppins">8-30 days from enrollment</td>
                      <td className="px-4 py-3 text-sm text-gray-700 font-poppins">50% refund (if less than 25% course completed)</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm text-gray-700 font-poppins">31+ days from enrollment</td>
                      <td className="px-4 py-3 text-sm text-gray-700 font-poppins">No refund available</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-yellow-50 p-4 rounded-xl">
              <div className="flex items-start space-x-3">
                <AlertCircle className="text-yellow-600 mt-1" size={20} />
                <p className="text-yellow-800 font-medium font-poppins">
                  <strong>Important:</strong> Refund eligibility is subject to course progress and may vary based on individual circumstances.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Non-Refundable Items */}
        <div className="bg-white/60 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-lg mb-12">
          <div className="flex items-center mb-6">
            <AlertCircle className="text-red-600 mr-4" size={28} />
            <h2 className="text-2xl font-bold text-gray-900 font-poppins">Non-Refundable Items</h2>
          </div>
          
          <div className="space-y-4">
            <p className="text-gray-700 leading-relaxed font-poppins">
              The following items and services are non-refundable under any circumstances:
            </p>
            
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 font-poppins">
              <li>Registration and processing fees</li>
              <li>Examination and certification fees</li>
              <li>Downloaded materials and resources</li>
              <li>Completed assignments and project work</li>
              <li>Live session recordings accessed</li>
              <li>Career counseling and placement services availed</li>
              <li>Third-party certification costs</li>
            </ul>
          </div>
        </div>

        {/* Refund Process */}
        <div className="bg-white/60 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-lg mb-12">
          <div className="flex items-center mb-6">
            <Users className="text-purple-600 mr-4" size={28} />
            <h2 className="text-2xl font-bold text-gray-900 font-poppins">Refund Request Process</h2>
          </div>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3 font-poppins">How to Request a Refund</h3>
              <ol className="list-decimal list-inside text-gray-700 space-y-2 ml-4 font-poppins">
                <li>Submit a written refund request to hr@cliniglobal.com</li>
                <li>Include your enrollment details and reason for refund</li>
                <li>Provide supporting documentation if applicable</li>
                <li>Allow 5-7 business days for review and response</li>
                <li>Complete any required verification process</li>
              </ol>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3 font-poppins">Required Information</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 font-poppins">
                <li>Full name and contact information</li>
                <li>Course name and enrollment date</li>
                <li>Transaction ID or receipt number</li>
                <li>Detailed reason for refund request</li>
                <li>Bank account details for refund processing</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Processing Timeline */}
        <div className="bg-white/60 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-lg mb-12">
          <div className="flex items-center mb-6">
            <Clock className="text-indigo-600 mr-4" size={28} />
            <h2 className="text-2xl font-bold text-gray-900 font-poppins">Processing Timeline</h2>
          </div>
          
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-gray-900 font-poppins">Review Process</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4 font-poppins text-sm">
                  <li>Initial review: 3-5 business days</li>
                  <li>Verification process: 2-3 business days</li>
                  <li>Decision notification: 1-2 business days</li>
                  <li>Total review time: 5-10 business days</li>
                </ul>
              </div>
              
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-gray-900 font-poppins">Refund Processing</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4 font-poppins text-sm">
                  <li>Bank transfer: 5-7 business days</li>
                  <li>Credit card refund: 7-14 business days</li>
                  <li>Online payment: 3-5 business days</li>
                  <li>Processing fees may apply</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Special Circumstances */}
        <div className="bg-white/60 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-lg mb-12">
          <div className="flex items-center mb-6">
            <Globe className="text-green-600 mr-4" size={28} />
            <h2 className="text-2xl font-bold text-gray-900 font-poppins">Special Circumstances</h2>
          </div>
          
          <div className="space-y-4">
            <p className="text-gray-700 leading-relaxed font-poppins">
              CliniGlobal may consider refunds outside the standard policy in exceptional circumstances:
            </p>
            
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 font-poppins">
              <li><strong>Medical Emergency:</strong> Documented medical conditions preventing course completion</li>
              <li><strong>Technical Issues:</strong> Persistent platform problems affecting course access</li>
              <li><strong>Course Quality:</strong> Significant deviation from promised course content</li>
              <li><strong>Instructor Issues:</strong> Unavailability of qualified instructors</li>
            </ul>
            
            <div className="bg-blue-50 p-4 rounded-xl">
              <p className="text-blue-800 font-medium font-poppins">
                All special circumstance requests require proper documentation and are subject to management approval.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-3xl p-8 shadow-2xl">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-4 font-poppins">Contact Us for Refund Requests</h2>
            <p className="text-white/90 font-poppins">
              For any refund-related queries or to initiate a refund request, please contact us:
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="text-white" size={20} />
                <div>
                  <p className="font-semibold font-poppins">Email</p>
                  <p className="text-white/90 font-poppins">hr@cliniglobal.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="text-white" size={20} />
                <div>
                  <p className="font-semibold font-poppins">Phone</p>
                  <p className="text-white/90 font-poppins">+91 70937 94447</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Globe className="text-white mt-1" size={20} />
                <div>
                  <p className="font-semibold font-poppins">Address</p>
                  <p className="text-white/90 text-sm font-poppins">
                    CliniGlobal Research Institute<br/>
                    303, Meghamala Apartment Road,<br/>
                    Kumar Basti, Srinivasa Nagar, Ameerpet,<br/>
                    Hyderabad, Telangana – 500082
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-8 pt-6 border-t border-white/20">
            <p className="text-white/80 text-sm font-poppins">
              This Refund Policy is effective as of January 15, 2025, and may be updated from time to time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RefundPolicyPage;