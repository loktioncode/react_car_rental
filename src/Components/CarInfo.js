import React, {useContext} from 'react';
import './App.css';

import {CarContext} from './CarContext'; 



//match lets us get info from the current url
function CarInfo({match}){

    const [cars] = useContext(CarContext);
    const selectedCar = match.params.id; //got id from match 

    for (let i = 0; i < cars.length; i++) {

        if (cars[i]["id"] == selectedCar) {
            
            return(
                <div className="container ">
                    <h1>CAR INFO  for {cars[i]["model"]}</h1>
                    <img src={cars[i]["image"]} alt="car"></img>   
                </div>
            ); 
        }
        
    }
}



export default CarInfo;