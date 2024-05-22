import { createContext } from "react";
import { useTheme, THEME } from "../useTheme";

const ThemeContext = createContext({
  currentTheme: THEME.DARK,
  setCurrentTheme: (newTheme: THEME) => {},
});

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const { currentTheme, setCurrentTheme } = useTheme();

  return (
    <ThemeContext.Provider value={{ currentTheme, setCurrentTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
