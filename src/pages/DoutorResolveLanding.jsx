// pages/DoutorResolveLanding.jsx
import React from 'react';

// Components
import Header from '../components/Header';
import MediaLogos from '../components/MediaLogos';
import HowItWorks from '../components/HowItWorks';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import Map from '../components/Map';
import Trust from '../components/Trust';
import Footer from '../components/Footer';

export default function DoutorResolveLanding() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <MediaLogos />
      <HowItWorks />
      <Services />
      <Testimonials />
      <Map />
      <Trust />
      <Footer />
    </div>
  );
}