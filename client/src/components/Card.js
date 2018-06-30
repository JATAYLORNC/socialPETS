import React from "react";
import { Link } from "react-router-dom";
import "../styles/card.css";
import Comment from "./Comment";
import API from "../utils/API";
import LikeCount from "./LikeCount";

class Card extends React.Component {

  state= {
    likeCount: 0,
    liked: [],
    userLiked: false,
    ismyPet: false
  }

  componentDidMount = () => {
    console.log(this.props);
    if(this.props.myPets) {
      let myPets=this.props.myPets.map((pet) => {
        return pet._id
      });

      if(myPets.includes(this.props.pet_id)) {
        let ismyPet = true;
        this.setState({
          ismyPet: true
        });
      }
    } 

    if(this.props.liked) {

      if(this.props.liked.includes(this.props.user_id)) {
        console.log(this.props.likes);
        this.setState({
          likeCount: this.props.likes,
          liked: this.props.liked,
          userLiked: true
        });
      } else {
        this.setState({
          likeCount: this.props.likes,
          liked: this.props.liked
        });
      }
    }
	}	

  incrementLikeCount = () => {
    if(this.state.ismyPet === false) {
      console.log(this.state.liked, this.props.user_id);
      if(!this.state.userLiked) {
        let likeCount=this.state.likeCount + 1;
        let liked=this.state.liked
        liked.push(this.props.user_id);
        this.setState({liked: liked});
        console.log(liked);
        API.updateLikes(this.props.post_id, {
          likes: likeCount,
          liked: this.state.liked  
        })
        .then(response => {
            console.log(response.data);
            this.setState({
              likeCount: response.data.likes,
              liked: response.data.liked,
              userLiked: true
            })
        }).catch(err => console.log(err));
      }
    }
  }
  
  render () {

    console.log(this.props.pet_id);
		
		return (

      <div className="container-fluid Card mt-3 p-3">
        <div className="cardHeader pb-3">
          <img src={this.props.profileImage} className="img-responsive rounded-circle petImage" alt="Pet" />
          <Link className="ml-3" to={`/profile/${this.props.pet_id}`} >
            <span className="ml-3"><strong>{this.props.name}</strong></span>
          </Link>
        </div>
        <div className="cardBody">
          <div>
          {this.props.imageURL.map(image => (
              <img key={image} className="image-responsive cardImage mt-3" src={image} alt={this.props.name} />
            ))}            
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
          <p className="mt-3">{this.props.posts}
          </p>
        </div>
        <div className="responseBar row">
          <div className="col-sm-2"></div>
          <div className="col-sm-2">
            {this.state.userLiked ? 
            <div>
              <i className="far fa-thumbs-up btn like" style={{color: 'blue'}} onClick={(e) => this.incrementLikeCount()}></i>
              <span className="ml-1">Like</span> 
            </div>
            : 
            <div>
              <i className="far fa-thumbs-up btn like" onClick={(e) => this.incrementLikeCount(this.props.post_id, this.props.likes)}></i>
              <span className="ml-1">Like</span>
            </div>}
          </div>
          <div className="col-sm-4"></div>
          <div className="col-sm-3">
            <i className="far fa-comment-alt btn comment"></i>
            <span className="ml-1">Comment</span>
          </div>
          <div className="col-sm-1"></div>
        </div>
        <LikeCount Count={this.state.likeCount} />
        <div className="comments">
           <Comment post_id={this.props.post_id} name={this.props.name} />
        </div>
      </div>
    );
  }
}

export default Card;