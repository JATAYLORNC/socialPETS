import React, { Component } from "react";
import '../styles/post.css';
import API from "../utils/API";
// import User from "../../../db/models/User";
import storage from "../firebase";


class Post extends Component {

    state = {
        text: "",
        file: null
    }

    

handleInputChange = event => {
    event.preventDefault();
    console.log("this.props.animal on post.js", this.props.animal);

    const { value } = event.target;
    this.setState({
    text: value
    });
    console.log(this.state.text);



};

handleFile = event => {
    event.preventDefault();

    console.log("handleFile fired");
    this.setState({file: event.target.files[0]});


    console.log("file name: ", this.state.file);

};

handleFormSubmit = event => {
    event.preventDefault();
    console.log("this.state.text", this.state.text);
    console.log("this.props.animal on post.js", this.props.animal);
    
   
    // console.log("this.props.email", this.props.email);

    API.addPost({
      text: this.state.text,
      
      
    })
    .then(response => {
      console.log(this);
      //this.props._id is the pet id , {}
      API.addPost({pet: this.props.animal}, {post: this.state.text})
      .then(response => {
        this.setState({
          redirectTo: '/home'
        });
      }).catch(err => console.log(err));
    }).catch(err => console.log(err));
  }
    


    //take form data from state, compile it into an object, create a route /API/post (axios in API folder)

render() {

    return (

    			<div className="w-100 ml-2 mr-2">
    				<div className="box">
    					
                        <form className="form">
                        <h1 className="pb-2" >Make a Post</h1>
                            <div className="form-group">
                                
                                   
                                    <ul className="nav">
                                        <li className="nav-item" id="upload" >
                                           
                                            <div className="file">Upload Image or Video
                                                <input type="file" id="getFile" />
                                            </div>

                                        </li>
                
                                    </ul>

                                    <div>
                                        <textarea className="text w-100"  onChange={this.handleInputChange} name="Text1" placeholder="What's on your mind?"></textarea>
                                    </div>
                                    
                            </div>
 
                            <button type="submit" className="btn btn-primary" onClick={this.handleFormSubmit} >Submit</button>
                        </form>
    				</div>
    			</div>

    		)
		}

}

export default Post;