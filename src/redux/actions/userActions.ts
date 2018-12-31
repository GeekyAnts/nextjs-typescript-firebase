import { IUserSignUp, IUser } from '../../interfaces';

export const setUser = (user: IUser, error: any) => ({
  type: 'SET_USER',
  payload: user,
  error
});

export const signInUser = ({
  email,
  password
}: {
  email: string;
  password: string;
}) => {
  return dispatch => {
    // sign in user here

    dispatch(
      setUser({ email, gender: 'gender', dob: 'dob', name: 'name' }, false)
    );
    return true;
  };
};
export const signUpUser = ({
  email,
  gender,
  dob,
  name,
  password
}: IUserSignUp) => {
  return async dispatch => {
    // regster user here

    await dispatch(setUser({ email, gender, dob, name }, false));
  };
};
export const updateUser = (user: IUser) => {
  return async dispatch => {
    // regster user here

    await dispatch(setUser(user, false));
    return true;
  };
};
