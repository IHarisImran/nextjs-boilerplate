import { getProducts } from "@/apiHandlers/products";
import { getMetadata } from "@/app/lib/helper";
import Card from "@/component/Card";
import Link from "next/link";
import toast from "react-hot-toast";

export const metadata = getMetadata({
  title: "ISR Products",
  desc: "..."
});

export const dynamic = 'force-dynamic';

const ISR = async () => {
  const { success, response } = await getProducts();
  if (!success) toast.error("Failed to get the data.");

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

export default ISR;