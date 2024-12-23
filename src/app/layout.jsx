import "./globals.css";
import { Lexend } from 'next/font/google';

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
        <div>
        </div>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;