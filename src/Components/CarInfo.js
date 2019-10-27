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
                <div>
                     <header class="bg-secondary py-5 mb-5">
                        <div class="container h-100">
                        <div class="row h-100 align-items-center">
                            <div class="col-lg-12">
                            <h1 class="display-4 text-white mt-5 mb-2">CAR {selectedCar} DETAILS</h1>
                            <p class="lead mb-5 text-white-50">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non possimus ab labore provident mollitia. Id assumenda voluptate earum corporis facere quibusdam quisquam iste ipsa cumque unde nisi, totam quas ipsam.</p>
                            </div>
                        </div>
                        </div>
                    </header>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 mb-5">
                                <div>
                                    <h2>{cars[i]["model"]}</h2>
                                    <hr></hr>
                                    <p>Owner: {cars[i]["muridzi"]}</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis optio neque consectetur consequatur magni in nisi, natus beatae quidem quam odit commodi ducimus totam eum, alias, adipisci nesciunt voluptate. Voluptatum.</p>
                                    
                                </div>
                            </div>

                            
                        <div className="col-md-4 mb-5">
                            <h1>Book</h1>
                            <hr></hr>
                            <form>
                                <div className="form-group">
                                        <div className="form-label-group">
                                            <label>Destination</label>
                                            <input className="form-control" type="text" placeholder="Address, location .." required="required" autofocus="autofocus" />
                                        </div>
                                </div>
                                <div className="form-group">
                                    <div className="form-label-group">
                                        <label>Pick Up location</label>
                                        <input className="form-control" type="text" placeholder="Address, location .." required="required" autofocus="autofocus"/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="form-label-group">
                                        <label>Pick up Date</label>
                                        <input className="form-control" type="date"required="required" autofocus="autofocus" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="form-label-group">
                                        <label>Pick up Time</label>
                                        <input className="form-control" type="time" required="required" autofocus="autofocus" />
                                    </div>
                                </div>
                                <button class="btn btn-warning btn-block" >Book</button>
                            </form>
                        </div>

                        </div>

                        
                    </div>  
                </div>
            ); 
        }
        
    }
}



export default CarInfo;