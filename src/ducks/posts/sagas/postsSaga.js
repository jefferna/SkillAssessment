import {takeLatest, put} from 'redux-saga/effects'
import {getPostsRequestFailed, getPostsRequestSuccess} from '../actionCreators'
import PostServices from '../../../api/services/postsServices'

function* postSagaGenerator() {
    try {
        const {data} = yield call(PostServices.getPosts)

    // const mock = [
    //     {id: 1},
    //     {id: 1},
    //     {id: 1},
    //     {id: 1},
    //     {id: 1}
    // ]

        yield put(getPostsRequestSuccess(data))
    }catch(e) {
        yield put(getPostsRequestFailed())
    }
}


export default function* watcher() {
    yield takeLatest('GET_POSTS_REQUEST', postSagaGenerator)
}