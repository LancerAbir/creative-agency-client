import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";

//** FireBase Config File  */
export const initializeAuthFramework = () => {
   if (firebase.apps.length === 0) {
      firebase.initializeApp(firebaseConfig);
   }
};

//** Google SignIN Handler */
export const googleSignINHandler = () => {
   const googleProvider = new firebase.auth.GoogleAuthProvider();
   return firebase
      .auth()
      .signInWithPopup(googleProvider)
      .then((res) => {
         const { displayName, photoURL, email } = res.user;
         const signedInUser = {
            isSignedIn: true,
            fastName: displayName,
            email: email,
            photo: photoURL,
            successful: true,
         };
         return signedInUser;
      })
      .catch((error) => {
         console.log(error);
         console.log(error.message);
      });
};

//** Google Sign Out Handler */
export const signOutHandler = () => {
   return firebase
      .auth()
      .signOut()
      .then((res) => {
         const signedOutUser = {
            isSignedIn: false,
            fastName: "",
            lastName: "",
            email: "",
            password: "",
            photo: "",
            successful: false,
         };
         return signedOutUser;
      })
      .catch((error) => {
         console.log(error);
         console.log(error.message);
      });
};
