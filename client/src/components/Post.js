import React, { Component } from "react";
import '../styles/post.css';


class Post extends Component {

handleSubmit = () => {
    console.log("handleSubmit fired");
{/*upload videos or files*/}
{/*axios POST route*/}

}

render() {

    return (

    			<div>
    				<div className="box">
    					
                        <form className="form">
                            <div className="form-group">
                                <label htmlFor="makePost">Make a Post</label>
                                   
                                    <ul className="nav">
                                        <li className="nav-item" id="upload" >
                                           
                                            <div className="file">Upload Image or Video
                                                <input type="file" id="getFile" />
                                            </div>

                                        </li>
                
                                    </ul>

                                    <div>
                                        <textarea className="text"  name="Text1" cols="40" rows="5" placeholder="What's on your mind?"></textarea>
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