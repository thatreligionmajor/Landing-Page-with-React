import React from "react";
import PropTypes from "prop-types";
import Card from "./card.jsx";

const Row = (props) => {
    return (
        <>
        <div class="container-fluid py-5">
            <div class="row pt-4">
                <div class="col">
                    <Card 
                    imageUrl="https://source.unsplash.com/random/?beige, soft"
                    />
                </div>
                <div class="col">
                    <Card 
                    imageUrl="https://source.unsplash.com/random/?ocean"
                    />
                </div>
                <div class="col">
                    <Card 
                    imageUrl="https://source.unsplash.com/random/?green, lush"
                    />
                </div>
                <div class="col">
                    <Card 
                    imageUrl="https://source.unsplash.com/random/?teal, nature"
                    />
                </div>
            </div>
        </div>
        </>
    );
}

// Row.propTypes = {
	
// }

export default Row;