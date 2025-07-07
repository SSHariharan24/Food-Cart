import React, { useEffect, useState } from 'react';
import { Product } from './Product';
import './home.css';

export const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecipes = async () => {
      setLoading(true);
      setError(null);

      try {
        const res = await fetch(
          'https://tasty.p.rapidapi.com/recipes/list?from=0&size=10&tags=under_30_minutes',
          {
            method: 'GET',
            headers: {
              'X-RapidAPI-Key': import.meta.env.VITE_RAPIDAPI_KEY,
              'X-RapidAPI-Host': 'tasty.p.rapidapi.com',
            },
          }
        );

        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }

        const data = await res.json();

        const formatted = data.results.map((item) => ({
          id: item.id,
          name: item.name,
          image_url: item.thumbnail_url,
          price: Math.floor(Math.random() * 100) + 10,
        }));

        setProducts(formatted);
      } catch (err) {
        setError(err.message || 'Something went wrong');
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, []);

  if (loading) return <p className="status-text">Loading food items...</p>;
  if (error) return <p className="status-text error">Error: {error}</p>;

  return (
    <div className='product-container'>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};
