<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    public function run(): void
    {
        $categories = [
            ['name' => 'Elektronik', 'description' => 'Produk elektronik dan gadget'],
            ['name' => 'Fashion', 'description' => 'Pakaian dan aksesoris'],
            ['name' => 'Makanan', 'description' => 'Makanan dan minuman'],
            ['name' => 'Kesehatan', 'description' => 'Produk kesehatan dan kecantikan'],
        ];

        foreach ($categories as $category) {
            Category::create($category);
        }
    }
} 