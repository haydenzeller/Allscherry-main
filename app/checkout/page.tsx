// 'use client';
// import React, { useState, useEffect } from 'react';

// interface Product {
//   id: string;
//   title: string;
//   price: number; // Corrected type from Float to number
//   api_id: string;
// }


// const buyNow = async (priceId: string) => {
//   try {
//     const res = await fetch('/api/checkout', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ priceId }),
//     });

//     if (!res.ok) {
//       throw new Error('Failed to process the checkout');
//     }

//     const data = await res.json();
//     if (data && data.redirectUrl) {
//       const paymentUrl = JSON.parse(data.redirectUrl)
//       window.location.href = paymentUrl; // Redirect based on the URL received from the server
//     } else {
//       throw new Error('Redirect URL not found');
//     }
//   } catch (error) {
//     console.error('Error during checkout:', error);
//   }
// };


// export default function PreviewPage() {
//   const [products, setProducts] = useState<Product[]>([]);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await fetch('/api/products');
//         if (!response.ok) {
//           throw new Error('Failed to fetch products');
//         }
//         const data = await response.json();
//         if (Array.isArray(data.data)) {
//           setProducts(data.data);
//         } else {
//           throw new Error('Received data is not an array');
//         }
//       } catch (error) {
//         console.error('Error fetching products:', error);
//         setProducts([]);
//       }
//     };

//     fetchProducts();
//   }, []);

//   return (
//     <div>
//       <h2>Products</h2>
//       <ul>
//         {products.map(product => (
//           <li key={product.id}>
//             {product.title} - ${product.price} {/* Assuming price is in cents */}
//             <button onClick={() => buyNow(product.api_id)}>Buy Now</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }


export default function CheckoutPage() {
  return (
    <div>
      <h1>Checkout</h1>
    </div>
  );
}