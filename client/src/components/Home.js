import React from "react";
import API from "../utils/API";
import "../styles/home.css";
// import Card from "./Card";
import Post from "./Post";
import Card from "./Card";
import CardList from "./CardList";

class Home extends React.Component {

	state= {
		posts: []
	}

	componentDidMount = () => {
		this.GetPetPosts();
	}	
	
	GetPetPosts = () => {
		API.getPetPosts(this.props.pet).then(response => {
			this.setState({
				posts: response.data.posts
			});
		})
		.catch(err => console.log(err));
	}
	

	render () {
		
		return (

			<div className="Home">
				<div className="row">
					<div className="col-sm-3"></div>
					<div className="col-sm-6" id="cardBlock">
						<div className="row d-flex justify-content-center pt-5 pb-5">
							<div className="col-sm-12">
								<Post animal = {this.props.pet} />
							</div>
						</div>
						<div className="row d-flex justify-content-center pb-5">
							<div className="col-sm-12">
								{this.state.posts.length ? (
									<CardList>
										{this.state.posts.map(post => (
											<Card key={post._id.toString()}
												name={this.props.name}
												posts={post.posts}
												imageURL={post.imageURL}
											/>
										))}
									</CardList>
								) : (
									<h3>No Results to Display</h3>
								)}
							</div>
						</div>
					</div>
					<div className="col-sm-3"></div>
				</div>
			</div>
		);
	}
} 

export default Home