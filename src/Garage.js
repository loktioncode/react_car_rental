import React from 'react';
import {Link} from 'react-router-dom';
import './App.css';


// const counter = 8; this is just like a variable that doesnt change

//this below is our component that returns JSX to index.html 
function Garage(){

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
                
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="card h-100">
                            <a href="#"><img className="card-img-top" src="http://placehold.it/700x400" alt=""></img></a>
                            <div className="card-body">
                                <h4 className="card-title">
                                <a href="#">Item One</a>
                                </h4>
                                <h5>$24.99</h5>
                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
                            </div>
                            <div className="card-footer">
                                <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
                            </div>
                            </div>
                        </div>
                
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="card h-100">
                            <a href="#"><img className="card-img-top" src="http://placehold.it/700x400" alt=""></img></a>
                            <div className="card-body">
                                <h4 className="card-title">
                                <a href="#">Item Two</a>
                                </h4>
                                <h5>$24.99</h5>
                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur! Lorem ipsum dolor sit amet.</p>
                            </div>
                            <div className="card-footer">
                                <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
                            </div>
                            </div>
                        </div>
                
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="card h-100">
                            <a href="#"><img className="card-img-top" src="http://placehold.it/700x400" alt=""></img></a>
                            <div className="card-body">
                                <h4 className="card-title">
                                <a href="#">Item Three</a>
                                </h4>
                                <h5>$24.99</h5>
                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
                            </div>
                            <div className="card-footer">
                                <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
                            </div>
                            </div>
                        </div>
                
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="card h-100">
                            <a href="#"><img className="card-img-top" src="http://placehold.it/700x400" alt=""></img></a>
                            <div className="card-body">
                                <h4 className="card-title">
                                <a href="#">Item Four</a>
                                </h4>
                                <h5>$24.99</h5>
                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
                            </div>
                            <div className="card-footer">
                                <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
                            </div>
                            </div>
                        </div>
                
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="card h-100">
                            <a href="#"><img className="card-img-top" src="http://placehold.it/700x400" alt=""></img></a>
                            <div className="card-body">
                                <h4 className="card-title">
                                <a href="#">Item Five</a>
                                </h4>
                                <h5>$24.99</h5>
                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur! Lorem ipsum dolor sit amet.</p>
                            </div>
                            <div className="card-footer">
                                <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
                            </div>
                            </div>
                        </div>
                
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="card h-100">
                            <a href="#"><img className="card-img-top" src="http://placehold.it/700x400" alt=""></img></a>
                            <div className="card-body">
                                <h4 className="card-title">
                                <a href="#">Item Six</a>
                                </h4>
                                <h5>$24.99</h5>
                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
                            </div>
                            <div className="card-footer">
                                <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
                            </div>
                            </div>
                        </div>
                
                        </div>

                
                    </div>

            
                </div>

    
      </div>
    );
}



export default Garage;
