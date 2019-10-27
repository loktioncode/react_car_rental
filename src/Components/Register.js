import React,{useState, useContext} from 'react';
import {UserContext} from './UserContext'; 


 



//this below is our component that returns JSX to index.html 
function NewUser(){

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [users, setUsers] = useContext(UserContext); //this is the context where we save new user

    const updateName = (e) => {
        setName(e.target.value); //event targets value by name in form
    };

    const updatePhone = (e) => {
        setPhone(e.target.value); //event targets value by name in form
    };

    const updateEmail = (e) => {
        setEmail(e.target.value); //event targets value by name in form
    };

    const updatePass = (e) => {
        setPassword(e.target.value); //event targets value by name in form
    };

    //the function below takes data in all states populated above and add object to CarContext
    const addUser = (e) => {
        e.preventDefault(); // event prevents page frm loading on form submission
        setUsers(prevCars => [...prevCars, { name:name, phone:phone,email:email,password:password }]);  //using prevCars makes you get latest info in the Movie context
    };

    console.log(users.length)

    return(
        
        <div className="section" id="booking">
            <div className="section-center">
            <div className="container">
				<div className="row" >
					<div className="booking-form">
                        
						<form onSubmit={addUser}>
                        <h1 style={{color:"#fff"}}> Create Account </h1>
                            <div className="form-group">
                                <div className="form-row">
                                    <div className="col-md-6">
                                        <div className="form-label">
                                        <label for="firstName">Name</label>
                                        <input type="text" id="fullName" className="form-control" placeholder="Fullname" required="required" autofocus="autofocus" value={name} onChange={updateName} ></input>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-label">
                                        <label for="firstName">Phone Number</label>
                                        <input type="phone" id="cell" className="form-control" placeholder="Email" required="required" autofocus="autofocus" value={phone} onChange={updatePhone}></input>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="col-md-12">
                                        <div className="form-label">
                                        <label for="Email">Email</label>
                                        <input type="tel" id="Email" className="form-control" placeholder="Email" required="required" autofocus="autofocus" value={email} onChange={updateEmail}></input>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="col-md-6">
                                        <div className="form-label">
                                        <label for="Password">Password</label>
                                        <input type="password" id="fullName" className="form-control" placeholder="Password" required="required" autofocus="autofocus" value={password} onChange={updatePass}></input>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-label">
                                        <label for="firstName">Confirm Password</label>
                                        <input type="password" id="email" className="form-control" placeholder="Confirm" required="required" autofocus="autofocus"></input>
                                        </div>
                                    </div>
                                </div>
                                
                                
                            </div>
							
							<div className="form-btn">
                            
								<button className="btn btn-warning col-md-12">Register</button>
                            
							</div>
					    </form>
					</div>
				</div>
			</div>
		    </div>
	    </div>
    );
}



export default NewUser;