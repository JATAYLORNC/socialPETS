import React from "react";
import API from "../utils/API";
import { Redirect } from 'react-router-dom'

class Signup extends React.Component {

  // Setting the initial values of this.state.username and this.state.password
  state = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
    redirectTo: null
  };

  // handle any changes to the input fields
  handleInputChange = event => {
    // Pull the name and value properties off of the event.target (the element which triggered the event)
    const { name, value } = event.target;

    // Set the state for the appropriate input field
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, prevent the default event and alert the username and password
  handleFormSubmit = event => {
    event.preventDefault();
   API.signup({
        firstname: this.state.firstname.toLowerCase(),
        lastname: this.state.lastname.toLowerCase(),
				email: this.state.email,
				password: this.state.password
			})
			.then(response => {
        console.log("response.status", response.status);
        
        // IF DATA ERROR IS NULL
				if (response.status === 200) {
					console.log('Signup was successful')
					this.setState({
						redirectTo: '/login'
					});
				} else {
          console.log('Sign-up error');
          alert("Sign-up error.  Must be a unique email address.")

          this.setState({
            email: "",
            password: "",
            confirmPassword: ""
					});

          let form = document.getElementById("myForm");
          form.reset();




				}
			}).catch(error => {
        console.log("Sign-up server error: ");
        console.log(error);
      });
  };

  render() {
		if (this.state.redirectTo) {
			return <Redirect to={{ pathname: this.state.redirectTo }} />
		}
		return (
     
			<form className="SignupForm mb-5" id="myForm">
	

       
        <div className="row">
				  <div className="col-md-12">	<h1 className="text-center pt-5 pb-5">Create a profile for your Best Friend today!</h1></div>
        </div>

        <div className="row">
        <div className="col-md-1"></div>
        <div className = "col-md-5" id="leftside"><img src="https://image.ibb.co/haHc7J/socialpets.png" height="450" width="450"/></div>
        
          <div className="col-md-5">
    
            <div className="form-row">
              <div className="form-group col-md-5">
                <label htmlFor="firstname">First Name: </label>
                <input
                  type="text"
                  name="firstname"
                  className="form-control"
                  value={this.state.firstname}
                  onChange={this.handleInputChange}
                />
              </div>
              <div className="form-group col-md-5">
                <label htmlFor="lastname">Last Name: </label>
                <input
                  type="text"
                  name="lastname"
                  className="form-control"
                  value={this.state.lastname}
                  onChange={this.handleInputChange}
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="email">E-mail: </label>
              <input
                type="email"
                name="email"
                className="form-control"
                value={this.state.email}
                onChange={this.handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password: </label>
              <input
                type="password"
                name="password"
                className="form-control"
                value={this.state.password}
                onChange={this.handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password: </label>
              <input
                type="password"
                name="confirmPassword"
                className="form-control"
                value={this.state.confirmPassword}
                onChange={this.handleInputChange}
              />
            </div>
            <button className="btn btn-dark" onClick={this.handleFormSubmit}>Sign up</button>
          </div>
        </div>
			</form>
      
		)
	}
}

export default Signup;