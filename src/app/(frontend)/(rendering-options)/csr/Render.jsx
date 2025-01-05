'use client'

import { getProducts } from '@/apiHandlers/products';
import Card from '@/component/Card';
import { useProducts } from '@/redux/slices/products';
import Link from 'next/link';
import { useState, useEffect } from 'react'
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux';

const Render = () => {
  const [data, setData] = useState();

  const { setProductsState } = useProducts(),
    cachedProducts = useSelector(state => { return state.products });

  useEffect(() => { getData() }, []);
  async function getData() {
    if (cachedProducts) return setData(cachedProducts);
    const { success, response } = await getProducts();
    if (!success) return toast.error("Failed to get the data");
    setData(response);
    setProductsState(response);
  };

  if (!data) return <>Loading...</>
  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {(data || []).map((i, j) => (
        <Link key={j} href={String(i.id)}>
          <Card data={i} />
        </Link>
      ))}
    </div>
  );
};

export default Render;