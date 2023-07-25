//these are currently hardcoded but want to work on this later
import React from "react";
import PropTypes from "prop-types";

const Button = ({buttonLabel}) => {
    return (
        <>
        <button type="button" class="btn" style={{background: "#7fa99b", color: "#394a51"}}>
            {buttonLabel}
            </button>
        </>
    );
}

Button.propTypes = {
	buttonLabel: PropTypes.string
};

export default Button;