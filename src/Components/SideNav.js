import React from 'react';
import './App.css';

 



//this below is our component that returns JSX to index.html 
function SideNav(){

    return(
        <div>
            <ul className="sidebar navbar-nav">
            <li className="nav-item active">
            <a className="nav-link" href="index.html">
                <i className="fas fa-fw fa-tachometer-alt"></i>
                <span>Dashboard</span>
            </a>
            </li>
            <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="pagesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i className="fas fa-fw fa-folder"></i>
                <span>Pages</span>
            </a>
            <div className="dropdown-menu" aria-labelledby="pagesDropdown">
                <h6 className="dropdown-header">Login Screens:</h6>
                <a className="dropdown-item" href="login.html">Login</a>
                <a className="dropdown-item" href="register.html">Register</a>
                <a className="dropdown-item" href="forgot-password.html">Forgot Password</a>
                <div className="dropdown-divider"></div>
                <h6 className="dropdown-header">Other Pages:</h6>
                <a className="dropdown-item" href="404.html">404 Page</a>
                <a className="dropdown-item" href="blank.html">Blank Page</a>
            </div>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="charts.html">
                <i class="fas fa-fw fa-chart-area"></i>
                <span>Charts</span></a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="tables.html">
                <i class="fas fa-fw fa-table"></i>
                <span>Tables</span></a>
            </li>
        </ul>
           

        </div>
    );
}



export default SideNav;