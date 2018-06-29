import React from "react";
import { Link } from "react-router-dom";
import "../styles/homeLeft.css";
import westminster from "../images/westminster.png";

const HomeLeft = (props) => (
  <div className="row">
    
    <div className="col-sm-12" style={{width: '250px', marginLeft: '80px', position: 'fixed', top: '25%', bottom: '0', borderLeft: '1px solid lightgray'}}>
      <h4>Who will be this year's 'Best in Show'</h4>
        
          <img src={westminster} className="image-responsive" style={{maxWidth: '220px'}} alt="Westminster" />
            <a href="https://www.westminsterkennelclub.org/">
              Register Now!
            </a>
    </div>
    
    
  </div>
);

export default HomeLeft;