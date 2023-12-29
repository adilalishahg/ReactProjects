import React, { useEffect, useState } from "react";
import { ThemeProvider } from "./contexts/theme";
import ThemeBtn from "./components/ThemeBtn";
import Card from "./components/Card";

function App() {
  const [themeMode, setThemeMode] = useState("light");

  const darkTheme = () => {
    setThemeMode("dark");
  };
  const lightTheme = () => {
    setThemeMode("light");
  };

  // actual change in theme
  useEffect(() => {
    var classlist = document.querySelector("html").classList;
    classlist.remove("light", "dark");
    classlist.add(themeMode);
  }, [themeMode]);
  return (
    <>
      <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
        <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
            <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
              {/* ThemeButton */}
              <ThemeBtn />
              {/* ThemeButton */}
            </div>

            <div className="w-full max-w-sm mx-auto">
              {/* ThemeCard */}
              <Card />
              {/* ThemeCard */}
            </div>
          </div>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
