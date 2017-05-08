import Firebase from 'firebase';
import {config} from './config';

export const firebaseApp = Firebase.initializeApp(config);
export const firebaseDB = firebaseApp.database();
