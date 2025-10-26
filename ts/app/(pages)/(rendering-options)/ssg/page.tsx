import { getProducts } from "@/app/apiHandlers/products";
import { getMetadata } from "@/app/lib/helper";
import Card from "@/app/component/Card";
import Link from "next/link";
import { Product } from '@/app/types';

export const metadata = getMetadata({
  title: "SSG Products",
  desc: "..."
});

const SSG = async () => {
  const { success, response } = await getProducts();
  if (!success) return <>Error</>;

  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {(response || []).map((i: Product, j: number) => (
        <Link key={j} href={`/ssg/${String(i.id)}`}>
          <Card data={i} />
        </Link>
      ))}
    </div>
  );
};

export default SSG;