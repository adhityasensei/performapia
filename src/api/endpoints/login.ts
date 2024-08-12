import axios from 'axios';
import { apiUrls } from '../apiConfig';

axios.interceptors.response.use(undefined, (err) => {
  if (err.response && err.response.status !== 200) {
    if (err.response.data.error_description) {
      alert(err.response.data.error_description);
    }
  }
  return Promise.reject(err);
});

export async function getPosts(username: string, password: string) {
  try {
    const response = await axios.post(`${apiUrls.auth}/oauth/token`, null, {
      params: {
        grant_type: 'password',
        username: username,
        password: password
     },
     headers: {
      Authorization: `${apiUrls.credential}`,
      user_key: `${apiUrls.userKey}`
    }
    });
    return response;
  } catch (error) {
    throw error;
  }
}

export async function checkToken(token: string) {
  try {
    const response = await axios.post(`${apiUrls.auth}/oauth/check_token`, null, {
      params: {
        token: token
     },
     headers: {
      Authorization: `${apiUrls.credential}`,
      user_key: `${apiUrls.userKey}`
    }
    });
    return response;
  } catch (error) {
    throw error;
  }
}
