import React from 'react';
import './App.css';
import InfoBtn from './Infobtn';
 


//this below is our component that returns JSX to index.html 
function VvipCar(props){

    if (props.category==="Vvip") {
        return(
            <div className="col-lg-4 col-md-6 mb-4">
                <div className="card h-100">
                <a ><img className="card-img-top" src={props.image} alt=""></img></a>
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
    }else if(props.category!=="Vvip") {
        return(
            <div className="vip_none">
                
            </div>
        );
    }

    
}

export default VvipCar;