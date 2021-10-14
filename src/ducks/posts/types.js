export type PostsState = {
    isFetchingData: boolean,
    isFetchingDataError: boolean,
    fetchedData: any
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