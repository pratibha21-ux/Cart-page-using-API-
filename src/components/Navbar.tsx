"use client";
import Link from 'next/link';
import React from 'react';
import { useSelector } from 'react-redux';
import  {RootState}  from '../Redux/Store'; 

const Navbar: React.FC = () => {
    const item = useSelector((state: RootState) => state.cart);

    return (
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <span>Redux Nextjs-13.4</span>
            <div>
                <Link className='navLink' style={{ fontWeight: "bolder" }} href={"/"}>Home</Link>
                <Link className='navLink' style={{ fontWeight: "bolder", marginRight: "7px" }} href={"/cart"}>Cart</Link>
                <span style={{ fontWeight: "bolder" }}>items: {item.length}</span>
            </div>
        </div>
    );
};

export default Navbar;
