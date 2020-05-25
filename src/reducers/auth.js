import * as actionType from 'actions';

const initialState = {
  isLoggedIn: false,
  isLoading:false,
  applicantGuid:'',
  loginStatusMessage:'',
  errorMessage:{},
  errorStatus:false,
  jobDetails:{},
  isNotValidPath:false,
  isRegistered:false,
  registerStatusMessage:'',
  isLinkSent:false,
  forgetPassStatusMessage:'',
};

const auth = (state = initialState, action) => {
  switch (action.type) {


    case actionType.GET_JOB_DETAILS: {
      return {
        ...state,
        isLoading:true,

      };
    }

    case actionType.GET_JOB_DETAILS_SUCCESS: {
      return {
        ...state,
        isLoading:false,
        jobDetails: action.payload,
        isNotValidPath: action.payload.companyName == null ? true : false,
      };
    }


    case actionType.AUTH_LOGIN_POST: {
      return {
        ...state,
        isLoading:true,
      };
    }

    case actionType.AUTH_LOGIN_POST_SUCCESS: {
      return {
        ...state,
        isLoggedIn: action.payload.status,
        applicantGuid: action.payload.applicantGuid,
        loginStatusMessage: action.payload.message,
        isLoading:false,
      };
    }

    case actionType.AUTH_REGISTER_POST: {
      return {
        ...state,
        isLoading:true,
      };
    }

    case actionType.AUTH_REGISTER_POST_SUCCESS: {
      return {
        ...state,
        isRegistered: action.payload.status,
        registerStatusMessage: action.payload.message,
        isLoading:false,
      };
    }

    case actionType.AUTH_FORGET_PASSWORD_POST: {
      return {
        ...state,
        isLoading:true,
      };
    }

    case actionType.AUTH_FORGET_PASSWORD_POST_SUCCESS: {
      return {
        ...state,
        isLinkSent: action.payload.status,
        forgetPassStatusMessage: action.payload.statusMessage,
        isLoading:false,
      };
    }

    case actionType.COMMON_ERROR: {
      return {
          ...state,
          errorMessage: action.payload.error,
          errorStatus:true
      }
  }

  case actionType.COMMON_ERROR_CLOSE: {
    return {
        ...state,
        errorStatus:false
    }
}
    default: {
      return state;
    }
  }
};

export default auth;
