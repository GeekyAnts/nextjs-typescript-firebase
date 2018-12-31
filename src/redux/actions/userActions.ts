interface IUser {
  email: string;
  password: string;
  gender: string;
  dob: string;
  name: string;
}

export const setUser = (
  user: { email: string; gender: string; dob: string; name: string },
  error: any
) => ({
  type: 'SET_USER',
  payload: user,
  error
});

export const signInUser = ({ email, password }: IUser) => {
  return dispatch => {
    // sign in user here

    dispatch(
      setUser({ email, gender: 'gender', dob: 'dob', name: 'name' }, false)
    );
    return true;
  };
};
export const signUpUser = ({ email, gender, dob, name, password }: IUser) => {
  return async dispatch => {
    // regster user here

    await dispatch(setUser({ email, gender, dob, name }, false));
    return true;
  };
};
export const updateUser = (user: {
  email: string;
  gender: string;
  dob: string;
  name: string;
}) => {
  return async dispatch => {
    // regster user here

    await dispatch(setUser(user, false));
    return true;
  };
};
