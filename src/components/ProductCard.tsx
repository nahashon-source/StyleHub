import React from 'react';
import { ShoppingCart } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
}

interface ProductCardProps {
  product: Product;
  addToCart: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, addToCart }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <span className="text-sm text-blue-500 font-semibold">{product.category}</span>
        <h2 className="text-lg font-semibold text-gray-800 mt-1">{product.name}</h2>
        <p className="text-gray-600 mt-2">${product.price.toFixed(2)}</p>
        <button
          onClick={() => addToCart(product)}
          className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 transition duration-300 flex items-center justify-center"
        >
          <ShoppingCart className="mr-2 h-5 w-5" />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;