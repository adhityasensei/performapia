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

export async function getUser(username: string) {
  try {
    const response = await axios.get(`${apiUrls.user}/usermanagement/menu/privilege`, {
      params: {
        username: username
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
