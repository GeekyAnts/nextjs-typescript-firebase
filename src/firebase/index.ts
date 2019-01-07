import firebase from 'firebase';
import fbconfig from '../../firebaseConfig.json';

const config = fbconfig;
if (!firebase.apps.length) firebase.initializeApp(config);

export default firebase;
