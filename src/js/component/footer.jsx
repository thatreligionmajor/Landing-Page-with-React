import React from "react";
import propTypes from "prop-types";

const Footer = (props) => {
    return (       
        <>
            <nav className="navbar bg-dark d-flex">
                <div className="container-fluid">
                    <span className="navbar-brand m-auto" style={{color: "#fdc57b"}}>
                        Copyright © 2024 Your Site
                    </span> 
                </div>
            </nav>
        </>     
    );
};

export default Footer;

 //footer is not centering text