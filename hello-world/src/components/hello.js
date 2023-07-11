import React from "react";

const Hello = (props) => {
  return (
    <div>
      <h1>
        hello {props.name} a.k.a {props.heroname} and his sidekick
        {props.children}
      </h1>
      {props.children}
    </div>
  );
};

export default Hello;
