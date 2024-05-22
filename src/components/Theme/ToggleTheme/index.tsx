import { MdSunny } from "react-icons/md";
import { FaMoon } from "react-icons/fa";
import { useContext, useRef, useState } from "react";
import { THEME } from "../useTheme";
import { ThemeContext } from "../ThemeProvider";
import useOnOutsideClick from "../../../sharedComponents/useOnOutsideClick";

const ThemeToggler = () => {
  const { currentTheme, setCurrentTheme } = useContext(ThemeContext);
  const [showMenuToggle, setShowMenuToggle] = useState<boolean>(false);

  const handleOutsideClick = () => setShowMenuToggle(false);

  const ref = useOnOutsideClick(handleOutsideClick, HTMLDivElement);

  const setNewTheme = (newTheme: THEME) => {
    setCurrentTheme(newTheme);
    setShowMenuToggle(false);
  };

  return (
    <div ref={ref}>
      <div className="relative ml-1 mr-1">
        <button
          id="theme-toggle-btn"
          className="appearance-none border-none flex hover:scale-125 transition"
          onClick={() => setShowMenuToggle(true)}
        >
          <span className="sr-only">Elige el tema</span>
          {currentTheme === THEME.LIGHT && <MdSunny />}
          {currentTheme === THEME.DARK && <FaMoon />}
        </button>
        {showMenuToggle && (
          <div
            id="themes-menu-1"
            className="absolute min-w-0 top-[2rem] right-0 text-sm p-1 rounded-md border border-gray-100 bg-white/90 dark:bg-gray-900/90 dark:border-gray-500/20 shadow-[0_3px_10px_rgb(0,0,0,0.2)] backdrop-blur-md"
          >
            <button
              onClick={() => setNewTheme(THEME.DARK)}
              className="themes-menu-option px-2 py-1.5 cursor-default hover:bg-neutral-400/40 dark:hover:bg-gray-500/50 rounded-sm"
            >
              Dark
            </button>
            <button
              id="themes-menu-2"
              onClick={() => setNewTheme(THEME.LIGHT)}
              className="themes-menu-option px-2 py-1.5 cursor-default hover:bg-neutral-400/40 dark:hover:bg-gray-500/50 rounded-sm"
            >
              Light
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ThemeToggler;
