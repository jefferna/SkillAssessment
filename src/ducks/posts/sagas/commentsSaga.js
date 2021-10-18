import {takeLatest, put, call} from 'redux-saga/effects';
import {
  getCommentsRequestSuccess,
  getCommentsRequestFailed,
} from '../actionCreators';
import CommentServices from '../../../api/services/commentsServices';

function* commentsSagaGenerator(action) {
  try {
    const {data} = yield call(CommentServices.getComments, action.payload);
    yield put(getCommentsRequestSuccess(data));
  } catch (e) {
    yield put(getCommentsRequestFailed());
  }
}

export default function* watcher() {
  yield takeLatest('GET_COMMENTS_REQUEST', commentsSagaGenerator);
}
