import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Real Estage",
  description: "List of properties for rent and for sale",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <nav className="w-full z-50 border-b top-0 sticky bg-white shadow-md px-24 p-2 flex flex-row items-center justify-between">
        <h1>Logo</h1>
        <ul className="flex flex-row items-center justify-between gap-x-2">
          <li>For sale</li>
          <li>To rent</li>
          <li>New Developments</li>
          <li>Showdays</li>
          <li>Agencies</li>
          <li>Blog</li>
        </ul>
        <button className="bg-white border text-sm text-black rounded-2xl font-bold py-2 px-4">Login</button>
      </nav>
      {children}
      <footer className="bg-slate-900 text-white p-4 w-full flex flex-row items-center justify-between">
  {/* Copry right Sold.co.zw. All rights reserved */}
  <p>Copyright Sold.co.zw. All rights reserved</p>
  <div className="flex flex-row items-center gap-x-2">
    <Link href={'/'}>Privacy Policy</Link>
    <Link href={'/'}>Terms and Conditions</Link>
  </div>
  </footer>
      </body>
    </html>
  );
}
