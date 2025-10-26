export type Product = {
    id: number;
    image: string;
    title: string;
    description: string;
    category: string;
    rating: {
        rate: number;
        count: number;
    };
};