import React, { Component } from "react";
import '../styles/post.css';
import API from "../utils/API";
import firebase from "../firebase";
import FileUploader from 'react-firebase-file-uploader';


class Post extends Component {

    state = {
        text: "",
        avatar: '',
        isUploading: false,
        progress: 0,
        avatarURL: ''
    }

    handleUploadStart = () => this.setState({isUploading: true, progress: 0});

    handleProgress = (progress) => this.setState({progress});

    handleUploadError = (error) => {
        this.setState({isUploading: false});
        console.error(error);
    }

    handleUploadSuccess = (filename) => {
        this.setState({avatar: filename, progress: 100, isUploading: false});
        firebase.storage().ref('images').child(filename).getDownloadURL().then(url => this.setState({avatarURL: url}));
    };

    handleInputChange = event => {
        event.preventDefault();
        console.log("this.props.animal on post.js", this.props.animal);

        const { value } = event.target;
        this.setState({
        text: value
        });
        console.log(this.state.text);
    };

    handleFormSubmit = event => {
        event.preventDefault();
        console.log("this.state.text", this.state.text);
        console.log("this.props.animal on post.js", this.props.animal);

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
    

    render() {

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
                                            {/* {this.state.avatarURL &&
                                                <img src={this.state.avatarURL} />
                                            } */}
                                            <FileUploader
                                                accept="image/*"
                                                name="avatar"
                                                id="getFile"
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

                        <button type="submit" className="btn btn-primary" onClick={this.handleSubmit} >Submit</button>
                    </form>
                </div>
            </div>

        )
    }

}

export default Post;