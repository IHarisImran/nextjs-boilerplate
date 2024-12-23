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
    const res = await fetch(`https://fakestoreapi.com/products/${id}`, { cache: 'force-cache' }),
        data = await res.json();
    if (!data || res.status !== 200) notFound();
    return data;
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