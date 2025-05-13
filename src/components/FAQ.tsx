
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQ = () => {
  const faqItems = [
    {
      question: "Как активировать Apple Gift Card?",
      answer: "Чтобы активировать Apple Gift Card, откройте App Store на устройстве Apple, войдите в свою учетную запись, нажмите на свой аватар, выберите 'Активировать код' и введите код, который вы получили после покупки."
    },
    {
      question: "Могу ли я использовать Apple Gift Card для оплаты Apple Music?",
      answer: "Да, вы можете использовать Apple Gift Card для оплаты подписки на Apple Music, а также для других сервисов Apple, включая Apple TV+, Apple Arcade, iCloud+ и покупок в App Store."
    },
    {
      question: "Есть ли срок действия у Apple Gift Card?",
      answer: "Нет, Apple Gift Card не имеет срока действия. Вы можете активировать её в любое удобное для вас время."
    },
    {
      question: "Можно ли использовать карту частями?",
      answer: "Да, после активации средства добавляются к балансу вашего Apple ID, и вы можете использовать их по частям для различных покупок и подписок."
    },
    {
      question: "Можно ли вернуть или обменять Apple Gift Card?",
      answer: "Согласно политике Apple, подарочные карты не подлежат возврату или обмену. Пожалуйста, убедитесь в правильности выбора перед покупкой."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Часто задаваемые вопросы</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Ответы на самые популярные вопросы о Apple Gift Card
        </p>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-medium">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
