import React,{useState, createContext} from 'react';

//In this folder is were we manage Cars context so it can be used in our App
export const UserContext = createContext();


//this data can then be accessed as props via wrapped content in App.js return method
export const UserProvider = props => {

    //this is our state with an array of movie details/context
    const [users, setUsers] = useState([
        { 
            name: "SUPA",
            phone: "0776484278",
            email: "sudo@root.com",
            password: "toor"
            
        },

    ]);


    return (
        //this makes data frm above state accessble to all components
        <UserContext.Provider value={[users, setUsers]}>
            {props.children}
        </UserContext.Provider>
    );

}