//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";


// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import SecondsCounter from "./component/SecondsCounter.jsx";
let counter1  = 0
let counter2  = 0
let counter3  = 0
let counter4  = 0
let counter5  = 0
let counter6  = 0
setInterval(() =>{
    if(counter1 == 10){
        counter1 = 0;
        counter2++
    }
    if(counter2 == 10){
        counter2 = 0;
        counter3++
    }
    if(counter3 == 10){
        counter3 = 0;
        counter4++
    }
    if(counter4 == 10){
        counter4 = 0;
        counter5++
    }
    if(counter5 == 10){
        counter5 = 0;
        counter6++
    }
    
    ReactDOM.render(<SecondsCounter counter1 ={counter1++} 
                                    counter2 ={counter2} 
                                    counter3 ={counter3} 
                                    counter4 ={counter4} 
                                    counter5 ={counter5} 
                                    counter6 ={counter6} />,document.querySelector("#app"))
}
    ,1000)

    
   

//render your react application
//ReactDOM.render(<Home />, document.querySelector("#app"));
