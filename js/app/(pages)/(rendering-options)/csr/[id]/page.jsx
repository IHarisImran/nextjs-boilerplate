"use client"

import { useEffect, useState } from "react";
import Card from "@/component/Card";
import { useParams } from "next/navigation";
import { getProduct } from "@/apiHandlers/products";
import toast from "react-hot-toast";

const DynamicCSR = () => {
    const { id } = useParams(),
        [data, setData] = useState();

    useEffect(() => { getData() }, []);
    async function getData() {
        const { success, response } = await getProduct(id);
        if (!success) return toast.error("Failed to get the data");
        setData(response);
    };

    if (!data) return "loading...";
    return (
        <div className="h-screen w-screen flex items-center justify-center">
            <Card data={data} />
        </div>
    );
};

export default DynamicCSR;