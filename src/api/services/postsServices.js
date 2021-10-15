import constants from "../utils";

const { GET_POSTS, ADD_POSTS, UPDATE_POST, DELETING_POST, axiosInstance: api} = constants;

const PostServices = {
    getPosts: () => {
        return api.get(GET_POSTS)
    },
    addPost: (payload) => {
        return api.post(ADD_POSTS, {
            ...payload
        })
    },
    updatePost: (payload) => {
        return api.put(`${UPDATE_POST}${payload.id}`, {
            ...payload
        })
    },
    deletePost: (id) => {
        return api.delete(`${DELETING_POST}${id}`)
    }
}

export default PostServices;