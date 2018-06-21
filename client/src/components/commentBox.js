import React from "react";

const commentBox = (props) => (
  <div>
    <div className="textBox">
    <p className="px-3 m-0"><strong>{props.pet_name}</strong>{props.comment}</p>
    </div>
    <span className="ml-3">Like - Reply</span>
  </div>
);

export default commentBox; 