import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { useCart } from "@/context/CartContext";
import Cart from "@/components/Cart";

const Header = () => {
  const { getTotalItems } = useCart();
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <svg
            className="h-6 w-6 text-black"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.33-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.8.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
          </svg>
          <span className="ml-2 text-lg font-medium">Apple Gift Cards</span>
        </Link>
        <div className="flex items-center">
          <nav className="mr-6">
            <ul className="flex space-x-8">
              <li>
                <Link
                  to="/"
                  className="text-sm text-gray-700 hover:text-black transition-colors"
                >
                  Главная
                </Link>
              </li>
              <li>
                <Link
                  to="/cards"
                  className="text-sm text-gray-700 hover:text-black transition-colors"
                >
                  Карты
                </Link>
              </li>
              <li>
                <Link
                  to="/instructions"
                  className="text-sm text-gray-700 hover:text-black transition-colors"
                >
                  Инструкция
                </Link>
              </li>
            </ul>
          </nav>

          <Button
            variant="ghost"
            size="icon"
            className="relative"
            onClick={() => setCartOpen(true)}
          >
            <Icon name="ShoppingCart" size={20} />
            {getTotalItems() > 0 && (
              <span className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {getTotalItems()}
              </span>
            )}
          </Button>

          <Cart open={cartOpen} onOpenChange={setCartOpen} />
        </div>
      </div>
    </header>
  );
};

export default Header;
