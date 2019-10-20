import React from 'react';
import {Link} from 'react-router-dom';
import './App.css';

//this below is our Nav component that returns JSX to index.html 
function Nav(){

    return(
      //Navigation
      <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container">
          <Link to='/'>
          <h1 className="navbar-brand">Space Shuttle</h1>
          </Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">

            <ul className="navbar-nav ml-auto">

              <Link to='/'>
              <li className="nav-item active">
                Home
              </li>
              </Link>

              
              <Link to="/rentcar">
              <li className="nav-item active">
                Bookings
              </li>
              </Link>


              <Link to="/garage">
              <li className="nav-item active">
                Our Garage
              </li>
              </Link>

              <Link to="/services">
              <li className="nav-item active">
                Services
              </li>
              </Link>

            </ul>
          </div>
        </div>
      </nav>
    );
}



export default Nav;
