import {createContext, ReactNode, useContext, useEffect, useState} from "react";

const GlobalContext = createContext({});
export const useGlobalContext = () => useContext(GlobalContext);

export const GlobalProvider = ({children}: { children: ReactNode }) => {
    const [user, setUser] = useState({name: "Exmple", email: "example@gmail.com"});
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [posts, setPosts] = useState([] as Post[]);


    useEffect(() => {
        // get current user from local storage and set it to user state
    });

    return (
        <GlobalContext.Provider value={{user, setUser, posts, setPosts, isAuthenticated, setIsAuthenticated}}>
            {children}
        </GlobalContext.Provider>
    );
};
