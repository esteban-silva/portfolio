import { useContext } from "react";
import { LanguageContext } from "../components/Language/LanguageProvider";
import { ThemeContext } from "../components/Theme/ThemeProvider";
import { THEME } from "../components/Theme/useTheme";

const SocialChip = ({
  href,
  children,
  download,
}: {
  href: string;
  children: React.ReactNode;
  download?: string;
}) => {
  return (
    // eslint-disable-next-line jsx-a11y/no-redundant-roles
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      role="link"
      className={
        "inline-flex items-center justify-center gap-2 px-4 py-1 text-gray-800 transition bg-gray-100 border border-gray-300 rounded-full dark:bg-gray-800 dark:border-gray-600 hover:bg-gray-900 hover:border-gray-700 dark:text-white focus-visible:ring-yellow-500/80 text-md  group max-w-fit hover:text-white focus:outline-none focus-visible:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-offset-2 active:bg-black hover:dark:bg-gray-900 hover:dark:border-gray-700"
      }
      download={download}
    >
      {children}
    </a>
  );
};

export default SocialChip;
