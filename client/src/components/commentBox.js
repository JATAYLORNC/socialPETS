import React from "react";

const commentBox = (props) => (
  <div className="pt-3">
    <div className="textBox">
      <p className="px-3 m-0">
      <span className="pr-2"><strong>{props.pet_name}</strong></span>{props.comment}</p>
    </div>
      <span className="ml-3 pt-1">Like - Reply</span>
  </div>
);

export default commentBox; 