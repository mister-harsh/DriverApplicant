import { combineReducers } from 'redux';

import authReducer from './authReducer';

const rootReducer = combineReducers({
  session: authReducer
});

export default rootReducer;
