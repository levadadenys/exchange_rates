import axios from 'axios';// eslint-disable-line
import config from '../config/config';

export default function (url, method, data = null) {
  const headers = {};
  headers['Content-Type'] = 'application/json';
  return axios({
    validateStatus: () => true,
    url: `${config.API_URL}${url}`,
    method,
    data,
    headers,
  });
}
