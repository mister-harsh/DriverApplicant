import * as actionType from 'actions';


export const loginAuthRequest = (info) => ({
    type: actionType.AUTH_LOGIN,
    payload: {
      info
    }
  });

export const registerAuthRequest = (info) => ({
    type: actionType.AUTH_LOGOUT,
    payload: {
      info
    }
  });


export const usersError = ({error}) => ({
    type: actionType.LOGIN_ERROR,
    payload: {
        error
    }
});