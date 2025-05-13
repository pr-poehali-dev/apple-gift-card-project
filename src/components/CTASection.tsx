
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const CTASection = () => {
  return (
    <section className="py-16 bg-black text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Подарите любимые развлечения</h2>
        <p className="mb-8 max-w-xl mx-auto">
          Музыка, игры, приложения, подписки – всё это доступно с Apple Gift Card.
          Идеальный подарок для любого повода.
        </p>
        <Link to="/cards">
          <Button size="lg" className="rounded-full px-8 py-6 bg-white hover:bg-gray-200 text-black text-base">
            Выбрать карту
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default CTASection;
