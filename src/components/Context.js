import {createContext , useEffect, useState, } from 'react';
 
export const MyContext = createContext();

function AppContext({children}) {

    const[user,setUser]=useState(null);

    useEffect(() => {
        let email = localStorage.getItem("email")
        if(email){
          fetch(`https://bookmyshow-msnp.onrender.com/users/getDetails/${email}`)
          .then((data) => data.json())
          .then((data) => {setUser(data)})
        }
      },[])

    return(
        <MyContext.Provider value={{user,setUser}}>{children}</MyContext.Provider>
    );
}
export default AppContext;