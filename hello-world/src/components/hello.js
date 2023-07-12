import React from "react";

const Hello = (props) => {
  const { name, heroName } = props;
  return (
    <div>
      <h1>
        hello {name} a.k.a {heroName} and his sidekick
      </h1>
    </div>
  );
};

export default Hello;
