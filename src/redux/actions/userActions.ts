interface IUser {
  email: string;
  password: string;
}

export const setUser = (user: { email: string }, error: any) => ({
  type: 'SET_USER',
  payload: user,
  error
});

export const signInUser = ({ email, password }: IUser) => {
  return dispatch => {
    // sign in user here

    dispatch(setUser({ email }, false));
    return true;
  };
};
export const signUpUser = ({ email, password }: IUser) => {
  return async dispatch => {
    // regster user here

    await dispatch(setUser({ email }, false));
    return true;
  };
};
