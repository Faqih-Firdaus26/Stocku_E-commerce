import { useForm } from "@inertiajs/react";
import { FormEventHandler } from "react";
import InputError from "./InputError";
import InputLabel from "./InputLabel";
import PrimaryButton from "./PrimaryButton";
import TextInput from "./TextInput";
import SelectInput from "./SelectInput";
import { Product, Category } from "@/types/models";

interface Props {
    categories: Category[];
    product?: Product;
    isEditing?: boolean;
}

export default function ProductForm({
    categories,
    product,
    isEditing = false,
}: Props) {
    const { data, setData, post, put, processing, errors, progress } = useForm({
        name: product?.name ?? "",
        description: product?.description ?? "",
        price: product?.price ?? "",
        stock: product?.stock ?? "",
        category_id: product?.category_id ?? "",
        image: null as File | null,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        if (isEditing && product) {
            put(route("products.update", product.id));
        } else {
            post(route("products.store"));
        }
    };

    return (
        <form onSubmit={submit} className="space-y-6">
            <div>
                <InputLabel htmlFor="name" value="Nama Produk" />
                <TextInput
                    id="name"
                    type="text"
                    name="name"
                    value={data.name}
                    className="mt-1 block w-full"
                    onChange={(e) => setData("name", e.target.value)}
                    required
                />
                <InputError message={errors.name} className="mt-2" />
            </div>

            <div>
                <InputLabel htmlFor="description" value="Deskripsi" />
                <textarea
                    id="description"
                    name="description"
                    value={data.description}
                    className="mt-1 block w-full border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm"
                    onChange={(e) => setData("description", e.target.value)}
                    required
                    rows={4}
                />
                <InputError message={errors.description} className="mt-2" />
            </div>

            <div>
                <InputLabel htmlFor="category_id" value="Kategori" />
                <SelectInput
                    id="category_id"
                    name="category_id"
                    value={data.category_id}
                    className="mt-1 block w-full"
                    onChange={(e) => setData("category_id", e.target.value)}
                    required
                >
                    <option value="">Pilih Kategori</option>
                    {categories.map((category) => (
                        <option key={category.id} value={category.id}>
                            {category.name}
                        </option>
                    ))}
                </SelectInput>
                <InputError message={errors.category_id} className="mt-2" />
            </div>

            <div>
                <InputLabel htmlFor="price" value="Harga" />
                <TextInput
                    id="price"
                    type="number"
                    name="price"
                    value={data.price}
                    className="mt-1 block w-full"
                    onChange={(e) => setData("price", e.target.value)}
                    required
                    min="0"
                />
                <InputError message={errors.price} className="mt-2" />
            </div>

            <div>
                <InputLabel htmlFor="stock" value="Stok" />
                <TextInput
                    id="stock"
                    type="number"
                    name="stock"
                    value={data.stock}
                    className="mt-1 block w-full"
                    onChange={(e) => setData("stock", e.target.value)}
                    required
                    min="0"
                />
                <InputError message={errors.stock} className="mt-2" />
            </div>

            <div>
                <InputLabel htmlFor="image" value="Gambar Produk" />
                <input
                    id="image"
                    type="file"
                    name="image"
                    onChange={(e) =>
                        setData(
                            "image",
                            e.target.files ? e.target.files[0] : null
                        )
                    }
                    className="mt-1 block w-full text-gray-900 dark:text-gray-100"
                    accept="image/*"
                    required={!isEditing}
                />
                <InputError message={errors.image} className="mt-2" />

                {progress && (
                    <progress value={progress.percentage} max="100">
                        {progress.percentage}%
                    </progress>
                )}

                {isEditing && product.image && (
                    <div className="mt-2">
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            Gambar saat ini:
                        </p>
                        <img
                            src={`/storage/${product.image}`}
                            alt={product.name}
                            className="mt-1 h-32 w-32 object-cover rounded-lg"
                        />
                    </div>
                )}
            </div>

            <div className="flex items-center justify-end">
                <PrimaryButton
                    type="submit"
                    className="ml-4"
                    disabled={processing}
                >
                    {isEditing ? "Simpan Perubahan" : "Simpan Produk"}
                </PrimaryButton>
            </div>
        </form>
    );
}
