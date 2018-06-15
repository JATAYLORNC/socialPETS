import axios from "axios";

export default {
  // logout
  login: function(email, password) {
    return axios.post('/api/login', {
      email,
      password
    });
  },
  // Gets the book with the given id
  logout: function() {
    return axios.post('/api/logout');
  },
  // Deletes the book with the given id
  getUser: function(id) {
    return axios.get('/api/user');
  },
  addPet: function(name, type, breed, age, gender, size, rescue, favoriteActivities, favoriteToys, specialTalent) {
    return axios.post('/api/addpet');
  }
};