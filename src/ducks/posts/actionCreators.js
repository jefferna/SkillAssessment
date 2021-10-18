export const getPostsRequest = () => ({
  type: 'GET_POSTS_REQUEST',
});

export const getPostsRequestSuccess = (payload) => ({
  type: 'GET_POSTS_SUCCESS',
  payload,
});

export const getPostsRequestFailed = () => ({
  type: 'GET_POSTS_FAILED',
});

export const getCommentsRequest = (id) => {
  console.log('Id: ', id);
  return {
    type: 'GET_COMMENTS_REQUEST',
    payload: id,
  };
};

export const getCommentsRequestSuccess = (payload) => ({
  type: 'GET_COMMENTS_SUCCESS',
  payload,
});

export const getCommentsRequestFailed = () => ({
  type: 'GET_COMMENTS_FAILED',
});
