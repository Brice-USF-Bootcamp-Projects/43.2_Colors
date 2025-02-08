// src/app/colors/[color]/page.js


"use client";
import { useParams, useRouter } from "next/navigation";
import useColors from "../colorsData";

export default function ColorPage() {
  const { colors } = useColors();
  const params = useParams();
  const router = useRouter();
  
  const color = colors.find(c => c.name.toLowerCase() === params.color.toLowerCase());
  
  if (!color) {
    router.push("/colors"); // Redirect if color does not exist
    return null;
  }

  return (
    <div className="h-screen flex flex-col items-center justify-center" style={{ backgroundColor: color.hex }}>
      <h1 className="text-4xl text-white font-bold">This is {color.name}</h1>
      <p className="text-lg text-white">{color.hex}</p>
      <button onClick={() => router.push("/colors")} className="mt-4 bg-white text-black px-4 py-2 rounded">
        ← Back to Colors
      </button>
    </div>
  );
}
