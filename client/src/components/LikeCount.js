import React from "react";

const LikeCount = (props) => (
  <div className="likeBar">
    <i className="far fa-thumbs-up likeCount">{props.Count}</i>
  </div>
);

export default LikeCount;