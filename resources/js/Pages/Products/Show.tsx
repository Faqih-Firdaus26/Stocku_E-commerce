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
    const [selectedImage, setSelectedImage] = useState(product.image);
    const [quantity, setQuantity] = useState(1);

    const handleQuantityChange = (value: number) => {
        if (value >= 1 && value <= product.stock) {
            setQuantity(value);
        }
    };

    return (
        <>
            <Head title={product.name} />

            {/* Breadcrumb */}
            <nav className="bg-gray-50 dark:bg-gray-700 py-3">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
                        <Link
                            href="/"
                            className="hover:text-indigo-600 dark:hover:text-indigo-400"
                        >
                            Beranda
                        </Link>
                        <span>/</span>
                        <Link
                            href={route("products.index")}
                            className="hover:text-indigo-600 dark:hover:text-indigo-400"
                        >
                            Produk
                        </Link>
                        <span>/</span>
                        <span className="text-gray-900 dark:text-gray-100">
                            {product.name}
                        </span>
                    </div>
                </div>
            </nav>

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {/* Gambar Produk */}
                                <div className="space-y-4">
                                    <div className="aspect-square overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-700">
                                        <img
                                            src={`/storage/${selectedImage}`}
                                            alt={product.name}
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                </div>

                                {/* Detail Produk */}
                                <div className="space-y-6">
                                    <div>
                                        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
                                            {product.name}
                                        </h1>
                                        <div className="mt-2">
                                            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200">
                                                {product.category.name}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="border-t border-b py-4 dark:border-gray-700">
                                        <div className="flex items-baseline">
                                            <span className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">
                                                Rp{" "}
                                                {Number(
                                                    product.price
                                                ).toLocaleString()}
                                            </span>
                                            <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">
                                                / unit
                                            </span>
                                        </div>
                                        <div className="mt-2 flex items-center space-x-2">
                                            <span className="text-green-500">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-5 w-5"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </span>
                                            <span className="text-sm text-gray-600 dark:text-gray-300">
                                                Stok tersedia: {product.stock}{" "}
                                                unit
                                            </span>
                                        </div>
                                    </div>

                                    <div className="prose dark:prose-invert max-w-none">
                                        <h3 className="text-lg font-semibold">
                                            Deskripsi Produk
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-300">
                                            {product.description}
                                        </p>
                                    </div>

                                    <div className="space-y-4">
                                        <div className="flex items-center space-x-4">
                                            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                                Jumlah
                                            </label>
                                            <div className="flex items-center border rounded-md">
                                                <button
                                                    type="button"
                                                    className="p-2 text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400"
                                                    onClick={() =>
                                                        handleQuantityChange(
                                                            quantity - 1
                                                        )
                                                    }
                                                    disabled={quantity <= 1}
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="h-5 w-5"
                                                        viewBox="0 0 20 20"
                                                        fill="currentColor"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                                            clipRule="evenodd"
                                                        />
                                                    </svg>
                                                </button>
                                                <input
                                                    type="number"
                                                    className="w-16 text-center border-x p-1 dark:bg-gray-700 dark:border-gray-600"
                                                    value={quantity}
                                                    onChange={(e) =>
                                                        handleQuantityChange(
                                                            parseInt(
                                                                e.target.value
                                                            )
                                                        )
                                                    }
                                                    min="1"
                                                    max={product.stock}
                                                />
                                                <button
                                                    type="button"
                                                    className="p-2 text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400"
                                                    onClick={() =>
                                                        handleQuantityChange(
                                                            quantity + 1
                                                        )
                                                    }
                                                    disabled={
                                                        quantity >=
                                                        product.stock
                                                    }
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="h-5 w-5"
                                                        viewBox="0 0 20 20"
                                                        fill="currentColor"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                                                            clipRule="evenodd"
                                                        />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>

                                        <div className="flex space-x-4">
                                            <button
                                                type="button"
                                                className="flex-1 bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
                                            >
                                                Tambah ke Keranjang
                                            </button>
                                            <button
                                                type="button"
                                                className="flex-1 bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
                                            >
                                                Beli Sekarang
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Ulasan Produk */}
                            {product.reviews && product.reviews.length > 0 && (
                                <div className="mt-12">
                                    <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                                        Ulasan Pembeli
                                    </h2>
                                    <div className="grid gap-6">
                                        {product.reviews.map((review) => (
                                            <div
                                                key={review.id}
                                                className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg"
                                            >
                                                <div className="flex items-center justify-between mb-4">
                                                    <div>
                                                        <p className="font-medium text-gray-900 dark:text-gray-100">
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
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
