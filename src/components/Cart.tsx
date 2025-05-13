
import React from 'react';
import { useCart } from '@/context/CartContext';
import CartItem from '@/components/CartItem';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetFooter,
  SheetClose
} from '@/components/ui/sheet';
import Icon from '@/components/ui/icon';

interface CartProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const Cart: React.FC<CartProps> = ({ open, onOpenChange }) => {
  const { items, clearCart, getTotalItems, getTotalPrice } = useCart();
  
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="w-full sm:max-w-md">
        <SheetHeader className="mb-6">
          <SheetTitle className="text-xl">Корзина</SheetTitle>
        </SheetHeader>
        
        {items.length > 0 ? (
          <>
            <div className="flex-1 overflow-auto">
              <div className="space-y-1">
                {items.map(item => (
                  <CartItem key={item.id} item={item} />
                ))}
              </div>
            </div>
            
            <div className="space-y-4 mt-8">
              <div className="flex justify-between items-center py-2 font-medium">
                <span>Всего</span>
                <span>{getTotalPrice()} ₽</span>
              </div>
              
              <SheetFooter className="flex flex-col sm:flex-row gap-3">
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={clearCart}
                >
                  Очистить корзину
                </Button>
                <SheetClose asChild>
                  <Button className="w-full">
                    Оформить заказ
                  </Button>
                </SheetClose>
              </SheetFooter>
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center h-[70vh] text-center">
            <Icon name="ShoppingCart" size={64} className="text-gray-200 mb-4" />
            <h3 className="text-lg font-medium mb-2">Корзина пуста</h3>
            <p className="text-gray-500 mb-6">Добавьте подарочные карты для оформления</p>
            <SheetClose asChild>
              <Button>
                Продолжить покупки
              </Button>
            </SheetClose>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default Cart;
