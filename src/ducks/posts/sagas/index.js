import {all, fork} from 'redux-saga/effects';
import posts from './postsSaga';
import comments from './commentsSaga';

export default function* postsSaga() {
  yield all([fork(posts), fork(comments)]);
}
