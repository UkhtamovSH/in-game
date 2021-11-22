import axios from 'axios';
import { API_URL } from './api';
import { getToken } from './tokenStorage';
import { getLanguage } from './language';

export const getNotAuthInstance = () => {
  return axios.create({
    baseURL: API_URL,
    headers: {
      lang: getLanguage(),
    },
  });
};

export const getInstance = () => {
  const token = getToken();
  return axios.create({
    baseURL: API_URL,
    headers: {
      Authorization: token ? `Bearer  ${token} ` : undefined,
      lang: getLanguage(),
    },
  });
};