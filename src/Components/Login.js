import React, {useState, useContext} from 'react';
import {KeyContext} from './AccessContext';
import './App.css';
import {Link} from 'react-router-dom';
 


//this below is our component that returns JSX to index.html 
function User(){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [ setCreds] = useContext(KeyContext); //this is the context where we save new user


    const updateEmail = (e) => {
        setEmail(e.target.value); //event targets value by name in form
    };

    const updatePass = (e) => {
        setPassword(e.target.value); //event targets value by name in form
    };


    const Login = (e) => {
        setCreds({ email:email,password:password }); 
    };


    return(
        <div className="section" id="booking">
            <div className="section-center">
            <div className="container">
				<div className="row" >
					<div className="booking-form">
                        
						<form onSubmit={Login}>
                        <h1 style={{color:"#fff"}}> Log In </h1>
                            <div className="form-group">
                                <div className="form-row">
                                    <div className="col-md-12">
                                        <div className="form-label">
                                        <label for="Email">Email</label>
                                        <input type="tel" id="Email" className="form-control" placeholder="Email" required="required" autofocus="autofocus" value={email} onChange={updateEmail}></input>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="col-md-12">
                                        <div className="form-label">
                                        <label for="Password">Password</label>
                                        <input type="password" id="fullName" className="form-control" placeholder="Password" required="required" autofocus="autofocus" value={password} onChange={updatePass}></input>
                                        </div>
                                    </div>
                                </div>
                                
                                
                            </div>
							
                            <Link to="/dashboard">
                                <div className="form-btn">
                            
                                    <button className="btn btn-warning col-md-12">Register</button>
                        
                                </div>
                            </Link>
							
                            <Link to="/register">
                                <p className="reg">
                                    Do not have an account REGISTER HERE
                                </p>
                            </Link>
					    </form>
					</div>
				</div>
			</div>
		    </div>
	    </div>
    );
}



export default User;
