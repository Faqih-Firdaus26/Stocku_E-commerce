import { Link } from "@inertiajs/react";

interface NavbarProps {
    auth: {
        user: any;
    };
}

export default function Navbar({ auth }: NavbarProps) {
    return (
        <nav className="bg-white shadow-lg fixed w-full z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <Link
                            href="/"
                            className="text-2xl font-bold text-indigo-600"
                        >
                            Stocku
                        </Link>
                        <div className="hidden md:flex items-center space-x-4 ml-10">
                            <Link
                                href="/products"
                                className="text-gray-600 hover:text-indigo-600"
                            >
                                Produk
                            </Link>
                            <Link
                                href="/categories"
                                className="text-gray-600 hover:text-indigo-600"
                            >
                                Kategori
                            </Link>
                            <Link
                                href="/about"
                                className="text-gray-600 hover:text-indigo-600"
                            >
                                Tentang
                            </Link>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4">
                        {!auth.user ? (
                            <>
                                <Link
                                    href="/login"
                                    className="text-gray-600 hover:text-indigo-600"
                                >
                                    Masuk
                                </Link>
                                <Link
                                    href="/register"
                                    className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
                                >
                                    Daftar
                                </Link>
                            </>
                        ) : (
                            <>
                                <Link
                                    href="/cart"
                                    className="text-gray-600 hover:text-indigo-600"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                                        />
                                    </svg>
                                </Link>
                                <Link
                                    href="/dashboard"
                                    className="text-gray-600 hover:text-indigo-600"
                                >
                                    Dashboard
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
}
