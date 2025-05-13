
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-black text-white">
      <div className="container mx-auto px-4 py-24 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
          Apple Gift Card
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl opacity-90">
          Один подарок. Множество возможностей.
        </p>
        <p className="text-base md:text-lg mb-12 max-w-xl opacity-80">
          Дарите музыку, фильмы, приложения, игры и многое другое.
        </p>
        <Link to="/cards">
          <Button size="lg" className="rounded-full px-8 py-6 bg-white hover:bg-gray-200 text-black text-base">
            Купить сейчас
          </Button>
        </Link>
        
        <div className="mt-16 relative w-full max-w-4xl">
          <img 
            src="https://images.unsplash.com/photo-1606054900054-2438c13a0334?q=80&w=1400&auto=format&fit=crop"
            alt="Apple Gift Card" 
            className="w-full h-auto rounded-xl shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
