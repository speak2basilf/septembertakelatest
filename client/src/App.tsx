import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';

import IndustryTrainingPrograms from './components/IndustryTrainingPrograms';
import Accreditations from './components/Accreditations';
import Admission from './components/Admission';


import Contact from './components/Contact';
import Footer from './components/Footer';
import QueryWidget from './components/QueryWidget';
import CRMCourse from './pages/CRMCourse';
import MedicalCodingCourse from './pages/MedicalCodingCourse';
import ClinicalSASCourse from './pages/ClinicalSASCourse';
import ADCRCourse from './pages/ADCRCourse';
import CoursesPage from './pages/CoursesPage';
import PlacementsPage from './pages/PlacementsPage';
import AccreditationsPage from './pages/AccreditationsPage';
import LearningCentersPage from './pages/LearningCentersPage';
import BlogPage from './pages/BlogPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';

// Main Home Page Component
const HomePage: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Accreditations />
        <IndustryTrainingPrograms />
        <Admission />
        <Contact />
      </main>
      <Footer />
      <QueryWidget />
    </>
  );
};

// Course Page Layout Component
const CoursePageLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
      <QueryWidget />
    </>
  );
};

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/courses" element={
            <CoursePageLayout>
              <CoursesPage />
            </CoursePageLayout>
          } />
          <Route path="/courses/crm" element={
            <CoursePageLayout>
              <CRMCourse />
            </CoursePageLayout>
          } />
          <Route path="/courses/medical-coding" element={
            <CoursePageLayout>
              <MedicalCodingCourse />
            </CoursePageLayout>
          } />
          <Route path="/placements" element={
            <CoursePageLayout>
              <PlacementsPage />
            </CoursePageLayout>
          } />
          <Route path="/accreditations" element={
            <CoursePageLayout>
              <AccreditationsPage />
            </CoursePageLayout>
          } />
          <Route path="/learning-centers" element={
            <CoursePageLayout>
              <LearningCentersPage />
            </CoursePageLayout>
          } />
          <Route path="/blog" element={
            <CoursePageLayout>
              <BlogPage />
            </CoursePageLayout>
          } />
          <Route path="/privacy-policy" element={
            <CoursePageLayout>
              <PrivacyPolicyPage />
            </CoursePageLayout>
          } />
          {/* Placeholder routes for other courses */}
          <Route path="/courses/pgdcr" element={
            <CoursePageLayout>
              <CRMCourse />
            </CoursePageLayout>
          } />
          <Route path="/courses/adcr" element={
            <CoursePageLayout>
              <ADCRCourse />
            </CoursePageLayout>
          } />
          <Route path="/courses/clinical-sas" element={
            <CoursePageLayout>
              <ClinicalSASCourse />
            </CoursePageLayout>
          } />
          <Route path="/courses/bioinformatics" element={
            <CoursePageLayout>
              <div className="min-h-screen flex items-center justify-center">
                <h1 className="text-4xl font-bold text-gray-900">Bioinformatics Course - Coming Soon</h1>
              </div>
            </CoursePageLayout>
          } />
          <Route path="/courses/ai-ml" element={
            <CoursePageLayout>
              <div className="min-h-screen flex items-center justify-center">
                <h1 className="text-4xl font-bold text-gray-900">AI & ML in Healthcare Course - Coming Soon</h1>
              </div>
            </CoursePageLayout>
          } />
          <Route path="/courses/mba" element={
            <CoursePageLayout>
              <div className="min-h-screen flex items-center justify-center">
                <h1 className="text-4xl font-bold text-gray-900">MBA in Healthcare Management Course - Coming Soon</h1>
              </div>
            </CoursePageLayout>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;