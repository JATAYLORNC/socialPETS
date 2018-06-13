import React from "react";
import axios from "axios";
import "../styles/home.css";
// import Card from "./Card";

class Home extends React.Component {

	// state= {
	// 	posts: ""
	// }

	getFeedPosts = () => {
		axios.get('/user/post').then(response => {
			console.log(response.data)
			this.setState({
				posts: response.data
			});
		})
		.catch(err => console.log(err));
	}

	render () {
		return (

			<div className="Home">
				<div className="row">
					<div className="col-sm-3"></div>
					<div className="col-sm-6 d-flex justify-content-center" id="cardBlock">
						{/* {this.state.posts.map((post) => <Card id={posts._id} user={posts.name} text={posts.text} src={posts.src} comments={posts.comments} />)} */}
						<h1>Hello!</h1>
					</div>
					<div className="col-sm-3"></div>
				</div>
			</div>
		);
	}
} 

export default Home