import React, { useEffect } from "react";
import useThemeStore from "../../../aplication/contexts/ThemeContextStore";
import "./Toggle.css";
import { ToggleSvg } from "./ToggleSvg";

const DarkModeToggle: React.FC = () => {
  const { theme, setTheme } = useThemeStore();

  useEffect(() => {
    localStorage.setItem("theme", theme);
    if (theme === "dark" || localStorage.getItem("theme") === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [theme]);

  return (
    <React.Fragment>
      <label id="theme-toggle-button" className="flex items-center justify-center">
        <input
          checked={theme == "dark" ? true : false}
          onChange={(e) => {
            setTheme(e.target.checked ? "dark" : "light");
          }}
          type="checkbox"
          id="toggle"
        ></input>
        <ToggleSvg />
      </label>
    </React.Fragment>
  );
};

export default DarkModeToggle;
