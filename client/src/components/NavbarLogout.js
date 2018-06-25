import React from "react";
import API from "../utils/API";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

class NavbarLogout extends React.Component {

	state= {
    search_text: '',
    searchResults: []
  }
  
  search = (search_text) => {
    this.inputSearch.value="";
    let name= this.state.search_text.trim().split(" ");
    console.log(name);
    API.findUser({
      firstname: name[0].toLowerCase(),
      lastname: name[1].toLowerCase()
    }).then(response => {
			this.setState({
        searchResults: response.data,
        search_text: ''
      });
      console.log(this.state);
		})
		.catch(err => console.log(err));
  }

  // handle any changes to the input fields
  handleInputChange = event => {
    console.log("this.props", this.props);
    // Pull the name and value properties off of the event.target (the element which triggered the event)
    const { name, value } = event.target;

    // Set the state for the appropriate input field
    this.setState({
      [name]: value
    });
  };

  render ()  {

    return (
      <nav className="navbar navbar-expand-md w-100" id="myNavbar">
        <div className="container-fluid row d-flex align-items-center">
          <div className="col-sm-3">
            <Link className="navbar-brand text-dark" id="brand" to="/">
              <strong>socialPETS</strong>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
          </div>
          <div className="col-sm-4">
            <div className="input-group my-2 my-lg-0">
              <input 
                className="form-control-sm" 
                name="search_text" 
                id="search" 
                type="search" 
                placeholder="Search"
                value={this.state.search_text}
                onChange={this.handleInputChange} 
                aria-label="Search" />
              <div className="input-group-append">
                <span className="input-group-text btn bg-dark text-white" type="button" ref={el => this.inputSearch = el} onClick={this.search}>
                  <i className="fas fa-search" />
                </span>
              </div>
            </div>
          </div>
          <div className="col-sm-4 collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav d-flex justify-content-start align-items-center">
              <li className="nav-item mr-2">
                <Link className="nav-link text-dark menuText" to="/home" id="home">
                  Home
                </Link>
              </li>
              <li className="nav-item dropdown mr-2">
                <Link
                  className="nav-link dropdown-toggle text-dark menuText"
                  role="button"
                  data-toggle="dropdown"
                  to="/Profile"
                  id="saved"
                >
                  Profile
                </Link>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  {this.props.user.Pet.map(pet => (
                    <Link key={pet._id.toString()} className="dropdown-item" to={`/profile/${pet._id}`}>
                      {pet.name}
                    </Link>
                  ))}
                </div>
              </li>
              <li>
                <Link className="nav-link text-dark menuText" to="/addpet" id="addpet">
                  Add A Pet
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-sm-1" style={{text_align: 'center', margin: 'auto'}}>
            <div>Hello, {this.props.user.firstname}!</div>

            <button className="btn btn-sm btn-dark ml-2 menuButton" onClick={this.props._logout} style={{display: 'block', margin: 'auto'}}>Log Out</button>
            
          </div>
        </div>
      </nav>
    );
  }
}

export default NavbarLogout;
