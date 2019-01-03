import { Reducer, AnyAction } from 'redux';

const INITIAL_STATE: boolean = null;

export const authReducer: Reducer<boolean, AnyAction> = (
  state = INITIAL_STATE,
  action
): boolean => {
  switch (action.type) {
    case 'SET_AUTH':
      return action.payload;
    default:
      return state;
  }
};
