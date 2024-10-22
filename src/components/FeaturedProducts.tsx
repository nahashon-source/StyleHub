import React from 'react';

const FeaturedProducts: React.FC = () => {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Featured Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="relative overflow-hidden rounded-lg shadow-lg">
          <img src="https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Summer Collection" className="w-full h-64 object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <div className="text-center">
              <h3 className="text-2xl font-semibold text-white mb-2">Summer Collection</h3>
              <a href="#" className="inline-block bg-white text-gray-800 px-4 py-2 rounded-full hover:bg-gray-100 transition duration-300">Shop Now</a>
            </div>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-lg shadow-lg">
          <img src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="New Arrivals" className="w-full h-64 object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <div className="text-center">
              <h3 className="text-2xl font-semibold text-white mb-2">New Arrivals</h3>
              <a href="#" className="inline-block bg-white text-gray-800 px-4 py-2 rounded-full hover:bg-gray-100 transition duration-300">Shop Now</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;