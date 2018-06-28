import React from "react";
import { Link } from "react-router-dom";
import "../styles/profileRight.css";
// import CatAngelsPhoto From "../images/CatAngels.png";

const ProfileRight = (props) => (
  <div className="row">
    <div className="col-sm-12" style={{width: '250px', marginLeft: '80px', position: 'fixed', top: '25%', bottom: '0', borderLeft: '1px solid lightgray'}}>
    <h6>Cat Angels Pet Adoptions</h6>
    <p>Invite a Cat Friend to your home today!</p>
    {/* <img src={CatAngelsPhoto} alt="Cat Angels Pet Shelter Logo" /> */}
    <a href="http://www.catangelsnc.org/">
      Cat Angels Pet Adoptions
    </a>
    </div>
  </div>
);

export default ProfileRight;