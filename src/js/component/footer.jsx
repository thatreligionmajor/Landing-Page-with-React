import React from "react";
import propTypes from "prop-types";

const Footer = (props) => {
    return (            
            <nav className="navbar bg-dark d-flex fixed-bottom">
                <div className="container-fluid">
                    <span className="navbar-brand m-auto text-light">
                        Copyright © 2023 Your Site
                    </span> 
                </div>
            </nav>
    );
};

export default Footer;

 //footer is not centering text