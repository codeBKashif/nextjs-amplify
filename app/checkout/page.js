'use client';
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "@/store/cartSlice";
import Navbar from "@/components/Navbar";
import { useState } from "react";

export default function Checkout(){

    const items = useSelector(state => state.cart.items);
    const total = items.reduce((total, item) => total + item.price, 0);

    const [submitted, setSubmitted] = useState(false);

    const dispatch = useDispatch();
    const handleCheckout = () => {
        dispatch(clearCart());
        setSubmitted(true);
    }

    return (
        <div>
            <Navbar />

            {(submitted) ? (
                <div className="p-8">
                    <h1 className="text-2xl font-bold mb-4">Order Placed!</h1>
                    <p>Thank you for your purchase. Your order has been placed successfully.</p>
                </div>
            ): (
            <div className="p-8">
                <h1 className="text-2xl font-bold mb-4">Checkout</h1>
                <p>Total Amount: ${total}</p>
                <button
                className="mt-4 bg-green-600 text-white px-4 py-2 rounded"
                onClick={handleCheckout}
                >
                Place Order
                </button>
            </div>
            )}

        </div>
            
    )
}