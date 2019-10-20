import React,{useContext} from 'react';
import './App.css';
import {Link} from 'react-router-dom';

import {CarContext} from './CarContext';  //importing car context
import VipCar from './VipCars';

 



//this below is our component that returns JSX to index.html 
function Vip(){

    const [cars] = useContext(CarContext); //defining which context to be used in this case CarContext is used

    return(
        <div class="class_car">

                <div class="row row_style">
            
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
                
                    <div class="col-lg-9 garage-items">
                
                        <div class="row">
                
                            {cars.map(car => (
                                <VipCar model ={car.model} price={car.price} id={car.id} image={car.image} category = {car.category}/>
                            ))}

                        </div>

                
                    </div>

            
                </div>

    
      </div>
    );
}



export default Vip;