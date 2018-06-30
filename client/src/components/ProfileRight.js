import React from "react";
// import { Link } from "react-router-dom";
import "../styles/profileRight.css";
import catAngels from "../images/CatAngels.png";

const ProfileRight = (props) => (
<div>
  <div className="row" >
    <div className="col-sm-12">
    
    <h6 id="faceBark">FaceBark</h6>
   <a href="https://facebark1.herokuapp.com/" target="_blank"><img src="https://image.ibb.co/mLPxPy/Screenshot_2018_06_30_08_04_54.png"  height="100" width="200" id="faceBarkLogo"/></a>
   
   <p id="clickHere">Find your spot today!</p>
        </div>
      </div>


      <div className="row" >
    <div className="col-sm-12">

   <a href="http://www.catangelsnc.org/" target="_blank"> <img src="http://images.adoptapet.com/images/shelter-badges/051.png" id="adopt" height="200" width="200"/></a>
    <p id="adoptText">Find your new Best Friend!</p>

    </div>
    </div>

</div>

    
    
);

export default ProfileRight;