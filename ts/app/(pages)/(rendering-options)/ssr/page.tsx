import Link from "next/link";
import { getMetadata } from "@/app/lib/helper";
import Card from "@/app/component/Card";
import { getProducts } from "@/app/apiHandlers/products";
import { Product } from '@/app/types';
import toast from "react-hot-toast";

export const metadata = getMetadata({
  title: "SSR Products",
  desc: "..."
});

export const dynamic = 'force-dynamic';

const getData = async () => {
  const { success, response } = await getProducts();
  if (!success) throw new Error("Failed to get the data.");

  return success ? response : null;
};

const SSR = async () => {
  const { success, response } = await getData();
  if (!success) return <>Error</>;

  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {(response || []).map((i: Product, j: number) => (
        <Link key={j} href={String(i.id)}>
          <Card data={i} />
        </Link>
      ))}
    </div>
  );
};

export default SSR;