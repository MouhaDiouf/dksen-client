import { combineReducers } from 'redux';

import userReducer from './reducers/userReducer';
import appReducer from './reducers/appReducer';
const rootReducer = combineReducers({
  userReducer,
  appReducer,
});

export default rootReducer;
