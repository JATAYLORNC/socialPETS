import React from "react";
import { Link } from "react-router-dom";
import "../styles/card.css";

const Card = (props) => (
  <div className="container-fluid Card mt-3 p-3">
    <div className="cardHeader pb-3">
      <img src="http://via.placeholder.com/40x40" className="img-responsive rounded-circle petImage" alt="Pet" />
      <span className="ml-3"><strong>Pet Name</strong></span>
    </div>
    <div className="cardBody">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
        incididunt ut labore et dolore magna aliqua. Gravida arcu ac tortor dignissim 
        convallis aenean et.
      </p>
    </div>
    <div className="responseBar row">
      <div className="col-sm-2"></div>
      <div className="col-sm-2">
        <i className="far fa-thumbs-up"></i>
        <span className="ml-1">Like</span>
      </div>
      <div className="col-sm-4"></div>
      <div className="col-sm-3">
        <i className="far fa-comment-alt"></i>
        <span className="ml-1">Comment</span>
      </div>
      <div className="col-sm-1"></div>
    </div>
    <div className="likeBar">
      <i className="far fa-thumbs-up"></i>
    </div>
    <div className="comments">
      <div className="row pb-3">
        <div className="col-sm-1">
          <img src="http://via.placeholder.com/33x33" className="img-responsive rounded-circle petImage" alt="Pet" />
        </div>
        <div className="col-sm-11 px-3">
          <div className="textBox">
            <p className="px-3 m-0"><strong>Pet Name </strong>Dolor magna eget est lorem ipsum dolor sit amet consectetur.</p>
          </div>
          <span className="ml-3">Like - Reply</span>
        </div>
      </div>
      <div className="row pb-3">
        <div className="col-sm-1">
          <img src="http://via.placeholder.com/33x33" className="img-responsive rounded-circle petImage" alt="Pet" />
        </div>
        <div className="col-sm-11 px-3">
          <div className="textBox">
            <p className="px-3 m-0"><strong>Pet Name </strong>Dolor magna eget est lorem ipsum dolor sit amet consectetur.</p>
          </div>
          <span className="ml-3">Like - Reply</span>
        </div>
      </div>
      <div className="row pb-3">
        <div className="col-sm-1">
          <img src="http://via.placeholder.com/33x33" className="img-responsive rounded-circle petImage" alt="Pet" />
        </div>
        <div className="col-sm-11 px-3">
          <div className="textBox">
            <p className="px-3 m-0"><strong>Pet Name </strong>Dolor magna eget est lorem ipsum dolor sit amet consectetur.</p>
          </div>
          <span className="ml-3">Like - Reply</span>
        </div>
      </div>
      <div className="row pb-3">
        <div className="col-sm-1">
          <img src="http://via.placeholder.com/33x33" className="img-responsive rounded-circle petImage" alt="Pet" />
        </div>
        <div className="col-sm-11 px-3">
          <div className="textBox">
            <p className="px-3 m-0"><strong>Pet Name </strong>Dolor magna eget est lorem ipsum dolor sit amet consectetur.</p>
          </div>
          <span className="ml-3">Like - Reply</span>
        </div>
      </div>
    </div>
  </div>
);

export default Card;