import { Link } from "@inertiajs/react";

interface ProductProps {
    id: number;
    name: string;
    price: number;
    image: string;
    category: {
        id: number;
        name: string;
    };
}

export default function ProductCard({
    id,
    name,
    price,
    image,
    category,
}: ProductProps) {
    const imageUrl = image
        ? `/storage/${image}`
        : "/images/default-product.png";

    return (
        <div className="flex-none w-72 mr-6 transform hover:-translate-y-2 transition-all duration-300">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl">
                <div className="h-56 w-full bg-gray-200 relative overflow-hidden group">
                    <img
                        src={imageUrl}
                        alt={name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        onError={(e) => {
                            e.currentTarget.src = "/images/default-product.png";
                        }}
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <Link
                            href={route("products.show", id)}
                            className="bg-white text-indigo-600 px-6 py-2 rounded-full font-medium transform -translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                        >
                            Lihat Detail
                        </Link>
                    </div>
                </div>
                <div className="p-4">
                    <span className="inline-block px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-xs font-semibold mb-2">
                        {category.name}
                    </span>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                        {name}
                    </h3>
                    <p className="text-2xl font-bold text-indigo-600">
                        Rp {price.toLocaleString("id-ID")}
                    </p>
                    <button className="mt-4 w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-3 rounded-lg font-medium hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                        Tambah ke Keranjang
                    </button>
                </div>
            </div>
        </div>
    );
}
