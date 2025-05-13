
import React from 'react';
import Icon from '@/components/ui/icon';

const FeatureSection = () => {
  const features = [
    {
      icon: "Zap",
      title: "Моментальная доставка",
      description: "Получите код активации мгновенно после оплаты"
    },
    {
      icon: "ShieldCheck",
      title: "Гарантия подлинности",
      description: "Все карты поступают из официальных источников Apple"
    },
    {
      icon: "Smartphone",
      title: "Для всех устройств",
      description: "Используйте на iPhone, iPad, Mac и других устройствах"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                <Icon name={feature.icon} size={20} className="text-black" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
