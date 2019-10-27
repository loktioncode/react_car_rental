import React,{useState, createContext} from 'react';

//In this folder is were we manage Cars context so it can be used in our App
export const KeyContext = createContext();


//this data can then be accessed as props via wrapped content in App.js return method
export const KeyProvider = props => {

    //this is our state with an array of movie details/context
    const [creds, setCreds] = useState();


    return (
        //this makes data frm above state accessble to all components
        <KeyContext.Provider value={[creds, setCreds]}>
            {props.children}
        </KeyContext.Provider>
    );

}