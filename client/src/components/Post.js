import React, { Component } from "react";
import '../styles/post.css';


class Post extends Component {

render() {

    return (

    			<div>
    				<div className="box">
    					
                        <form className="form">
                            <div className="form-group">
                                <label for="makePost">Make a Post</label>
                                    <div>
                                    <textarea className="text"  name="Text1" cols="40" rows="5" placeholder="What's on your mind?"></textarea>
                                    </div>
                            </div>
 
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </form>
    				</div>
    			</div>

    		)
		}

}

export default Post;