import { Head } from "@inertiajs/react";
import ProductForm from "@/Components/ProductForm";

interface Props {
    product: {
        id: number;
        name: string;
        description: string;
        price: number;
        stock: number;
        category: string;
        image?: string;
    };
}

export default function Edit({ product }: Props) {
    return (
        <>
            <Head title="Edit Produk" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <h2 className="text-2xl font-semibold mb-6">
                                Edit Produk
                            </h2>
                            <ProductForm product={product} isEditing={true} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
