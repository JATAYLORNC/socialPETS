import React from "react";
// import { Link } from "react-router-dom";
import "../styles/profileRight.css";
import catAngels from "../images/CatAngels.png";

const ProfileRight = (props) => (
  <div className="row" >
    <div className="col-sm-12" style={{width: '250px', marginLeft: '80px', position: 'fixed', top: '12%', bottom: '0', borderLeft: '1px solid lightgray'}}>
      <div className="row"style={{marginTop: "22%", paddingTop: "70px", paddingBottom: "20px"}}>
        <div className="col-sm-12">
          <h4>Cat Angels</h4>
          <p>Invite a Cat home today!</p>
          <img src={catAngels} className="image-responsive" style={{maxWidth: '220px'}} alt="Cat Angels Pet Shelter Logo" />
          <a href="http://www.catangelsnc.org/">
          Adopt a Cat
          </a>
        </div>
      </div>

      <div className="row" style={{marginTop: "12%"}}>
        <div className="col-sm-12">
          <h4>FaceBark</h4>
          <p>Need a Place to Play?</p>
          <h5><i class="fas fa-paw"></i>FaceBark<i class="fas fa-paw"></i></h5>
          <a href="https://facebark1.herokuapp.com/">
          Find a Dog Park Near You!
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default ProfileRight;