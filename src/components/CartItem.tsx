
import React from 'react';
import { CartItem as CartItemType, useCart } from '@/context/CartContext';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

interface CartItemProps {
  item: CartItemType;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();

  return (
    <div className="flex items-center py-4 border-b border-gray-100">
      <div className="h-16 w-16 rounded-md overflow-hidden">
        <img 
          src={item.image} 
          alt={`Gift Card ${item.value} ₽`}
          className="h-full w-full object-cover" 
        />
      </div>
      
      <div className="ml-4 flex-grow">
        <h4 className="text-sm font-medium">Gift Card {item.value} ₽</h4>
        <p className="text-sm text-gray-500">{item.price} ₽</p>
      </div>
      
      <div className="flex items-center space-x-2">
        <Button 
          variant="outline" 
          size="icon" 
          className="h-7 w-7"
          onClick={() => updateQuantity(item.id, item.quantity - 1)}
        >
          <Icon name="Minus" size={14} />
        </Button>
        
        <span className="w-6 text-center text-sm">{item.quantity}</span>
        
        <Button 
          variant="outline" 
          size="icon" 
          className="h-7 w-7"
          onClick={() => updateQuantity(item.id, item.quantity + 1)}
        >
          <Icon name="Plus" size={14} />
        </Button>
      </div>
      
      <Button 
        variant="ghost" 
        size="icon" 
        className="ml-4 h-7 w-7 text-gray-400"
        onClick={() => removeFromCart(item.id)}
      >
        <Icon name="Trash" size={16} />
      </Button>
    </div>
  );
};

export default CartItem;
