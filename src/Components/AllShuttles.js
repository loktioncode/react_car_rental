import React from 'react';
import InfoBtn from './Infobtn';
import './App.css';
 


//this below is our component that returns JSX to index.html 
function AllShuttles(props){
    return(
        <div className="col-lg-4 col-md-6 mb-4">
            <div className="card h-100">
            <a ><img className="card-img-top" src={props.image} alt=""></img>
                <div class="d-flex justify-content-center">
                    <div class="spinner-border" role="status">
                        <span class="sr-only">Loading...</span>
                    </div>
                </div>
            </a>
            <div className="card-body">
                <h4 className="card-title">
                <a >{props.model}</a>
                </h4>
                <h5>${props.price}</h5>
                <p className="card-text">CLASS: {props.category}</p>
            </div>
            <div className="card-footer">
                <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
                <InfoBtn id={props.id} />
            </div>
            </div>
        </div>
    );
}

export default AllShuttles;