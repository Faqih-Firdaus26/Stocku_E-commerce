import { Head, Link, router } from "@inertiajs/react";
import { PageProps } from "@/types";

interface Product {
    id: number;
    name: string;
    price: number;
    stock: number;
    category: string;
    image: string;
}

interface Props extends PageProps {
    products: {
        data: Product[];
        links: any;
    };
}

export default function Index({ auth, products }: Props) {
    return (
        <>
            <Head title="Daftar Produk" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-2xl font-semibold">
                                    Daftar Produk
                                </h2>
                                <Link
                                    href={route("products.create")}
                                    className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
                                >
                                    Tambah Produk
                                </Link>
                            </div>

                            <div className="overflow-x-auto">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Produk
                                            </th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Kategori
                                            </th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Harga
                                            </th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Stok
                                            </th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Aksi
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {products.data.map((product) => (
                                            <tr key={product.id}>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="flex items-center">
                                                        <div className="h-10 w-10 flex-shrink-0">
                                                            <img
                                                                className="h-10 w-10 rounded-full object-cover"
                                                                src={`/storage/${product.image}`}
                                                                alt={
                                                                    product.name
                                                                }
                                                            />
                                                        </div>
                                                        <div className="ml-4">
                                                            <div className="text-sm font-medium text-gray-900">
                                                                {product.name}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                                        {product.category}
                                                    </span>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                    Rp{" "}
                                                    {product.price.toLocaleString(
                                                        "id-ID"
                                                    )}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                    {product.stock}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                                    <Link
                                                        href={route(
                                                            "products.edit",
                                                            product.id
                                                        )}
                                                        className="text-indigo-600 hover:text-indigo-900 mr-4"
                                                    >
                                                        Edit
                                                    </Link>
                                                    <button
                                                        onClick={() => {
                                                            if (
                                                                confirm(
                                                                    "Apakah Anda yakin ingin menghapus produk ini?"
                                                                )
                                                            ) {
                                                                router.delete(
                                                                    route(
                                                                        "products.destroy",
                                                                        product.id
                                                                    )
                                                                );
                                                            }
                                                        }}
                                                        className="text-red-600 hover:text-red-900"
                                                    >
                                                        Hapus
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
