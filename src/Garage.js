import React,{useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

import './App.css';
import Car from './Car';


const Garage = () => {

    URL = `http://127.0.0.1:8000/learn_api/default/api/car`
    const [cars, setCars] = useState([]);

    const getCars = async () => {
        const response = await fetch(URL );
        const data = await response.json();

        //the line below adds data.hits array to state set Recipes
        setCars(data.content); //data.hit pulls out hits from data fetched from api cz thats where our recipes are
        console.log(data.content);
    };

    useEffect(() => {
        getCars();
    }, []);

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
                            
                            {cars.map( car => (   //we are mapping through state to get individual car
                            <Car
                            key={car.id}
                            category = {car.category}
                            model = {car.model}
                            price = {car.price}
                            passengers = {car.passengers}
                            owner = {car.muridzi}
                            image = {car.image}
                            />
                            ))};
                
                        
                
                        </div>

                
                    </div>

            
                </div>

    
        </div>
    );
    



}


export default Garage;