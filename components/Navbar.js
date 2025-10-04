'use client';

import { useSelector } from 'react-redux';
import Link from 'next/link';

export default function Navbar() {

    const cartCount = useSelector(state => state.cart.items.length);


    return (
        <nav className="flex justify-between items-center p-4 bg-gray-900 text-white">
        <Link href="/">🏠 Home</Link>
        <div className="flex gap-4">
            <Link href="/products">🛍 Products</Link>
            <Link href="/cart">🛒 Cart ({cartCount})</Link>
        </div>
        </nav>
    )
}