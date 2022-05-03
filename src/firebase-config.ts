/* eslint-disable import/prefer-default-export */
/* eslint-disable @typescript-eslint/no-unused-vars */
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from 'firebase/app';
import { getFirestore } from '@firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyA2gRXEed3crMHhBgKMoyzbF8iDggwfm6U',
  authDomain: 'sk-kozara.firebaseapp.com',
  projectId: 'sk-kozara',
  storageBucket: 'sk-kozara.appspot.com',
  messagingSenderId: '620358009427',
  appId: '1:620358009427:web:d2a604753d221a65e3bca6',
  measurementId: 'G-EDM127H917',
};

const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
export const db = getFirestore(app);
