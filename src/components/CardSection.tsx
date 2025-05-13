import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { toast } from "@/components/ui/use-toast";

// Простая функция для генерации ID (вместо uuid)
const generateId = () => {
  return Math.random().toString(36).substring(2, 9) + "_" + Date.now();
};

interface GiftCardProps {
  value: number;
  image: string;
  popular?: boolean;
}

const GiftCard: React.FC<GiftCardProps> = ({ value, image, popular }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      id: generateId(),
      value,
      price: value,
      image,
    });

    toast({
      title: "Товар добавлен в корзину",
      description: `Gift Card ${value} ₽ добавлена в корзину`,
      duration: 3000,
    });
  };

  return (
    <Card
      className={`overflow-hidden relative transition-all hover:shadow-md ${popular ? "ring-2 ring-blue-500" : ""}`}
    >
      {popular && (
        <div className="absolute top-0 right-0 bg-blue-500 text-white text-xs px-2 py-1 rounded-bl-md">
          Популярно
        </div>
      )}
      <CardContent className="p-0">
        <img
          src={image}
          alt={`Gift Card ${value} ₽`}
          className="w-full h-auto"
        />
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2">Gift Card {value} ₽</h3>
          <p className="text-gray-600 mb-4 text-sm">
            Используйте для покупок в App Store и других сервисах Apple
          </p>
          <div className="flex justify-between items-center">
            <span className="text-xl font-bold">{value} ₽</span>
            <Button className="rounded-full" onClick={handleAddToCart}>
              В корзину
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const CardSection = () => {
  const appleLogo =
    "https://cdn.poehali.dev/files/da4bb139-553b-4aed-aca4-72bbd7fed98d.png";

  const cards = [
    {
      value: 1000,
      image: appleLogo,
      popular: false,
    },
    {
      value: 2500,
      image: appleLogo,
      popular: true,
    },
    {
      value: 5000,
      image: appleLogo,
      popular: false,
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">
          Выберите номинал
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Apple Gift Card может быть использована для покупок в App Store,
          iTunes Store, для подписок Apple Music, Apple TV+, Apple Arcade и
          других сервисов Apple.
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
