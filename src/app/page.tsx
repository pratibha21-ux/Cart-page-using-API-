"use client";
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { add } from '@/Redux/Cartslice';
import Image from 'next/image';


interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

const Homepage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const dispatch = useDispatch();

  const getProducts = async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const data: Product[] = await res.json();
    setProducts(data);
  }

  const handleAdd = (product: Product) => {
    const cartItem: CartItem = {
      id: product.id,
      name: product.title,  // Mapping title to name
      price: product.price,
      image: product.image,
      quantity: 1,  // Initial quantity of 1
    };
    dispatch(add(cartItem));
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className='productsWrapper'>
      {products.map((product) => (
        <div key={product.id} className='card'>
          {/* Replaced img tag with Next.js Image for optimization */}
          <Image src={product.image} alt="img" width={100} height={100} />

          {/* <img src={product.image} alt='img' /> */}
          <h4>{product.title}</h4>
          <h5>{product.price}</h5>
          <button className='btn' onClick={() => handleAdd(product)}>Add to cart</button>
        </div>
      ))}
    </div>
  );
}

export default Homepage;
