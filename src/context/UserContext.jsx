import UserContext from "./user.js";
import { useState, useEffect } from "react";
import { getUser } from "../api/user.js";

export const UserProvider = ({children}) => {
    const [user, setUser] = useState(null);

    const getUserData = async () => {
        const user = await getUser();
        if(user != null){
            setUser(user);
        }
      };
      
      useEffect(() => {
        getUserData();
      }, []);


      return(
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
      )
}