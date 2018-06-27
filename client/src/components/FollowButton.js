import React from "react";
import API from "../utils/API";

class FollowButton extends React.Component {

  state= {
    alreadyFriend: false
  }

  componentDidMount = () => {
    this.isFriend(this.props._id);
  }	

  isFriend = (pet_id) => {
    let friends = this.props.friends.map((friend) => {return friend._id});
    if(friends.includes(pet_id)) {
      this.setState({alreadyFriend: true});
    }
  }

  follow = () => {
    API.follow(this.props.user_id, {friendsId: this.props._id}).then(response => {
      console.log(response.data);
      this.setState({alreadyFriend: true});
		})
		.catch(err => console.log(err));
  }

  render() {

    if(this.state.alreadyFriend===true) {
      return (
        <button className="btn btn-primary btn-sm following"><i className="fas fa-user-friends mr-1"></i>Following</button>
      );
    } else {
      return(
        <button className="btn btn-secondary btn-sm follow" type="button" onClick={this.follow}><i className="fas fa-user-friends mr-1"></i>Follow</button>
      );
    }
  }

}

export default FollowButton;