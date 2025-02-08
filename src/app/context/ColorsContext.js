// src/app/context/ColorsContext.js


"use client";
import { createContext, useContext, useState } from "react";

const ColorsContext = createContext();

export function ColorsProvider({ children }) {
  const [colors, setColors] = useState([
    { name: "Red", hex: "#FF0000" },
    { name: "Blue", hex: "#0000FF" },
    { name: "Green", hex: "#008000" },
  ]);

  const addColor = (name, hex) => {
    setColors([{ name, hex }, ...colors]); // Add new color to the list
  };

  return (
    <ColorsContext.Provider value={{ colors, addColor }}>
      {children}
    </ColorsContext.Provider>
  );
}

export function useColors() {
  return useContext(ColorsContext);
}
