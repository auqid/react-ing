import React from "react";
const darkModeOn = false;
const darkMode = <h1>Dark Mode is on</h1>;
const lightMode = <h1>Light mode is on</h1>;

function ModeToggler() {
  return <div>{darkModeOn ? darkMode : lightMode}</div>;
}

export default ModeToggler;
