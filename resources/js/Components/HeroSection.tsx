import { Link } from "@inertiajs/react";

export default function HeroSection() {
    return (
        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 pt-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                <div className="text-center">
                    <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                        <span className="block">Selamat Datang di Stocku</span>
                        <span className="block text-indigo-200">
                            Platform E-Commerce Terpercaya
                        </span>
                    </h1>
                    <p className="mt-3 max-w-md mx-auto text-base text-white sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                        Temukan berbagai produk berkualitas dengan harga
                        terbaik. Belanja lebih mudah dan aman bersama Stocku.
                    </p>
                    <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
                        <Link
                            href="/products"
                            className="inline-block rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-indigo-600 hover:bg-gray-50 md:py-4 md:px-10 md:text-lg"
                        >
                            Mulai Belanja
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
