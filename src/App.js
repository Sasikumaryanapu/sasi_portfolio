// src/App.js
import { useEffect, useState } from "react";
import { Route, HashRouter as Router, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import ScrollIndicator from "./components/ScrollIndicator/ScrollIndicator";
import { ThemeProvider as StyledThemeProvider } from "./context/ThemeContext";
import Home from "./pages/Home";
import GlobalStyles from "./styles/GlobalStyles";
import { darkTheme, lightTheme } from "./theme";

function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (savedTheme) {
      setTheme(savedTheme);
    } else if (systemPrefersDark) {
      setTheme("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <StyledThemeProvider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyles />
        <Router>
          <ScrollIndicator />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </StyledThemeProvider>
  );
}

export default App;
