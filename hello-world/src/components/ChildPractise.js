import React from "react";

function ChildPractise(props) {
  return (
    <div>
      <button onClick={() => props.greetHandler("childaa")}>yo</button>
    </div>
  );
}

export default ChildPractise;
