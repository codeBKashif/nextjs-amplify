'use client';
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "@/store/cartSlice";
import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function Cart(){

    const dispatch = useDispatch();

    const items = useSelector(state => state.cart.items);
    const totalPrice = items.reduce((total, item) => total + item.price, 0);

    const removeFromCartHandler = (id) => {
        dispatch(removeFromCart(id));
    }

    return (
        <div>
          <Navbar />
          <div className="p-8">
            <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
            {items.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              <>
                {items.map(item => (
                  <div key={item.id} className="flex justify-between border-b py-2">
                    <span>{item.name}</span>
                    <div>
                      <span>${item.price}</span>
                      <button
                        className="ml-4 text-red-600"
                        onClick={() => removeFromCartHandler(item.id)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
                <div className="mt-4 font-bold">Total: ${totalPrice}</div>
                <Link href="/checkout" className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded">
                  Checkout
                </Link>
              </>
            )}
          </div>
        </div>
      );
}