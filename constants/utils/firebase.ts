import { getApp, getApps, initializeApp } from "firebase/app";
import {
  AuthError,
  createUserWithEmailAndPassword,
  EmailAuthProvider,
  getAuth,
  reauthenticateWithCredential,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  updatePassword,
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

export const firebaseSignIn = async (
  email: string,
  password: string
): Promise<User | void> => {
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

export const fireBaseResetPassword = async (
  email: string
): Promise<boolean> => {
  let isEmailSent = false;
  await sendPasswordResetEmail(auth, email)
    .then(() => {
      toast.success("Email send");
      isEmailSent = true;
    })
    .catch((error: AuthError) => {
      if (error.code === "auth/user-not-found") {
        toast.error("Email not Found");
      } else {
        toast.error("Error");
      }
    });
  return isEmailSent;
};

export const updateCurrentPassword = async (newPassword: string) => {
  // @ts-ignore
  await updatePassword(auth.currentUser, newPassword)
    .then(() => {
      toast.success("パスワードを更新しました");
    })
    .catch((error: AuthError) => {
      toast.success(error.message);
    });
};

export const changePassword = async (
  oldPassword: string,
  newPassword: string
) => {
  const credential = EmailAuthProvider.credential(
    auth?.currentUser?.email || "test@gmail.com",
    oldPassword
  );
  // @ts-ignore
  await reauthenticateWithCredential(auth.currentUser, credential)
    .then(() => {
      updateCurrentPassword(newPassword);
    })
    .catch((error: AuthError) => {
      if (error.code === "auth/wrong-password") {
        toast.error("Old Password Not Match");
      } else {
        toast.error("Error");
      }
    });
};
