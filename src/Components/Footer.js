import React, {useEffect} from 'react';
import './App.css';

 



//this below is our component that returns JSX to index.html 
function Footer(){

    const Users = async () => {
        const response = await fetch(`/users`);
        const data = await response.json();
        console.log(data);

        //the line below adds data.hits array to state set Recipes
        //setRecipes(data.hits); //data.hit pulls out hits from data fetched from api cz thats where our recipes are
       // console.log(data.hits);
    };

    useEffect(() => {
        Users();
    }, [] ); 

    return(
        <div className="container cont">
           <footer >
           <div className="container">
                <p className="m-0 text-center" style={{padding:"20px"}}>ALC 4.0 &copy; Project Phase || GCP Cloud Path || Elisha Bere</p>
           </div>
           </footer>

        </div>
    );
}



export default Footer;