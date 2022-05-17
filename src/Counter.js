import React, { useState } from "react"; //rfce
import "./Counter.css";

export default function Counter() {
  const [count, setCount] = useState(0);
  const decrement = () => setCount(count - 1);
  const increment = () => setCount(count + 1);
  const reset = () => setCount(0);

  let color = count > 0 ? "green" : count === 0 ? "black" : "red";

  return (
    <div className="container">
      <h1>COUNTER</h1>
      <div style={{ color }} id="value">
        {count}
      </div>
      <div className="btn-group">
        <button onClick={decrement} className="btn btn-decrease">
          DECREASE
        </button>
        <button onClick={reset} className="btn btn-reset">
          RESET
        </button>
        <button onClick={increment} className="btn btn-increase">
          INCREASE
        </button>
      </div>
    </div>
  );
}
