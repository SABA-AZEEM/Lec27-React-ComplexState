import React, { useState } from "react";

function App() {
  const [name, setName] = useState({
    fName: "",
    lName: ""
  });

  function handleName(event) {
    const { name, value } = event.target;

    setName((preValue) => {
      if (name === "fName") {
        return {
          fName: value,
          lName: preValue.lName
        };
      } else if (name === "lName") {
        return {
          fName: preValue.fName,
          lName: value
        };
      }
    });
  }
  return (
    <div className="container">
      <h1>
        Hello {name.fName} {name.lName}
      </h1>
      <form>
        <input
          name="fName"
          placeholder="First Name"
          onChange={handleName}
          value={name.fName}
        />
        <input
          name="lName"
          placeholder="Last Name"
          onChange={handleName}
          value={name.lName}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
