import axios from 'axios';

function registerUser(userdata) {
  const url = 'http://localhost:3000/signup';
  return axios.post(url, userdata);
}

export { registerUser };
