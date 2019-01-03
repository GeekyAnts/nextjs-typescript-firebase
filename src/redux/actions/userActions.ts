import { IUserSignUp, IUser } from '../../interfaces';
import { fbSignInUser, fbSignUpUser, fbCheckAuth } from '../../firebase/auth';
export const setUser = (user: IUser, error: any) => ({
  type: 'SET_USER',
  payload: user,
  error
});
export const setAuth = (status: boolean, error: any) => ({
  type: 'SET_AUTH',
  payload: status,
  error
});

export const fetchUser = () => {
  return dispatch => {
    fbCheckAuth(user => {
      user
        ? (dispatch(setAuth(true, false)), dispatch(setUser(user, false)))
        : dispatch(setAuth(false, false));
    });
  };
};

export const signInUser = ({
  email,
  password
}: {
  email: string;
  password: string;
}) => {
  return dispatch => {
    // sign in user here
    return fbSignInUser(email, password).then(async response => {
      await dispatch(
        setUser(
          {
            email: response.user.email,
            gender: 'gender',
            dob: 'dob',
            name: 'name'
          },
          false
        )
      );
      return response;
    });

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
    fbSignUpUser(email, password)
      .then(value => console.log(value))
      .catch(err => console.log(err));

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
