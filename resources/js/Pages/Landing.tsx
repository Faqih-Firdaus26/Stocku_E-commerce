import { Head } from "@inertiajs/react";
import { PageProps } from "@/types";
import { useState } from "react";
import Navbar from "@/Components/Navbar";
import HeroSection from "@/Components/HeroSection";
import ProductCard from "@/Components/ProductCard";

export default function Landing({ auth }: PageProps) {
    const [featuredProducts] = useState([
        {
            id: 1,
            name: "Smartphone XYZ",
            price: 3500000,
            image: "/images/product1.jpg",
            category: "Elektronik",
        },
        {
            id: 2,
            name: "Laptop ABC",
            price: 12000000,
            image: "/images/product2.jpg",
            category: "Elektronik",
        },
        // Tambahkan lebih banyak produk
    ]);

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
                            {featuredProducts.map((product) => (
                                <ProductCard key={product.id} {...product} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer bisa dibuat sebagai komponen terpisah juga */}
            <footer className="bg-gray-800 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div>
                            <h3 className="text-xl font-bold mb-4">Stocku</h3>
                            <p className="text-gray-400">
                                Platform e-commerce terpercaya untuk semua
                                kebutuhan Anda.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-4">Tautan</h3>
                            <ul className="space-y-2">
                                <li>
                                    <a
                                        href="/about"
                                        className="text-gray-400 hover:text-white"
                                    >
                                        Tentang Kami
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/contact"
                                        className="text-gray-400 hover:text-white"
                                    >
                                        Hubungi Kami
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/faq"
                                        className="text-gray-400 hover:text-white"
                                    >
                                        FAQ
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-4">
                                Ikuti Kami
                            </h3>
                            <div className="flex space-x-4">
                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-white"
                                >
                                    Instagram
                                </a>
                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-white"
                                >
                                    Facebook
                                </a>
                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-white"
                                >
                                    Twitter
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="mt-8 pt-8 border-t border-gray-700 text-center">
                        <p className="text-gray-400">
                            &copy; 2024 Stocku. All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </>
    );
}
