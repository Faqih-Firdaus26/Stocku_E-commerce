import { useState, FormEventHandler } from "react";
import { useForm } from "@inertiajs/react";

interface ProductFormProps {
    product?: {
        id?: number;
        name: string;
        description: string;
        price: number;
        stock: number;
        category: string;
        image?: string;
    };
    isEditing?: boolean;
}

export default function ProductForm({
    product,
    isEditing = false,
}: ProductFormProps) {
    const { data, setData, post, put, processing, errors } = useForm({
        name: product?.name ?? "",
        description: product?.description ?? "",
        price: product?.price ?? "",
        stock: product?.stock ?? "",
        category: product?.category ?? "",
        image: null as File | null,
    });

    const [preview, setPreview] = useState<string | null>(
        product?.image ? `/storage/${product.image}` : null
    );

    const handleSubmit: FormEventHandler = (e) => {
        e.preventDefault();

        if (isEditing) {
            put(route("products.update", product?.id));
        } else {
            post(route("products.store"));
        }
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setData("image", file);
            setPreview(URL.createObjectURL(file));
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div>
                <label className="block text-sm font-medium text-gray-700">
                    Nama Produk
                </label>
                <input
                    type="text"
                    value={data.name}
                    onChange={(e) => setData("name", e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
                {errors.name && (
                    <div className="text-red-500 text-sm">{errors.name}</div>
                )}
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700">
                    Deskripsi
                </label>
                <textarea
                    value={data.description}
                    onChange={(e) => setData("description", e.target.value)}
                    rows={4}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
                {errors.description && (
                    <div className="text-red-500 text-sm">
                        {errors.description}
                    </div>
                )}
            </div>

            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        Harga
                    </label>
                    <input
                        type="number"
                        value={data.price}
                        onChange={(e) => setData("price", e.target.value)}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    />
                    {errors.price && (
                        <div className="text-red-500 text-sm">
                            {errors.price}
                        </div>
                    )}
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        Stok
                    </label>
                    <input
                        type="number"
                        value={data.stock}
                        onChange={(e) => setData("stock", e.target.value)}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    />
                    {errors.stock && (
                        <div className="text-red-500 text-sm">
                            {errors.stock}
                        </div>
                    )}
                </div>
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700">
                    Kategori
                </label>
                <select
                    value={data.category}
                    onChange={(e) => setData("category", e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                >
                    <option value="">Pilih Kategori</option>
                    <option value="Elektronik">Elektronik</option>
                    <option value="Fashion">Fashion</option>
                    <option value="Makanan">Makanan</option>
                    <option value="Minuman">Minuman</option>
                </select>
                {errors.category && (
                    <div className="text-red-500 text-sm">
                        {errors.category}
                    </div>
                )}
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700">
                    Gambar Produk
                </label>
                <input
                    type="file"
                    onChange={handleImageChange}
                    className="mt-1 block w-full"
                    accept="image/*"
                />
                {errors.image && (
                    <div className="text-red-500 text-sm">{errors.image}</div>
                )}
                {preview && (
                    <img
                        src={preview}
                        alt="Preview"
                        className="mt-2 h-32 w-32 object-cover"
                    />
                )}
            </div>

            <div className="flex justify-end">
                <button
                    type="submit"
                    disabled={processing}
                    className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                    {processing
                        ? "Menyimpan..."
                        : isEditing
                        ? "Update"
                        : "Simpan"}
                </button>
            </div>
        </form>
    );
}
