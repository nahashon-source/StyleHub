import React from 'react';
import { useParams } from 'react-router-dom';
import ProductList from '../components/ProductList';
import { Product } from '../App';

interface ProductPageProps {
  addToCart: (product: Product) => void;
}

const ProductPage: React.FC<ProductPageProps> = ({ addToCart }) => {
  const { category } = useParams<{ category: string }>();

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 capitalize">{category} Products</h1>
      <ProductList addToCart={addToCart} category={category} />
    </div>
  );
};

export default ProductPage;