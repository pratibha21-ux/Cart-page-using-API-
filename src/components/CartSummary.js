const CartSummary = ({ subtotal, shipping }) => {
    const total = subtotal + shipping;
  
    return (
      <div className="border p-4">
        <h3 className="font-semibold text-lg">Cart Summary</h3>
        <div className="mt-4">
          <div className="flex justify-between">
            <p>Free shipping</p>
            <p>$0.00</p>
          </div>
          <div className="flex justify-between">
            <p>Express shipping</p>
            <p>${shipping.toFixed(2)}</p>
          </div>
          <div className="flex justify-between mt-4">
            <p className="font-semibold">Subtotal</p>
            <p className="font-semibold">${subtotal.toFixed(2)}</p>
          </div>
          <div className="flex justify-between mt-4">
            <p className="font-semibold">Total</p>
            <p className="font-semibold">${total.toFixed(2)}</p>
          </div>
          <button className="mt-4 w-full bg-black text-white py-2">Checkout</button>
        </div>
      </div>
    );
  };
  
  export default CartSummary;
  