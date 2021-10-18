import constants from '../utils';

const {GET_COMMENTS, axiosInstance: api} = constants;

const CommentServices = {
  getComments: (post_id: number) => {
    return api.get(`${GET_COMMENTS}${post_id}/comments`);
  },
};

export default CommentServices;
