import { useState, createContext } from "react";
import NavLinks from "./NavLinks"

const Navbar = () => {
    const [user, setUser] = useState({ name: "Obinna" });
    const logout = () => {
        setUser(null)
    }
    return (
        <NavbarContext.Provider value={{user, logout}}>
            <nav className="navbar">
                <h5>CONTEXT API</h5>
                <NavLinks />
            </nav>
        </NavbarContext.Provider>
    );
}

export default Navbar
export const NavbarContext = createContext();