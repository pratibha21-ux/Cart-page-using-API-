"use client";
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Image from 'next/image';
import { remove } from '@/Redux/Cartslice';

const Cartpage = () => {
  const dispatch = useDispatch();
  // Use a fallback of an empty array if cartItems is undefined
  const cartItems = useSelector((state) => state.cart.items || []);

  const handleRemove = (id) => {
    dispatch(remove(id));
  };

  return (
    <div>
      <h3>Cart Page</h3>
      <div className="cartWrapper">
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <div key={item.id} className="cart">
              <Image src={item.image} alt="img" width={100} height={100} />
              <h5>{item.title}</h5>
              <h4>{item.price}</h4>
              <button className="btn" onClick={() => handleRemove(item.id)}>
                Remove
              </button>
            </div>
          ))
        ) : (
          <p>Your cart is empty</p>
        )}
      </div>
    </div>
  );
};

export default Cartpage;
