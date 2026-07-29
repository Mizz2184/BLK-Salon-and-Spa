import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { ServicesMenu } from './components/ServicesMenu';
import { LuxuryRooms } from './components/LuxuryRooms';
import { Packages } from './components/Packages';
import { Memberships } from './components/Memberships';
import { ShopSection } from './components/ShopSection';
import { BookingInfoPolicy } from './components/BookingInfoPolicy';
import { ContactFooter } from './components/ContactFooter';
import { BookingModal } from './components/BookingModal';
import { GiftCardModal } from './components/GiftCardModal';
import { BridalModal } from './components/BridalModal';

export default function App() {
  const [bookingModalState, setBookingModalState] = useState<{
    isOpen: boolean;
    category?: string;
    serviceId?: string;
    packageId?: string;
  }>({ isOpen: false });

  const [giftCardModalOpen, setGiftCardModalOpen] = useState(false);
  const [bridalModalOpen, setBridalModalOpen] = useState(false);

  // Initialize Lenis Smooth Scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1.0,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  const handleOpenBooking = (category?: string, serviceId?: string, packageId?: string) => {
    setBookingModalState({
      isOpen: true,
      category,
      serviceId,
      packageId
    });
  };

  const handleCloseBooking = () => {
    setBookingModalState({ isOpen: false });
  };

  return (
    <div className="min-h-screen bg-white text-neutral-900 selection:bg-black selection:text-white">
      
      {/* Top Navbar */}
      <Navbar
        onOpenBooking={(cat) => handleOpenBooking(cat)}
        onOpenGiftCard={() => setGiftCardModalOpen(true)}
        onOpenBridal={() => setBridalModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main>
        <Hero
          onOpenBooking={() => handleOpenBooking()}
          onOpenGiftCard={() => setGiftCardModalOpen(true)}
          onOpenBridal={() => setBridalModalOpen(true)}
        />

        <About />

        <ServicesMenu
          onOpenBooking={(cat, srvId) => handleOpenBooking(cat, srvId)}
          onOpenBridal={() => setBridalModalOpen(true)}
        />

        <LuxuryRooms
          onOpenBooking={(cat) => handleOpenBooking(cat)}
        />

        <Packages
          onOpenBooking={(cat, srvId, pkgId) => handleOpenBooking(cat, srvId, pkgId)}
        />

        <Memberships
          onOpenBooking={() => handleOpenBooking('Memberships')}
        />

        <ShopSection />

        <BookingInfoPolicy
          onOpenBooking={() => handleOpenBooking()}
        />
      </main>

      {/* Footer */}
      <ContactFooter
        onOpenBooking={() => handleOpenBooking()}
        onOpenGiftCard={() => setGiftCardModalOpen(true)}
        onOpenBridal={() => setBridalModalOpen(true)}
      />

      {/* Interactive Modals */}
      <BookingModal
        isOpen={bookingModalState.isOpen}
        onClose={handleCloseBooking}
        initialCategory={bookingModalState.category}
        initialServiceId={bookingModalState.serviceId}
        initialPackageId={bookingModalState.packageId}
      />

      <GiftCardModal
        isOpen={giftCardModalOpen}
        onClose={() => setGiftCardModalOpen(false)}
      />

      <BridalModal
        isOpen={bridalModalOpen}
        onClose={() => setBridalModalOpen(false)}
      />

    </div>
  );
}
