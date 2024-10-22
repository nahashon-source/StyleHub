import React from 'react';
import FeaturedProducts from '../components/FeaturedProducts';
import ProductList from '../components/ProductList';
import Newsletter from '../components/Newsletter';
import { Product } from '../App';

interface HomePageProps {
  addToCart: (product: Product) => void;
}

const HomePage: React.FC<HomePageProps> = ({ addToCart }) => {
  return (
    <div>
      <FeaturedProducts />
      <ProductList addToCart={addToCart} />
      <Newsletter />
    </div>
  );
};

export default HomePage;