import React from "react";
import "../styles/card.css";
import Comment from "./Comment";

const Card = (props) => (

      <div className="container-fluid Card mt-3 p-3">
        <div className="cardHeader pb-3">
          <img src="http://via.placeholder.com/40x40" className="img-responsive rounded-circle petImage" alt="Pet" />
          <span className="ml-3"><strong>{props.name}</strong></span>
        </div>
        <div className="cardBody">
          <img className="image-responsive cardImage" src={props.imageURL[0]} alt={props.name} />
          <p>{props.posts}
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
          <Comment post_id={props.post_id} name={props.name} />
        </div>
      </div>
    );

export default Card;