import { Dispatch, FC } from "react";
import styles from "./desired.module.scss";
import { Container } from "@mui/material";
import {
  jobWorkingStyles,
  jsFrameworks,
} from "../../../../../constants/utils/signUp";
import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useMutation } from "@apollo/client";
import { CREATE_USER } from "../../../../../constants/graphQL/user";

export const desireInitialValues = {
  desiredOccupation: [],
  firstChoiceOfWork: "",
  secondChoiceOfWork: "",
  employmentType: [],
  annualSalary: "",
  previousSalary: "",
};

export const desireValidationSchema = Yup.object({
  desiredOccupation: Yup.array().min(1).required(),
  firstChoiceOfWork: Yup.string().required(),
  secondChoiceOfWork: Yup.string().required(),
  employmentType: Yup.array().required(),
  annualSalary: Yup.string().required(),
  previousSalary: Yup.string().required(),
});

interface IDesired {
  info: object;
  setUserInfo: Dispatch<object>;
}

export const Desired: FC<IDesired> = ({ setUserInfo, info }) => {
  const [createUser, createUserData] = useMutation(CREATE_USER, {
    fetchPolicy: "network-only",
  });
  return (
    <>
      <Container maxWidth="md">
        <div className={styles.main}>
          <Formik
            initialValues={desireInitialValues}
            validationSchema={desireValidationSchema}
            onSubmit={async (values) => {
              await createUser({
                variables: {
                  userInputType: {
                    userInfo: JSON.stringify({
                      ...info,
                      desire: { ...values },
                    }),
                  },
                },
              }).catch((e) => {
                console.log(e.error);
              });
            }}
          >
            <Form>
              <p>Desired Occupation</p>
              <div className={styles.checkbox_main}>
                {jsFrameworks.map((name) => (
                  <div
                    key={`profile-checkbox-${name}`}
                    className={styles.checkbox_content}
                  >
                    <Field
                      type="checkbox"
                      name="desiredOccupation"
                      value={name}
                    />
                    <label htmlFor={`check-${name}`}>{name}</label>
                  </div>
                ))}
                <ErrorMessage name="desiredOccupation" component="div" />
              </div>
              <div className={styles.input_main}>
                <div className={styles.input_wrapper}>
                  <p className={styles.label}>First Choice of Location</p>
                  <Field
                    type="text"
                    name="firstChoiceOfWork"
                    placeholder="Lahore"
                  />
                  <ErrorMessage name="firstChoiceOfWork" component="div" />
                </div>
                <div className={styles.input_wrapper}>
                  <p className={styles.label}>First Choice of Location</p>
                  <Field
                    type="text"
                    name="secondChoiceOfWork"
                    placeholder="Karachi"
                  />
                  <ErrorMessage name="secondChoiceOfWork" component="div" />
                </div>
              </div>
              <p>Working Style</p>
              <div className={styles.checkbox_main}>
                {jobWorkingStyles.map((name) => (
                  <div
                    key={`profile-checkbox-${name}`}
                    className={styles.checkbox_content}
                  >
                    <Field type="checkbox" name="employmentType" value={name} />
                    <label htmlFor={`check-${name}`}>{name}</label>
                  </div>
                ))}
                <ErrorMessage name="employmentType" component="div" />
              </div>
              <div className={styles.input_main}>
                <div className={styles.input_wrapper}>
                  <p className={styles.label}>Desire Salary</p>
                  <Field
                    type="text"
                    name="annualSalary"
                    placeholder="10,000,00/-"
                  />
                  <ErrorMessage name="annualSalary" component="div" />
                </div>
                <div className={styles.input_wrapper}>
                  <p className={styles.label}>Previous Salary</p>
                  <Field
                    type="text"
                    name="previousSalary"
                    placeholder="10,000,00/-"
                  />
                  <ErrorMessage name="previousSalary" component="div" />
                </div>
              </div>
              <div className={styles.button_wrapper}>
                <button type="submit">Finish</button>
              </div>
            </Form>
          </Formik>
        </div>
      </Container>
    </>
  );
};
