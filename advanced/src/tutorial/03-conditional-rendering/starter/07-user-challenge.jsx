import { useState } from "react";

const UserChallenge = () => {
  const [user, setUser] = useState(null);

  const login = () => {
    setUser({ name: "Obinna Franklin Duru" });
  }

  const logout = () => {
    setUser(null);
  }

  return (
    <>
      {user ?
        (<div>
          <h2>hello there, {user.name}</h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam facilis, officiis explicabo tempora, hic sapiente nostrum nam reprehenderit dolorum qui optio, minus reiciendis quidem laudantium quae molestiae beatae ducimus ullam.</p>
          <button className="btn" onClick={logout} >logout</button>
        </div>)
        :
        (<div>
          <h2>please login</h2>
          <button className="btn" onClick={login} >login</button>
        </div>)
      }
    </>
  );
};

export default UserChallenge;
