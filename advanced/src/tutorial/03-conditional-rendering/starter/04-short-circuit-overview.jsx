import { useState } from 'react';

const ShortCircuitOverview = () => {
  // falsy
  const [text, setText] = useState("");

  //truthy
  const [name, setname] = useState("Obinna");

  return (
    <>
      <h4>Falsy OR : {text || "Hello World"} </h4>
      <h4>Falsy OR : {text && "Hello World"} </h4>
      <h4>Truthy OR : {name || "Hello World"} </h4>
      <h4>Truthy OR : {name && "Hello World"} </h4>
    </>
  );
};
export default ShortCircuitOverview;
