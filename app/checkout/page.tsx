'use client'
import React, { useState, useEffect } from 'react';

interface Product {
  id: string;
  title: string;
  price: number; // Corrected type from Float to number
}

export default function PreviewPage() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`/api/products`);
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        console.log(data);
        console.log('Received products data:', data.data); // Log received data

        // Check if the received data is an array
        if (Array.isArray(data.data)) {
          setProducts(data.data);
        } else {
          throw new Error('Received data is not an array');
        }
      } catch (error) {
        console.error('Error fetching products:', error);
        setProducts([]);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.title} - {product.price} {/* Assuming price is in cents */}
          </li>
        ))}
      </ul>

      <form action="/api/checkout" method="POST" className="p-4">
        <section className="bg-white flex flex-col w-96 h-32 rounded justify-between">
          <button type="submit" role="link" className="h-12 bg-blue-600 rounded text-white font-semibold hover:opacity-80 transition duration-200">
            Checkout
          </button>
        </section>
      </form>
    </div>
  );
}
