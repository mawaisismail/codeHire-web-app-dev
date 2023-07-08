import styles from "./login.module.scss";
import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { firebaseSignIn } from "../../../constants/utils/firebase";
import { useLazyQuery } from "@apollo/client";
import { GET_LOGIN_USER_BY_UID } from "../../../constants/graphQL/user";
import { useRouter } from "next/router";
import { routes } from "../../../constants/routes";
import { User } from "firebase/auth";
import Link from "next/link";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../../../utils/context/GlobalProvider";
import { setBaseUser } from "../../../utils/context/actions";
import { toast } from "react-toastify";
import { clientSetCookie } from "../../../constants/utils/cookies";
import { GET_LOGIN_COMPANY } from "../../../constants/graphQL/company";

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
  const [{ baseUser }, dispatch] = useContext(GlobalContext);
  const { push, asPath } = useRouter();
  const [getUserById, getUseridData] = useLazyQuery(GET_LOGIN_USER_BY_UID, {
    fetchPolicy: "network-only",
  });
  const [getCompanyById, getCompanyidData] = useLazyQuery(GET_LOGIN_COMPANY, {
    fetchPolicy: "network-only",
  });

  useEffect(() => {
    if (getUseridData?.data?.getLoginCompany) {
      toast.success("Login Successfull");
      clientSetCookie({
        key: "baseUser",
        data: getUseridData.data.getLoginCompany,
      });
      dispatch(setBaseUser(getUseridData.data.getLoginCompany));
      push(
        getUseridData.data.getLoginCompany.userType === "USER"
          ? routes.user.home
          : routes.company.home
      );
    }
  }, [getUseridData]);

  useEffect(() => {
    if (getCompanyidData?.data?.getLoginUser) {
      toast.success("Login Successfull");
      clientSetCookie({
        key: "baseUser",
        data: getUseridData.data.getLoginUser,
      });
      dispatch(setBaseUser(getUseridData.data.getLoginUser));
      push(
        getUseridData.data.getLoginUser.userType === "USER"
          ? routes.user.home
          : routes.company.home
      );
    }
  }, [getCompanyidData]);

  const getUserFun = async (uid: string) => {
    await getUserById({
      variables: {
        uid,
      },
    });
  };
  const getCompanyFun = async (uid: string) => {
    await getCompanyById({
      variables: {
        uid,
      },
    });
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
              <h2>Welcome Back !</h2>
              <p>Sign in to continue to Codehire.</p>
            </section>
            <Formik
              initialValues={SignUpInitialValues}
              validationSchema={signUpValidationSchema}
              onSubmit={async (values) => {
                const user = await fbSignIn(values);
                if (user) {
                  try {
                    asPath.includes("company")
                      ? getCompanyFun(user.uid)
                      : getUserFun(user.uid);
                  } catch (e) {
                    toast.error("something went wrong");
                  }
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
                  <Link href="/user/forgotpassword" className={styles.forget}>
                    Forgot Password?
                  </Link>
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
                  onClick={() =>
                    asPath.includes("company")
                      ? push(routes.company.signUp)
                      : push(routes.user.signUp)
                  }
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
