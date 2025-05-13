
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface GiftCardProps {
  value: number;
  image: string;
  popular?: boolean;
}

const GiftCard: React.FC<GiftCardProps> = ({ value, image, popular }) => {
  return (
    <Card className={`overflow-hidden relative transition-all hover:shadow-md ${popular ? 'ring-2 ring-blue-500' : ''}`}>
      {popular && (
        <div className="absolute top-0 right-0 bg-blue-500 text-white text-xs px-2 py-1 rounded-bl-md">
          Популярно
        </div>
      )}
      <CardContent className="p-0">
        <img src={image} alt={`Gift Card ${value} ₽`} className="w-full h-auto" />
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2">Gift Card {value} ₽</h3>
          <p className="text-gray-600 mb-4 text-sm">
            Используйте для покупок в App Store и других сервисах Apple
          </p>
          <div className="flex justify-between items-center">
            <span className="text-xl font-bold">{value} ₽</span>
            <Button className="rounded-full">
              В корзину
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const CardSection = () => {
  const cards = [
    {
      value: 1000,
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=500&auto=format&fit=crop",
      popular: false
    },
    {
      value: 2500,
      image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?q=80&w=500&auto=format&fit=crop",
      popular: true
    },
    {
      value: 5000,
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=500&auto=format&fit=crop",
      popular: false
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Выберите номинал</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Apple Gift Card может быть использована для покупок в App Store, iTunes Store, 
          для подписок Apple Music, Apple TV+, Apple Arcade и других сервисов Apple.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card) => (
            <GiftCard 
              key={card.value}
              value={card.value}
              image={card.image}
              popular={card.popular}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardSection;
