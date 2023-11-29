import { MenuItem } from "@/interfaces/restaurant";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { StaticImageData } from "next/image";
import { toast } from 'react-toastify';

interface cartItem {
    id: number;
    name: string;
    desc: string;
    price: number;
    img: StaticImageData;
    quantity: number;
}

interface CartState {
    cartItems: cartItem[];
    infoCard: MenuItem | null,
    total: number
}

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cartItems: [],
        infoCard: null,
        total: 0
    } as CartState,

    reducers: {
        addToCart: (state, action: PayloadAction<cartItem>) => {
            const item = state.cartItems.find((ele: cartItem) => ele.id === action.payload.id);

            if (item) {
                item.quantity += action.payload.quantity
                toast.success("Đã thêm vào giỏ hàng!");
            } else {
                state.cartItems.push({ ...action.payload })
                toast.success("Đã thêm vào giỏ hàng!");
            }
        },

        addInfoCard: (state, action: PayloadAction<MenuItem>) => {
            state.infoCard = action.payload
        },

        updateQuantityCart: (state, action) => {
            const item = state.cartItems.findIndex((ele: cartItem) => ele.id === action.payload.id);

            state.cartItems[item].quantity++
        },

        totalPrice: (state) => {
            const total = state.cartItems.map((ele: cartItem) => ele.price * ele.quantity)

            const sum = total.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

            state.total = sum
        },

        decreaseNumber: (state, action: PayloadAction<cartItem>) => {
            const item = state.cartItems.find((ele: cartItem) => ele.id === action.payload.id);

            if (item) {
                if (item.quantity === 1) {
                    return
                } else {
                    item.quantity -= 1
                }
            }
        },

        creaseNumber: (state, action: PayloadAction<cartItem>) => {
            const item = state.cartItems.find((ele: cartItem) => ele.id === action.payload.id);

            if (item) {
                item.quantity += 1
            }
        },

        deleteCart: (state, action: PayloadAction<cartItem>) => {
            const index = state.cartItems.findIndex((ele: cartItem) => ele.id === action.payload.id);
            if (index !== -1) {
                state.total -= state.cartItems[index].price
                state.cartItems.splice(index, 1)
            }
        },
    },
});

export const { addToCart, updateQuantityCart, addInfoCard, totalPrice, decreaseNumber, creaseNumber, deleteCart } = cartSlice.actions;

export default cartSlice.reducer;