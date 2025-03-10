interface ProductProps {
    id: number;
    name: string;
    price: number;
    image: string;
    category: string;
}

export default function ProductCard({
    id,
    name,
    price,
    image,
    category,
}: ProductProps) {
    const imageUrl =
        image.startsWith("http") || image.startsWith("/images")
            ? image
            : `/storage/${image}`;

    return (
        <div className="flex-none w-64 mr-4">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 w-full bg-gray-200 relative overflow-hidden">
                    <img
                        src={imageUrl}
                        alt={name}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                        onError={(e) => {
                            e.currentTarget.src = "/images/default-product.png";
                        }}
                    />
                </div>
                <div className="p-4">
                    <span className="text-xs text-indigo-600 font-semibold">
                        {category}
                    </span>
                    <h3 className="text-lg font-medium text-gray-900 mt-1">
                        {name}
                    </h3>
                    <p className="text-indigo-600 font-bold mt-2">
                        Rp {price.toLocaleString("id-ID")}
                    </p>
                    <button className="mt-4 w-full bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors duration-300">
                        Tambah ke Keranjang
                    </button>
                </div>
            </div>
        </div>
    );
}
