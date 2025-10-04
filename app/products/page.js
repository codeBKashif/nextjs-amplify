import Navbar from "@/components/Navbar";
import { products } from "@/data/product";
import ProductCard from "@/components/ProductCard";

export default function Products(){
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