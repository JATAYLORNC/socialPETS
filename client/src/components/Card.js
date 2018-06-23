import React from "react";
import "../styles/card.css";
import Comment from "./Comment";
import API from "../utils/API";

class Card extends React.Component {

  state= {
    likeCount: 0,
    liked: false
  }

  componentDidMount = () => {
		this.setState({
      likeCount: this.props.likes
    });
	}	

  incrementLikeCount = (post_id, likes) => {
    if(this.state.liked === false) {
      let likeCount=likes + 1;
      this.setState({
        liked: true
      });
      API.updateLikes(post_id, {
        likes: likeCount
      })
      .then(response => {
          console.log(response.data);
          this.setState({
            likeCount: response.data.likes
          })
      }).catch(err => console.log(err));
  }
  
  render () {
		
		return (

      <div className="container-fluid Card mt-3 p-3">
        <div className="cardHeader pb-3">
          <img src="http://via.placeholder.com/40x40" className="img-responsive rounded-circle petImage" alt="Pet" />
          <span className="ml-3"><strong>{this.props.name}</strong></span>
        </div>
        <div className="cardBody">
          <div>
            <img className="image-responsive cardImage" src={this.props.imageURL[0]} alt={this.props.name} />
          </div>
          
            {this.props.videoURL[0] ? 
              <div align="center" className="embed-responsive embed-responsive-16by9">
                <video className="embed-responsive-item" controls>
                  <source src={this.props.videoURL[0]} type="video/mp4" />
                  <source src={this.props.videoURL[0]} type="video/ogg" />
                  <source src={this.props.videoURL[0]} type="video/mov" />
                  Your browser does not support HTML5 video.
                </video>
              </div>
            : ''}
          <p>{this.props.posts}
          </p>
        </div>
        <div className="responseBar row">
          <div className="col-sm-2"></div>
          <div className="col-sm-2">
            <i className="far fa-thumbs-up btn like" onClick={(e) => this.incrementLikeCount(this.props.post_id, this.props.likes)}></i>
            <span className="ml-1">Like</span>
          </div>
          <div className="col-sm-4"></div>
          <div className="col-sm-3">
            <i className="far fa-comment-alt btn comment"></i>
            <span className="ml-1">Comment</span>
          </div>
          <div className="col-sm-1"></div>
        </div>
        <div className="likeBar">
          <i className="far fa-thumbs-up likeCount">{this.state.likeCount}</i>
        </div>
        <div className="comments">
          <Comment post_id={this.props.post_id} name={this.props.name} />
        </div>
      </div>
    );
  }
}

export default Card;