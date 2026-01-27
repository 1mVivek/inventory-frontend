import { useContext } from "react";
import { ColorModeContext } from "../theme/ColorModeContext";
import "./theme-toggle.css";

export default function ThemeToggle() {
  const { mode, toggleColorMode } = useContext(ColorModeContext);

  return (
    <label className="theme-switch">
      <input
        type="checkbox"
        className="theme-switch__checkbox"
        checked={mode === "dark"}
        onChange={toggleColorMode}
      />

      <div className="theme-switch__container">
        <div className="theme-switch__clouds"></div>

        <div className="theme-switch__stars-container">
          {/* SVG stays same */}
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
