import axios from "axios";

export default {
  // logout
  login: (email, password) => {
    return axios.post('/api/login', {
      email,
      password
    });
  },
  // Gets the book with the given id
  logout: () => {
    return axios.post('/api/logout');
  },
  // Deletes the book with the given id
  getUser: (id) => {
    return axios.get('/api/user');
  },
  addPet: (name, type, breed, age, gender, size, rescue, favoriteActivities, favoriteToys, specialTalent) => {
    return axios.post('/api/addpet');
  }
};