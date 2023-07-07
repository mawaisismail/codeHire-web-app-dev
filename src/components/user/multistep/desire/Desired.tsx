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
import { UPDATE_USER_INFO } from "../../../../../constants/graphQL/user";
import { useRouter } from "next/router";
import { routes } from "../../../../../constants/routes";

export const desireInitialValues = {
  desiredOccupation: [],
  firstChoiceOfWork: "",
  secondChoiceOfWork: "",
  employmentType: [],
  annualSalary: "",
  previousSalary: "",
};

export const desireValidationSchema = Yup.object({
  desiredOccupation: Yup.array()
    .min(1, "Please select at least 1")
    .required("Desired occupation is required"),
  firstChoiceOfWork: Yup.string().required("Please select at least 1"),
  secondChoiceOfWork: Yup.string().required("Please enter second choice"),
  employmentType: Yup.array()
    .min(1, "Please select at least 1")
    .required("Employment type is required"),
  annualSalary: Yup.string().required("Annual salary is required"),
  previousSalary: Yup.string().required("Previous salary is required"),
});

interface IDesired {
  info: object;
  setUserInfo: Dispatch<object>;
}

export const Desired: FC<IDesired> = ({ setUserInfo, info }) => {
  const { push } = useRouter();
  const [updateUser, updateUserData] = useMutation(UPDATE_USER_INFO, {
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
              await updateUser({
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
              await push(routes.user.home);
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
              </div>
              <ErrorMessage
                className={styles.input_error}
                name="desiredOccupation"
                component="div"
              />
              <div className={styles.input_main}>
                <div className={styles.input_wrapper}>
                  <p className={styles.label}>First Choice of Location</p>
                  <Field
                    type="text"
                    name="firstChoiceOfWork"
                    placeholder="Lahore"
                  />
                  <ErrorMessage
                    className={styles.input_error}
                    name="firstChoiceOfWork"
                    component="div"
                  />
                </div>
                <div className={styles.input_wrapper}>
                  <p className={styles.label}>First Choice of Location</p>
                  <Field
                    type="text"
                    name="secondChoiceOfWork"
                    placeholder="Karachi"
                  />
                  <ErrorMessage
                    className={styles.input_error}
                    name="secondChoiceOfWork"
                    component="div"
                  />
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
              </div>
              <ErrorMessage
                className={styles.input_error}
                name="employmentType"
                component="div"
              />
              <div className={styles.input_main}>
                <div className={styles.input_wrapper}>
                  <p className={styles.label}>Desire Salary</p>
                  <Field
                    type="text"
                    name="annualSalary"
                    placeholder="10,000,00/-"
                  />
                  <ErrorMessage
                    className={styles.input_error}
                    name="annualSalary"
                    component="div"
                  />
                </div>
                <div className={styles.input_wrapper}>
                  <p className={styles.label}>Previous Salary</p>
                  <Field
                    type="text"
                    name="previousSalary"
                    placeholder="10,000,00/-"
                  />
                  <ErrorMessage
                    className={styles.input_error}
                    name="previousSalary"
                    component="div"
                  />
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
