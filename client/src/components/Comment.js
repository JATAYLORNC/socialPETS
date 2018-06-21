import React, { Component } from "react";
import '../styles/comment.css';
import CommentBox from "./commentBox";
import CommentList from "./CommentList";
import API from "../utils/API";
import { Redirect } from 'react-router-dom';



class Comment extends Component {

  state = {
      Comments: "",
      post_comments: [],
      redirectTo: null
  }

  componentDidMount = () => {
    this.GetComments();
  }	
  
  GetComments = () => {
    API.getPostComments(this.props.post_id).then(response => {
      console.log(response.data);
      this.setState({
        post_comments: response.data.comment
      });
    })
    .catch(err => console.log(err));
  }

  handleInputChange = event => {
      event.preventDefault();

      if(event.keyCode === 13){
        this.onCommentSubmit();
      }

      // const { name, value } = event.target;
      const { value } = event.target;
      this.setState({
      Comments: value
      });
  }

  onCommentSubmit = event => {
      API.addComment({
        pet_name: this.props.name,
        pet_id: this.props.pet_id,
        Comments: this.state.Comments
      })
      .then(response => {
          console.log(this.props.post_id);
          console.log(response.data._id);
          API.addPostComment(this.props.post_id, {comment: response.data._id})
          .then(response => {
            console.log(response.data);
            this.setState({
              redirectTo: '/home/'
            });
              
          }).catch(err => console.log(err));
      }).catch(err => console.log(err));
  }


  render() {

      if (this.state.redirectTo) {
  	return <Redirect to={{ pathname: this.state.redirectTo }} />
  }

    return (

      <div className="w-100 ml-2 mr-2">
          <div className="row"> 
          <div className="col-sm-12">
            <form className="commentForm">
            
                <div>
                    <textarea rows="1" className="text w-100" onKeyUp={this.handleInputChange} name="Comments" placeholder="Write a comment..."></textarea>
                </div>
            
            </form>
          </div>
        </div>

        <div className="row"> 
          <div className="col-sm-12">
            <div className="row pb-3">
              <div className="col-sm-1">
                <img src="http://via.placeholder.com/33x33" className="img-responsive rounded-circle petImage" alt="Pet" />
              </div>
              <div className="col-sm-11 px-3">
                <CommentList>
                  {this.state.post_comments.map(comment => (
                    <CommentBox key={comment._id.toString()}
                      pet_name={comment.pet_name}
                      pet_id={comment.pet_id}
                      comment={comment.Comments}
                      comment_id={comment._id}
                    />
                ))}
                </CommentList>                    
              </div>
            </div>
          </div>
        </div>

      </div>

    );
  }

}

export default Comment;