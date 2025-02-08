// src/app/layout.js


import Link from "next/link";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-100">
        <nav className="bg-blue-500 p-4 text-white text-center">
          <Link href="/colors" className="text-xl font-bold">🎨 Color Factory</Link>
        </nav>
        <main className="max-w-4xl mx-auto py-6">{children}</main>
      </body>
    </html>
  );
}
