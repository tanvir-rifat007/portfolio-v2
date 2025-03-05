"use client";
import { useEffect, useState } from "react";

const themes = ["light", "dark"];

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState(() => {
    return globalThis?.localStorage?.getItem("theme") || "light";
  });

  useEffect(() => {
    // Remove existing themes and add the selected one
    document.documentElement.classList.remove(...themes);
    document.documentElement.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="flex mt-40 mb-10 md:flex-col gap-2 fixed md:top-[50%] md:translate-y-[-100%] md:right-[100px]">
      {themes.map((t) => (
        <button
          key={t}
          onClick={() => setTheme(t)}
          className={`w-10 h-10 rounded-full transition-all duration-500 cursor-pointer

          ${t === "light" ? "bg-gray-800 " : "bg-black"}
          ${theme === t ? "scale-110" : "scale-100"}



            



`}
        />
      ))}
    </div>
  );
}
