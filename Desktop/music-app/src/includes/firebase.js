// import firebase from 'firebase/app';
import firebase from 'firebase/compat/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBO01JnJwUKl0A7p5hIbCWULieaZTs5ClE',
  authDomain: 'vue-music-app-6a02c.firebaseapp.com',
  projectId: 'vue-music-app-6a02c',
  storageBucket: 'vue-music-app-6a02c.appspot.com',
  messagingSenderId: '913958897249',
  appId: '1:913958897249:web:7810f82997313d24ef4c20',
};

// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);
