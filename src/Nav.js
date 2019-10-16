import React from 'react';
import {Link} from 'react-router-dom';

//this below is our Nav component that returns JSX to index.html 
function Nav(){

    return(
      //Navigation
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div class="container">
          <Link to='/'>
          <a class="navbar-brand" href="/">Car Hire React App</a>
          </Link>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarResponsive">

            <ul class="navbar-nav ml-auto">

              <Link to='/'>
              <li class="nav-item active">
                <a class="nav-link">Home
                </a>
              </li>
              </Link>

              
              <Link to="/rentcar">
              <li class="nav-item active">
                <a class="nav-link">Rent Car</a>
              </li>
              </Link>


              <Link to="/about">
              <li class="nav-item active">
                <a class="nav-link" >About Us</a>
              </li>
              </Link>

              <Link to="/services">
              <li class="nav-item active">
                <a class="nav-link">Services</a>
              </li>
              </Link>

            </ul>
          </div>
        </div>
      </nav>
    );
}



export default Nav;
