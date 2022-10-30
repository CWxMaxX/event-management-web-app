import {
  GoogleAuthProvider,
  signInWithPopup,
  getRedirectResult,
  signInWithRedirect,
  getAuth,
} from "firebase/auth";
import { auth } from "../firebaseConfig";
import { addUser } from "./userApi";

// const googleProvider = new GoogleAuthProvider();
export const googleProvider = () => {
  const provider = new GoogleAuthProvider();

  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      localStorage.setItem("uid", user.uid);
      addUser(user);
      console.log("User ====>", result.user);
      if (user) {
        window.location.href("/home");
      }
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData?.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
};

export const getUID = () => {
  const uid = localStorage.getItem("uid");
  return uid;
};
