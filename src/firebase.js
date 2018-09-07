import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyBGDtBDT4VsG0C_wP1nbB7hPEeljgoicLo',
  authDomain: 'birdar-7c4c4.firebaseapp.com',
  databaseURL: 'https://birdar-7c4c4.firebaseio.com',
  projectId: 'birdar-7c4c4',
  storageBucket: 'birdar-7c4c4.appspot.com',
  messagingSenderId: '469338950511',
};

firebase.initializeApp(config);

export default firebase;
