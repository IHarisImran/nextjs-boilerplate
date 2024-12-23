"use client"

import { useEffect, useState } from "react";
import Card from "@/component/Card";
import { useParams } from "next/navigation";

const DynamicSSR = () => {
    const { id } = useParams(),
        [data, setData] = useState();

    useEffect(() => {
        async function getData() {
            const res = await fetch(`https://fakestoreapi.com/products/${id}`, { cache: 'force-cache' });
            if (res.status !== 200) return setData(null);
            const data = await res.json();
            setData(data);
        };
        getData();
    }, []);

    if (data == undefined) return "loading...";
    if (data == null) return "404";
    return (
        <div className="h-screen w-screen flex items-center justify-center">
            <Card data={data} />
        </div>
    );
};

export default DynamicSSR;