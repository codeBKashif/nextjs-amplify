import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="p-8 text-center">
        <h1 className="text-3xl font-bold mb-4">Welcome to My Store</h1>
        <Link href="/products" className="bg-blue-600 text-white px-4 py-2 rounded">
          Browse Products
        </Link>
      </div>
    </div>
  );
}
