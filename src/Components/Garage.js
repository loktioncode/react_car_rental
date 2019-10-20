import React,{useState, useContext} from 'react';
import {Link} from 'react-router-dom';

import './App.css';
import Car from './AllCars';
import {CarContext} from './CarContext';  //importing car context


const Garage = () => { //arrow function

    const [cars] = useContext(CarContext); //defining which context to be used in this case CarContext is used
    
    return(
        <div className="container class_car">

                <div className="row">
            
                    <div className="col-lg-3">
                
                        <h1 className="my-4">Our Fleet</h1>
                        <div className="list-group">
                            <Link to="/garage">
                                <a className="list-group-item">All</a>
                            </Link>
                            <Link to="/vip">
                            <a className="list-group-item">VIP</a>
                            </Link>
                            <Link to="/vvip">
                            <a className="list-group-item">VVIP</a>
                            </Link>
                        
                        </div>
                
                    </div>

                    <div className="col-lg-9 garage-items">
                        <div className="row">
                            {cars.map(car => (
                                <Car model ={car.model} price={car.price} id={car.id} image={car.image} category = {car.category}/>
                            ))}
                        </div>

                
                    </div>

            
                </div>

    
        </div>
    );
    



}


export default Garage;