//create the function template (1) import react (2) create the function component (3) export default the name of the function
import React from "react";
import Button from "./button";
import PropTypes from "prop-types";


const Card = ({imageUrl}) => {
    return (
        <div className="cardContainer">
        <div className="card" style={{width: "18 rem", background: "#fbf2d5"}}>
        <img className="card-img-top" style={{height: "18 rem"}}
        src={imageUrl}
        alt="Randomized card image" 
        />
        <div className="card-body">
            <h5 className="card-title">Card Title</h5>
            <p className="card-text" style={{color: "#394a51"}}>
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

Card.propTypes = {
	imageUrl: PropTypes.string
}

export default Card;

