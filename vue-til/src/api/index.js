import axios from 'axios';
import { setInterceptors } from './common/interceptors';

function creacteInstance() {
  return axios.create({
    baseURL: process.env.VUE_APP_API_URL,
  });
}

//axios 초기화 함수
function creacteInstanceWithAuth(url) {
  const instance = axios.create({
    baseURL: `${process.env.VUE_APP_API_URL}${url}`,
  });
  return setInterceptors(instance);
}

export const instance = creacteInstance();

export const posts = creacteInstanceWithAuth('posts');
