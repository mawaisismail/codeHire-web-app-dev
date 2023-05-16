import { FC, useContext } from "react";
import styles from "./applyJob.module.scss";
import { Container } from "@mui/material";
import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { APPLY_TO_JOB } from "../../../../../constants/graphQL/job";
import { GlobalContext } from "../../../../../utils/context/GlobalProvider";

export const applyInitialValues = {
  name: "",
  coverLetter: "",
  message: "",
  email: "",
};

export const applyValidationSchema = Yup.object({
  name: Yup.string().required("Name is Required"),
  coverLetter: Yup.string().required("Cover Letter is Required"),
  message: Yup.string().required("Message is Required"),
  email: Yup.string()
    .email("Please Enter Correct Email")
    .required("Email is Required"),
});

export const ApplyJobForm: FC = () => {
  const [{ baseUser }] = useContext(GlobalContext);
  const { push, query } = useRouter();
  const [applyJob] = useMutation(APPLY_TO_JOB, {
    fetchPolicy: "network-only",
  });
  return (
    <>
      <Container maxWidth="md">
        <div className={styles.main}>
          <Formik
            initialValues={applyInitialValues}
            validationSchema={applyValidationSchema}
            onSubmit={async (values) => {
              await applyJob({
                variables: {
                  jobApplyDto: {
                    ...values,
                    company_id: "DU4JGEuSOzXk2hEoUTvhbCjD1DE2",
                    job_id: query.applyJob,
                    user_id: baseUser?.uid,
                  },
                },
              });
              console.log(values);
            }}
          >
            <Form>
              <p className={styles.heading}>Apply To Jo</p>
              <div className={styles.input_main}>
                <div className={styles.input_wrapper}>
                  <p className={styles.label}>Name</p>
                  <Field type="text" name="name" />
                  <ErrorMessage
                    className={styles.error}
                    name="name"
                    component="div"
                  />
                </div>
              </div>
              <div className={styles.input_main}>
                <div className={styles.input_wrapper}>
                  <p className={styles.label}>Cover Letter</p>
                  <Field
                    as="textarea"
                    rows={10}
                    type="text"
                    name="coverLetter"
                  />
                  <ErrorMessage
                    className={styles.error}
                    name="coverLetter"
                    component="div"
                  />
                </div>
              </div>
              <div className={styles.input_main}>
                <div className={styles.input_wrapper}>
                  <p className={styles.label}>Message</p>
                  <Field as="textarea" rows={5} type="text" name="message" />
                  <ErrorMessage
                    className={styles.error}
                    name="message"
                    component="div"
                  />
                </div>
              </div>
              <div className={styles.input_main}>
                <div className={styles.input_wrapper}>
                  <p className={styles.label}>Email</p>
                  <Field type="text" name="email" />
                  <ErrorMessage
                    className={styles.error}
                    name="email"
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
