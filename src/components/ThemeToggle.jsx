import { useContext } from "react";
import { ColorModeContext } from "../theme/ColorModeContext";
import { useTheme } from "@mui/material/styles";
import "./theme-toggle.css";

export default function ThemeToggle() {
  const { toggleColorMode } = useContext(ColorModeContext);
  const theme = useTheme();

  return (
    <label className="theme-switch">
      <input
        type="checkbox"
        className="theme-switch__checkbox"
        checked={theme.palette.mode === "dark"}
        onChange={toggleColorMode}
      />

      <div className="theme-switch__container">
        <div className="theme-switch__clouds"></div>

        <div className="theme-switch__stars-container">
          {/* SVG stars here */}
        </div>

        <div className="theme-switch__circle-container">
          <div className="theme-switch__sun-moon-container">
            <div className="theme-switch__moon">
              <div className="theme-switch__spot"></div>
              <div className="theme-switch__spot"></div>
              <div className="theme-switch__spot"></div>
            </div>
          </div>
        </div>
      </div>
    </label>
  );
}
