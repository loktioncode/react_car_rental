import React,{useContext} from 'react';
import {Link} from 'react-router-dom';

import './App.css';



const InfoBtn = (props) => {

    return(
        <Link to ={`/garage/${props.id}`}>
        <button className="btn btn-secondary info_btn">More</button>
        </Link>
    );
}

export default InfoBtn;