import { Head } from "@inertiajs/react";
import ProductForm from "@/Components/ProductForm";

export default function Create() {
    return (
        <>
            <Head title="Tambah Produk" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <h2 className="text-2xl font-semibold mb-6">
                                Tambah Produk Baru
                            </h2>
                            <ProductForm />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
