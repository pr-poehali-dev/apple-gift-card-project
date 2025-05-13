
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import InstructionSection from '@/components/InstructionSection';
import FAQ from '@/components/FAQ';
import Icon from '@/components/ui/icon';

const Instructions = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">Инструкция по использованию</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Пошаговое руководство по активации и использованию 
              Apple Gift Card
            </p>
          </div>
        </section>
        
        <InstructionSection />
        
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">Детальное руководство</h2>
            
            <div className="max-w-3xl mx-auto space-y-12">
              <div className="flex flex-col md:flex-row items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center">
                  <span className="text-2xl font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Откройте App Store</h3>
                  <p className="text-gray-600 mb-4">
                    Запустите приложение App Store на вашем устройстве Apple. Убедитесь, что вы вошли в свою 
                    учетную запись Apple ID, куда будут зачислены средства.
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg flex items-start gap-3">
                    <Icon name="LightbulbIcon" size={20} className="text-amber-500 shrink-0 mt-1" />
                    <p className="text-sm text-gray-600">
                      Активировать карту можно на iPhone, iPad, iPod touch, Mac, Apple TV или из веб-браузера через appleid.apple.com
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center">
                  <span className="text-2xl font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Перейдите в свой профиль</h3>
                  <p className="text-gray-600 mb-4">
                    Нажмите на иконку своего профиля в верхнем правом углу экрана (на iPhone и iPad) 
                    или внизу боковой панели (на Mac).
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center">
                  <span className="text-2xl font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Активируйте код</h3>
                  <p className="text-gray-600 mb-4">
                    Прокрутите вниз и нажмите «Активировать код» или «Использовать подарочную карту». 
                    В некоторых регионах эта опция может называться «Погасить».
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center">
                  <span className="text-2xl font-bold">4</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Введите код активации</h3>
                  <p className="text-gray-600 mb-4">
                    Введите код, который вы получили после покупки. Вы можете ввести код вручную или 
                    использовать камеру, чтобы отсканировать код, если эта функция доступна на вашем устройстве.
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg flex items-start gap-3">
                    <Icon name="AlertTriangle" size={20} className="text-amber-500 shrink-0 mt-1" />
                    <p className="text-sm text-gray-600">
                      Будьте внимательны при вводе кода — он должен быть введен точно, с учетом всех символов и дефисов.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center">
                  <span className="text-2xl font-bold">5</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Подтвердите активацию</h3>
                  <p className="text-gray-600 mb-4">
                    Нажмите «Активировать» или «Погасить». Средства будут зачислены на ваш Apple ID, и 
                    вы сможете использовать их для покупок в App Store, iTunes Store и других сервисах Apple.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Instructions;
