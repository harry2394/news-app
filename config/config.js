import firebase from 'firebase';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDV_l0S2GjY11lM1bxe5t62TjjjY7gtZvo',
  authDomain: 'fir-project-1e190.firebaseapp.com',
  projectId: 'fir-project-1e190',
  storageBucket: 'fir-project-1e190.appspot.com',
  messagingSenderId: '624049750597',
  appId: '1:624049750597:web:41dd5ce7c1b0db1989192c',
  measurementId: 'G-T2D4WNBB4J',
};

try {
  firebase.initializeApp(firebaseConfig);
} catch (err) {
  if (!/already exists/.test(err.message)) {
    console.error('Firebase initialization error', err.stack);
  }
}
const fire = firebase;
export default fire;
