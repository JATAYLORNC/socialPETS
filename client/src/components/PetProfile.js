import React from "react";
import API from "../utils/API";
import "../styles/petprofile.css";
import Card from "./Card";
import Post from "./Post";
import CardList from "./CardList";
import ProfileLeft from "./ProfileLeft";
import ProfileRight from "./ProfileRight";
import ProfileHeader from "./ProfileHeader";

class PetProfile extends React.Component {
  state = {
    posts: [],
    userPetIds: []
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
        this.setState({
          posts: response.data.posts
        });
      })
      .catch(err => console.log(err));
  };

  follow = () => {
    API.follow(this.props.user_id, { friendsId: this.props._id })
      .then(response => {
        console.log(response.data);
      })
      .catch(err => console.log(err));
  };

  render() {
    console.log(!!this.state.userPetIds.includes(this.props._id));
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
