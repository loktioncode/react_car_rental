import React from 'react';
import Nav from './Nav';
import About from './About';
import Services from './Services';
import Rent from './Rent';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Footer from './Footer';
import Home from './Home';


// const counter = 8; this is just like a variable that doesnt change

//this below is our component that returns JSX to index.html 
function App(){


    return(
        <Router>
        <div>
            <Nav/>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/about" exact component={About} />
                    <Route path="/services" exact component={Services} />
                    <Route path="/rentcar" exact component={Rent} />
                </Switch>

            <Footer />
        </div>
        </Router>
    );
}


export default App;


