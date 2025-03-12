import { Head, Link } from "@inertiajs/react";
import { PageProps } from "@/types";
import { Product } from "@/types/models";
import GuestLayout from "@/Layouts/GuestLayout";
import { useState } from "react";

interface Review {
    id: number;
    rating: number;
    comment: string;
    created_at: string;
    user: {
        name: string;
    };
}

interface Props extends PageProps {
    product: Product;
}

export default function Show({ product }: Props) {
    const [quantity, setQuantity] = useState(1);

    const handleQuantityChange = (value: number) => {
        if (value >= 1 && value <= product.stock) {
            setQuantity(value);
        }
    };

    return (
        <>
            <Head title={product.name} />

            {/* Hero Section dengan Gradient */}
            <div className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <nav className="flex" aria-label="Breadcrumb">
                        <ol className="flex items-center space-x-2">
                            <li>
                                <Link
                                    href="/"
                                    className="text-white hover:text-indigo-200"
                                >
                                    Beranda
                                </Link>
                            </li>
                            <li className="text-white">/</li>
                            <li>
                                <Link
                                    href={route("products.index")}
                                    className="text-white hover:text-indigo-200"
                                >
                                    Produk
                                </Link>
                            </li>
                            <li className="text-white">/</li>
                            <li className="text-white font-medium">
                                {product.name}
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        {/* Gambar Produk */}
                        <div className="relative p-6 flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800">
                            <div className="relative w-full aspect-square">
                                <img
                                    src={`/storage/${product.image}`}
                                    alt={product.name}
                                    className="w-full h-full object-contain rounded-lg shadow-lg transform transition-transform hover:scale-105"
                                />
                                <div className="absolute top-4 right-4">
                                    <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg">
                                        {product.category.name}
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Detail Produk */}
                        <div className="p-8 space-y-6">
                            <div>
                                <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
                                    {product.name}
                                </h1>
                                <div className="mt-4 flex items-baseline space-x-2">
                                    <span className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                                        Rp{" "}
                                        {Number(product.price).toLocaleString()}
                                    </span>
                                    <span className="text-sm text-gray-500 dark:text-gray-400">
                                        / unit
                                    </span>
                                </div>
                            </div>

                            {/* Status Stok */}
                            <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/30 p-4 rounded-xl">
                                <div className="flex items-center space-x-3">
                                    <svg
                                        className="h-6 w-6 text-green-500"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 13l4 4L19 7"
                                        />
                                    </svg>
                                    <span className="text-green-700 dark:text-green-300 font-medium">
                                        Stok tersedia: {product.stock} unit
                                    </span>
                                </div>
                            </div>

                            {/* Deskripsi */}
                            <div className="prose dark:prose-invert max-w-none">
                                <h3 className="text-xl font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                                    Deskripsi Produk
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300">
                                    {product.description}
                                </p>
                            </div>

                            {/* Pemilih Jumlah */}
                            <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-xl space-y-4">
                                <div className="flex items-center justify-between">
                                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                        Jumlah
                                    </label>
                                    <div className="flex items-center space-x-3">
                                        <button
                                            type="button"
                                            className="w-10 h-10 rounded-full bg-white dark:bg-gray-600 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-indigo-50 dark:hover:bg-gray-500 transition-colors"
                                            onClick={() =>
                                                handleQuantityChange(
                                                    quantity - 1
                                                )
                                            }
                                            disabled={quantity <= 1}
                                        >
                                            <svg
                                                className="w-5 h-5"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M20 12H4"
                                                />
                                            </svg>
                                        </button>
                                        <input
                                            type="number"
                                            className="w-20 text-center border-0 bg-transparent text-lg font-semibold text-gray-900 dark:text-white"
                                            value={quantity}
                                            onChange={(e) =>
                                                handleQuantityChange(
                                                    parseInt(e.target.value)
                                                )
                                            }
                                            min="1"
                                            max={product.stock}
                                        />
                                        <button
                                            type="button"
                                            className="w-10 h-10 rounded-full bg-white dark:bg-gray-600 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-indigo-50 dark:hover:bg-gray-500 transition-colors"
                                            onClick={() =>
                                                handleQuantityChange(
                                                    quantity + 1
                                                )
                                            }
                                            disabled={quantity >= product.stock}
                                        >
                                            <svg
                                                className="w-5 h-5"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                </div>

                                {/* Total Harga */}
                                <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-600">
                                    <span className="text-gray-600 dark:text-gray-300">
                                        Total:
                                    </span>
                                    <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                                        Rp{" "}
                                        {(
                                            Number(product.price) * quantity
                                        ).toLocaleString()}
                                    </span>
                                </div>
                            </div>

                            {/* Tombol Aksi */}
                            <div className="flex space-x-4 pt-6">
                                <button
                                    type="button"
                                    className="flex-1 px-6 py-4 rounded-xl font-medium text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transform transition-transform hover:-translate-y-0.5"
                                >
                                    <span className="flex items-center justify-center space-x-2">
                                        <svg
                                            className="w-5 h-5"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                                            />
                                        </svg>
                                        <span>Tambah ke Keranjang</span>
                                    </span>
                                </button>
                                <button
                                    type="button"
                                    className="flex-1 px-6 py-4 rounded-xl font-medium text-white bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transform transition-transform hover:-translate-y-0.5"
                                >
                                    <span className="flex items-center justify-center space-x-2">
                                        <svg
                                            className="w-5 h-5"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 13l4 4L19 7"
                                            />
                                        </svg>
                                        <span>Beli Sekarang</span>
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Ulasan Produk */}
                    {product.reviews && product.reviews.length > 0 && (
                        <div className="border-t border-gray-200 dark:border-gray-700">
                            <div className="p-8">
                                <h2 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-6">
                                    Ulasan Pembeli
                                </h2>
                                <div className="grid gap-6">
                                    {product.reviews.map((review) => (
                                        <div
                                            key={review.id}
                                            className="bg-gray-50 dark:bg-gray-700/50 p-6 rounded-xl"
                                        >
                                            <div className="flex items-center justify-between mb-4">
                                                <div>
                                                    <p className="font-medium text-gray-900 dark:text-white">
                                                        {review.user.name}
                                                    </p>
                                                    <p className="text-sm text-gray-500 dark:text-gray-400">
                                                        {new Date(
                                                            review.created_at
                                                        ).toLocaleDateString(
                                                            "id-ID",
                                                            {
                                                                year: "numeric",
                                                                month: "long",
                                                                day: "numeric",
                                                            }
                                                        )}
                                                    </p>
                                                </div>
                                                <div className="flex items-center">
                                                    {[1, 2, 3, 4, 5].map(
                                                        (star) => (
                                                            <svg
                                                                key={star}
                                                                className={`w-5 h-5 ${
                                                                    star <=
                                                                    review.rating
                                                                        ? "text-yellow-400"
                                                                        : "text-gray-300 dark:text-gray-600"
                                                                }`}
                                                                fill="currentColor"
                                                                viewBox="0 0 20 20"
                                                            >
                                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                            </svg>
                                                        )
                                                    )}
                                                </div>
                                            </div>
                                            <p className="text-gray-600 dark:text-gray-300">
                                                {review.comment}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}
