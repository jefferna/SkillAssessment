export const getPostsRequest = () => ({
    type: 'GET_POSTS_REQUEST'
})

export const getPostsRequestSuccess = (payload) => ({
    type: 'GET_POSTS_SUCCESS',
    payload
})

export const getPostsRequestFailed = () => ({
    type: 'GET_POSTS_FAILED'
})