import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


import Nav from './Components/Nav';
import Garage from './Components/Garage';
import Services from './Components/Services';
import Rent from './Components/Rent';
import Footer from './Components/Footer';
import Home from './Components/Home';
import ChooseShuttle from './Components/Shuttles';
import Vip from './Components/Vip';
import Vvip from './Components/Vvip';
import {CarProvider} from './Components/CarContext';
import CarInfo from './Components/CarInfo';



//this below is our component that returns JSX to index.html 
function App(){

    return(

        <CarProvider> 
            <Router>
            <div>
                <Nav/>
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/garage" exact component={Garage} />
                        <Route path="/garage/:id" component={CarInfo} />
                        <Route path="/services" exact component={Services} />
                        <Route path="/rentcar" exact component={Rent} />
                        <Route path="/choose" exact component={ChooseShuttle} />
                        <Route path="/vip" exact component={Vip} />
                        <Route path="/vvip" exact component={Vvip} />
                    </Switch>

                <Footer />
            </div>
            </Router>
        </CarProvider>
    );
}


export default App;


