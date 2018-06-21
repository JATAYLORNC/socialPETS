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
        isUploading: false,
        progress: 0,
        imageURL: [],
        redirectTo: null
    }

    handleUploadStart = () => this.setState({isUploading: true, progress: 0});

    handleProgress = (progress) => this.setState({progress});

    handleUploadError = (error) => {
        this.setState({isUploading: false});
        console.error(error);
    }

    handleUploadSuccess = (filename) => {
        this.setState({image: filename, progress: 100, isUploading: false});
        firebase.storage().ref('images').child(filename).getDownloadURL().then(url => this.setState({imageURL: [...this.state.imageURL, url]}));
        console.log(this.state.imageURL);
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
        imageURL: this.state.imageURL
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
                                            <span className="mr-2">Upload Image or Video</span>
                                            
                                            {this.state.isUploading &&
                                            <p>Progress: {this.state.progress}</p>
                                            }
                                            <FileUploader
                                                accept="image/*"
                                                name="image"
                                                id="getFile"
                                                multiple
                                                randomizeFilename
                                                storageRef={firebase.storage().ref('images')}
                                                onUploadStart={this.handleUploadStart}
                                                onUploadError={this.handleUploadError}
                                                onUploadSuccess={this.handleUploadSuccess}
                                                onProgress={this.handleProgress}
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