import * as firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = 
  {
    apiKey: "AIzaSyDrVwFmh9KUyJApvxyr6Ap9vj-i9BdxB98",
    authDomain: "clothing-website-db-ed6b9.firebaseapp.com",
    databaseURL: "https://clothing-website-db-ed6b9.firebaseio.com",
    projectId: "clothing-website-db-ed6b9",
    storageBucket: "clothing-website-db-ed6b9.appspot.com",
    messagingSenderId: "669295317787",
    appId: "1:669295317787:web:55f385d04b6267fec3f9be",
    measurementId: "G-2CP1R0SBRJ"
  };

  export const createUserProfileDocument = async ( userAuth , additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`user/${userAuth.uid}`);

    const snapShot = await userRef.get(); 


    if(!snapShot.exists){
      const {displayName, email}= userAuth;
      const createdAt = new Date();
      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData 
        }) 
      }
      catch (error){
        console.log('error creating user', error.message);
      }
    } 
    return userRef;    
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new  firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt : 'select_account'}); 

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
