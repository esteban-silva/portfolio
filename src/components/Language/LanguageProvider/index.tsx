import { createContext } from "react";
import { useLanguage, Language, Translation } from "../useLanguage";

interface ILanguageContext {
  currentLanguage: Language;
  setCurrentLanguage: (newLanguage: Language) => void;
  translate: (key: string) => Translation;
}

const defaultTranslation = {
  name: "fallback",
  label: "",
  title: "",
} as Translation;

const LanguageContext = createContext<ILanguageContext>({
  currentLanguage: Language.ES,
  setCurrentLanguage: (newLanguage: Language) => {},
  translate: (key: string) => defaultTranslation,
});

const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const { currentLanguage, setCurrentLanguage, translate } = useLanguage();

  return (
    <LanguageContext.Provider
      value={{ currentLanguage, setCurrentLanguage, translate }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export { LanguageContext, LanguageProvider };
