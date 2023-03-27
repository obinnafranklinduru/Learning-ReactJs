import { useContext } from "react";
import { useGlobalContext } from "./Global/AppContext";
import { NavbarContext } from "./Navbar";

const UserContainer = () => {
    const { user, logout } = useContext(NavbarContext);

    const { name, setName } = useGlobalContext();
    console.log(name, setName);
    
    return (
        <div className="user-container">
            {user ?
                <>
                    <p>Hello There, {user?.name?.toUpperCase()}</p>
                    <button className="btn" onClick={logout}>logout</button>
                </> :
                <p>Please, login</p>
            }
        </div>
    );
}

export default UserContainer