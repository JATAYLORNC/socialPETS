import axios from "axios";

export default {
  // login
  login: (email, password) => {
    return axios.post('/api/login', {
      email,
      password
    });
  },
  // logout
  logout: () => {
    return axios.post('/api/logout');
  },
  // get the user with the given id
  getUser: (id) => {
    return axios.get('/api/user');
  },
  //post new pet data
  addPet: (petData) => {
    return axios.post('/api/addpet', petData);
  },
  //add the new pet id to the user with the given id
  addUserPet: (id, pet_id) => {
    return axios.post(`/api/user/${id}`, pet_id);
  },
   //signup
   signup: (userData) => {
    return axios.post('api/signup', userData);
  },
};