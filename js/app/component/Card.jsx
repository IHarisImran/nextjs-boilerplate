import Image from "next/image";
import { IoStar } from "react-icons/io5";

const Card = ({ data }) => {
    return (
        <div className="bg-white shadow-lg rounded-2xl max-w-xs w-full p-4 gap-4 flex flex-col">
            <Image
                src={data.image}
                width={120}
                height={120}
                loading="lazy"
                alt="Picture of the author"
                className="mx-auto shrink-0"
            />
            <div className="text-[10px] sm:text-xs font-light mt-4 grow flex flex-col justify-between">
                <div>
                    <h1 className="text-sm sm:text-base font-medium mb-1 line-clamp-2">{data.title}</h1>
                    <p className="line-clamp-3">{data.description}</p>
                </div>
                <div className="flex items-center justify-between border-t mt-2 pt-2">
                    <div>{data.category}</div>
                    <div className="flex items-center gap-1"><IoStar className="text-yellow-500" />{data?.rating?.rate}<sup>({data?.rating?.count})</sup></div>
                </div>
            </div>
        </div>
    );
};

export default Card;