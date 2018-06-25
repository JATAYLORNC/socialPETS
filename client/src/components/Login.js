import React from "react";
import { Redirect } from "react-router-dom";

class Login extends React.Component {

  // Setting the initial values of this.state.username and this.state.password
  state = {
    email: "",
    password: "",
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
    alert(`E-Mail: ${this.state.email}\nPassword: ${this.state.password}`);
    this.setState({ redirectTo: "/"});
  };

  render() {
    if (this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo}} />
    } else {
      return (
        <table>
          <tbody>
            <tr>
              <td>
                <label htmlFor="inputUsername" className="text-dark"><strong>E-Mail:</strong></label>
              </td>
              <td>
                <label htmlFor="inputPassword" className="text-dark"><strong>Password:</strong></label>
              </td>
            </tr>
            <tr>
              <td className="pr-4">
                <input
                  id="inputUsername" 
                  type="email"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleInputChange}
                />
              </td>
              <td className="pr-4">
                <input
                  id="inputPassword" 
                  type="password"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleInputChange}
                />
              </td>
              <td className="form-group-btn">
                <button className="btn btn-sm btn-dark" onClick={ () => this.props._login(this.state.email, this.state.password)}>Log In</button>
              </td>
            </tr>
          </tbody>
        </table>
      );
    }
  }
}

export default Login;