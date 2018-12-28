import { Reducer, AnyAction } from 'redux';
import { Interface } from 'readline';

const INITIAL_STATE = {
  email: null
};

interface Iuser {
  email: string;
}
export const UserReducer: Reducer<Iuser, AnyAction> = (
  state = INITIAL_STATE,
  action
): Iuser => {
  switch (action.type) {
    case 'SET_USER': {
      return {
        ...state,
        ...action.payload
      };
    }
    default:
      return state;
  }
};
