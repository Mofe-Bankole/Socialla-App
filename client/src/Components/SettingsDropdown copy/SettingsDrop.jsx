import React, { useState } from "react";

import "./SettingsDrop.css";
import { FaCog } from "react-icons/fa";

const SettingsDrop = () => {
  const [showSettingsCard, setShowSettingsCard] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleSettingsCard = () => {
    setShowSettingsCard(!showSettingsCard);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`app ${isDarkMode ? "dark-mode" : "light-mode"}`}>
      <div className="settings-icon" onClick={toggleSettingsCard}>
       <FaCog/>
      </div>
      {showSettingsCard && (
        <div className="settings-card">
          <div className="setting-item">
            <label htmlFor="darkModeToggle">Dark Mode</label>
            <input
              type="checkbox"
              id="darkModeToggle"
              checked={isDarkMode}
              onChange={toggleDarkMode}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default SettingsDrop;
