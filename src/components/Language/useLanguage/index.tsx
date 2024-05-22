import { useState } from "react";
import es from "../../../languages/es";
import en from "../../../languages/en";

enum Language {
  ES = "es",
  EN = "en",
}

interface Translation {
  name: string;
  label: string;
  title: string;
}

const getLocalStorageLanguage = () => {
  if (typeof localStorage.getItem("language") !== "undefined") {
    return (localStorage.getItem("language") as Language) ?? Language.ES;
  } else {
    return Language.ES;
  }
};

function useLanguage() {
  const translate = (key: string): Translation => {
    let translatedString: Translation = {
      name: "fallback",
      label: "",
      title: "",
    };
    currentLanguage === Language.ES
      ? (translatedString = es.find(
          (item) => item.name === key && item
        ) as Translation)
      : (translatedString = en.find(
          (item) => item.name === key && item
        ) as Translation);

    return translatedString;
  };

  const [currentLanguage, setLanguage] = useState(getLocalStorageLanguage());

  const setCurrentLanguage = (newLanguage: Language) => {
    if (newLanguage !== currentLanguage) {
      setLanguage(newLanguage);
      localStorage.setItem("language", newLanguage);
    }
  };

  return { currentLanguage, setCurrentLanguage, translate };
}

export { useLanguage, Language, Translation };
