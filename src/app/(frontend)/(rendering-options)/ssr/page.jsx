import Link from "next/link";
import { notFound } from "next/navigation";
import { getMetadata } from "@/app/lib/helper";
import Card from "@/component/Card";
import { getProducts } from "@/apiHandlers/products";

export const metadata = getMetadata({
  title: "SSR Products",
  desc: "..."
});

export const dynamic = 'force-dynamic';

const getData = async id => {
  const res = await fetch('https://fakestoreapi.com/products', { cache: 'force-cache' }),
      data = await res.json();
  if (!data || res.status !== 200) notFound();
  return data;
};

const SSR = async () => {
  const { success, response } = await getProducts();
  if (!success) toast.error("Failed to get the data.")

  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {(response || []).map((i, j) => (
        <Link key={j} href={String(i.id)}>
          <Card data={i} />
        </Link>
      ))}
    </div>
  );
};

export default SSR;