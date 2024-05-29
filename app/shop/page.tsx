'use client'
import { useEffect, useState } from 'react';
import Image from 'next/image';
interface Product {
    id: number;
    name: string;
    description: string;
    image: string;
}
export default function Shop() {
    const [products, setProducts] = useState<Product[]>([]);
    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await fetch('/api/products', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    cache: 'no-store'
                });

                if (!res.ok) {
                    throw new Error('Failed to fetch products');
                }

                const responseData = await res.json();
                setProducts(responseData.data); // Update the state with fetched data
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };
        getProducts(); // Call the function to fetch products
    }, []); // Empty dependency array to run the effect only once on component mount

    return (
        <div>
            {Array.isArray(products) && products.length > 0 ? (
                products.map((product) => (
                    <div key={product.id}>
                        <h2>{product.name}</h2>
                        <p>{product.description}</p>
                        <Image priority
                            src={'https://api.allscherry.com/assets/' + product.image}
                            width={200}
                            height={200}
                            alt={''}
                        />
                    </div>
                ))
            ) : (
                <p>No products found</p>
            )}
        </div>
    );
}
