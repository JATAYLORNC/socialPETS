import React from "react";
import { Link } from "react-router-dom";
import "../styles/homeRight.css";

const HomeRight = (props) => (

  <div className="row">
    <div className="col-sm-12" style={{width: '250px', marginLeft: '80px', position: 'fixed', top: '17%', bottom: '0', borderLeft: '1px solid lightgray'}}>
      <div className="pl-3">
        <h5 style={{marginTop: '25%', paddingTop: '70px'}}>Following:</h5>       
            
        {props.friends.map((friend) => {
          return (
            <div>
              <p><strong>{`${friend.User[0].firstname} ${friend.User[0].lastname}`}</strong></p>
              <Link className="text-dark" key={friend._id} to={`/profile/${friend._id}`} >
                <img src="http://via.placeholder.com/40x40" className="img-responsive rounded-circle petImage mr-3" alt="Pet" />
                <span>{friend.name}</span>
                <br /><br />
              </Link>
            </div>
          )
        })}
      </div> 
    </div>
  </div>
);

export default HomeRight;