import styles from "./login.module.scss";
import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { Container } from "@mui/material";
import { firebaseSignIn } from "../../../constants/utils/firebase";
import { useLazyQuery } from "@apollo/client";
import { GET_USER_BY_UID } from "../../../constants/graphQL/user";
import { useRouter } from "next/router";
import { routes } from "../../../constants/routes";
import { User } from "firebase/auth";

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

const fbSignIn = async ({
  password,
  email,
}: emailSignUp): Promise<User | void> => {
  return await firebaseSignIn(email, password);
};

export const Login = () => {
  const { push } = useRouter();
  const [getUserById] = useLazyQuery(GET_USER_BY_UID, {
    fetchPolicy: "network-only",
  });

  const getUserFun = async (uid: string) => {
    await getUserById({
      variables: {
        uid,
      },
    }).then(() => {
      push(routes.user.home);
    });
  };

  return (
    <Container maxWidth="sm">
      <div className={styles.main}>
        <p className={styles.heading}>SIGN IN</p>
        <Formik
          initialValues={SignUpInitialValues}
          validationSchema={signUpValidationSchema}
          onSubmit={async (values) => {
            const user = await fbSignIn(values);
            if (user) {
              await getUserFun(user.uid);
            }
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
              <Field name="password" type="password" />
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
