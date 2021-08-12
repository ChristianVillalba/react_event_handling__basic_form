import React, { useState } from "react";

function App() {
  const [headingText, setHeadingText] = useState("Hello");
  const [mouseStyle, setmouseStyle] = useState({
    backgroundColor: "white"
  });

  function handleClick() {
    setHeadingText("Submitted");
  }
  function handlemouseOver() {
    setmouseStyle({ backgroundColor: "black" });
  }
  function handlemouseOut() {
    setmouseStyle({ backgroundColor: "white" });
  }

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        onMouseOver={handlemouseOver}
        onMouseOut={handlemouseOut}
        style={mouseStyle}
        onClick={handleClick}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
