import * as actionType from 'actions';

const initialState = {
  loggedIn: false,
  user: {
    first_name: 'Harshith',
    last_name: 'Harry',
    email: 'harshith.kumar@thoughtfocus.com', 
    // avatar: '/images/avatars/avatar_11.png',
    bio: 'UI Developer',
    role: 'ADMIN' // ['GUEST', 'USER', 'ADMIN']
  }
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.AUTH_LOGIN: {
      return {
        ...initialState,
        credentials: action.credentials,
      };
    }

    case actionType.AUTH_LOGOUT: {
      return {
        ...state,
        loggedIn: false,
        user: {
          role: 'GUEST'
        }
      };
    }

    default: {
      return state;
    }
  }
};

export default authReducer;
