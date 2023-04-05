import styles from "./signUp.module.scss";
import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useState } from "react";
import { Container } from "@mui/material";
import { firebaseSignUp } from "../../../constants/utils/firebase";
import { UserType } from "../../../constants/interfaces/userType";
import { useMutation } from "@apollo/client";
import { CREATE_USER } from "../../../constants/graphQL/user";
import { useRouter } from "next/router";

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
    .max(22, "Length Exceed")
    .matches(
      /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,}$/,
      "Please Add one Special Character"
    ),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("newPassword")], "Password Not match")
    .required("Please Enter Confirm Password"),
});

export const Signup = () => {
  const { push } = useRouter();
  const [newPassword, setNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [createUser, createUserData] = useMutation(CREATE_USER, {
    fetchPolicy: "network-only",
  });

  const firebaseSignup = async (email: string, password: string) => {
    const user = await firebaseSignUp(email, password);
    if (user) {
      const userInputType = {
        uid: user.uid,
        email: user.email,
        profileImageURL: user.photoURL,
        userName: user.displayName,
        userType: UserType.USER,
      };
      await createUser({
        variables: {
          userInputType,
        },
      }).then((e) => {
        push("/");
      });
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
