import {PostsState, PostsActions} from './types';

const INITIAL_STATE: PostsState = {
  isFetchingData: false,
  isFetchingDataError: false,
  fetchedData: [],
  fetchedComments: [],
};

const postsReducer = (
  state: PostsState = INITIAL_STATE,
  action: PostsActions,
): PostsState => {
  switch (action.type) {
    case 'GET_POSTS_REQUEST':
      return {
        ...state,
        isFetchingData: true,
      };
    case 'GET_POSTS_SUCCESS':
      return {
        ...state,
        isFetchingData: false,
        fetchedData: action.payload,
      };
    case 'GET_POSTS_FAILED':
      return {
        ...state,
        isFetchingDataError: true,
        isFetchingData: true,
      };
    case 'GET_COMMENTS_REQUEST':
      return {
        ...state,
        isFetchingData: true,
      };
    case 'GET_COMMENTS_SUCCESS':
      return {
        ...state,
        isFetchingData: false,
        fetchedComments: action.payload,
      };
    case 'GET_COMMENTS_FAILED':
      return {
        ...state,
        isFetchingData: false,
        isFetchingDataError: true,
      };
    default:
      return state;
  }
};

export default postsReducer;
