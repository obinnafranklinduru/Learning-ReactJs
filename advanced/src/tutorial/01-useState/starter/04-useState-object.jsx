import { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "obinna",
    age: 19,
    hobby: "read books"
  })

  const handleChange = () => {
    setPerson({
      name: "Franklin",
      age: 20,
      hobby: "love code"
    })
  }
  const { name, age, hobby } = person;
  return (
    <>
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h3> Enjoys: {hobby}</h3>
      <button type='button' className='btn' onClick={handleChange}>Show Franklin</button>
    </>
  )
};

export default UseStateObject;
