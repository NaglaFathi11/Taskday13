import { useState, useContext } from "react";
import { Theme } from "../../App";
import "./Header.css";

export default function Header() {
  const themePassedValue = useContext(Theme);

  function handleModeClick() {
    themePassedValue.changeTheme(!themePassedValue.mode);
    // console.log(themePassedValue.mode);
  }

  return (
    <>
      {/* Start header  */}
      <header
        className={themePassedValue.mode ? "light-header" : "dark-header"}
      >
        <h2 className="header-logo">devfinder</h2>
        <div className="switch-section">
          {themePassedValue.mode ? (
            <>
              <button
                id="switch-btn"
                className="light-switch-btn"
                onClick={handleModeClick}
              >
                Dark
              </button>
              <img src="/assets/icon-moon.svg" alt="" />
            </>
          ) : (
            <>
              <button
                id="switch-btn"
                className="dark-switch-btn"
                onClick={handleModeClick}
              >
                Light
              </button>
              <img src="/assets/icon-sun.svg" alt="" />
            </>
          )}
        </div>
      </header>
      {/* End header  */}
    </>
  );
}
