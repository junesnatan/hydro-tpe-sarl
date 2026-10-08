import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';
import { ProjectModal } from './components/ProjectModal';
import { ServiceModal } from './components/ServiceModal';
import { WhatsAppButton } from './components/WhatsAppButton';
import { ScrollToTop } from './components/ScrollToTop';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { MethodologyPage } from './pages/MethodologyPage';
import { ContactPage } from './pages/ContactPage';

export function App() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [quoteInitialService, setQuoteInitialService] = useState('');
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedService, setSelectedService] = useState(null);

  const handleOpenQuoteModal = (serviceName = '') => {
    setQuoteInitialService(serviceName || '');
    setQuoteModalOpen(true);
  };

  const handleCloseQuoteModal = () => {
    setQuoteModalOpen(false);
    setQuoteInitialService('');
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-800 antialiased selection:bg-brand-gold selection:text-brand-navy-950">
        
        {/* Sticky Navbar with Active Route Underline */}
        <Header onOpenQuoteModal={() => handleOpenQuoteModal()} />

        {/* Dynamic Page Routes */}
        <main className="flex-grow">
          <Routes>
            <Route 
              path="/" 
              element={
                <HomePage 
                  onOpenQuoteModal={handleOpenQuoteModal} 
                  onSelectProject={setSelectedProject}
                  onSelectService={setSelectedService}
                />
              } 
            />
            <Route 
              path="/a-propos" 
              element={<AboutPage onOpenQuoteModal={handleOpenQuoteModal} />} 
            />
            <Route 
              path="/services" 
              element={<ServicesPage onOpenQuoteModal={handleOpenQuoteModal} />} 
            />
            <Route 
              path="/projets" 
              element={<ProjectsPage onOpenQuoteModal={handleOpenQuoteModal} />} 
            />
            <Route 
              path="/methodologie" 
              element={<MethodologyPage onOpenQuoteModal={handleOpenQuoteModal} />} 
            />
            <Route 
              path="/contact" 
              element={<ContactPage onOpenQuoteModal={handleOpenQuoteModal} />} 
            />
            {/* Fallback route */}
            <Route 
              path="*" 
              element={
                <HomePage 
                  onOpenQuoteModal={handleOpenQuoteModal} 
                  onSelectProject={setSelectedProject}
                  onSelectService={setSelectedService}
                />
              } 
            />
          </Routes>
        </main>

        {/* Compact Mobile-Friendly Footer */}
        <Footer />

        {/* Global Modals */}
        <QuoteModal
          isOpen={quoteModalOpen}
          onClose={handleCloseQuoteModal}
          initialService={quoteInitialService}
        />

        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
            onOpenQuoteModal={handleOpenQuoteModal}
          />
        )}

        {selectedService && (
          <ServiceModal
            service={selectedService}
            onClose={() => setSelectedService(null)}
            onOpenQuoteModal={handleOpenQuoteModal}
          />
        )}

        {/* Floating WhatsApp Action */}
        <WhatsAppButton />
      </div>
    </BrowserRouter>
  );
}

export default App;
