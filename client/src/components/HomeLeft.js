import React from "react";
import { Link } from "react-router-dom";
import "../styles/homeLeft.css";
import westminster from "../images/westminster.png";

const HomeLeft = (props) => (
  <div>
  <div className="row"> 
    <div className="col-sm-12" id="homeLeft">
      <h4>Looking to Adopt?</h4>
      <a href="http://www.petfinder.com" target="_blank"><img src="https://image.ibb.co/fBEcrd/pet_Finder.png" height="250" width="250" /></a>
    </div>
  </div>      

<div className="row"> 
<div className="col-sm-12" id="homeLeftSecond">
  <a href="http://www.chewy.com" target="_blank"><img src="https://image.ibb.co/mc70uy/chewy.png" height="250" width="250" /></a>
  <h4>Need to Fuel Up?</h4>
</div> 
</div>
</div>
);

export default HomeLeft;