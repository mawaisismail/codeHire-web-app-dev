import { FC, useContext, useEffect, useState } from "react";
import styles from "./applyJob.module.scss";
import { Container } from "@mui/material";
import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useLazyQuery, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import {
  APPLY_TO_JOB,
  GET_JOB_BY_ID,
} from "../../../../../constants/graphQL/job";
import { GlobalContext } from "../../../../../utils/context/GlobalProvider";
import { toast } from "react-toastify";
import { IJob } from "../../../../../constants/interfaces/jobs";
import { routes } from "../../../../../constants/routes";

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
  const { query, push } = useRouter();
  const [job, setJob] = useState<IJob | null>(null);
  const [getJob, { data, loading, error }] = useLazyQuery(GET_JOB_BY_ID);
  const [applyJob] = useMutation(APPLY_TO_JOB, {
    fetchPolicy: "network-only",
  });
  const [{ baseUser }] = useContext(GlobalContext);

  useEffect(() => {
    if (data?.getJobById) {
      setJob(data?.getJobById);
    }
  }, [data?.getJobById]);

  const getJobsForUser = async () => {
    await getJob({
      variables: {
        id: query.applyJob,
      },
    });
  };

  useEffect(() => {
    if (query?.applyJob) getJobsForUser();
  }, [query]);

  return (
    <>
      <Container maxWidth="md">
        <div className={styles.main}>
          <Formik
            initialValues={applyInitialValues}
            validationSchema={applyValidationSchema}
            onSubmit={async (values) => {
              try {
                await applyJob({
                  variables: {
                    jobApplyDto: {
                      ...values,
                      company_id: job?.companyID,
                      job_id: query.applyJob,
                      user_id: baseUser?.uid,
                    },
                  },
                });
                await push(routes.user.jobs);
              } catch (error) {
                toast.error("Something went wrong");
              }
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
