import React, { Component } from "react";
import '../styles/post.css';
import API from "../utils/API";
import firebase from "../firebase";
import FileUploader from 'react-firebase-file-uploader';
import { Redirect } from 'react-router-dom';


class Post extends Component {

    state = {
        text: "",
        image: '',
        video: '',
        isUploading: false,
        imageProgress: 0,
        videoProgress: 0,
        imageURL: [],
        videoURL: [],
        redirectTo: null
    }

    handleImageUploadStart = () => this.setState({isUploading: true, imageProgress: 0});

    handleVideoUploadStart = () => this.setState({isUploading: true, videoProgress: 0});

    handleImageProgress = (imageProgress) => this.setState({imageProgress});

    handleVideoProgress = (videoProgress) => this.setState({videoProgress});

    handleUploadError = (error) => {
        this.setState({isUploading: false});
        console.error(error);
    }

    handlePhotoUploadSuccess = (filename) => {
        this.setState({image: filename, imageProgress: 100, isUploading: false});
        firebase.storage().ref('images').child(filename).getDownloadURL().then(url => this.setState({imageURL: [...this.state.imageURL, url]}));
        console.log(this.state.imageURL);
    };

    handleVideoUploadSuccess = (filename) => {
        this.setState({video: filename, progress: 100, isUploading: false});
        firebase.storage().ref('video').child(filename).getDownloadURL().then(url => this.setState({videoURL: [...this.state.videoURL, url]}));
        console.log(this.state.videoURL);
    };

    handleInputChange = event => {
        event.preventDefault();
        // const { name, value } = event.target;
        const { value } = event.target;
        this.setState({
        text: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        API.addPost({
        posts: this.state.text,
        imageURL: this.state.imageURL,
        videoURL: this.state.videoURL
        })
        .then(response => {
            console.log(response.data._id);
            API.addPetPost(this.props.animal, {posts: response.data._id})
            .then(response => {
                // this.setState({imageURL: [], text: '', image: '', progress: 0, redirectTo: '/home'});
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
                <div className="box">
                    
                    <form className="form">
                    <h1 className="pb-2" >Make a Post</h1>
                        <div className="form-group">
                            
                            
                                <ul className="nav">
                                    <li className="nav-item" id="upload" >
                                        <div className="file">
                                            <span className="mr-2">Add Photo</span>
                                            
                                            {this.state.isUploading &&
                                            <p>Progress: {this.state.imageProgress}</p>
                                            }
                                            <FileUploader
                                                accept="image/*"
                                                name="image"
                                                id="getPhoto"
                                                multiple
                                                randomizeFilename
                                                storageRef={firebase.storage().ref('images')}
                                                onUploadStart={this.handleImageUploadStart}
                                                onUploadError={this.handleUploadError}
                                                onUploadSuccess={this.handlePhotoUploadSuccess}
                                                onProgress={this.handleImageProgress}
                                            />
                                        </div>
                                    </li>
                                    
                                    <li className="nav-item" id="upload" >
                                        <div className="file">
                                            <span className="mr-2">Add Video</span>
                                            
                                            {this.state.isUploading &&
                                            <p>Progress: {this.state.videoProgress}</p>
                                            }
                                            <FileUploader
                                                accept="video/*"
                                                name="video"
                                                id="getVideo"
                                                multiple
                                                randomizeFilename
                                                storageRef={firebase.storage().ref('video')}
                                                onUploadStart={this.handleVideoUploadStart}
                                                onUploadError={this.handleUploadError}
                                                onUploadSuccess={this.handleVideoUploadSuccess}
                                                onProgress={this.handleVideoProgress}
                                            />
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

        );
    }

}

export default Post;