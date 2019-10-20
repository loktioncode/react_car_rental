import React,{useContext} from 'react';
import {Link} from 'react-router-dom';

import './App.css';
import {CarContext} from './CarContext';  //importing car context
import AllShuttles from './AllShuttles';


const Garage = () => { //arrow function

    const [cars] = useContext(CarContext); //defining which context to be used in this case CarContext is used
    
    return(
        <div className="class_car">

                <div className="row row_style">
            
                    <div className="col-lg-3 sidenav" >
                        <div className="list-group">
                            <Link to="/garage">
                                <p className="list-group-item">All</p>
                            </Link>
                            <Link to="/vip">
                            <p className="list-group-item">VIP</p>
                            </Link>
                            <Link to="/vvip">
                            <p className="list-group-item">VVIP</p>
                            </Link>
                        
                        </div>
                
                    </div>

                    <div className="col-lg-9 garage-items">
                    <div class="row">
                
                        {cars.map(car => (
                            <AllShuttles model ={car.model} price={car.price} id={car.id} image={car.image} category = {car.category}/>
                        ))}

                    </div>
                    </div>

            
                </div>

    
        </div>
    );
    



}


export default Garage;