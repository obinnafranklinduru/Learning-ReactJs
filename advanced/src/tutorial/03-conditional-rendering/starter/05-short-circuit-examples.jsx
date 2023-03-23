import { useState } from 'react';

const ShortCircuitExamples = () => {
  // falsy
  const [text, setText] = useState('');
  // truthy
  const [name, setName] = useState('Franklin');
  const [user, setUser] = useState({ name: 'obinna' });
  const [isEditing, setIsEditing] = useState(false);

  const handleToggle = () => {
    setIsEditing(!isEditing);
  }

  return (
    <div>
      <h2>{text || "default value"}</h2>
      {name && (
        <div>
          <h2>I'm a student</h2>
          <h2>{name}</h2>
        </div>)}
      {user && <Name name={user.name} />}

      <h2 style={{ margin: "1rem 0" }}>Ternary Operator</h2>
      <button className="btn" onClick={handleToggle}>{isEditing ? "edit" : "add"}</button>
      
      {user ? 
        (<div>
          <h2>Hi, {user.name}</h2>
          <h2>hello there {name}</h2>
        </div>) : 
        (<div>
          <h2>Kindly log in</h2>
        </div>)
      }
    </div>
  );
};

const Name = ({ name }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dignissimos cupiditate facere similique sapiente neque dicta recusandae suscipit natus consectetur unde eum blanditiis, sunt vero inventore. Distinctio veritatis repudiandae quam?</p>
    </div>
  )
}

export default ShortCircuitExamples;
