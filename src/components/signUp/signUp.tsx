import styles from "./signUp.module.scss";
import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useState } from "react";
import { Container } from "@mui/material";
import { firebaseSignUp } from "../../../constants/utils/firebase";

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
    .email("Please Enter Valid Email")
    .required("Email is Required"),
  newPassword: Yup.string()
    .required("Password is required")
    .min(8, "Please enter Up to 8 character")
    .max(22, "Length Exceed"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("newPassword")], "Password Not match")
    .required("Please Enter Confirm Password"),
});

export const Signup = () => {
  const [newPassword, setNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const firebaseSignup = async (email: string, password: string) => {
    const user = await firebaseSignUp(email, password);
    if (user) {
      const data = {
        uid: user.uid,
        email: user.email,
        profileImageURL: user.photoURL,
        userName: user.displayName,
        target: "",
      };
      console.log(data);
    }
  };

  return (
    <Container maxWidth="sm">
      <div className={styles.main}>
        <p className={styles.heading}>SIGN UP</p>
        <Formik
          initialValues={SignUpInitialValues}
          validationSchema={signUpValidationSchema}
          onSubmit={async (values) => {
            await firebaseSignup(values.email, values.newPassword);
          }}
        >
          <Form>
            <div className={styles.input_main}>
              <label>EMAIL</label>
              <Field name="email" type="text" />
              <ErrorMessage
                name="email"
                className={styles.error}
                component="div"
              />
            </div>
            <div className={styles.input_main}>
              <label>NEW PASSWORD</label>
              <Field
                name="newPassword"
                type={newPassword ? "text" : "password"}
              />
              <ErrorMessage
                name="newPassword"
                className={styles.error}
                component="div"
              />
            </div>
            <div className={styles.input_main}>
              <label>CONFIRM NEW PASSWORD</label>
              <Field
                name="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
              />
              <ErrorMessage
                name="confirmPassword"
                className={styles.error}
                component="div"
              />
            </div>
            <div className={styles.btn}>
              <button type="submit">CHANGE YOUR PASSWORD</button>
            </div>
          </Form>
        </Formik>
      </div>
    </Container>
  );
};
