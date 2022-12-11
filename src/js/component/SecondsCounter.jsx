import propTypes from "prop-types";
import React from "react";



//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const SecondsCounter = (props) => {
	return (
		
		<body>	
			<div className="box">
				<div id="imagen"><h1>6</h1></div>
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
