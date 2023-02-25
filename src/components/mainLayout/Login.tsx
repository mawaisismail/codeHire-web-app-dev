import styles from "./login.module.scss";
import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { Container } from "@mui/material";
import { firebaseSignIn } from "../../../constants/utils/firebase";

export interface emailSignUp {
  email: string;
  password: string;
}

export const SignUpInitialValues: emailSignUp = {
  email: "",
  password: "",
};

export const signUpValidationSchema = Yup.object({
  email: Yup.string()
    .email("Please Enter Valid Email")
    .required("Email is Required"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Please enter Up to 8 character")
    .max(22, "Length Exceed"),
});

const fbSignIn = async ({ password, email }: emailSignUp) => {
  const user = await firebaseSignIn(email, password);
  if (user) {
    console.log("user", user);
  }
};

export const Login = () => {
  return (
    <Container maxWidth="sm">
      <div className={styles.main}>
        <p className={styles.heading}>SIGN IN</p>
        <Formik
          initialValues={SignUpInitialValues}
          validationSchema={signUpValidationSchema}
          onSubmit={async (values) => {
            fbSignIn(values);
            console.log(values);
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
              <label>PASSWORD</label>
              <Field name="password" />
              <ErrorMessage
                name="password"
                className={styles.error}
                component="div"
              />
            </div>
            <div className={styles.btn}>
              <button type="submit">Login</button>
            </div>
          </Form>
        </Formik>
      </div>
    </Container>
  );
};
