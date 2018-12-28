export const setUser = (user, error) => ({
  type: 'SET_USER',
  payload: user,
  error
});

export const signInUser = ({ email, password }) => {
  return dispatch => {
    // sign in user here

    dispatch(setUser({ email }, false));
    return true;
  };
};
export const signUpUser = ({ email, password }) => {
  return dispatch => {
    // regster user here

    dispatch(setUser({ email }, false));
    return true;
  };
};
