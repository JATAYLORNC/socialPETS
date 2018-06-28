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
    this.props.friends.forEach(friend => {
      if(!users.includes(friend.User[0]._id)) {
        users.push(friend.User[0]._id);
        let myfriend={
          fullName: `${friend.User[0].firstname} ${friend.User[0].lastname}`,
          pet: [friend]
        }
        petFriends.push(myfriend);
      } else {
        let fullname=`${friend.User[0].firstname} ${friend.User[0].lastname}`
        petFriends = petFriends.map((userpet) => {
          if(userpet.fullname) {
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

  render () {
    return (

      <div className="row">
        <div className="col-sm-12" style={{width: '250px', marginLeft: '80px', position: 'fixed', top: '17%', bottom: '0', borderLeft: '1px solid lightgray'}}>
          <div className="pl-3">
            <h5 style={{marginTop: '25%', paddingTop: '70px'}}>Following:</h5>       
            {this.state.petFriends.map((friend) => {
              return (
                <div>
                  <p><strong>{`${friend.fullName}`}</strong></p>
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