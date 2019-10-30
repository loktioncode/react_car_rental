import React from 'react';
import './App.css';
import SideNav from './SideNav';





const DashBoard = () => {

    return(
     
        <div id="wrapper">

        
        <SideNav />

        <div id="content-wrapper">

            <div class="container-fluid">

            
            <ol class="breadcrumb">
                <li class="breadcrumb-item">
                <a href="#">Dashboard</a>
                </li>
                <li class="breadcrumb-item active">Overview</li>
            </ol>

            
            <div class="row">
                
                
            </div>

        
            

            
            

            </div>
            

            
           

        </div>
        

        </div>
    );
}

export default DashBoard;