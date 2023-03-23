import { useState } from "react";
import { data } from '../../../data';

const UserChallenge = () => {
  const [name, setName] = useState("");
  const [users, setUsers] = useState(data);

  const handleSubmit = e => {
    e.preventDefault();

    if (!name) {
      return;
    }

    const fakeId = new Date();
    const newUser = { id: fakeId, name: name }
    const updatedUser = [...users, newUser];
    setUsers(updatedUser);
    setName("");
  }

  const handleRemove = (id) => {
    const updateUser = users.filter(person => person.id !== id);
    setUsers(updateUser);
  }

  return (
    <div>
      <form className='form' onSubmit={handleSubmit}>
        <h4>Add User</h4>

        <div className='form-row'>
          <label htmlFor='name'  className='form-label'>name</label>
          <input
            type='text'
            className='form-input'
            id='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <button type='submit' className='btn btn-block'>submit</button>
      </form>

      <h2>users</h2>
      {users.map(user => {
        const { id, name } = user;
        return (
          <div key={id}>
            <h4>{name}</h4>
            <button className="btn" onClick={() => handleRemove(user.id)}>remove</button>
          </div>
        )
      })}
    </div>
  );
};
export default UserChallenge;
