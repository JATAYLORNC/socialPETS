import React from "react";
import API from "../utils/API";
import "../styles/petprofile.css";
import Card from "./Card";
import Post from "./Post";
import CardList from "./CardList";

class PetProfile extends React.Component {

  state= {
    posts: []
  }

  componentDidMount = () => {
		this.GetPetPosts();
	}	
	
	GetPetPosts = () => {
		API.getPetPosts(this.props._id).then(response => {
			this.setState({
				posts: response.data.posts
			});
		})
		.catch(err => console.log(err));
  }
  
  addProfileImages = () => {
    // needs code to add the main profile image and the background profile image.
  };

  getProfileImages = () => {
    // needs logic to retrive the images from the database.
  };

  render() {
    return (
      <div className="PetProfile">
        <div className="row">
          {/* <!-- left column --> */}
          <div className="col-sm-3" />

          {/* <!-- Main Content column --> */}
          <div className="col-sm-6">
            {/* <!-- jumbotron for profile header --> */}
            <div className="row">
              <div className="col-sm-12">
                <div className="jumbotron">
                  <h1 className="display-4">{this.props.name}</h1>
                  <img className="img-thumbnail" src="http://via.placeholder.com/150x150" alt="PetProfile Name" />
                  <button className="btn btn-secondary btn-sm FriendRequestAdd" type="button"><i className="fas fa-user-friends mr-1"></i>Add Friend</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-3" />
        </div>
          {/* <!-- POST component --> */}
        <div className="row">
          <div className="col-sm-3" />
          <div className="col-sm-6">
            <div className="row w-100">
              <div className="col-sm-12">
                <Post animal = {this.props._id}/>
              </div>
            </div>
            <div className="row d-flex justify-content-center pb-5">
							<div className="col-sm-12">



								{this.state.posts.length ? (
									<CardList>
										{this.state.posts.map(post => (
											<Card key={post._id.toString()}
												name={this.props.name}
												pet_id={this.props._id}
												posts={post.posts}
                        imageURL={post.imageURL}
                        videoURL={post.videoURL}
                        post_id={post._id}
                        likes={post.likes}
											/>
										))}
									</CardList>
								) : (
									<h3>No Results to Display</h3>
								)}
							</div>
						</div>
          </div>
          <div className="col-sm-3" />
        </div>
      </div>
    );
  }
}

export default PetProfile;
