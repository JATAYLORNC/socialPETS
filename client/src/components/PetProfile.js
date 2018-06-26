import React from "react";
import API from "../utils/API";
import "../styles/petprofile.css";
import Card from "./Card";
import Post from "./Post";
import CardList from "./CardList";

class PetProfile extends React.Component {

  state= {
    posts: [],
    userPetIds: []
    

  }

  getPetInfo = () => {
    console.log("this.props line 17 of PetProfile", this.props);
  }

  componentDidMount = () => {
    this.GetPetPosts();
    this.setUserPetIds();
  }	
  
  setUserPetIds = () => {
    console.log(this.props.userPets);
    console.log(this.props.name);
    let userPetIds = this.props.userPets.map(userPet => userPet._id);
      
    this.setState({
      userPetIds: userPetIds
    });
  }
	
	GetPetPosts = () => {
    console.log("Hello!")
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

    if(this.state.userPetIds.includes(this.props._id)) {

      return (
        <div className="PetProfile">
          <div className="row">
            {/* <!-- left column --> */}
            <div className="col-sm-3">
                
            </div>
            

            {/* <!-- Main Content column --> */}
            <div className="col-sm-6">
              {/* <!-- jumbotron for profile header --> */}
              
              <div className="row">
                <div className="col-sm-12">
                  <div className="jumbotron">
                    <h1 className="display-4">{this.props.name}</h1>
                    <img className="img-thumbnail" src="http://via.placeholder.com/150x150" alt="PetProfile Name" />

                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-3" />
          </div>
            {/* <!-- POST component --> */}
          <div className="row">
            <div className="col-sm-3" id="petProfileLeft">
                    
              
            </div>
            <div className="col-sm-6">
              <div className="row w-100">
                <div className="col-sm-12">
                  <Post animal={this.props._id} name={this.props.name} />
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
            <div className="col-sm-3" style={{background: 'pink', border: '10px solid black', width: '250px', margin: '40px', position: 'fixed'}}>
                <h4 className="pinkBox">{this.props.name}</h4>
                    <p>Breed: {this.props.breed}</p>
                    <p>Age: {this.props.age}</p>
                    {/* <p>Gender: {this.props.gender}</p> */}
                    <p>Favorite Toys: {this.props.toys}</p>
            </div>
          </div>
        </div>
      );
    } else {

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


                    <img className="img-thumbnail" type="file" src="http://via.placeholder.com/150x150" alt="PetProfile Name" />
                    
                   

     
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
            <div className="col-sm-3" style={{background: 'pink', width: '200px', height: '300px', position: 'fixed'}}>
                <h1>{this.props.name}</h1>
                    <h5>Breed: {this.props.breed}</h5>
                    <h5>Age: {this.props.age}</h5>
                    <h5>Gender: {this.props.gender}</h5>
                    <h5>Favorite Toys: {this.props.toys}</h5>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default PetProfile;
