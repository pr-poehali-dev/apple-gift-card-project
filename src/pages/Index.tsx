
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import CardSection from '@/components/CardSection';
import FeatureSection from '@/components/FeatureSection';
import InstructionSection from '@/components/InstructionSection';
import FAQ from '@/components/FAQ';
import CTASection from '@/components/CTASection';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <FeatureSection />
        <CardSection />
        <InstructionSection />
        <FAQ />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
