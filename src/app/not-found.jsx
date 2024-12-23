import { getMetadata } from "./lib/helper";

export const metadata = getMetadata({
    title: "404 - Not Found",
    desc: "..."
});

const NotFound = () => {
    return (
        <>404 - Not Found</>
    );
};

export default NotFound;