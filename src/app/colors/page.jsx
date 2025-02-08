// src/app/colors/page.jsx

"use client";
import Link from "next/link";
import { useColors } from "../context/ColorsContext";

export default function ColorsPage() {
  const { colors } = useColors(); // 🔄 Use global color state

  return (
    <div className="p-6 text-center">
      <h1 className="text-3xl font-bold mb-4">🎨 Color Factory</h1>
      <Link href="/colors/new" className="text-blue-500 underline">+ Add New Color</Link>
      <ul className="mt-4">
        {colors.map((color) => (
          <li key={color.name} className="mt-2">
            <Link href={`/colors/${color.name.toLowerCase()}`} className="text-lg font-bold text-gray-700">
              {color.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

