import { useLayoutEffect, useState } from "react";

enum THEME {
  DARK = "dark",
  LIGHT = "light",
}

const getLocalStorageTheme = () => {
  if (typeof localStorage.getItem("theme") !== "undefined") {
    return (localStorage.getItem("theme") as THEME) ?? THEME.DARK;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? THEME.DARK
    : THEME.LIGHT;
};

const setClassListTheme = (theme: THEME) => {
  if (theme === THEME.DARK) {
    document.body.classList.add("dark");
    // document.getElementById("html")?.classList.add("scheme")
  } else {
    document.body.classList.remove("dark");
    // document.getElementById("html")?.classList.remove("scheme")
  }
};

function useTheme() {
  const [currentTheme, setTheme] = useState(getLocalStorageTheme());

  useLayoutEffect(() => {
    setClassListTheme(currentTheme);
  }, [currentTheme]);

  const setCurrentTheme = (newTheme: THEME) => {
    if (newTheme !== currentTheme) {
      setTheme(newTheme);
      localStorage.setItem("theme", newTheme);
    }
  };

  return { currentTheme, setCurrentTheme };
}

export { useTheme, THEME };
