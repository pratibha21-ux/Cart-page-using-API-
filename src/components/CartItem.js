import { useState } from 'react';

const CartItem = ({ item }) => {
  const [quantity, setQuantity] = useState(item.quantity);

  const handleQuantityChange = (newQuantity) => {
    if (newQuantity > 0) {
      setQuantity(newQuantity);
    }
  };

  return (
    <div className="flex justify-between items-center p-4 border-b">
      <div className="flex items-center">
        {/* <img src={item.image} alt={item.name} className="w-16 h-16" /> */}
        <div className="ml-4">
          <h3 className="font-semibold">{item.name}</h3>
          <p>{item.details}</p>
          <button className="text-red-500 text-sm mt-2">Remove</button>
        </div>
      </div>
      <div className="flex items-center">
        <button onClick={() => handleQuantityChange(quantity - 1)} className="px-3 py-1 border">
          -
        </button>
        <span className="mx-3">{quantity}</span>
        <button onClick={() => handleQuantityChange(quantity + 1)} className="px-3 py-1 border">
          +
        </button>
      </div>
      <p className="font-semibold">${(item.price * quantity).toFixed(2)}</p>
    </div>
  );
};

export default CartItem;
