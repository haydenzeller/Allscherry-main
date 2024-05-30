'use client'
import React, { useEffect } from 'react';

export default function PreviewPage() {
  useEffect(() => {
    const fetchData = async () => {
      const query = new URLSearchParams(window.location.search);
      if (query.get('success')) {
        console.log('Order placed! You will receive an email confirmation.');
      }

      if (query.get('canceled')) {
        console.log('Order canceled -- continue to shop around and checkout when you’re ready.');
      }
    };

    fetchData();
  }, []);

  return (
    <div>
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
