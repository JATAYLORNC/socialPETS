import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import API from "./utils/API";
import NavbarLogin from "./components/NavbarLogin";
import NavbarLogout from "./components/NavbarLogout";
import Signup from "./components/Signup";
import Home from "./components/Home";
import AddPet from "./components/AddPet";

class App extends React.Component {
	state = {
			loggedIn: false,
			user: null
		}

	componentDidMount= () => {
		API.getUser().then(response => {
			console.log(response.data);
			if (!!response.data.user) {
				console.log('THERE IS A USER')
				this.setState({
					loggedIn: true,
					user: response.data.user
				});
				console.log(`loggedIn: ${this.state.loggedIn}`);
			} else {
				this.setState({
					loggedIn: false,
					user: null
				})
			}
		})
		.catch(err => console.dir(err));
	}

	_logout = (event) => {
		event.preventDefault();

		API.logout().then(response => {
			if (response.status === 200) {
				this.setState({
					loggedIn: false,
					user: null
				});
			}
		})
	}

	_login = (email, password) => {
		API.login(email, password)
			.then(response => {
				if (response.status === 200) {
					// update the state
					this.setState({
						loggedIn: true,
						user: response.data.user
					});
				}
			})
  }
  
  renderPage = () => {
    if (this.state.loggedIn) {
      return (
        <Router>          
					<div>
						<NavbarLogout _logout={this._logout} />
						<Route exact path="/" component={Home} />
						<Route exact path="/home" component={Home} />
						<Route exact path="/login" component={Home} />
						<Route exact path="/addpet" component={AddPet} />
					</div>
        </Router>
      )
    } else {
      return (
        <Router>
          <div>
            <NavbarLogin _login={this._login} />
            <Route exact path="/" component={Signup} />
          </div>
        </Router>
      )
    }
  }

	render() {
		return (
      <div>
      {this.renderPage()}
      </div>
		);
	}
}

export default App;
