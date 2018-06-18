import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

const NavbarLogout = (props) => (
  <nav className="navbar navbar-expand-md w-100" id="myNavbar">
    <div className="container-fluid row d-flex align-items-center">
      <div className="col-sm-3">
        <Link className="navbar-brand text-dark" id="brand" to="/"><strong>socialPETS</strong></Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
      </div>
      <div className="col-sm-4">
        <div className="input-group my-2 my-lg-0">
            <input className="form-control-sm" id="search" type="search" placeholder="Search" aria-label="Search" />
            <div className="input-group-append">
              <span className="input-group-text btn bg-dark text-white" type="button"><i className="fas fa-search"></i></span>
            </div>
        </div>
      </div>
      <div className="col-sm-4 collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav d-flex justify-content-start align-items-center">
          <li className="nav-item mr-2">
            <Link className="nav-link text-dark menuText" to="/home" id="home">Home</Link>
          </li>
          <li className="nav-item dropdown mr-2">
            <Link className="nav-link dropdown-toggle text-dark menuText" role="button" data-toggle="dropdown"  to="/Profile" id="saved">Profile</Link>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            {props.user.Pet.map((pet) => <Link key={pet._id.toString()} className="dropdown-item" to={`/profile/${pet._id}`} >{pet.name}</Link>)}
            </div>
          </li>
          <li>
            <Link className="nav-link text-dark menuText" to="/addpet" id="addpet">Add A Pet</Link>
          </li>
        </ul>
      </div>
      <div className="col-sm-1">
        <button className="btn btn-sm btn-dark ml-2 menuButton" onClick={props._logout}>Log Out</button>
      </div>
    </div>
  </nav>
);

export default NavbarLogout;