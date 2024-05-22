import React from "react";
import "./index.css";
import "tailwindcss/tailwind.css";
import { ThemeProvider } from "./components/Theme/ThemeProvider";
import Container from "./components/Container";
import { LanguageProvider } from "./components/Language/LanguageProvider";

function App() {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <Container />
      </ThemeProvider>
    </LanguageProvider>
  );
}

export default App;
