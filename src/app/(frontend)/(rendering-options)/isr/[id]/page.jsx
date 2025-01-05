import { getProduct, getProducts } from "@/apiHandlers/products";
import { getMetadata } from "@/app/lib/helper";
import Card from "@/component/Card";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
    const path = (await params).id,
        data = (await getData(path));

    return getMetadata({
        title: data?.title,
        desc: "..."
    });
};

export const revalidate = 10 // flush cache after 10 seconds
export const dynamicParams = true;

const getData = async id => {
    const { success, response } = await getProduct(id);
    if (!success && response == 404) notFound();
    return success ? response : null;
};

export async function generateStaticParams() {
    const { success, response } = await getProducts();
    if (!success) throw new Error("Failed to get the data.");
    return response.slice(0, 5).map(post => ({ id: String(post.id) }));
};

const DynamicISR = async (props) => {
    const { id } = await props.params,
        res = await getData(id);

    return (
        <div className="h-screen w-screen flex items-center justify-center">
            {res ? <Card data={res} /> : <>Error</>}
        </div>
    );
};

export default DynamicISR;