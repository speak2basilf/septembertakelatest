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
              Clear and transparent no-refund policy for CliniGlobal training programs and services.
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
            CliniGlobal Research Institute Private Limited ("CliniGlobal") is committed to providing high-quality education and training services. This Refund Policy clearly states that all payments made for our courses and services are final and non-refundable.
          </p>
          <p className="text-gray-700 leading-relaxed font-poppins">
            By enrolling in our programs and making payment, you acknowledge that you have read, understood, and agree to this strict no-refund policy.
          </p>
        </div>

        {/* No Refund Policy */}
        <div className="bg-white/60 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-lg mb-12">
          <div className="flex items-center mb-6">
            <DollarSign className="text-red-600 mr-4" size={28} />
            <h2 className="text-2xl font-bold text-gray-900 font-poppins">No Refund Policy</h2>
          </div>
          
          <div className="space-y-6">
            <div className="bg-red-50 p-6 rounded-xl border border-red-200">
              <div className="flex items-start space-x-3">
                <AlertCircle className="text-red-600 mt-1" size={24} />
                <div>
                  <h3 className="text-lg font-semibold text-red-900 mb-3 font-poppins">Important Notice</h3>
                  <p className="text-red-800 font-medium font-poppins mb-4">
                    <strong>NO REFUNDS OR PARTIAL REFUNDS ARE ENTERTAINED UNDER ANY CIRCUMSTANCES.</strong>
                  </p>
                  <p className="text-red-700 font-poppins">
                    All course fees, registration charges, and payments made to CliniGlobal Research Institute are final and non-refundable once the payment is processed.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3 font-poppins">This Policy Applies To:</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 font-poppins">
                <li>All course enrollments and registrations</li>
                <li>Examination and certification fees</li>
                <li>Study materials and resources</li>
                <li>Live sessions and recorded content</li>
                <li>Placement assistance services</li>
                <li>Any additional services provided by CliniGlobal</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Payment Terms */}
        <div className="bg-white/60 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-lg mb-12">
          <div className="flex items-center mb-6">
            <Clock className="text-orange-600 mr-4" size={28} />
            <h2 className="text-2xl font-bold text-gray-900 font-poppins">Payment Terms</h2>
          </div>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3 font-poppins">Final Payment Confirmation</h3>
              <p className="text-gray-700 mb-4 font-poppins">
                By completing the payment process, you confirm that:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 font-poppins">
                <li>You have carefully reviewed the course details and pricing</li>
                <li>You understand that all payments are final and non-refundable</li>
                <li>You agree to complete the course as per the scheduled timeline</li>
                <li>You acknowledge that no refund will be provided for any reason</li>
                <li>You accept full responsibility for your enrollment decision</li>
              </ul>
            </div>

            <div className="bg-orange-50 p-4 rounded-xl">
              <div className="flex items-start space-x-3">
                <AlertCircle className="text-orange-600 mt-1" size={20} />
                <p className="text-orange-800 font-medium font-poppins">
                  <strong>Think Before You Pay:</strong> Please ensure you are fully committed to the course before making payment as no refunds will be provided.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Why This Policy Exists */}
        <div className="bg-white/60 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-lg mb-12">
          <div className="flex items-center mb-6">
            <AlertCircle className="text-blue-600 mr-4" size={28} />
            <h2 className="text-2xl font-bold text-gray-900 font-poppins">Why This Policy Exists</h2>
          </div>
          
          <div className="space-y-4">
            <p className="text-gray-700 leading-relaxed font-poppins mb-4">
              Our strict no-refund policy exists for the following reasons:
            </p>
            
            <ul className="list-disc list-inside text-gray-700 space-y-3 ml-4 font-poppins">
              <li><strong>Resource Allocation:</strong> Course materials, instructor time, and resources are allocated based on confirmed enrollments</li>
              <li><strong>Commitment:</strong> We believe serious commitment from students leads to better learning outcomes</li>
              <li><strong>Administrative Efficiency:</strong> This policy allows us to focus on education rather than processing refund requests</li>
              <li><strong>Fair Pricing:</strong> Our competitive pricing is possible because of this policy</li>
              <li><strong>Course Integrity:</strong> Ensures all enrolled students are committed to completing the program</li>
            </ul>

            <div className="bg-blue-50 p-4 rounded-xl mt-6">
              <p className="text-blue-800 font-medium font-poppins">
                <strong>Our Commitment:</strong> Instead of refunds, we focus on providing exceptional value through high-quality education, career support, and placement assistance.
              </p>
            </div>
          </div>
        </div>

        {/* Payment Support */}
        <div className="bg-white/60 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-lg mb-12">
          <div className="flex items-center mb-6">
            <Users className="text-purple-600 mr-4" size={28} />
            <h2 className="text-2xl font-bold text-gray-900 font-poppins">Payment Support & Assistance</h2>
          </div>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3 font-poppins">Before You Pay - We're Here to Help</h3>
              <p className="text-gray-700 mb-3 font-poppins">
                Since no refunds are available, we encourage you to contact us before enrollment if you have any questions:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 font-poppins">
                <li>Course curriculum and learning outcomes</li>
                <li>Time commitment and study requirements</li>
                <li>Career prospects and placement opportunities</li>
                <li>Payment plans and installment options</li>
                <li>Technical requirements and prerequisites</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3 font-poppins">Alternative Solutions</h3>
              <p className="text-gray-700 mb-3 font-poppins">
                While refunds are not available, we may offer the following in exceptional circumstances:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 font-poppins">
                <li>Course deferral to next available batch (subject to terms)</li>
                <li>Additional support and guidance for struggling students</li>
                <li>Extended access to course materials (case-by-case basis)</li>
                <li>One-on-one mentoring sessions for complex topics</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Course Cancellation by CliniGlobal */}
        <div className="bg-white/60 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-lg mb-12">
          <div className="flex items-center mb-6">
            <Clock className="text-indigo-600 mr-4" size={28} />
            <h2 className="text-2xl font-bold text-gray-900 font-poppins">Course Cancellation by CliniGlobal</h2>
          </div>
          
          <div className="space-y-4">
            <p className="text-gray-700 leading-relaxed font-poppins mb-4">
              In the rare event that CliniGlobal needs to cancel a course, the following options will be provided:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-gray-900 font-poppins">Primary Options</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 font-poppins text-sm">
                  <li>Transfer to next available batch of the same course</li>
                  <li>Transfer to an equivalent course with similar learning outcomes</li>
                  <li>Credit towards any other CliniGlobal program</li>
                  <li>Extended validity for future course enrollment</li>
                </ul>
              </div>
              
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-gray-900 font-poppins">Exceptional Cases Only</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 font-poppins text-sm">
                  <li>Refund only if no alternative courses are suitable</li>
                  <li>Refund only if student cannot wait for next batch</li>
                  <li>Decision at CliniGlobal's discretion</li>
                  <li>Processing time: 30-45 business days</li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded-xl">
              <p className="text-gray-800 font-medium font-poppins">
                <strong>Note:</strong> Course cancellations by CliniGlobal are extremely rare and typically occur only due to unforeseen circumstances beyond our control.
              </p>
            </div>
          </div>
        </div>

        {/* Legal and Compliance */}
        <div className="bg-white/60 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-lg mb-12">
          <div className="flex items-center mb-6">
            <Globe className="text-green-600 mr-4" size={28} />
            <h2 className="text-2xl font-bold text-gray-900 font-poppins">Legal and Compliance</h2>
          </div>
          
          <div className="space-y-4">
            <p className="text-gray-700 leading-relaxed font-poppins mb-4">
              This no-refund policy is legally binding and enforceable under Indian law:
            </p>
            
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 font-poppins">
              <li><strong>Legal Agreement:</strong> Payment confirmation constitutes acceptance of this policy</li>
              <li><strong>Consumer Rights:</strong> This policy complies with applicable consumer protection laws</li>
              <li><strong>Dispute Resolution:</strong> Any disputes will be resolved through arbitration in Hyderabad</li>
              <li><strong>Governing Law:</strong> This policy is governed by the laws of India</li>
              <li><strong>Jurisdiction:</strong> Hyderabad courts have exclusive jurisdiction</li>
            </ul>
            
            <div className="bg-gray-50 p-4 rounded-xl">
              <p className="text-gray-800 font-medium font-poppins">
                <strong>Acknowledgment:</strong> By making payment, you acknowledge that you have read and understood this policy and waive any right to claim refunds.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-3xl p-8 shadow-2xl">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-4 font-poppins">Contact Us for Enrollment Support</h2>
            <p className="text-white/90 font-poppins">
              For any questions about our courses or enrollment support before making payment, please contact us:
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
                    House No 38 (old) 3, situated at<br/>
                    Gayatri Co-operative Housing Society, Ameerpet,<br/>
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