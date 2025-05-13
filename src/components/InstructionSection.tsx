
import React from 'react';
import Icon from '@/components/ui/icon';

const InstructionSection = () => {
  const steps = [
    {
      icon: "Gift",
      title: "Выберите карту",
      description: "Выберите Apple Gift Card нужного вам номинала из нашего ассортимента."
    },
    {
      icon: "CreditCard",
      title: "Оплатите заказ",
      description: "Оплатите покупку любым удобным способом: картой, электронным кошельком или через мобильный банк."
    },
    {
      icon: "Mail",
      title: "Получите код",
      description: "Мгновенно получите код активации на указанный вами email или в личном кабинете."
    },
    {
      icon: "Smartphone",
      title: "Активируйте",
      description: "Зайдите в App Store на вашем устройстве и активируйте карту в разделе 'Активировать код'."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Как это работает</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Активировать Apple Gift Card очень просто. Следуйте нашей пошаговой инструкции 
          для быстрого и удобного использования вашей подарочной карты.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                <Icon name={step.icon} size={24} className="text-black" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute right-0 top-1/2 transform translate-x-1/2">
                  <Icon name="ArrowRight" size={20} className="text-gray-300" />
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-16 p-6 bg-gray-50 rounded-lg max-w-3xl mx-auto">
          <h3 className="text-xl font-semibold mb-4">Важно знать</h3>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <Icon name="CheckCircle" size={20} className="text-green-500 mt-1 shrink-0" />
              <span>Apple Gift Card не имеет срока действия и может быть использована в любое время.</span>
            </li>
            <li className="flex items-start gap-2">
              <Icon name="CheckCircle" size={20} className="text-green-500 mt-1 shrink-0" />
              <span>Карту можно использовать частями – остаток будет сохранен на вашем Apple ID.</span>
            </li>
            <li className="flex items-start gap-2">
              <Icon name="CheckCircle" size={20} className="text-green-500 mt-1 shrink-0" />
              <span>После активации средства становятся доступны на всех устройствах, на которых вы вошли в свой Apple ID.</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default InstructionSection;
