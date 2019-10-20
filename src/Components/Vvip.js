import React, {useContext} from 'react';
import {Link} from 'react-router-dom';

import './App.css';
import {CarContext} from './CarContext';  //importing car context
import VvipCar from './VvipCars';

 



//this below is our component that returns JSX to index.html 
function Vvip(){

    const [cars] = useContext(CarContext); //defining which context to be used in this case CarContext is used

    return(
        <div class="container class_car">

                <div class="row">
            
                    <div class="col-lg-3">
                
                        <h1 class="my-4">Our Fleet</h1>
                        <div class="list-group">
                            <Link to="/garage">
                                <a class="list-group-item">All</a>
                            </Link>
                            <Link to="/vip">
                            <a class="list-group-item">VIP</a>
                            </Link>
                            <Link to="/vvip">
                            <a class="list-group-item">VVIP</a>
                            </Link>
                        
                        </div>
                
                    </div>
                
                    <div class="col-lg-9 garage-items">
                
                        <div class="row">
                
                            {cars.map(car => (
                                <VvipCar model ={car.model} price={car.price} id={car.id} image={car.image} category = {car.category}/>
                            ))}

                        </div>

                
                    </div>


            
                </div>

    
      </div>
    );
}



export default Vvip;