//these are currently hardcoded but want to work on this later
import React from "react";
import PropTypes from "prop-types";

const Button = ({buttonLabel}) => {
    return (
        <>
        <button type="button" class="btn btn-primary">{buttonLabel}</button>
        </>
    );
}

Button.propTypes = {
	buttonLabel: PropTypes.string
};

export default Button;