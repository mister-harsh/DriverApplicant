import {takeEvery, takeLatest, take, call, put, fork} from 'redux-saga/effects';
import * as actionType from 'actions';
import * as services from 'services';


function* getJobDetailsSaga(jobInfo){
    
    try{
        const  response = yield call(services.JobDetailsServices, jobInfo.payload);
        yield put(actionType.getJobDetailsPostSuccess(response.data));

    }catch(e){
        yield put(actionType.commonError({
            error: 'Something went wrong'
        }));
    }
}

function* watchGetJobDetailsSaga(){
    yield takeLatest(actionType.GET_JOB_DETAILS, getJobDetailsSaga);
}



function* loginAuthPostSaga(loginInfo){
    
    try{
        const  response = yield call(services.loginAuthServices, loginInfo.payload);

        // For static Data
        // yield put(actionType.loginAuthPostSuccess(response));

        yield put(actionType.loginAuthPostSuccess(response.data));

    }catch(e){
        yield put(actionType.commonError({
            error: 'Something went wrong'
        }));
    }
}

function* watchLoginAuthPostSaga(){
    yield takeLatest(actionType.AUTH_LOGIN_POST, loginAuthPostSaga);
}


function* registerAuthPostSaga(registerInfo){
    
    try{
        const  response = yield call(services.registerAuthServices, registerInfo.payload);


        yield put(actionType.registerAuthPostSuccess(response.data));

    }catch(e){
        yield put(actionType.commonError({
            error: 'Something went wrong'
        }));
    }
}

function* watchRegisterAuthPostSaga(){
    yield takeLatest(actionType.AUTH_REGISTER_POST, registerAuthPostSaga);


}

function* forgetPassAuthPostSaga(registerInfo){
    
    try{
        const  response = yield call(services.forgetPassAuthServices, registerInfo.payload);


        yield put(actionType.forgetPasswordAuthPostSuccess(response.data));

    }catch(e){
        yield put(actionType.commonError({
            error: 'Something went wrong'
        }));
    }
}

function* watchForgetPassAuthPostSaga(){
    yield takeLatest(actionType.AUTH_FORGET_PASSWORD_POST, forgetPassAuthPostSaga);
}



const auth = [
    fork(watchGetJobDetailsSaga),
    fork(watchLoginAuthPostSaga),
    fork(watchRegisterAuthPostSaga),
    fork(watchForgetPassAuthPostSaga),
];

export default auth;