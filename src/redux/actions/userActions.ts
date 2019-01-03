import { IUserSignUp, IUser } from '../../interfaces';
import {
  fbSignInUser,
  fbSignUpUser,
  fbSignOut,
  fbCheckAuth
} from '../../firebase/auth';
import firebase from '../../firebase';

export const setUser = (user: IUser | { photoURL: string }, error: any) => ({
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
      if (user) {
        dispatch(setAuth(true, false));
        var userId = user.uid;
        return firebase
          .database()
          .ref('/user/' + userId)
          .once('value')
          .then(function(snapshot) {
            dispatch(
              setUser(
                { ...snapshot.val(), uid: userId, photoURL: user.photoURL },
                false
              )
            );
          });
      } else dispatch(setAuth(false, false));
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
    await fbSignUpUser(email, password)
      .then(user => {
        const ref = firebase
          .database()
          .ref()
          .child('user');
        ref.child(user.user.uid).set({ email, gender, dob, name });
        //  dispatch(setUser({ email, gender, dob, name }, false));
      })
      .catch(err => {
        //
      });
  };
};

export const updateUser = (uid, { email, gender, dob, name }) => {
  return async dispatch => {
    // regster user here
    const ref = firebase
      .database()
      .ref()
      .child('user');
    ref
      .child(uid)
      .set({ email, gender, dob, name })
      .then(() => dispatch(setUser({ email, gender, dob, name }, false)));

    return true;
  };
};

export const uploadProfilePicture = (
  file: File,
  uid: string,
  callback: (progress: number, status: boolean) => void
) => dispatch => {
  const storageRef = firebase
    .storage()
    .ref()
    .child('profilePictures/' + uid);
  const task = storageRef.put(file);
  task.on(
    'state_changed',
    (snapshot: {
      bytesTransferred: number;
      totalBytes: number;
      state: string;
    }) => {
      const percentage =
        (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      callback(percentage, false);
    },
    error => {
      callback(-1, false);
    },
    () => {
      callback(null, true);
      task.snapshot.ref.getDownloadURL().then(function(downloadURL) {
        dispatch(setUser({ photoURL: downloadURL }, false));
        const user = firebase.auth().currentUser;
        user.updateProfile({
          photoURL: downloadURL,
          displayName: null
        });
      });
    }
  );
};

export const signOutUser = () => {
  return async dispatch => {
    await fbSignOut().then(() => {
      dispatch(setUser(null, false));
      dispatch(setAuth(false, false));
    });
  };
};
