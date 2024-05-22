import { MdSunny } from "react-icons/md";
import { FaMoon } from "react-icons/fa";
import { useContext, useRef, useState } from "react";
import { Language } from "../useLanguage";
import { LanguageContext } from "../LanguageProvider";
// import { useOutsideClick from "../../../sharedComponents/useOnOutsideClick";
import { MdLanguage } from "react-icons/md";
import useOnOutsideClick from "../../../sharedComponents/useOnOutsideClick";

const LanguageToggle = () => {
  const { currentLanguage, setCurrentLanguage } = useContext(LanguageContext);
  const [showMenuToggle, setShowMenuToggle] = useState<boolean>(false);

  const setNewLanguage = (newLanguage: Language) => {
    setCurrentLanguage(newLanguage);
    setShowMenuToggle(false);
  };

  const handleOutsideClick = () => setShowMenuToggle(false);
  const ref = useOnOutsideClick(handleOutsideClick, HTMLDivElement);
  const { translate } = useContext(LanguageContext);

  return (
    <div ref={ref}>
      <div className="relative ml-1 mr-1">
        <button
          id="language-toggle-btn"
          className="appearance-none border-none flex hover:scale-125 transition gap-1 items-center pl-1"
          onClick={() => setShowMenuToggle(true)}
        >
          <span className="sr-only">Elige el Lenguaje</span>
          {currentLanguage === Language.ES && (
            <>{translate("language_es").title}</>
          )}
          {currentLanguage === Language.EN && (
            <>{translate("language_en").title}</>
          )}
          <MdLanguage />
        </button>
        {showMenuToggle && (
          <div
            id="languages-menu-1"
            className="absolute min-w-0 top-[2rem] right-0 text-sm p-1 rounded-md border border-gray-100 bg-white/90 dark:bg-gray-900/90 dark:border-gray-500/20 shadow-[0_3px_10px_rgb(0,0,0,0.2)] backdrop-blur-md"
          >
            <button
              onClick={() => setNewLanguage(Language.ES)}
              className="languages-menu-option px-2 py-1.5 cursor-default hover:bg-neutral-400/40 dark:hover:bg-gray-500/50 rounded-sm"
            >
              {translate("language_es").title}
            </button>
            <button
              id="languages-menu-2"
              onClick={() => setNewLanguage(Language.EN)}
              className="languages-menu-option px-2 py-1.5 cursor-default hover:bg-neutral-400/40 dark:hover:bg-gray-500/50 rounded-sm"
            >
              {translate("language_en").title}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default LanguageToggle;
