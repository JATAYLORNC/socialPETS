import React from "react";
import API from "../utils/API";
import "../styles/home.css";
import Post from "./Post";
import Card from "./Card";
import CardList from "./CardList";
import HomeRight from "./HomeRight";

class Home extends React.Component {

	state= {
		posts: [],
	}

	componentDidMount = () => {
		this.GetPosts();
	}	
	
	GetPosts = () => {
		if(this.props.myPets) {
			let PetIds=this.props.myPets.map((pet) => {
				return pet._id
			});
			console.log(PetIds);
			API.getMyPosts({Pets: PetIds}).then(response => {
				console.log(response.data);
				this.getFriendPosts();
				this.setState({
					posts: response.data,
				});
			})
			.catch(err => console.log(err));
		}	
	}

	getFriendPosts = () => {
		if(this.props.friendsId) {
			console.log(this.props.friendsId);
			API.getFriendPosts({Pets: this.props.friendsId}).then(response => {
				console.log(response.data);
				let posts= [...this.state.posts, ...response.data];
				console.log(posts);
				this.setState({
					posts: posts
				});
			})
			.catch(err => console.log(err));
		}
	}

	render () {
		
		
		return (

			<div className="Home">
				<div className="row">
					<div className="col-sm-3">
						<HomeRight user_firstname={this.props.user_firstname} user_lastname={this.props.user_lastname} friends={this.props.friendsId} />
					</div>
					<div className="col-sm-6" id="cardBlock">
						<div className="row d-flex justify-content-center pt-5 pb-5">
							<div className="col-sm-12">
								<Post animal = {this.props.pet} name={this.props.name} />
							</div>
						</div>
						<div className="row d-flex justify-content-center pb-5">
							<div className="col-sm-12">
								{this.state.posts.length ? (
									<CardList>
										{this.state.posts.map(post => (
											<Card key={post._id.toString()}
												name={post.petName}
												pet_id={post.pet_id}
												posts={post.posts}
												imageURL={post.imageURL}
												videoURL={post.videoURL}
												post_id={post._id}
												likes={post.likes}
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