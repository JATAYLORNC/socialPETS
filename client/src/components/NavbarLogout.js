import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

class NavbarLogout extends React.Component {

	// state= {
  //   search_text: '',
  // }
  
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
                value={this.props.search_text}
                onChange={this.props.handleInputChange} 
                aria-label="Search" />
              <div className="input-group-append">
                <span className="input-group-text btn bg-dark text-white" type="button" onClick={this.props.search}>
                  <i className="fas fa-search" />
                </span>
              </div>
            </div>
          </div>
          <div className="col-sm-3 collapse navbar-collapse" id="navbarSupportedContent" style={{width: '100px'}}>
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
              {/* <li>
                <div style={{background: 'white', color: 'red', width: '120px', height: '60px', font_size: '20px'}}>
                    <div style={{textAlign: "center", padding: 'auto' }}>Hi, {this.props.user.firstname}!
                    </div>
                </div>
              </li> */}
              
              
            </ul>
          </div>
          <div className="col-sm-1" style={{text_align: 'center', margin: 'auto', width: '300px'}}>
           
              <div style={{color: 'black', font_weight: 'bold', width: '150px', height: '90px',padding: '20px'}}>
                    <div style={{textAlign: "center", padding: 'auto', font_size: '25px' }}>Hi, {this.props.user.firstname}!
                        <button  onClick={this.props._logout} style={{display: 'block', margin: 'auto', float: 'center', background: 'black', color: 'white', width: '80px', height: '30px'}}>Log Out</button>

                    </div>
              </div>
            
            
          </div>
        </div>
      </nav>
    );
  }
}

export default NavbarLogout;
