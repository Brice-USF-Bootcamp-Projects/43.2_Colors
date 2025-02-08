// src/app/colors/new/page.js

"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useColors } from "../../context/ColorsContext";

export default function NewColorPage() {
  const { addColor } = useColors();
  const router = useRouter();
  const [name, setName] = useState("");
  const [hex, setHex] = useState("#000000");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;
    addColor(name, hex); // ✅ Persist color in global state
    router.push("/colors"); // ✅ Redirect after adding
  };

  return (
    <div className="p-6 text-center">
      <h1 className="text-3xl font-bold mb-4">Add a New Color</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Color Name"
          className="border p-2 w-64"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="color"
          value={hex}
          onChange={(e) => setHex(e.target.value)}
          className="w-16 h-10 border"
        />
        <button type="submit" className="block bg-blue-500 text-white px-4 py-2 rounded">
          Add Color
        </button>
      </form>
    </div>
  );
}

