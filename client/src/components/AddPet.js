import React from "react";
import axios from "axios";
import "../styles/addpet.css";
import { Redirect } from 'react-router-dom'

class AddPet extends React.Component {

  // Setting the initial values of this.state.username and this.state.password
  state = {
    name: "",
    type: "",
    breed: "",
    age: "",
    gender: "",
    size: "",
    favoriteActivities: "",
    favoriteToys: "",
    rescue: "",
    showAnimal: "",
    animalActor: "",
    specialTalent: "",
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
    axios
			.post('/api/addpet', {
        name: this.state.name,
        type: this.state.type,
        breed: this.state.breed,
        age: this.state.age,
        gender: this.state.gender,
        size: this.state.size,
        rescue: this.state.rescue,
        favoriteActivities: this.state.favoriteActivities,
        favoriteToys: this.state.favoriteToys,
        specialTalent:  this.state.specialTalent,
			})
			.then(response => {
				if (!response.data.errmsg) {
					this.setState({
						redirectTo: '/home'
					})
				} else {
					console.log('An error occurred in adding the pet');
				}
			}).catch(error => {
        console.log("Add Pet Error: ");
        console.log(error);
      });
  };

  render() {
		if (this.state.redirectTo) {
			return <Redirect to={{ pathname: this.state.redirectTo }} />
		}
		return (
			<form className="PetProfile mb-5">
				<h1 className="text-center pt-5 pb-5">Pet Profile</h1>
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <div className="form-row">
              <div className="form-group col-md-4 pr-5">
                <label htmlFor="name">Name: </label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Max"
                  value={this.state.name}
                  onChange={this.handleInputChange}
                />
              </div>
              <div className="form-group col-md-4 pr-5">
                <label htmlFor="type">Type: </label>
                <input
                  type="text"
                  name="type"
                  className="form-control"
                  placeholder="dog"
                  value={this.state.type}
                  onChange={this.handleInputChange}
                />
              </div>
              <div className="form-group col-md-4">
              <label htmlFor="breed">Breed: </label>
                <input
                  type="text"
                  name="breed"
                  className="form-control"
                  placeholder="Yorkshire Terrier"
                  value={this.state.breed}
                  onChange={this.handleInputChange}
                />
              </div>
            </div>
            <div className="form-row mt-3">
              <div className="col-md-3"></div>
              <div className="form-group col-md-1" id="ageInput">
                <label htmlFor="age">Age: </label>
                <input
                  type="text"
                  name="age"
                  className="form-control"
                  id="ageSize"
                  placeholder="2"
                  value={this.state.age}
                  onChange={this.handleInputChange}
                />
              </div>
              <div className="form-group col-md-2" id="genderInput">
                <label htmlFor="gender">Gender: </label>
                <div>
                  <div class="form-check form-check-inline">
                    <input className="form-check-input mt-2" type="radio" name="gender" value="M" onChange={this.handleInputChange} id="male" />
                    <label className="form-check-label mt-2" for="gender">
                      M
                    </label>
                  </div>
                  <div className="form-group form-check-inline">
                    <input className="form-check-input mt-2" type="radio" name="gender" value="F" onChange={this.handleInputChange} id="female" />
                    <label className="form-check-label mt-2" for="gender">
                      F
                    </label>
                  </div>
                </div>
              </div>
              <div className="form-group col-md-2" id="sizeInput">
              <label htmlFor="size">Size: </label>
                <input
                  type="text"
                  name="size"
                  className="form-control"
                  placeholder="6 lbs"
                  value={this.state.size}
                  onChange={this.handleInputChange}
                />
              </div>
              <div className="form-group col-md-2" id="rescueInput">
                <label htmlFor="rescue">Rescue Pet?</label>
                <div>
                  <div class="form-check form-check-inline">
                    <input className="form-check-input mt-2" type="radio" name="rescue" value="Y" onChange={this.handleInputChange} id="male" />
                    <label className="form-check-label mt-2" for="rescue">
                      Y
                    </label>
                  </div>
                  <div className="form-group form-check-inline">
                    <input className="form-check-input mt-2" type="radio" name="rescue" value="N" onChange={this.handleInputChange} id="female" />
                    <label className="form-check-label mt-2" for="rescue">
                      N
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-md-3"></div>
            </div>
            <div className="form-row mt-2">
              <div className="form-group col-md-12">
                <label htmlFor="favoriteActivities">Favorite Activities: </label>
                <input
                  type="text"
                  name="favoriteActivities"
                  className="form-control"
                  placeholder="Playing fetch with my orange ball, Stealing socks"
                  value={this.state.favoriteActivities}
                  onChange={this.handleInputChange}
                />
              </div>
            </div>
            <div className="form-row mt-3">

              <div className="form-group col-md-12">
                <label htmlFor="favoriteToys">Favorite Toys: </label>
                <input
                  type="text"
                  name="favoriteToys"
                  className="form-control"
                  placeholder="Anything that squeaks or bounces and fits in my mouth"
                  value={this.state.favoriteToys}
                  onChange={this.handleInputChange}
                />
              </div>
            </div>
            <div className="form-row mt-3">
              <div className="form-group col-md-12">
                <label htmlFor="specialTalent">Special Talent: </label>
                <input
                  type="text"
                  name="specialTalent"
                  className="form-control"
                  placeholder="Stealing socks, Fielding balls"
                  value={this.state.favoriteActivities}
                  onChange={this.handleInputChange}
                />
              </div>
            </div>
            <button className="btn btn-dark mt-3" onClick={this.handleFormSubmit}>Add Pet</button>
          </div>
        </div>
        <div className="col-md-2"></div>
			</form>
		)
	}
}

export default AddPet;