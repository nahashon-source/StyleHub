import React, { useState } from 'react';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement newsletter signup logic
    console.log('Newsletter signup:', email);
    setEmail('');
    alert('Thank you for signing up!');
  };

  return (
    <section className="bg-blue-500 text-white py-12 px-4 rounded-lg mt-12">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
        <p className="mb-6">Stay updated with our latest offers and new arrivals!</p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-grow px-4 py-2 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <button type="submit" className="bg-white text-blue-500 px-6 py-2 rounded-full font-semibold hover:bg-blue-100 transition duration-300">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;