"use client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartItem {
    id: number;
    name: string;
    price: number;
    quantity: number;
}

type CartState = CartItem[];

const initialState: CartState = [];

const cartSlice = createSlice({
    name: "Cart",
    initialState,
    reducers: {
        add(state, action: PayloadAction<CartItem>) {
            state.push(action.payload);
        },
        remove(state, action: PayloadAction<number>) {
            return state.filter((item) => item.id !== action.payload);
        },
    },
});

export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;
