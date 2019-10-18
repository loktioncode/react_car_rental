import React from 'react';
 


//this below is our component that returns JSX to index.html 
function Car(){

    return(
        <div className="col-lg-4 col-md-6 mb-4">
            <div className="card h-100">
            <a ><img className="card-img-top"  alt="IMAGE"></img></a>
            <div className="card-body">
                <h4 className="card-title">
                <a >CAR COMP</a>
                </h4>
                <h5>$24.99</h5>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
            </div>
            <div className="card-footer">
                <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
            </div>
            </div>
        </div>
    );
}



export default Car;