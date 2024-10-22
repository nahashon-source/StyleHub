import React, { useState } from 'react';
import ProductCard from './ProductCard';
import { Product } from '../App';

interface ProductListProps {
  addToCart: (product: Product) => void;
  category?: string;
}

const products: Product[] = [
  { id: 1, name: "Classic White T-Shirt", price: 19.99, image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", category: "Men" },
  { id: 2, name: "Slim Fit Jeans", price: 49.99, image: "https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", category: "Men" },
  { id: 3, name: "Floral Summer Dress", price: 39.99, image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", category: "Women" },
  { id: 4, name: "Leather Jacket", price: 89.99, image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", category: "Men" },
  { id: 5, name: "Striped Blouse", price: 29.99, image: "https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", category: "Women" },
  { id: 6, name: "Kids Denim Overalls", price: 34.99, image: "https://images.unsplash.com/photo-1519457431-44ccd64a579f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", category: "Kids" },
];

const ProductList: React.FC<ProductListProps> = ({ addToCart, category }) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(category || null);

  const filteredProducts = selectedCategory
    ? products.filter(product => product.category.toLowerCase() === selectedCategory.toLowerCase())
    : products;

  return (
    <div>
      {!category && (
        <div className="mb-6 flex justify-center space-x-4">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-4 py-2 rounded-full ${!selectedCategory ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
          >
            All
          </button>
          <button
            onClick={() => setSelectedCategory('Men')}
            className={`px-4 py-2 rounded-full ${selectedCategory === 'Men' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
          >
            Men
          </button>
          <button
            onClick={() => setSelectedCategory('Women')}
            className={`px-4 py-2 rounded-full ${selectedCategory === 'Women' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
          >
            Women
          </button>
          <button
            onClick={() => setSelectedCategory('Kids')}
            className={`px-4 py-2 rounded-full ${selectedCategory === 'Kids' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
          >
            Kids
          </button>
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;