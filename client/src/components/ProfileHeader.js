import React from "react";
import API from "../utils/API";
import "../styles/profileHeader.css";
import ReactTooltip from "react-tooltip";
import FileUploader from "react-firebase-file-uploader";
import firebase from "../firebase";

class ProfileHeader extends React.Component {
  state = {
    image: "",
    isUploading: false,
    imageProgress: 0,
    imageURL: [],
    coverImage: "",
    coverImageURL: []
  };

  handleImageUploadStart = () => this.setState({ isUploading: true, imageProgress: 0 });

  handleImageProgress = imageProgress => this.setState({ imageProgress });

  handleUploadError = error => {
    this.setState({ isUploading: false });
    console.error(error);
  };

  handlePhotoUploadSuccess = filename => {
    this.setState({ coverImage: filename, imageProgress: 100, isUploading: false });
    console.log(this.state.coverImage);
    firebase
      .storage()
      .ref("coverImage")
      .child(filename)
      .getDownloadURL()
      .then(url => {
        console.log(url);
        this.setState({
          imageURL: [url],
          coverImageURL: [url]
        });
        console.log(this.state.imageURL);
      });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    console.log(this.state.imageURL, this.props.petID, this.state.coverImageURL);
    API.addImage(this.props.petID, {
      coverImage: this.state.imageURL
    })
      .then(response => {
        console.log(response.data._id);
        // API.addCoverImage(this.props.animal, { coverImage: this.state.imageURL })
        //   .then(response => {
        //     // this.setState({imageURL: [], text: '', image: '', progress: 0, redirectTo: '/home'});
        //     this.setState({ redirectTo: `/profile/${this.props.animal}` });
        //   })
        //   .catch(err => console.log(err));
      })
      .catch(err => console.log(err));
    console.log("imageURL: " + this.state.imageURL);
  };

  jumboStyle = {
    backgroundImage: "url(" + this.state.imageURL + ")"
  };

  render() {
    return (
      <div className="row">
        <div className="col-sm-12">
          <div className="jumbotron" style={this.jumboStyle}>
            {/* <!-- Button trigger modal --> */}
            <button type="button" className="btn btn-light" data-toggle="modal" data-target="#coverImageModal">
              <i
                className="fas fa-camera"
                data-tip="tooltip"
                data-for="uploadCoverPhoto"
                data-place="right"
                title="Update Cover Photo"
              />
            </button>

            {/* <!-- Modal --> */}
            <div
              className="modal fade"
              id="coverImageModal"
              tabindex="-1"
              role="dialog"
              aria-labelledby="coverImageModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  {/* <!-- start form --> */}
                  <form className="form">
                    <div className="form-group">
                      <div className="modal-header">
                        <h5 className="modal-title" id="coverImageModalLabel">
                          Update Cover Photo
                        </h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div className="modal-body">
                        <label className="btn btn-outline-info">
                          Select Photo
                          <FileUploader
                            hidden
                            accept="coverImage/*"
                            name="coverImage"
                            id="coverImage"
                            className="position-realative"
                            storageRef={firebase.storage().ref("coverImage")}
                            onUploadStart={this.handleImageUploadStart}
                            onUploadError={this.handleUploadError}
                            onUploadSuccess={this.handlePhotoUploadSuccess}
                            onProgress={this.handleImageProgress}
                          />
                        </label>
                      </div>
                    </div>
                    <div className="modal-footer">
                      <button type="submit" className="btn btn-primary" onClick={this.handleFormSubmit}>
                        Save changes
                      </button>
                      <button type="button" className="btn btn-secondary" data-dismiss="modal">
                        Close
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <h1 className="display-4">{this.props.name}</h1>
            <div>
              <label>
                <i
                  id="profileIcon"
                  className="fas fa-camera position-absolute"
                  data-tip="tooltip"
                  data-for="uploadProfilePhoto"
                  data-place="right"
                  title="Update Profile Photo"
                />
                <FileUploader
                  hidden
                  accept="image/*"
                  name="image"
                  id="profileImage"
                  className="img-thumbnail position-realative"
                  storageRef={firebase.storage().ref("images")}
                  onUploadStart={this.handleImageUploadStart}
                  onUploadError={this.handleUploadError}
                  onUploadSuccess={this.handlePhotoUploadSuccess}
                  onProgress={this.handleImageProgress}
                />
              </label>
            </div>
          </div>
        </div>
        <ReactTooltip id="uploadCoverPhoto">Update Cover Photo</ReactTooltip>
        <ReactTooltip id="uploadProfilePhoto">Update Profile Photo</ReactTooltip>
      </div>
    );
  }
}

export default ProfileHeader;
