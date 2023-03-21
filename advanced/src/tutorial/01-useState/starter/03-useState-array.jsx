import { useState } from "react";
import {data} from "../../../data"

const UseStateArray = () => {
  const [people, setPeople] = useState(data);

  const handleRemove = (id) => {
    let newPerson = people.filter(person => {
     return person.id !== id;
    })
    setPeople(newPerson);
  }

  const handleDelete = () => {
    setPeople([]);
  }

  return (
    <>
      {people.map(person => {
        const { name, id } = person;
        return (
          <div key={id}>
            <h4>{name}</h4>
            <button onClick={() => handleRemove(id)}>Remove</button>
          </div>
        )
      })}
      <button onClick={handleDelete} className="btn" style={{ marginTop: '2rem'}}>Delete All</button>
    </>
   );
};

export default UseStateArray;
