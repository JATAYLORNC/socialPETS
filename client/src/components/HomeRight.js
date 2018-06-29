import React from "react";
import { Link } from "react-router-dom";
import "../styles/homeRight.css";

class HomeRight extends React.Component {

  state = {
    petFriends: []
  }

  componentDidMount = () => {
		this.invertArray();
	}	


  invertArray = () => {
    let users=[];
    let petFriends=[]
    if(this.props.Friends[0])
      if(this.props.friends[0].User[0]) {
        this.props.friends.forEach(friend => {
          console.log("friend", friend)
          if(!users.includes(friend.User[0]._id)) {
            users.push(friend.User[0]._id);
            let myfriend={
              fullName: `${friend.User[0].firstname} ${friend.User[0].lastname}`,
              user_id: friend.User[0]._id,
              pet: [friend]
            }
            petFriends.push(myfriend);
          } else {
            petFriends = petFriends.map((userpet) => {
              if(userpet.user_id===friend.User[0]._id) {
                userpet.pet.push(friend);
                return userpet;
              } else {
                return userpet;
              }
            });
          }
        });
        this.setState({
          petFriends: petFriends
        });
      }
    }
  }
  }

  render () {
    return (

      <div className="row">
        <div className="col-sm-12" style={{width: '250px', marginLeft: '80px', position: 'fixed', top: '12%', bottom: '0', borderLeft: '1px solid lightgray'}}>
          <div className="pl-3">
            <h4 style={{marginTop: '25%', paddingTop: '70px', paddingBottom: '20px'}}>Following:</h4>       
            {this.state.petFriends.map((friend) => {
              return (
                <div key={friend._id}>
                  <h5 style={{paddingBottom: '20px'}}><strong>{`${friend.fullName}`}</strong></h5>
                  {friend.pet.map(pet => {
                    return (
                    <Link className="text-dark" key={pet._id} to={`/profile/${pet._id}`} >
                      <img src="http://via.placeholder.com/40x40" className="img-responsive rounded-circle petImage mr-3" alt="Pet" />
                      <span>{pet.name}</span>
                      <br /><br />
                    </Link>
                    );
                  })}
                </div>
              )
            })}
          </div> 
        </div>
      </div>
    );

  }
}

export default HomeRight;