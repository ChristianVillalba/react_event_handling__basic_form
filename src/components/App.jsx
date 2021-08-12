import React, { useState } from "react";

function App() {
  const [headingText, setHeadingText] = useState("Hello");
  const [mouseOverStyle, setmouseOverStyle] = useState({
    backgroundColor: "white"
  });

  function handleClick() {
    setHeadingText("Submitted");
  }
  function handlemouseOver() {
    setmouseOverStyle({ backgroundColor: "black" });
  }

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        onMouseOver={handlemouseOver}
        style={mouseOverStyle}
        onClick={handleClick}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
