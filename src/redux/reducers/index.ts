import { combineReducers } from 'redux';
import { UserReducer } from './userReducers';

const RootReducer = combineReducers({
  user: UserReducer
});

export default RootReducer;
