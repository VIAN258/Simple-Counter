import propTypes from "prop-types";
import React from "react";



//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const SecondsCounter = (props) => {
	return (
		
		<body>	
			<div className="box">
				<div id="imagen"><h1><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-clock" viewBox="0 0 16 16">
  <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
</svg></h1></div>
				<div id="sexto"><h1>{props.counter6}</h1></div>
				<div id="quinto"><h1>{props.counter5}</h1></div>
				<div id="cuarto"><h1>{props.counter4}</h1></div>
				<div id="tercero"><h1>{props.counter3}</h1></div>
				<div id="segundo"><h1>{props.counter2}</h1></div>
				<div id="primero"><h1>{props.counter1}</h1></div>
			</div>
        </body>
	);
};

export default SecondsCounter;
