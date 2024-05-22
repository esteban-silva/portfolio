import { LanguageContext } from "../Language/LanguageProvider";
import React, { useContext } from "react";
const currentYear = new Date().getFullYear();

const Footer = () => {
  const { translate } = useContext(LanguageContext);
  return (
    <footer className="opacity-80 m-4 mt-16 w-full mx-auto container lg:max-w-4xl md:max-w-2xl mb-10 flex justify-center">
      <div className="rounded-lg w-full max-w-screen-xl mx-auto md:flex md:items-center md:justify-between py-4">
        <span className="text-sm sm:text-center text-zinc-800/90 dark:text-zinc-200/90">
          © {currentYear} {translate("footer_copy").title}
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium dark:text-white/90 sm:mt-0">
          <li>
            <a
              id="contacto"
              href="mailto:esteban_silva11@hotmail.com"
              className="hover:underline"
            >
              {translate("contact").title}
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
