"use client"

import { useEffect, useState } from "react";
import Card from "@/app/component/Card";
import { useParams } from "next/navigation";
import { getProduct } from "@/app/apiHandlers/products";
import toast from "react-hot-toast";
import { Product } from '@/app/types';

const DynamicCSR = () => {
    const { id } = useParams(),
        [data, setData] = useState<Product | null>(null);

    useEffect(() => {
        (async () => {
            const { success, response } = await getProduct(Number(id));
            if (!success) return toast.error("Failed to get the data");
            setData(response);
        })();
    }, []);

    if (!data) return <>Loading...</>;
    return (
        <div className="h-screen w-screen flex items-center justify-center">
            <Card data={data} />
        </div>
    );
};

export default DynamicCSR;