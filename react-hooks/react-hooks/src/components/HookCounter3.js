import React, { useState } from "react";

function HookCounter3() {
  const [name, setName] = useState({ firstName: "", lastName: "" });
  return (
    <div>
      <form>
        <input
          type="text"
          value={name.firstName}
          onChange={(event) =>
            setName({ ...name, firstName: event.target.value })
          }
        ></input>
        <input
          type="text"
          value={name.lastName}
          onChange={(e) => setName({ ...name, lastName: e.target.value })}
        ></input>

        <h2>Your firstName is {name.firstName}</h2>
        <h2>Your Last Name is {name.lastName}</h2>
      </form>
    </div>
  );
}

export default HookCounter3;
