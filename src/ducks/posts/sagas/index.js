import {all, fork} from 'redux-saga/effects';
import posts from './postsSaga'

export default function* postsSaga() {
    yield all([fork(posts)])
}