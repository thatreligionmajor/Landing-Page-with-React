//create the function template (1) import react (2) create the function component (3) export default the name of the function
import React from "react";
import Button from "./button";
import propTypes from "prop-types";


const Card = (props) => {
    return (
        <div className="cardContainer">
        <div className="card" style={{width: "18 rem"}}>
        <img className="card-img-top" style={{height: "18 rem"}}
        src="https://source.unsplash.com/random/" 
        alt="Randomized card image" 
        />
        <div className="card-body">
            <h5 className="card-title">Card Title</h5>
            <p className="card-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Pellentesque nec erat enim. Nullam sapien nisi.
            </p>
            <Button
                    buttonLabel="Find out more!"    
                />
        </div>
        </div>
        </div>
    );
};

// Card.propTypes = {
	
// }

export default Card;

