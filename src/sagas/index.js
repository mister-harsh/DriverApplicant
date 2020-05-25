import auth from './auth';
import {all} from 'redux-saga/effects';

 function* rootSaga(){
	yield all([
		...auth
	]);
}

export default rootSaga