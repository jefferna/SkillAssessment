export type PostsState = {
    isFetchingData: boolean,
    isFetchingDataError: boolean,
    fetchedData: any,
    fetchedComments: any
}

export type PostsActions = 
    |{
        type: 'GET_POSTS_REQUEST'
    }
    |{
        type: 'GET_POSTS_SUCCESS',
        payload: any
    }
    |{
        type: 'GET_POSTS_FAILED'
    }
    |{
        type: 'GET_COMMENTS_REQUEST'
        payload: number
    }
    | {
        type: 'GET_COMMENTS_SUCCESS'
        payload: any
    }
    | {
        type: 'GET_COMMENTS_FAILED'
    }