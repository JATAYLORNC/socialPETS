import React from "react";
import { Link } from "react-router-dom";
// import "../styles/profileLeft.css";

const Contributors = (props) => (

  
  <div className="row">
    
    {/* box about socialPETS contributors */}
    <div className="col-sm-12" style={{background: 'yellow', border: '10px solid black', width: '250px', margin: '40px', position: 'fixed'}}>
      <h4 className="contributorBox">socialPETS contributors</h4>
        <p>Jeff Taylor</p>
        <p>Stephanie Lawrie</p>
        <p>Colin Williams</p>
        <p>Gabe Maughan</p>
    </div>

  </div>
);

export default Contributors;