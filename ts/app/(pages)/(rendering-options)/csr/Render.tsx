'use client'

import { getProducts } from '@/app/apiHandlers/products';
import Card from '@/app/component/Card';
import { useProducts } from '@/app/redux/slices/products';
import Link from 'next/link';
import { useEffect } from 'react'
import toast from 'react-hot-toast';

const Render = () => {
  const { setProductsState, getProductState } = useProducts();

  useEffect(() => {
    (async () => {
      if (getProductState) return;
      const { success, response } = await getProducts();
      if (!success) return toast.error("Failed to get the data");
      setProductsState(response);
    })();
  }, []);

  if (!getProductState) return <>Loading...</>
  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {(getProductState || []).map((i, j) => (
        <Link key={j} href={`/csr/${String(i.id)}`}>
          <Card data={i} />
        </Link>
      ))}
    </div>
  );
};

export default Render;