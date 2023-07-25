import React from "react";
const Nav = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
            <a className="navbar-brand text-light" href="#">Brand</a>
            <button className="navbar-toggler border-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
            <li className="nav-item">
          <a className="nav-link active" style={{color: "#fdc57b"}} aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" style={{color: "#fdc57b"}} href="#">Features</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" style={{color: "#fdc57b"}} href="#">Pricing</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" style={{color: "#fdc57b"}}>About</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
        </>
    )
};
export default Nav;