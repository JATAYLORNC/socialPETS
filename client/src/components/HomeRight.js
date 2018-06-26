import React from "react";
import { Link } from "react-router-dom";
import "../styles/homeRight.css";

const HomeRight = (props) => (
  <div className="row">
    <div className="col-sm-12 text-white" style={{background: '#5245FD', border: '10px solid black', width: '250px', margin: '40px', position: 'fixed'}}>
      <h4 className="blueBox text-white">Following:</h4>
          <h5></h5>
          {props.friends.map((friend) => (
            <Link className="text-white" key={friend._id} to={`/profile/${friend._id}`}>
              <p>{friend.name}</p>
            </Link>
          ))}
    </div>
  </div>
);

export default HomeRight;