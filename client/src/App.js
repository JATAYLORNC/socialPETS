import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import API from "./utils/API";
import NavbarLogin from "./components/NavbarLogin";
import NavbarLogout from "./components/NavbarLogout";
import Signup from "./components/Signup";
import Home from "./components/Home";
import AddPet from "./components/AddPet";
import PetProfile from "./components/PetProfile";
import Modal from './components/Modal';
import { Link } from "react-router-dom";

class App extends React.Component {
  state = {
    loggedIn: false,
    user: null,
    pets: [], 
    search_text: '',
    searchResults: null,
    isOpen: false,
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
      }
    });
  };

  getUser = () => {
		API.getUser(this.state.user._id).then(response => {
      console.log(response.data);
			this.setState({
        user: response.data
      });
      console.log(this.state.user);
		})
		.catch(err => console.log(err));
  };
  
  search = () => {
    // this.inputSearch.value="";
    let name= this.state.search_text.trim().split(" ");
    console.log(name);
    API.findUser({
      firstname: name[0].toLowerCase(),
      lastname: name[1].toLowerCase()
    }).then(response => {
      console.log(response.data);
      console.log(this);
      this.setState ({
        search_text: '',
        searchResults: response.data
      });
      console.log(this);
      if(this.state.searchResults) {
        this.setState({
          isOpen: true,
        })
      }
      console.log(response.data);
      console.log(this.state.searchResults);
		})
		.catch(err => console.log(err));
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

  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  renderPage = () => {
    if (this.state.loggedIn) {
      return (
        <Router>
          <div>
            <NavbarLogout _logout={this._logout} user={this.state.user} search={this.search.bind(this)} handleInputChange={this.handleInputChange.bind(this)} search_text={this.state.search_text} />
            <Modal show={this.state.isOpen}
              onClose={this.toggleModal}>
                <div>
                  <div className="row">
                    <div className= "col-sm-12">
                      <div>
                        {this.state.searchResults ? this.state.searchResults.map((user) => {
                          return (
                            <div key={user._id} className="modalStyle">
                              <div className="row">
                                <div className="col-sm-12 d-flex justify-content-center mt-5">
                                  <h5>{`${user.firstname} ${user.lastname}`}</h5>
                                </div>
                              </div>
                              {user.Pet.map((pet) => {
                                return ( 
                                  <div className="row">
                                    <div className="col-sm-12 d-flex justify-content-center">
                                      <Link className="text-dark" key={pet._id} to={`/profile/${pet._id}`} onClick={this.toggleModal}>
                                        <p>{pet.name}</p>
                                      </Link>
                                    </div>
                                  </div>
                                )
                              })}
                            </div>
                          )
                        })
                          
                        : 
                          <h5>Search Results: User does not exist</h5>
                        }
                      </div>
                    </div>
                  </div>
                </div>
            </Modal>
            {!this.state.user.Pet[0] ? <Route exact path="/" render={() => <Home />} /> : <Route exact path="/" render={() => <Home pet={this.state.user.Pet[0]._id} name={this.state.user.Pet[0].name} searchResults={this.state.searchResults} />} />}
            {!this.state.user.Pet[0] ? <Route exact path="/home" render={() => <Home />} /> : <Route exact path="/home" render={() => <Home pet={this.state.user.Pet[0]._id} name={this.state.user.Pet[0].name} />} />}
            {!this.state.user.Pet[0] ? <Route exact path="/login" render={() => <Home />} /> : <Route exact path="/login" render={() => <Home pet={this.state.user.Pet[0]._id} name={this.state.user.Pet[0].name} />} />}
            <Route exact path="/addpet" render={() => <AddPet _id={this.state.user._id}  getUser={this.getUser.bind(this)} getPets={this.getPets.bind(this)} />} />
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
