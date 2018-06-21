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
  addPost: (postData) => {
    console.log("post :", postData.posts);
    console.log("imageURL: ", postData.imageURL);
    return axios.post(`/api/post`, postData);
  },
  addPetPost: (pet_id, post_id) => {
    return axios.post(`/api/pet/${pet_id}`, post_id);
  },
  getPetPosts: (pet_id) => {
    return axios.get(`/api/pet/${pet_id}`);
  },
   //signup
   signup: (userData) => {
    return axios.post('api/signup', userData);
  },
  
};