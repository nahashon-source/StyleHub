import React from 'react';
import { Facebook, Twitter, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">StyleHub</h3>
            <p className="text-sm">Your one-stop shop for trendy and affordable clothing.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm hover:text-blue-400">Home</a></li>
              <li><a href="#" className="text-sm hover:text-blue-400">Products</a></li>
              <li><a href="#" className="text-sm hover:text-blue-400">About Us</a></li>
              <li><a href="#" className="text-sm hover:text-blue-400">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Customer Service</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm hover:text-blue-400">Shipping & Returns</a></li>
              <li><a href="#" className="text-sm hover:text-blue-400">FAQ</a></li>
              <li><a href="#" className="text-sm hover:text-blue-400">Size Guide</a></li>
              <li><a href="#" className="text-sm hover:text-blue-400">Terms & Conditions</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-400"><Facebook /></a>
              <a href="#" className="hover:text-blue-400"><Twitter /></a>
              <a href="#" className="hover:text-blue-400"><Instagram /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm">
          <p>&copy; 2024 StyleHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;