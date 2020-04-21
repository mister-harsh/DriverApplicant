import authSaga from './users';
import {all} from 'redux-saga/effects';

 function* rootSaga(){
	yield all([
		...authSaga
	]);
}

export default rootSaga