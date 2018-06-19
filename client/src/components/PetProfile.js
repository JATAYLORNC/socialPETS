import React from "react";
import "../styles/petprofile.css";
import Card from "./Card";
import Post from "./Post";

class PetProfile extends React.Component {
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
                <Post />
              </div>
            </div>
          </div>
          <div className="col-sm-3" />
        </div>

        {/* <!-- social activity CARDS --> */}
        <div className="row">
        <div className="col-sm-3" />
          <div className="col-sm-6">
            <div className="row">
              <div className="col-sm-12"><Card /></div>
            </div>
          </div>
          <div className="col-sm-3" />
        </div>

        {/* <!-- right column --> */}
        <div className="col-md-3" />
      </div>
    );
  }
}

export default PetProfile;
