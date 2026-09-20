import React, { useState } from 'react';
import RoyalBorders from './components/RoyalBorders';
import PetalCanvas from './components/PetalCanvas';
import Navigation from './components/Navigation';
import MusicPlayer from './components/MusicPlayer';
import HeroInvitation from './components/HeroInvitation';
import SectionDivider from './components/SectionDivider';
import CoupleSection from './components/CoupleSection';
import CeremoniesSection from './components/CeremoniesSection';
import MomentsSection from './components/MomentsSection';
import VideoWishesSection from './components/VideoWishesSection';
import VenueSection from './components/VenueSection';
import Footer from './components/Footer';
import LightboxModal from './components/LightboxModal';
import ToastNotification from './components/ToastNotification';

export default function App() {
  const [toastMessage, setToastMessage] = useState('');
  const [activeLightboxItem, setActiveLightboxItem] = useState(null);

  const showToast = (msg) => {
    setToastMessage(msg);
  };

  const closeToast = () => {
    setToastMessage('');
  };

  const openLightbox = (item) => {
    setActiveLightboxItem(item);
  };

  const closeLightbox = () => {
    setActiveLightboxItem(null);
  };

  return (
    <div className="royal-app-container">
      {/* Royal double gold border & floral frame overlay */}
      <RoyalBorders />

      {/* Falling flower petals and golden stardust canvas */}
      <PetalCanvas />

      {/* Minimalist seamless navigation */}
      <Navigation />

      {/* Subtle classical Indian melody player toggle */}
      <MusicPlayer onShowToast={showToast} />

      {/* Main seamless invitation flow */}
      <main className="invitation-seamless-flow">
        <HeroInvitation />

        <SectionDivider />

        <CoupleSection />

        <SectionDivider />

        <CeremoniesSection />

        <SectionDivider />

        <MomentsSection onOpenLightbox={openLightbox} />

        <SectionDivider />

        <VideoWishesSection onShowToast={showToast} />

        <SectionDivider />

        <VenueSection />

        <Footer />
      </main>

      {/* Photo gallery lightbox modal */}
      <LightboxModal item={activeLightboxItem} onClose={closeLightbox} />

      {/* Floating toast notification */}
      <ToastNotification message={toastMessage} onClose={closeToast} />
    </div>
  );
}
