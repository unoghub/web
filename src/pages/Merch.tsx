import React from 'react';
import { LanguageProvider } from '../contexts/LanguageContext';
import Header from '../components/Header';
import MerchSection from '../components/MerchSection';
import Footer from '../components/Footer';

const Merch = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <Header />
        <main className="pt-20">
          <MerchSection />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Merch; 