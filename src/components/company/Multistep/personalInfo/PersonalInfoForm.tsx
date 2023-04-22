import { FC } from "react";
import styles from "./PersonalInfoForm.module.scss";
import { Container } from "@mui/material";
import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";

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

export const PersonalInfoForm: FC = () => {
  return (
    <>
      <Container maxWidth="sm">
        <div className={styles.main}>
          <Formik
            initialValues={desireInitialValues}
            validationSchema={desireValidationSchema}
            onSubmit={async (values) => {
              console.log(values);
            }}
          >
            <Form>
              <p className={styles.heading}>Company Information</p>
              <div className={styles.input_main}>
                <div className={styles.input_wrapper}>
                  <p className={styles.label}>Company Name</p>
                  <Field
                    type="text"
                    name="name"
                    placeholder="Southville Solution"
                  />
                  <ErrorMessage name="name" component="div" />
                </div>
              </div>
              <div className={styles.input_main}>
                <div className={styles.input_wrapper}>
                  <p className={styles.label}>Owner Name</p>
                  <Field type="text" name="owner" placeholder="Awais" />
                  <ErrorMessage name="owner" component="div" />
                </div>
              </div>
              <div className={styles.input_main}>
                <div className={styles.input_wrapper}>
                  <p className={styles.label}>Employees</p>
                  <Field type="text" name="employee_no" placeholder="Awais" />
                  <ErrorMessage name="employee_no" component="div" />
                </div>
              </div>
              <div className={styles.input_main}>
                <div className={styles.input_wrapper}>
                  <p className={styles.label}>Location</p>
                  <Field type="text" name="location" placeholder="Lahore" />
                  <ErrorMessage name="location" component="div" />
                </div>
              </div>
              <div className={styles.input_main}>
                <div className={styles.input_wrapper}>
                  <p className={styles.label}>Website</p>
                  <Field
                    type="text"
                    name="website"
                    placeholder="https://www.google.com"
                  />
                  <ErrorMessage name="website" component="div" />
                </div>
              </div>
              <div className={styles.input_main}>
                <div className={styles.input_wrapper}>
                  <p className={styles.label}>Established</p>
                  <Field
                    type="number"
                    name="phone"
                    placeholder="+42-00000001"
                  />
                  <ErrorMessage name="phone" component="div" />
                </div>
              </div>
              <div className={styles.input_main}>
                <div className={styles.input_wrapper}>
                  <p className={styles.label}>Established</p>
                  <Field
                    type="text"
                    name="established"
                    placeholder="July 2022"
                  />
                  <ErrorMessage name="established" component="div" />
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
