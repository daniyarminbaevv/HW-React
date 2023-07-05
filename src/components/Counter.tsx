import React, { useState } from "react";

const Counter = () => {
  let [count, setCount] = useState(0);
  console.log(count);
  let handleIncrease = () => {
    setCount(count + 1);
  };
  let handleDecrease = () => {
    setCount(count - 1);
  };
  let handleZeroing = () => {
    setCount((count = 0));
  };
  return (
    <div>
      <h1 className="heading">
        Counter
        <p className="count">{count}</p>
        <div className="buttons">
          <button onClick={handleDecrease}>-</button>
          <button onClick={handleIncrease}>+</button>
          <button onClick={handleZeroing}>0</button>
        </div>
      </h1>
    </div>
  );
};

export default Counter;
