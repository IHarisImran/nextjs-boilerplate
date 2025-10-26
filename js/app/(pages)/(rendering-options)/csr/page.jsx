import { getMetadata } from '@/app/lib/helper';
import Render from './Render';

export const metadata = getMetadata({
  title: "CSR Products",
  desc: "..."
});

const CSR = () => {
  return (
    <Render />
  );
};

export default CSR;