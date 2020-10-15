import React, { useContext } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import logo from "../../images/logos/logo.png";
import googleLogo from "../../images/logos/google-icon.png";
import { UserContext } from "../../App";

//** Fire Base */
import * as firebase from "firebase/app";
import firebaseConfig from "./firebase.config";
import "firebase/auth";

//** Login Manager */
import { googleSignINHandler } from "./LoginManager.js";
import { useState } from "react";

const UserLogin = () => {
   //** Data Come Form Context API */
   const [loggedInUser, setLoggedInUser] = useContext(UserContext);

   //** Firebase Config */
   if (firebase.apps.length === 0) {
      firebase.initializeApp(firebaseConfig);
   }

   //** useState Hook */
   const [newUser, setNewUser] = useState(false);

   //** useHistory & useLocation for state location */
   let history = useHistory();
   let location = useLocation();
   const { from } = location.state || { from: { pathname: "/order" } };

   // //** useState Hook */
   const [user, setUser] = useState({
      isSignedIn: false,
      fastName: "",
      lastName: "",
      email: "",
      password: "",
      photo: "",
      error: "",
      successful: false,
   });

   //** Google SignIN Handler */
   const googleSignIn = () => {
      googleSignINHandler()
         .then((res) => {
            setUser(res);
            setLoggedInUser(res);
            // storeAuthToken();
            history.replace(from);
         })
         .catch((error) => {
            console.log(error);
            console.log(error.message);
            setUser(error.message);
         });
   };

   return (
      <div className="row text-center">
         <div className="col-md-6 offset-md-3">
            {/* <!--  Root Logo --!> */}
            <div className="root-logo">
               <Link to="/">
                  <img src={logo} alt="" />
               </Link>
            </div>
            {/* <!--  Login Box --!> */}
            <div className="login-box">
               {newUser ? (
                  <h2>Create an account</h2>
               ) : (
                  <h2> Login As A User </h2>
               )}
               {/* <!--  Google SignIN --!> */}
               <button onClick={googleSignIn} className="btn">
                  <img src={googleLogo} alt="" /> Continue with Google
               </button>
               <p>
                  Don’ t have an account ?
                  <span onClick={() => setNewUser(!newUser)} name="newUser">
                     {newUser ? " login" : " Create an account"}
                  </span>
               </p>
            </div>
         </div>
      </div>
   );
};

export default UserLogin;
