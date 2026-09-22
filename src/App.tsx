import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BrandTrustStrip } from './components/BrandTrustStrip';
import { QuickTroubleshooter } from './components/QuickTroubleshooter';
import { ServicesSection } from './components/ServicesSection';
import { HowItWorks } from './components/HowItWorks';
import { PriceCalculator } from './components/PriceCalculator';
import { ComparisonSection } from './components/ComparisonSection';
import { GoogleReviewsSection } from './components/GoogleReviewsSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { BeforeAfterGallery } from './components/BeforeAfterGallery';
import { CoverageAreas } from './components/CoverageAreas';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { StickyBottomBar } from './components/StickyBottomBar';
import { BookingModal } from './components/BookingModal';
import { VideoDemoModal } from './components/VideoDemoModal';
import { FloatingWhatsAppDrawer } from './components/FloatingWhatsAppDrawer';
import { ServiceItem, ACProblem, BookingData } from './types';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [prefilledService, setPrefilledService] = useState('Split AC Deep Jet Foam Servicing');
  const [prefilledLocality, setPrefilledLocality] = useState('');
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  const [bookings, setBookings] = useState<BookingData[]>(() => {
    try {
      const saved = localStorage.getItem('dr_air_cool_bookings');
      if (saved) return JSON.parse(saved);
    } catch {
      // fallback
    }
    return [];
  });

  useEffect(() => {
    try {
      localStorage.setItem('dr_air_cool_bookings', JSON.stringify(bookings));
    } catch {
      // storage unavailable
    }
  }, [bookings]);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenBooking = (serviceName?: string, localityName?: string) => {
    if (serviceName) setPrefilledService(serviceName);
    if (localityName) setPrefilledLocality(localityName);
    setIsBookingOpen(true);
  };

  const handleSelectProblem = (problem: ACProblem) => {
    setPrefilledService(`${problem.name} (${problem.recommendedService})`);
    setIsBookingOpen(true);
  };

  const handleBookService = (service: ServiceItem) => {
    setPrefilledService(service.title);
    setIsBookingOpen(true);
  };

  const handleBookingSuccess = (newBooking: BookingData) => {
    setBookings(prev => [newBooking, ...prev]);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-cyan-500 selection:text-white">
      {/* Top Sticky Navbar */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 1. Hero Section with 4.9★ Google badge, heatwave alert, and instant booking */}
        <Hero
          onOpenBooking={(service) => handleOpenBooking(service)}
          onOpenVideo={() => setIsVideoModalOpen(true)}
        />

        {/* 2. Brand Trust Strip (Daikin, Voltas, LG, Samsung, Blue Star, etc.) */}
        <BrandTrustStrip />

        {/* 3. Interactive AC Problem & Symptom Checker */}
        <QuickTroubleshooter onSelectProblem={handleSelectProblem} />

        {/* 4. Comprehensive Service Catalog (Jet Wash, Repair, Gas, Installation, Commercial) */}
        <ServicesSection onBookService={handleBookService} />

        {/* 5. 4-Step Effortless Doorstep Experience */}
        <HowItWorks onOpenBooking={() => handleOpenBooking()} />

        {/* 6. Live Interactive Price Calculator with Instant Multi-unit Discount */}
        <PriceCalculator onOpenBookingWithEstimate={(estimate) => handleOpenBooking(estimate)} />

        {/* 7. Comparison Matrix: Dr Air Cool vs Typical Local Mechanic */}
        <ComparisonSection />

        {/* 8. Google Reviews & Rating Showcase (4.9★ with 72 Reviews) */}
        <GoogleReviewsSection />

        {/* 9. Why Mumbai Trusts Dr Air Cool Services */}
        <WhyChooseUs />

        {/* 10. Visible Quality Difference: Before / After Jet Clean Gallery */}
        <BeforeAfterGallery />

        {/* 11. Mumbai Coverage Areas & Kurla West Workshop Map */}
        <CoverageAreas onOpenBooking={(locality) => handleOpenBooking(undefined, locality)} />

        {/* 12. FAQs */}
        <FaqSection />
      </main>

      {/* Rich Footer with address & contacts */}
      <Footer />

      {/* Persistent Bottom Quick-Action Bar for Mobile Visitors */}
      <StickyBottomBar onOpenBooking={() => handleOpenBooking()} />

      {/* Floating Interactive WhatsApp Drawer */}
      <FloatingWhatsAppDrawer />

      {/* Back to Top Floating Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          aria-label="Back to top"
          className="fixed bottom-20 sm:bottom-8 right-4 sm:right-6 z-30 w-11 h-11 bg-white hover:bg-slate-100 text-slate-800 rounded-full shadow-lg border border-slate-200 flex items-center justify-center transition-all hover:scale-105 active:scale-95 focus:outline-hidden"
        >
          <ArrowUp className="w-5 h-5 text-sky-600" />
        </button>
      )}

      {/* Booking Appointment Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        prefilledService={prefilledService}
        prefilledLocality={prefilledLocality}
        onBookingSuccess={handleBookingSuccess}
      />

      {/* Video Demonstration Modal (0:22 Jet Service) */}
      <VideoDemoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        onOpenBooking={() => handleOpenBooking('Split AC Deep Jet Foam Servicing')}
      />
    </div>
  );
}
