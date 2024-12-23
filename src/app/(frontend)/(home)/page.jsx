import { getMetadata } from "../../lib/helper";
import { headers } from 'next/headers'

export const metadata = getMetadata({
  title: "Home",
  desc: "..."
});

const Page = async () => {
  const headersList = headers(),
    middlewareSet = await headersList.get('dataFromMiddleware');

  return (
    <>Static Page</>
  );
};

export default Page;