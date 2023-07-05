import React, { useState } from "react";

const Input = () => {
  const [inputValue, setInputValue] = useState("");
  console.log(inputValue);
  const handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    setInputValue(e.currentTarget.value);
  };
  return (
    <div>
      Input
      <div className="inputWrapper">
        <input onChange={handleInputChange} value={inputValue} />
        <p>{inputValue}</p>
      </div>
    </div>
  );
};

export default Input;
