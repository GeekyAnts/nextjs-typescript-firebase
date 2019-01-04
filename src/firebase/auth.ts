import firebase from '.';

const auth = firebase.auth();

export const fbSignUpUser = (email, password) =>
  auth.createUserWithEmailAndPassword(email, password);

export const fbSignInUser = (email, password) =>
  auth.signInAndRetrieveDataWithEmailAndPassword(email, password);

export const fbSignOut = () => auth.signOut();

export const fbCheckAuth = callback => auth.onAuthStateChanged(callback);

export const fbReauthenticateUser = currentPassword => {
  const user = firebase.auth().currentUser;
  const cred = firebase.auth.EmailAuthProvider.credential(
    user.email,
    currentPassword
  );
  return user.reauthenticateWithCredential(cred);
};

export const fbUpdatePassword = (currentPassword, newPassword) =>
  fbReauthenticateUser(currentPassword).then(() => {
    const user = firebase.auth().currentUser;
    return user.updatePassword(newPassword);
  });
