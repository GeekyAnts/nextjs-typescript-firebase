import { combineReducers } from 'redux';
import { UserReducer } from './userReducers';
import { authReducer } from './authReducers';

const RootReducer = combineReducers({
  user: UserReducer,
  auth: authReducer
});

export default RootReducer;
