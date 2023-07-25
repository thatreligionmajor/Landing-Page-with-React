import React from "react";
import propTypes from "prop-types";
import Card from "./card.jsx";

const Row = (props) => {
    return (
        <>
        <div class="container-fluid my-auto">
            <div class="row pt-4">
                <div class="col">
                    <Card />
                </div>
                <div class="col">
                    <Card />
                </div>
                <div class="col">
                    <Card/>
                </div>
                <div class="col">
                    <Card />
                </div>
            </div>
        </div>
        </>
    );
}

// Row.propTypes = {
	
// }

export default Row;