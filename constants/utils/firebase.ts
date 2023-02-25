import { getApp, getApps, initializeApp } from "firebase/app";
import {
  AuthError,
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  User,
} from "firebase/auth";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyClhcWeEa3QH92IhCYzjFitfcSCpx2WvGk",
  authDomain: "final-year-project-f1705.firebaseapp.com",
  projectId: "final-year-project-f1705",
  storageBucket: "final-year-project-f1705.appspot.com",
  messagingSenderId: "480741189252",
  appId: "1:480741189252:web:929c96c53115618df644d1",
  measurementId: "G-P266Z80NNW",
};

const firebaseApp = !getApps().length
  ? initializeApp(firebaseConfig)
  : getApp();
export const auth = getAuth(firebaseApp);
let user: User;
export const firebaseSignUp = async (email: string, password: string) => {
  await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      toast.success("Congratulation User Sign Up");
      user = userCredential.user;
    })
    .catch((error: AuthError) => {
      console.log(error.code);
      if (error.code === "auth/email-already-in-use") {
        toast.error(error.message);
      }
    });
  return user;
};

export const firebaseSignIn = async (email: string, password: string) => {
  return await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      return userCredential.user;
    })
    .catch((error: AuthError) => {
      console.log(error);
      console.log(error.message);
      console.log(error.code);
      if (error.code === "auth/wrong-password") {
        toast.error("Wrong Password");
      }
      if (error.code === "auth/email-already-in-use") {
        toast.error("Email Already in USe");
      }
      if (error.code === "auth/user-not-found") {
        toast.error("User not Found");
      }
      if (error.code === "auth/too-many-requests") {
        toast.error("Too Many Request");
      }
    });
};
