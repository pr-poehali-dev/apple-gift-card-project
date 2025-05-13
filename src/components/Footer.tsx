
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 py-12 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-sm font-semibold mb-4">Apple Gift Cards</h3>
            <p className="text-sm text-gray-600 mb-4">
              Идеальный подарок для любого случая. Используйте для покупок в App Store, 
              iTunes Store и для других сервисов Apple.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold mb-4">Меню</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-gray-600 hover:text-black transition-colors">
                  Главная
                </Link>
              </li>
              <li>
                <Link to="/cards" className="text-sm text-gray-600 hover:text-black transition-colors">
                  Карты
                </Link>
              </li>
              <li>
                <Link to="/instructions" className="text-sm text-gray-600 hover:text-black transition-colors">
                  Инструкция
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold mb-4">Контакты</h3>
            <ul className="space-y-2">
              <li className="text-sm text-gray-600">
                Почта: support@applegiftcards.ru
              </li>
              <li className="text-sm text-gray-600">
                Телефон: +7 (800) 123-45-67
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-xs text-gray-500 text-center">
            &copy; {currentYear} Apple Gift Cards. Все права защищены. Apple и логотип Apple являются товарными знаками Apple Inc.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
