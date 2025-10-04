'use client';
import { useDispatch } from "react-redux";
import { addToCart } from "@/store/cartSlice";

export default function ProductCard({product}){
    const dispatch = useDispatch();

    const addToCartHandler = () => {
        dispatch(addToCart(product));
    }

    return (
    <div className="border rounded-lg p-4 shadow text-center">
        <div className="aspect-1 w-full overflow-hidden rounded">
            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
        </div>
        <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
        <p className="text-gray-600">${product.price}</p>
        <button
            className="mt-2 bg-green-600 text-white px-3 py-1 rounded"
            onClick={addToCartHandler}
        >
            Add to Cart
        </button>
    </div>
    )
}