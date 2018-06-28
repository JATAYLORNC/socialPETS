import React from "react";
import API from "../utils/API";
import "../styles/petprofile.css";
import Card from "./Card";
import Post from "./Post";
import CardList from "./CardList";
import ProfileLeft from "./ProfileLeft";
import ProfileRight from "./ProfileRight";
import ProfileHeader from "./ProfileHeader";
import FollowButton from "./FollowButton";


class PetProfile extends React.Component {
  state = {
    posts: [],
    userPetIds: [],
  };

  getPetInfo = () => {
    console.log("this.props line 17 of PetProfile", this.props);
  };

  componentDidMount = () => {
    this.GetPetPosts();
    this.setUserPetIds();
    
  };

  setUserPetIds = () => {
    console.log(this.props.userPets);
    console.log(this.props.name);
    let userPetIds = this.props.userPets.map(userPet => userPet._id);

    this.setState({
      userPetIds: userPetIds
    });
  };

  GetPetPosts = () => {
    API.getPetPosts(this.props._id)
      .then(response => {
        console.log(response.data);
        this.setState({
          posts: response.data.posts
        });
        console.log(this.state.posts, this.state.posts[0].liked);
      })
      .catch(err => console.log(err));
  };

  render() {
    if (this.state.userPetIds.includes(this.props._id)) {
      return (
        <div className="PetProfile">
          <div className="row">
            {/* <!-- left column --> */}
            <div className="col-sm-3">
              {/* <!-- pet info --> */}
              <ProfileLeft
                name={this.props.name}
                breed={this.props.breed}
                age={this.props.age}
                gender={this.props.gender}
                toys={this.props.toys}
              />
            </div>

            {/* <!-- Main Content column --> */}
            <div className="col-sm-6">
              {/* <!-- jumbotron for profile header --> */}
              <ProfileHeader name={this.props.name} petID={this.props._id} />

              <div className="row">
                <div className="col-sm-12">
                  <Post animal={this.props._id} name={this.props.name} />
                </div>
              </div>
              {/* <!-- POST component --> */}
              <div className="row d-flex justify-content-center pb-5">
                <div className="col-sm-12">
                  {this.state.posts ? (
                    <CardList>
                      {this.state.posts.map((post) => (
                        <Card
                          key={post._id.toString()}
                          name={this.props.name}
                          pet_id={this.props._id}
                          posts={post.posts}
                          imageURL={post.imageURL}
                          videoURL={post.videoURL}
                          post_id={post._id}
                          likes={post.likes}
                          liked={post.liked}
                          user_id={this.props.user_id}
                        />
                      ))}
                    </CardList>
                  ) : (
                    <h3>No Results to Display</h3>
                  )}
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <ProfileRight />
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="PetProfile">
          <div className="row">
            {/* <!-- left column --> */}
            <div className="col-sm-3">
              {/* <!-- pet info --> */}
              <ProfileLeft
                name={this.props.name}
                breed={this.props.breed}
                age={this.props.age}
                gender={this.props.gender}
                toys={this.props.toys}
              />
            </div>
            {/* <!-- Main Content column --> */}
            <div className="col-sm-6">
              {/* <!-- jumbotron for profile header --> */}

              <ProfileHeader />

              <div className="row">
                <div className="col-sm-12">
                  <div className="jumbotron">
                    <h1 className="display-4">{this.props.name}</h1>
                    <img className="img-thumbnail" type="file" src="http://via.placeholder.com/150x150" alt="PetProfile Name" />
                    <div className= "d-flex justify-content-end mr5">

                      <FollowButton friends={this.props.friends} _id={this.props._id} user_id={this.props.user_id} />

                    </div>
                  </div>
                </div>
              </div>

              <div className="row d-flex justify-content-center pb-5">
                {/* <!-- POST component --> */}
                <div className="col-sm-12">
                  {this.state.posts.length ? (
                    <CardList>
                      {this.state.posts.map(post => (
                        <Card
                          key={post._id.toString()}
                          name={this.props.name}
                          pet_id={this.props._id}
                          posts={post.posts}
                          imageURL={post.imageURL}
                          videoURL={post.videoURL}
                          post_id={post._id}
                          likes={post.likes}
                          liked={post.liked}
                          user_id={this.props.user_id}
                        />
                      ))}
                    </CardList>
                  ) : (
                    <h3>No Results to Display</h3>
                  )}
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <ProfileRight />
            </div>
          </div>
        </div>
      );
    }
  }
}

export default PetProfile;
