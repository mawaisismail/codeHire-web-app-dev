import React from "react";
import styled from "./forgetPassword.module.scss";
import { routes } from "../../../../constants/routes";
import { useRouter } from "next/router";
import Link from "next/link";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

export interface forgetPassword {
  email: string;
}

export const forgotPasswordInitialValues: forgetPassword = {
  email: "",
};

export const forgotPasswordValidationSchema = Yup.object({
  email: Yup.string()
    .email("Please enter valid email")
    .required("Email is required"),
});

const ForgetPassword = () => {
  const { push } = useRouter();
  return (
    <div className={styled.wrapper}>
      <div className={styled.card}>
        <div className={styled.cardLeft}>
          <Link href="/">
            <div className={styled.cardLogo} />
          </Link>
          <div className={styled.cardImage} />
        </div>
        <div className={styled.cardRight}>
          <div className={styled.cardContent}>
            <section className={styled.cardTitle}>
              <h2>Reset Password</h2>
              <p>Reset your password with Codehire.</p>
            </section>
            <Formik
              initialValues={forgotPasswordInitialValues}
              validationSchema={forgotPasswordValidationSchema}
              onSubmit={(value) => {
                console.log(value);
              }}
            >
              <Form>
                <div className={styled.alert_warning}>
                  Enter your Email and instructions will be sent to you!
                </div>

                <div className={styled.formGroup}>
                  <label htmlFor="email">Username/Email</label>
                  <Field
                    type="email"
                    name="email"
                    placeholder="Enter username or email"
                  />
                  <ErrorMessage
                    name="email"
                    className={styled.errorMessage}
                    component="div"
                  />
                </div>
                <button type="submit" className={styled.submitButton}>
                  Send Request
                </button>
              </Form>
            </Formik>
            <div className={styled.logIn}>
              <p>
                Remember It ?
                <a
                  onClick={() => push(routes.user.login)}
                  className={styled.loginLink}
                >
                  Go to Login
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
