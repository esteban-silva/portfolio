import * as React from "react";
import { useContext } from "react";
import { LanguageContext } from "../Language/LanguageProvider";
import LanguageToggle from "../Language/ToggleLanguage";
import ThemeToggler from "../Theme/ToggleTheme";
import "./index.css";

const NavBar = () => {
  const { translate } = useContext(LanguageContext);
  const navItems = [
    {
      title: translate("experience").title,
      label: translate("experience").label,
      url: "/#work-experience",
    },
    {
      title: translate("projects").title,
      label: translate("projects").label,
      url: "/#projects",
    },
    {
      title: translate("contact").title,
      label: translate("contact").label,
      url: "mailto:esteban_silva@hotmail.com",
    },
  ];

  return (
    <header className="fixed top-0 z-10 flex items-center justify-center w-full mx-auto mt-2">
      <nav className="flex px-3 text-sm font-medium rounded-full text-gray-600 dark:text-gray-200 justify-center items-center">
        {navItems.map((link) => (
          <a
            className="relative block px-2 py-2 transition hover:text-yellow-500 dark:hover:text-yellow-400"
            aria-label={link.label}
            href={link.url}
          >
            {link.title}
          </a>
        ))}
        <ThemeToggler />
        <LanguageToggle />
      </nav>
    </header>
  );
};

export default NavBar;
