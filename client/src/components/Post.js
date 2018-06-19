import React, { Component } from "react";
import '../styles/post.css';


class Post extends Component {

handleSubmit = () => {
    console.log("handleSubmit fired");
// {/*upload videos or files*/}
// {/*axios POST route*/}

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
                                           
                                            <div className="file">Upload Image or Video
                                                <input type="file" id="getFile" />
                                            </div>

                                        </li>
                
                                    </ul>

                                    <div>
                                        <textarea className="text w-100"  name="Text1" placeholder="What's on your mind?"></textarea>
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