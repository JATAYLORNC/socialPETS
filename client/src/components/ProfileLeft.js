import React from "react";
import { Link } from "react-router-dom";
import "../styles/profileLeft.css";

const ProfileLeft = (props) => (
  <div className="row">
    <div className="col-sm-12" style={{background: 'pink', border: '10px solid black', width: '250px', margin: '40px', position: 'fixed'}}>
      <h4 className="pinkBox">{props.name}</h4>
        <p>Breed: {props.breed}</p>
        <p>Age: {props.age}</p>
        <p>Gender: {props.gender}</p>
        <p>FavoriteToys: </p>
        <p>Favorite Toys: {props.toys}</p>
    </div>
  </div>
);

export default ProfileLeft;
