import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import API from "./utils/API";
import NavbarLogin from "./components/NavbarLogin";
import NavbarLogout from "./components/NavbarLogout";
import Signup from "./components/Signup";
import Home from "./components/Home";
import AddPet from "./components/AddPet";
import PetProfile from "./components/PetProfile";
import { isThisWeek } from "date-fns";


class App extends React.Component {
  state = {
    loggedIn: false,
    user: null,
    pets: [] 
  };


	getPets = () => {
		API.getPets().then(response => {
			this.setState({
				pets: response.data,
      });
		})
		.catch(err => console.log(err));
	}	

  _logout = event => {
    event.preventDefault();

    API.logout().then(response => {
      if (response.status === 200) {
        this.setState({
          loggedIn: false,
          user: null
        });
      }
    });
  };

  _login = (email, password) => {
    this.getPets();
    API.login(email, password).then(response => {
      if (response.status === 200) {
        // update the state
        this.setState({
          loggedIn: true,
          user: response.data.user
          //user: resonse.data.user   ALL INFO FROM USER, WHICH INCLUDES HIS PETS AND POSTS
        });
        // console.log("app.js line 61 -- this.state.user", this.state.user.Pet[0]._id);
      }
    });
  };

  getUser = () => {
		API.getUser(this.state.user._id).then(response => {
			this.setState({
        user: response.data.user
			});
		})
		.catch(err => console.log(err));
	}	

  

  renderPage = () => {
    if (this.state.loggedIn) {
      return (
        <Router>
          <div>
            <NavbarLogout _logout={this._logout} user={this.state.user} />
            {!this.state.user.Pet[0] ? <Route exact path="/" render={() => <Home />} /> : <Route exact path="/" render={() => <Home pet={this.state.user.Pet[0]._id} name={this.state.user.Pet[0].name}  />} />}
            {!this.state.user.Pet[0] ? <Route exact path="/home" render={() => <Home />} /> : <Route exact path="/home" render={() => <Home pet={this.state.user.Pet[0]._id} name={this.state.user.Pet[0].name}  />} />}
            {!this.state.user.Pet[0] ? <Route exact path="/login" render={() => <Home />} /> : <Route exact path="/login" render={() => <Home pet={this.state.user.Pet[0]._id} name={this.state.user.Pet[0].name}  />} />}
            <Route exact path="/addpet" render={() => <AddPet _id={this.state.user._id}  getUser={this.getUser.bind(isThisWeek)} />} />
            {this.state.pets.map(pet => (
              <Route exact path={`/profile/${pet._id}`} key={pet._id.toString()} render={() => <PetProfile _id={pet._id} name={pet.name} breed={pet.breed} age={pet.age} gender={pet.gender} size={pet.size} toys={pet.favoriteToys}  userPets={this.state.user.Pet} />} />
            ))}
          </div>
        </Router>
      );
    } else {
      return (
        <Router>
          <div>
            <NavbarLogin _login={this._login} />
            <Route exact path="/" component={Signup} />
            <Route exact path="/home" component={Signup} />
          </div>
        </Router>
      );
    }
  };

  render() {
    return <div>{this.renderPage()}</div>;
  }
}

export default App;
