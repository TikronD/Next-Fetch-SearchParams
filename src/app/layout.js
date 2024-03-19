import "./globals.css";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <h1>Next with Fetch & searchParams</h1>
        <h4>Some links below</h4>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/posts">Posts</Link>
          <Link href="/dance">Dance</Link>
        </nav>
        {children}
        <Footer />
      </body>
    </html>
  );
}
