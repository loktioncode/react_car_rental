import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
//import './Components/App.css';


import Nav from './Components/Nav';
import Garage from './Components/Garage';
import User from './Components/Login';
import Rent from './Components/Rent';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Vip from './Components/Vip';
import Vvip from './Components/Vvip';
import {CarProvider} from './Components/CarContext';
import CarInfo from './Components/CarInfo';
import NewUser from './Components/Register';
import { UserProvider } from './Components/UserContext';
import {KeyProvider} from './Components/AccessContext';
import DashBoard from './Components/Dash';



//this below is our component that returns JSX to index.html 
function App(){

    return(
        
        <UserProvider>
            <CarProvider> 
                <Router>
                <div>
                    <Nav/>
                        <Switch>
                            <Route path="/" exact component={Home} />
                            <Route path="/garage" exact component={Garage} />
                            <Route path="/garage/:id" component={CarInfo} />
                            <Route path="/login" exact component={User} />
                            <Route path="/rentcar" exact component={Rent} />
                            <Route path="/vip" exact component={Vip} />
                            <Route path="/vvip" exact component={Vvip} />
                            <Route path="/register" exact component={NewUser} />
                            
                            <KeyProvider>
                                <Route path="/dashboard" exact component={DashBoard} />
                            </KeyProvider>
                        </Switch>
                    <Footer />
                </div>
                </Router>
            </CarProvider>
        </UserProvider>
    );
}


export default App;


