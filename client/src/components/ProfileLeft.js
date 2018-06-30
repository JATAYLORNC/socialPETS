import React from "react";
import { Link } from "react-router-dom";
import "../styles/profileLeft.css";

const ProfileLeft = (props) => (
 <div>
  <div className="row">
    <div className="col-sm-12" id="profileBox" style={{ color: ' #0080ff', background: 'white', width: '250px', border: '2px solid green', borderRadius: '16px', marginLeft: '40px', marginTop: '15px',position: 'fixed'}}>
      <h1 className="pinkbox">{props.name}</h1>
        <p><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Paw_%28Animal_Rights_symbol%29.png/807px-Paw_%28Animal_Rights_symbol%29.png" height="25" width="25"/>&nbsp;<b className="profileID">Breed:</b> {props.breed}</p>
        <p><img src="https://d30y9cdsu7xlg0.cloudfront.net/png/2979-200.png" height="20" width="20"/>&nbsp;<b className="profileID">Age:</b > {props.age}</p>
        <p><img src="https://cdn4.iconfinder.com/data/icons/celebration-vol-2/48/71-512.png" height="20" width="20"/>&nbsp;<b className="profileID">Gender:</b> {props.gender}</p>

        <p><img src="https://png.icons8.com/metro/1600/hearts.png" height="20" width="20"/>&nbsp;<b className="profileID">Favorite Toys:</b> {props.toys}</p>
       
    </div>
  </div>

<div className="row"> 
<div className="col-sm-12" id="leftLogo">
   <img src="https://image.ibb.co/haHc7J/socialpets.png" height="225" width="250" />
  
</div> 
</div>
</div>
 
);

export default ProfileLeft;
