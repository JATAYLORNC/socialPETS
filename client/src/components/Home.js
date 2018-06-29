import React from "react";
import API from "../utils/API";
import "../styles/home.css";
import Post from "./Post";
import Card from "./Card";
import CardList from "./CardList";
import HomeRight from "./HomeRight";
import HomeLeft from "./HomeLeft";

class Home extends React.Component {
  state = {
    posts: [],
    newFriend: false
  };

  componentDidMount = () => {
    this.setState({newFriend: this.props.newFriend})
    this.GetPosts();
  };

  GetPosts = () => {
    if (this.props.myPets) {
      let PetIds = this.props.myPets.map(pet => {
        return pet._id;
      });
      console.log(PetIds);
      API.getMyPosts({ Pets: PetIds })
        .then(response => {
          console.log(response.data);
          this.getFriendPosts();
          this.setState({
            posts: response.data
          });
        })
        .catch(err => console.log(err));
    }
  };

  getFriendPosts = () => {
    if (this.props.friendsId) {
      console.log(this.props.friendsId);
      API.getFriendPosts({ Pets: this.props.friendsId })
      .then(response => {
        console.log(response.data);
        let posts = [...this.state.posts, ...response.data];
        console.log(posts);
        this.setState({
          posts: posts
        });
      })
      .catch(err => console.log(err));
    } else if (this.state.newFriend) {
        API.getFriendPosts({ Pets: this.props.friendsId })
        .then(response => {
          console.log(response.data);
          let posts = [...this.state.posts, ...response.data];
          console.log(posts);
          this.setState({
            posts: posts
          });
        })
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
			<div className="Home">
				<div className="row">
					<div className="col-sm-3">
					<	HomeLeft />
					</div>
					<div className="col-sm-6">
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
                        user_id={this.props.user_id}
                        liked={post.liked}
                        myPets={this.props.myPets}
											/>
										))}
									</CardList>
								) : (
									<h3>No Results to Display</h3>
								)}
							</div>
						</div>
					</div>
					<div className="col-sm-3">
						<HomeRight friends={this.props.friendsId} />
					</div>
				</div>
			</div>
		);
	}
} 

export default Home