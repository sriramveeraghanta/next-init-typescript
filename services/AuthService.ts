import axios from 'axios';
// endpoints
import {AUTH_LOGIN} from '../constants/endpoints';

class AuthService {
  static create(data) {
    return axios
      .post(AUTH_LOGIN, data)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        throw error.response.data;
      });
  }
}

export default AuthService;
