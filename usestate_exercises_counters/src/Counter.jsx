import { useState } from "react";

const Counter = ({ count, setCount }) => {
    return (
      <div className="counter">
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increase</button>
        <button onClick={() => setCount(count - 1)}>Decrease</button>
      </div>
    );
  };
  
  export default Counter;