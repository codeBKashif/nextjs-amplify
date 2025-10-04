import { createSlice } from "@reduxjs/toolkit";
import toast from 'react-hot-toast';



const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
    },
    reducers: {
        addToCart: (state, action) => {
            state.items.push(action.payload);
            toast.success('Item added to cart');
        },
        removeFromCart: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload)
        },
        clearCart: (state) => {
            state.items = [];
        }
    }
});


export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;