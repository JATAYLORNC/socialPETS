import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import API from "./utils/API";
import NavbarLogin from "./components/NavbarLogin";
import NavbarLogout from "./components/NavbarLogout";
import Signup from "./components/Signup";
import Home from "./components/Home";
import AddPet from "./components/AddPet";
import PetProfile from "./components/PetProfile";


class App extends React.Component {
  state = {
    loggedIn: false,
    user: null,
  
  };

  // w
  //   API.getUser()
  //     .then(response => {
  //       console.log(response.data);
  //       if (!!response.data.user) {
  //         console.log("THERE IS A USER");
  //         this.setState({
  //           loggedIn: true,
  //           user: response.data.user
  //         });
  //         console.log(`loggedIn: ${this.state.loggedIn}`);
  //         console.log(`${this.state.user.Pet[0].name}`);
  //       } else {
  //         this.setState({
  //           loggedIn: false,
  //           user: null
  //         });
  //       }
  //     })
  //     .catch(err => console.dir(err));
  // };

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
    API.login(email, password).then(response => {
      if (response.status === 200) {
        // update the state
        this.setState({
          loggedIn: true,
          user: response.data.user
        });
        // console.log("app.js line 61 -- this.state.user", this.state.user.Pet[0]._id);
      }
    });
  };

  renderPage = () => {
    if (this.state.loggedIn) {
      return (
        <Router>
          <div>
            <NavbarLogout _logout={this._logout} user={this.state.user} />
            <Route exact path="/" render={() => <Home pet={this.state.user.Pet[0]._id}  />} />
            <Route exact path="/home" render={() => <Home pet={this.state.user.Pet[0]._id}  />} />
            <Route exact path="/login" component={Home} />
            <Route exact path="/addpet" render={() => <AddPet _id={this.state.user._id} />} />
            {this.state.user.Pet.map(pet => (
              <Route exact path={`/profile/${pet._id}`} key={pet._id.toString()} render={() => <PetProfile _id={pet._id} name={pet.name} pet={this.state.user.Pet[0]._id} />} />
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
