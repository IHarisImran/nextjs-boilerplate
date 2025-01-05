import { responseMaker } from "@/app/lib/helper";

export const getProducts = async () => {
    try {
        const res = await fetch('https://fakestoreapi.com/products', { cache: 'force-cache' });
        if (!res.ok) throw "Failed to get the data.";
        const data = await res.json();
        return responseMaker({ success: true, response: data });
    } catch (err) {
        console.log(err);
        return responseMaker({ success: false, response: null });
    };
};

export const getProduct = async id => {
    try {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`, { cache: 'force-cache' });
        if (!res.ok) throw res.status;
        const data = await res.json();
        return responseMaker({ success: true, response: data });
    } catch (err) {
        console.log(err);
        return responseMaker({ success: false, response: err });
    };
};