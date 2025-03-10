import { Head } from "@inertiajs/react";
import { PageProps } from "@/types";
// import { useState } from "react";
import Navbar from "@/Components/Navbar";
import HeroSection from "@/Components/HeroSection";
import ProductCard from "@/Components/ProductCard";
import Footer from "@/Components/Footer";
interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
    category: string;
}
interface LandingProps extends PageProps {
    FeaturedProducts: Product[];
}

export default function Landing({ auth, FeaturedProducts }: LandingProps) {
    return (
        <>
            <Head title="Stocku - Platform E-Commerce Terpercaya" />

            <Navbar auth={auth} />
            <HeroSection />

            {/* Featured Products dengan Horizontal Scroll */}
            <div className="bg-white py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-extrabold text-gray-900 mb-8">
                        Produk Unggulan
                    </h2>
                    <div className="relative">
                        <div className="flex overflow-x-auto pb-6 scrollbar-hide">
                            {FeaturedProducts.map((product) => (
                                <ProductCard key={product.id} {...product} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
