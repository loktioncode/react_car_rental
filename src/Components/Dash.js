import React,{useContext} from 'react';

import './App.css';
import {KeyContext} from './AccessContext';
import {UserContext} from './UserContext';  





const DashBoard = () => {

    const [users] = useContext(UserContext);
    const [creds] = useContext(KeyContext);

    for (let u = 0; u < users.length; u++) {
        if (users[u]["email"]===creds.email && users[u]["password"]===creds.password) {
            return(
                <div className="container">
                    <h1>
                        Welcome
                    </h1>
                </div>
            );
        } else if(users[u]["password"] !== creds.password) {
            return(
                <div> className="container"
                    <h1>
                        wrong password
                    </h1>
                </div>
            );
        }else {
            return(
                <div className="container">
                    <h1>
                        wrong pass/email
                    </h1>
                </div>
            );

        }
        
    }


    return(
     <div>

     </div>
    );
}

export default DashBoard;