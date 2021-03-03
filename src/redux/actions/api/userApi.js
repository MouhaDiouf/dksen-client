import axios from 'axios';
const apiURL = process.env.REACT_APP_API_URL;
export const connexionApiHandler = (user) => {
  console.log('API URL ', apiURL);
  return axios.post(`${apiURL}/auth/sign_in`, user);
};

export const inscriptionApiHandler = (user) => {
  console.log('USER is ', user);
  return axios.post(`${apiURL}/auth`, user);
};
