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

// ANGELA YU'S SOLUTION

// import React, { useState } from "react";

// function App() {
//   const [headingText, setHeadingText] = useState("Hello");
//   const [isMouseOver, setmouseOver] = useState({ false });
//   function handleClick() {
//     setHeadingText("Submitted");
//   }
//   function handlemouseOver() {
//     setmouseOver(true);
//   }
//   function handlemouseOut() {
//     setmouseOut(false);
//   }

//   return (
//     <div className="container">
//       <h1>{headingText}</h1>
//       <input type="text" placeholder="What's your name?" />
//       <button
//         onMouseOver={handlemouseOver}
//         onMouseOut={handlemouseOut}
//         style={{ backgroundColor : isMouseOver ? "black" : "white" }}
//         onClick={handleClick}
//       >
//         Submit
//       </button>
//     </div>
//   );
// }

// export default App;
