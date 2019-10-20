import React from 'react';
import {Link} from 'react-router-dom';
 


//this below is our component that returns JSX to index.html 
function Car(props){

    return(
        <div className="col-lg-4 col-md-6 mb-4">
            <div className="card h-100">
                <Link to="/carinfo">
                   <img className="card-img-top" src={props.image} alt=""></img>
                </Link>
            <div className="card-body">
                <h4 className="card-title">
                <a >{props.model}</a>
                </h4>
                <h5>${props.price}</h5>
                <p className="card-text">CLASS: {props.category}</p>
            </div>
            <div className="card-footer">
                <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
            </div>
            </div>
        </div>
    );
}



export default Car;