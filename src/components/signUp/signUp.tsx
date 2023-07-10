import styles from "./signUp.module.scss";
import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { Dispatch, FC, useContext, useState } from "react";
import { firebaseSignUp } from "../../../constants/utils/firebase";
import { UserType } from "../../../constants/interfaces/userType";
import { useMutation } from "@apollo/client";
import { CREATE_USER } from "../../../constants/graphQL/user";
import { useRouter } from "next/router";
import Link from "next/link";
import { routes } from "../../../constants/routes";
import { clientSetCookie } from "../../../constants/utils/cookies";
import { GlobalContext } from "../../../utils/context/GlobalProvider";
import { setBaseUser } from "../../../utils/context/actions";

export interface emailSignUp {
  email: string;
  newPassword: string;
  confirmPassword: string;
}

export const SignUpInitialValues: emailSignUp = {
  email: "",
  newPassword: "",
  confirmPassword: "",
};

export const signUpValidationSchema = Yup.object({
  email: Yup.string()
    .email("Please enter valid email")
    .required("Email is required"),
  newPassword: Yup.string()
    .required("Password is required")
    .min(8, "Please enter up to 8 character")
    .max(22, "Length exceed")
    .matches(
      /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,}$/,
      "Please Add one Special Character"
    ),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("newPassword")], "Password not match")
    .required("Please enter confirm password"),
});

interface ISignUp {
  setCurrentStep: Dispatch<number>;
}

export const Signup: FC<ISignUp> = ({ setCurrentStep }) => {
  const { push } = useRouter();
  const [{}, dispatch] = useContext(GlobalContext);
  const [newPassword, setNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [createUser, createUserData] = useMutation(CREATE_USER, {
    fetchPolicy: "network-only",
  });

  const firebaseSignup = async (email: string, password: string) => {
    const user = await firebaseSignUp(email, password);
    if (user) {
      const info = {
        uid: user.uid,
        email: user.email,
        profileImageURL: user.photoURL,
        userName: user.displayName,
        userType: UserType.USER,
      };
      await createUser({
        variables: {
          userInputType: {
            userInfo: JSON.stringify(info),
          },
        },
      }).then((e) => {
        clientSetCookie({
          key: "baseUser",
          data: e.data.createUser,
        });
        dispatch(setBaseUser(e.data.createUser));
        setCurrentStep(1);
      });
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <div className={styles.cardLeft}>
          <Link href="/">
            <div className={styles.cardLogo} />
          </Link>
          <div className={styles.cardImage} />
        </div>
        <div className={styles.cardRight}>
          <div className={styles.cardContent}>
            <section className={styles.cardTitle}>
              <h2>Let's Get Started</h2>
              <p>Sign Up and get access to all the features of Codehire.</p>
            </section>
            <Formik
              initialValues={SignUpInitialValues}
              validationSchema={signUpValidationSchema}
              onSubmit={async (values) => {
                await firebaseSignup(values.email, values.newPassword);
              }}
            >
              <Form>
                <div className={styles.formGroup}>
                  <label htmlFor="email">Username</label>
                  <Field
                    type="email"
                    name="email"
                    placeholder="Enter your username"
                  />
                  <ErrorMessage
                    name="email"
                    className={styles.errorMessage}
                    component="div"
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="password">New Password</label>
                  <Field
                    name="newPassword"
                    type={newPassword ? "text" : "password"}
                    placeholder="Enter your new password"
                  />
                  <ErrorMessage
                    name="newPassword"
                    className={styles.errorMessage}
                    component="div"
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="confirmPassword">Confirm New Password</label>
                  <Field
                    name="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Please re-enter your new password"
                  />
                  <ErrorMessage
                    name="confirmPassword"
                    className={styles.errorMessage}
                    component="div"
                  />
                </div>
                {/*<div className={styles.checkWrapper}>*/}
                {/*  <div className={styles.checkContainer}>*/}
                {/*    <input*/}
                {/*      id="remember"*/}
                {/*      type="checkbox"*/}
                {/*      className={styles.checkBox}*/}
                {/*    />*/}
                {/*    <label htmlFor="remember">*/}
                {/*      I agree to the Terms and conditions*/}
                {/*    </label>*/}
                {/*  </div>*/}
                {/*</div>*/}
                <button type="submit" className={styles.submitButton}>
                  Sign Up
                </button>
              </Form>
            </Formik>
            <div className={styles.logIn}>
              <p>
                Already a member ?
                <a
                  onClick={() => push(routes.user.login)}
                  className={styles.loginLink}
                >
                  Sign In
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
