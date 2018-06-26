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
    return axios.get(`/api/user/${id}`);
  },

  getPets: () => {
    return axios.get('/api/pets');
  },
  getMyPosts: (petData) => {
    return axios.post('/api/posts', petData);
  },
  getFriendPosts: (petData) => {
    return axios.post('/api/posts', petData);
  },
  findUser: (userData) => {
    return axios.post('/api/finduser', userData);
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
  addComment: (commentData) => {
    console.log(commentData);
    return axios.post(`/api/comment/`, commentData);
  },
  addPostComment: (post_id, comment_id) => {
    console.log(`Post ID: ${post_id},  Comment ID: ${comment_id}`);
    return axios.post(`/api/post/${post_id}`, comment_id);
  },
  getPostComments: (post_id) => {
    return axios.get(`/api/post/${post_id}`);
  },
  updateLikes: (post_id, likes) => {
    return axios.post(`/api/likes/${post_id}`, likes);
  },
   //signup
   signup: (userData) => {
    return axios.post('api/signup', userData);
  },
  follow: (user_id, followData) => {
    return axios.post(`/api/user/${user_id}`, followData);
  }
  
};