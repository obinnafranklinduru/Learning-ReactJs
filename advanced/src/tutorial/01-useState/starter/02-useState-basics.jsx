import { useState } from "react";

const ErrorExample = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1)
  }
  
  return (
    <>
      <h2>{count}</h2>
      <button type="button" className="btn" onClick={handleClick}>Click</button>
    </>
  );
};

export default ErrorExample;
