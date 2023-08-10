// import React from "react";

// function Btn() {
//   const clickHandler = () => console.log("clicked");
//   return (
//     <div>
//       <button onClick={clickHandler}>ClickME</button>
//     </div>
//   );
// }

// export default Btn;

import React from "react";

function Btn() {
  const clickHandler = () => console.log("clicked");
  return (
    <div>
      <button onMouseOver={clickHandler}>ClickME</button>
    </div>
  );
}

export default Btn;
