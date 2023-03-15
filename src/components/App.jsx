import React, { useState } from "react";

function App() {
  let now = new Date().toLocaleTimeString([], { hour12: false });

  var [time, setTime] = useState(now);

  setInterval(getTime, 100);

  function getTime() {
    var curr = new Date().toLocaleTimeString([], { hour12: false });
    setTime(curr);
  }

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={getTime}>Get Time</button>
    </div>
  );
}

export default App;
