import * as actionType from 'actions';

export const loginAuthPost = (loginInfo) => ({
  type: actionType.AUTH_LOGIN_POST,
  payload: loginInfo 
});

export const loginAuthPostSuccess = (loginStatus) => ({
type: actionType.AUTH_LOGIN_POST_SUCCESS,
payload: loginStatus,
}); 

export const registerAuthPost = (registerInfo) => ({
  type: actionType.AUTH_REGISTER_POST,
  payload: registerInfo 
});

export const registerAuthPostSuccess = (registerStatus) => ({
type: actionType.AUTH_REGISTER_POST_SUCCESS,
payload: registerStatus,
}); 

export const forgetPasswordAuthPost = (forgetPassInfo) => ({
  type: actionType.AUTH_FORGET_PASSWORD_POST,
  payload: forgetPassInfo 
});

export const forgetPasswordAuthPostSuccess = (registerStatus) => ({
type: actionType.AUTH_FORGET_PASSWORD_POST_SUCCESS,
payload: registerStatus,
}); 




 


