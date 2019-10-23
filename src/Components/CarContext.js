import React,{useState, createContext} from 'react';

//In this folder is were we manage Cars context so it can be used in our App
export const CarContext = createContext();


//this data can then be accessed as props via wrapped content in App.js return method
export const CarProvider = props => {

    //this is our state with an array of movie details/context
    const [cars, setCars] = useState([
        {
            category: "Vip",
            passengers: 2, 
            price: 100, 
            id: 1, 
            model: "Mazda 002",
            image: "http://placehold.it/700x400",
            muridzi: "Jon Wadii"
            
        },
        {
            category: "Regular",
            passengers: 5, 
            price: 500, 
            id: 2, 
            model: "Mazda 444",
            image: "http://placehold.it/700x400",
            muridzi: "Jon Doe"
            
        },
        {
            category: "Vvip",
            passengers: 5, 
            price: 1500, 
            id: 3, 
            model: "Mazda 3",
            image: "http://placehold.it/700x400",
            muridzi: "Jon Doe"
            
        },
        {
            category: "Vvip",
            passengers: 1, 
            price: 2500, 
            id: 4, 
            model: "Buggati Veyron",
            image: "http://placehold.it/700x400",
            muridzi: "Elisha"
            
        },
        {
            category: "Vip",
            passengers: 8, 
            price: 200, 
            id: 5, 
            model: "Avanza",
            image: "http://placehold.it/700x400",
            muridzi: "Elisha"
            
        },
        {
            category: "Vvip",
            passengers: 5, 
            price: 200, 
            id: 6, 
            model: "Rabs 323",
            image: "http://placehold.it/700x400",
            muridzi: "Elisha"
            
        },
    ]);


    return (
        //this makes data frm above state accessble to all components
        <CarContext.Provider value={[cars, setCars]}>
            {props.children}
        </CarContext.Provider>
    );

}