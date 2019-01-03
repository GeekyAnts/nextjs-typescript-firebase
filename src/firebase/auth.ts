import firebase from '.';

const auth = firebase.auth();

export const fbSignUpUser = (email, password) =>
  auth.createUserWithEmailAndPassword(email, password);

export const fbSignInUser = (email, password) =>
  auth.signInAndRetrieveDataWithEmailAndPassword(email, password);

export const fbCheckAuth = callback => auth.onAuthStateChanged(callback);
