import axios from 'axios';

export const constants = {
  axiosInstance: axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    timeout: 2000,
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }),
  GET_POSTS: '/posts',
  ADD_POSTS: '/posts',
  UPDATE_POST: '/posts/',
  DELETING_POST: '/posts/',
  GET_COMMENTS: '/posts/',
};
