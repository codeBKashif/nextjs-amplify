'use client';
import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";
import { fetchProducts } from "@/store/productSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Products(){

    const dispatch = useDispatch();
    const products = useSelector(state => state.product.products);

    useEffect(() => {
        dispatch(fetchProducts());
    });


    return (
        <div>
            <Navbar />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {products.map(product => (
                <ProductCard key={product.id} product={product} />
            ))}
            </div>
        </div>
    )
}