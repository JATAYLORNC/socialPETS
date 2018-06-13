import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";
import Login from "./Login"

const NavbarLogin = (props) => (
  <nav className="navbar navbar-expand-md w-100" id="myNavbar">
    <div className="container-fluid row">
      <div className="col-sm-3">
        <Link className="navbar-brand text-white" id="brand" to="/"><strong>socialPETS</strong></Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
      </div>
      <div className="col-sm-4"></div>
      <div className="col-sm-5 d-flex collapse navbar-collapse" id="navbarSupportedContent">
        <Login _login={props._login} />
      </div>
    </div>
  </nav>
);

export default NavbarLogin;