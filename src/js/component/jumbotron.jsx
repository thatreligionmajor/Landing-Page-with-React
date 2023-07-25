import React from "react";
import Button from "./button.jsx";
import propTypes from "prop-types";

const Jumbotron = () => {
    return (
        <>
        <div className="jumbotron jumbotron-fluid">
            <div className="container bg-light pb-3" >
                <h1 className="display-4">A Warm Welcome!</h1>
                <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, ipsam, eligendi, in quo sunt possimus non incidunt odit vero aliquid similique auaerat nam nobis illo aspernatur vitae fugiat numquam repeliat.</p>
                <Button
                    buttonLabel="Call to action!"    
                />
            </div>
        </div>
        </>
    );
}

// Jumbotron.propTypes = {
	
// }

export default Jumbotron;