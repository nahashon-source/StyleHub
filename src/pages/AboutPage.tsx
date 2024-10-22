import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">About StyleHub</h1>
      <p className="mb-4">
        StyleHub is your one-stop destination for trendy and affordable clothing. We believe that everyone deserves to look and feel their best without breaking the bank.
      </p>
      <p className="mb-4">
        Our mission is to provide high-quality, fashionable clothing for men, women, and kids at accessible prices. We carefully curate our collections to ensure that you always have access to the latest styles and trends.
      </p>
      <p className="mb-4">
        At StyleHub, we're committed to sustainable and ethical fashion practices. We work with responsible manufacturers and use eco-friendly materials whenever possible to minimize our environmental impact.
      </p>
      <p>
        Thank you for choosing StyleHub. We're excited to be part of your fashion journey!
      </p>
    </div>
  );
};

export default AboutPage;