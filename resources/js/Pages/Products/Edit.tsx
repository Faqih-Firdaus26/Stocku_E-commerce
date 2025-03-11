import { Head } from "@inertiajs/react";
import { PageProps } from "@/types";
import { Product, Category } from "@/types/models";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import ProductForm from "@/Components/ProductForm";

interface Props extends PageProps {
    product: Product;
    categories: Category[];
}

export default function Edit({ auth, product, categories }: Props) {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Edit Produk
                </h2>
            }
        >
            <Head title="Edit Produk" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6">
                            <ProductForm
                                categories={categories}
                                product={product}
                                isEditing={true}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
