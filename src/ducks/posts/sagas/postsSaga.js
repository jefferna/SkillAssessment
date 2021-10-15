import {takeLatest, put, call} from 'redux-saga/effects';
import {getPostsRequestFailed, getPostsRequestSuccess} from '../actionCreators';
import PostServices from '../../../api/services/postsServices';

function* postSagaGenerator() {
  try {
    const {data} = yield call(PostServices.getPosts);
    yield put(getPostsRequestSuccess(data));
  } catch (e) {
    yield put(getPostsRequestFailed());
  }
}

export default function* watcher() {
  yield takeLatest('GET_POSTS_REQUEST', postSagaGenerator);
}
