import React from "react";

function Header(props) {
  const { name, color } = props;
  return (
    <div>
      <h1>
        {name},{color}
        {Math.random() >= 0.5 ? "Over 0.5" : "Under 0.5"}
        Here's a random number from 0 to 10:
        <br></br>
        {Math.floor(Math.random() * 10) + 1}
      </h1>
    </div>
  );
}

export default Header;
