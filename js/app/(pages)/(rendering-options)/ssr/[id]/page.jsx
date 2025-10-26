import { getProduct } from "@/apiHandlers/products";
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

const getData = async id => {
    const { success, response } = await getProduct(id);
    if (!success && response == 404) notFound();
    return success ? response : null;
};

const DynamicSSR = async (props) => {
    const { id } = await props.params,
        res = await getData(id);

    return (
        <div className="h-screen w-screen flex items-center justify-center">
            <Card data={res} />
        </div>
    );
};

export default DynamicSSR;