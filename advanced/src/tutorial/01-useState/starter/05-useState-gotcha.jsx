import { useState } from "react";

const UseStateGotcha = () => {
  const [value, setValue] = useState(0);

  // const handleClick = () => {
  //   setValue(currentState => currentState + 1);
  // }
  // console.log(value)

  const handleClick = () => {
    setTimeout(() => {
      console.log("Clicked");
      setValue(currentState => currentState + 1);
    }, 5000);
  }
  return (
    <>
      <h1>{value}</h1>
      <button onClick={handleClick} className="btn">increase</button>
    </>
  );
};

export default UseStateGotcha;
