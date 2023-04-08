import styles from "./login.module.scss";
import * as Yup from "yup";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {Container} from "@mui/material";
import {firebaseSignIn} from "../../../constants/utils/firebase";
import {useLazyQuery} from "@apollo/client";
import {GET_USER_BY_UID} from "../../../constants/graphQL/user";
import {useRouter} from "next/router";
import {routes} from "../../../constants/routes";
import {User} from "firebase/auth";
import Link from "next/link";

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
        .email("Please enter valid email")
        .required("Email is required"),
    password: Yup.string()
        .required("Password is required")
        .min(8, "Please enter up to 8 character")
        .max(22, "Length exceed"),
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
        // <Container maxWidth="sm">
        //   <div className={styles.main}>
        //     <p className={styles.heading}>SIGN IN</p>
        //     <Formik
        //       initialValues={SignUpInitialValues}
        //       validationSchema={signUpValidationSchema}
        //       onSubmit={async (values) => {
        //         const user = await fbSignIn(values);
        //         if (user) {
        //           await getUserFun(user.uid);
        //         }
        //       }}
        //     >
        //       <Form>
        //         <div className={styles.input_main}>
        //           <label>EMAIL</label>
        //           <Field name="email" type="text" />
        //           <ErrorMessage
        //             name="email"
        //             className={styles.error}
        //             component="div"
        //           />
        //         </div>
        //         <div className={styles.input_main}>
        //           <label>PASSWORD</label>
        //           <Field name="password" type="password" />
        //           <ErrorMessage
        //             name="password"
        //             className={styles.error}
        //             component="div"
        //           />
        //         </div>
        //         <div className={styles.btn}>
        //           <button type="submit">Login</button>
        //         </div>
        //       </Form>
        //     </Formik>
        //   </div>
        // </Container>

        //Junaid
        <div className={styles.wrapper}>
            <div className={styles.card}>
                <div className={styles.cardLeft}>
                    <Link href="/">
                        <div className={styles.cardLogo}/>
                    </Link>
                    <div className={styles.cardImage}/>
                </div>
                <div className={styles.cardRight}>
                    <div className={styles.cardContent}>
                        <section className={styles.cardTitle}>
                            <h2>Welcome Back !</h2>
                            <p>Sign in to continue to Codehire.</p>
                        </section>
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
                                    <label htmlFor="password">Password</label>
                                    <Field
                                        type="password"
                                        name="password"
                                        placeholder="Enter your password"
                                    />
                                    <ErrorMessage
                                        name="password"
                                        className={styles.errorMessage}
                                        component="div"
                                    />
                                </div>
                                <div className={styles.checkWrapper}>
                                    <div className={styles.checkContainer}>
                                        <input  id="remember" type="checkbox"  className={styles.checkBox}/>
                                        <label htmlFor="remember">Remember me</label>
                                    </div>
                                  <Link href="/user/forgotpassword" className={styles.forget} >Forgot Password?</Link>
                                </div>
                                <button type="submit" className={styles.submitButton}>
                                    Sign In
                                </button>
                            </Form>
                        </Formik>
                        <div className={styles.logIn}>
                            <p>
                                Don't have an account ?
                                <a
                                    onClick={() => push(routes.user.signUp)}
                                    className={styles.loginLink}
                                >
                                    Sign Up
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
