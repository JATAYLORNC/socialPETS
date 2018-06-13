import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios";
import NavbarLogin from "./components/NavbarLogin";
import NavbarLogout from "./components/NavbarLogout";
import Signup from "./components/Signup";
import Home from "./components/Home";

class App extends React.Component {
	state = {
			loggedIn: false,
			user: null
		}

	componentDidMount= () => {
		axios.get('/auth/user').then(response => {
			console.log(response.data)
			if (!!response.data.user) {
				console.log('THERE IS A USER')
				this.setState({
					loggedIn: true,
					user: response.data.user
				})
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
		event.preventDefault()
		console.log('logging out')
		axios.post('/auth/logout').then(response => {
			console.log(response.data)
			if (response.status === 200) {
				this.setState({
					loggedIn: false,
					user: null
				})
			}
		})
	}

	_login = (username, password)=> {
		axios
			.post('/auth/login', {
				username,
				password
			})
			.then(response => {
				console.log(response)
				if (response.status === 200) {
					// update the state
					this.setState({
						loggedIn: true,
						user: response.data.user
					})
				}
			})
  }
  
  renderPage = () => {
    if (this.state.loggedIn) {
      return (
        <Router>
          <div>
            <Route exact path="/" 
            render={() => ( 
            <div>
              <NavbarLogout Logout={this._logout} />
              <Home />
            </div>
            )} />
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
