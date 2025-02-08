// src/app/colors/colorsData.js

"use client";
import { useState } from "react";

export default function useColors() {
  const [colors, setColors] = useState([
    { name: "Red", hex: "#FF0000" },
    { name: "Blue", hex: "#0000FF" },
    { name: "Green", hex: "#008000" },
  ]);

  const addColor = (name, hex) => {
    setColors([{ name, hex }, ...colors]);
  };

  return { colors, addColor };
}
