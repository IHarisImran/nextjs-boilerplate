import NextTopLoader from "nextjs-toploader";
import "./globals.css";
import { Lexend } from 'next/font/google';
import { Toaster } from "react-hot-toast";

const lexend = Lexend({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  variable: "--font-lexend"
});

const RootLayout = async ({ children }) => {
  return (
    <html lang="en">
      <body className={`${lexend.className} bg-gray-100 antialiased`}>
        <NextTopLoader color={"#000000"} showSpinner={false} initialPosition={0.6} height={4} />
        <Toaster position="top-center" reverseOrder={false} />
        <main>{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;