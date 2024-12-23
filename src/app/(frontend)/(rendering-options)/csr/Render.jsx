'use client'

import Card from '@/component/Card';
import Link from 'next/link';
import { useState, useEffect } from 'react'

const Render = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    async function getData() {
      const res = await fetch(`https://fakestoreapi.com/products`, { cache: 'force-cache' }),
        data = await res.json();
      setData(data);
    }
    getData();
  }, []);

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