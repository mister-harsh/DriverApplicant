import {takeEvery, takeLatest, take, call, put, fork} from 'redux-saga/effects';
import * as actions from '../actions/users';
import * as api from '../api/authApi';

// function* getUsers(){
// 	try{
// 		const result = yield call(api.getUsers);
// 		yield put(actions.getUsersSuccess({
// 			items: result.data.data
// 		}));
// 	}catch(e){
//         yield put(actions.usersError({
//             error: 'An error occurred when trying to get the users'
//         }));
// 	}
// }

// function* watchGetUsersRequest(){
// 	yield takeEvery(actions.Types.AUTH_LOGIN, getUsers);
// }

function* loginAuth({payload}){
    try{
        yield call(api.loginAuth, {
            email: payload.email,
            password: payload.password
        });

        yield call(getUsers);

    }catch(e){
        yield put(actions.usersError({
            error: 'An error occurred when trying to create the user'
        }));
    }
}

function* watchCreateUserRequest(){
    yield takeLatest(actions.Types.CREATE_USER_REQUEST, createUser);
}

const userSagas = [
	fork(watchGetUsersRequest),
	fork(watchCreateUserRequest)
];

export default userSagas;