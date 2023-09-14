import { useEffect } from "react";
import { useState } from "react";

export default function App() {
  const [theme, setTheme] = useState("light");
  const handleThemeChange = () => {
    if (theme === "light") {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      document.documentElement.classList.remove("dark");
    }
  };

  useEffect(() => {
    const userPrefersDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (userPrefersDark) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }
  }, []);

  return (
    <div className="h-screen flex justify-center items-center text-bold text-4xl dark:text-blue-700 dark:bg-blue-950 text-center">
      <button
        onClick={handleThemeChange}
        className="dark:bg-slate-200 font-bold px-4 py-2 border-4 rounded dark:hover:bg-slate-300 "
      >
        Change Theme
      </button>
    </div>
  );
}
