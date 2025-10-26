import { getProduct, getProducts } from "@/app/apiHandlers/products";
import { getMetadata } from "@/app/lib/helper";
import Card from "@/app/component/Card";
import { notFound } from "next/navigation";
import { Product } from '@/app/types';

export async function generateMetadata({ params }: { params: { id: string } }) {
    const path = (await params).id,
        data = (await getData(Number(path)));

    return getMetadata({
        title: data?.title,
        desc: "..."
    });
};

const getData = async (id: number) => {
    const { success, response } = await getProduct(id);
    if (!success && response == 404) notFound();
    return success ? response : null;
};

export async function generateStaticParams() {
    const { success, response } = await getProducts();
    if (!success) throw new Error("Failed to get the data.");
    return response.map((post: Product) => ({ id: String(post.id) }));
};

const DynamicSSG = async (props: { params: { id: string } }) => {
    const { id } = await props.params,
        res = await getData(Number(id));

    return (
        <div className="h-screen w-screen flex items-center justify-center">
            <Card data={res as Product} />
        </div>
    );
};

export default DynamicSSG;