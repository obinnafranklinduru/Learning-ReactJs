import { useState } from "react";

const ToggleChallenge = () => {
  const [value, setValue] = useState(true);

  const handleToggle = () => {
    setValue(!value);
  }
  return (
    <>
      <button className="btn" onClick={handleToggle}>{value ? "Change to Element" : "Change to Component"}</button>

      {value ? <Name /> : <div>I'm an element. let go and code</div>}
    </>
  );
};

const Name = () => {
  return <div>I'm a component and I love coding</div>
}

export default ToggleChallenge;
