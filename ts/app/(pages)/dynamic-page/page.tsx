import { getMetadata } from "../../lib/helper";
import { headers } from 'next/headers';

export const metadata = getMetadata({
  title: "Home",
  desc: "..."
});

export const dynamic = 'force-dynamic';

const Page = async () => {
  const headersList = await headers(),
    middlewareSet = headersList.get('dataFromMiddleware');

  return (
    <>Dynamic Page</>
  );
};

export default Page;