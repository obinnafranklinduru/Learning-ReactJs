import { createContext, useContext, useState } from 'react'

const GlobalContext = createContext();

const AppContext = ({children}) => {
    const [name, setName] = useState("Obinna");
    return (
        <GlobalContext.Provider value={{ name, setName }}>
            {children}
        </GlobalContext.Provider>
    );
}

export const useGlobalContext = () => useContext(GlobalContext);
export default AppContext