import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Menu } from 'lucide-react';

interface HeaderProps {
  cartItemCount: number;
  toggleCart: () => void;
}

const Header: React.FC<HeaderProps> = ({ cartItemCount, toggleCart }) => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Menu className="h-6 w-6 mr-2 text-gray-700" />
          <Link to="/" className="text-2xl font-bold text-gray-800">StyleHub</Link>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li><Link to="/" className="text-gray-600 hover:text-gray-800">Home</Link></li>
            <li><Link to="/products/men" className="text-gray-600 hover:text-gray-800">Men</Link></li>
            <li><Link to="/products/women" className="text-gray-600 hover:text-gray-800">Women</Link></li>
            <li><Link to="/products/kids" className="text-gray-600 hover:text-gray-800">Kids</Link></li>
            <li><Link to="/about" className="text-gray-600 hover:text-gray-800">About</Link></li>
            <li><Link to="/contact" className="text-gray-600 hover:text-gray-800">Contact</Link></li>
          </ul>
        </nav>
        <button onClick={toggleCart} className="relative">
          <ShoppingCart className="h-6 w-6 text-gray-700" />
          {cartItemCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
              {cartItemCount}
            </span>
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;