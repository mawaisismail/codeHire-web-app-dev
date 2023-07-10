import { FC, useState } from "react";
import styles from "./jobCreateForm.module.scss";
import { Container } from "@mui/material";
import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import {
  jobWorkingStyles,
  jsFrameworks,
} from "../../../../../constants/utils/signUp";
import { CREATE_JOB } from "../../../../../constants/graphQL/job";
import { uploadFile } from "../../../../../utils/file-upload-service";
import { toast } from "react-toastify";
import { routes } from "../../../../../constants/routes";

export const jobInitialValues = {
  title: "",
  description: "",
  responsibilities: "",
  qualification: "",
  skills: [],
  experience: "",
  employmentType: [],
  position: "",
  offer_salary: "",
  coverImg: "",
  location: "",
  freeWords: "",
};

export const jobValidationSchema = Yup.object({
  title: Yup.string().required("Title is Required"),
  description: Yup.string().required("Description is Required"),
  responsibilities: Yup.string().required("This field Required"),
  qualification: Yup.string().required("Qualification is Required"),
  skills: Yup.array()
    .required("Skills is Required")
    .min(2, "Please Select Min 2"),
  experience: Yup.string().required("Experience is Required"),
  employmentType: Yup.array()
    .required("Field is Required")
    .min(2, "Please select Minimum 2"),
  position: Yup.string().required("Position is Required"),
  offer_salary: Yup.number().required("Salary is Required"),
  location: Yup.string().required("Please enter Location"),
  freeWords: Yup.string().required("Please enter Location"),
});

export const JobCreateForm: FC = () => {
  const { push } = useRouter();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [createJob] = useMutation(CREATE_JOB, {
    fetchPolicy: "network-only",
  });
  return (
    <>
      <Container maxWidth="md">
        <div className={styles.main}>
          <p className="font-bold text-gray-500 text-2xl py-8">Create Job</p>
          <div className="flex justify-center items-center">
            <div
              style={
                selectedFile
                  ? {
                      backgroundImage: `url(${URL.createObjectURL(
                        selectedFile
                      )})`,
                    }
                  : {}
              }
              className={`relative ${styles.profileImage}`}
            >
              <input
                type="file"
                accept="image/*"
                onChange={(e) => {
                  e?.target?.files &&
                    e?.target?.files[0] &&
                    setSelectedFile(e.target.files[0]);
                }}
                className="absolute h-full w-full z-10 opacity-0"
              />
            </div>
          </div>
          <Formik
            initialValues={jobInitialValues}
            validationSchema={jobValidationSchema}
            onSubmit={async (values) => {
              try {
                let file;
                if (selectedFile) {
                  file = await uploadFile(selectedFile);
                }
                await createJob({
                  variables: {
                    jobInput: {
                      jobInfo: JSON.stringify({
                        ...values,
                        coverImg: file || null,
                      }),
                    },
                  },
                });
                push(routes.company.jobs);
              } catch (e) {
                toast.error("Something went Wrong");
              }
            }}
          >
            <Form>
              <div className={styles.input_main}>
                <div className={styles.input_wrapper}>
                  <p className={styles.label}>Title</p>
                  <Field
                    type="text"
                    name="title"
                    placeholder="Software Engineer"
                  />
                  <ErrorMessage
                    className={styles.error}
                    name="title"
                    component="div"
                  />
                </div>
              </div>
              <div className={styles.input_main}>
                <div className={styles.input_wrapper}>
                  <p className={styles.label}>Position</p>
                  <Field
                    type="text"
                    name="position"
                    placeholder="JS Develper"
                  />
                  <ErrorMessage
                    className={styles.error}
                    name="position"
                    component="div"
                  />
                </div>
                <div className={styles.input_wrapper}>
                  <p className={styles.label}>Experience</p>
                  <Field type="text" name="experience" placeholder="1 Year" />
                  <ErrorMessage
                    className={styles.error}
                    name="experience"
                    component="div"
                  />
                </div>
              </div>
              <div className={styles.input_main}>
                <div className={styles.input_wrapper}>
                  <p className={styles.label}>Description</p>
                  <Field
                    as="textarea"
                    rows={5}
                    type="text"
                    name="description"
                  />
                  <ErrorMessage
                    className={styles.error}
                    name="description"
                    component="div"
                  />
                </div>
              </div>
              <div className={styles.checkbox_main}>
                {jsFrameworks.map((name) => (
                  <div
                    key={`profile-checkbox-${name}`}
                    className={styles.checkbox_content}
                  >
                    <Field type="checkbox" name="skills" value={name} />
                    <label htmlFor={`check-${name}`}>{name}</label>
                  </div>
                ))}
              </div>
              <ErrorMessage
                className={styles.error}
                name="skills"
                component="div"
              />
              <div className={styles.input_main}>
                <div className={styles.input_wrapper}>
                  <p className={styles.label}>Offer Salary</p>
                  <Field
                    type="number"
                    name="offer_salary"
                    placeholder="200,000/-"
                  />
                  <ErrorMessage
                    className={styles.error}
                    name="offer_salary"
                    component="div"
                  />
                </div>
                <div className={styles.input_wrapper}>
                  <p className={styles.label}>Location</p>
                  <Field type="text" name="location" placeholder="Lahores" />
                  <ErrorMessage
                    className={styles.error}
                    name="location"
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
                className={styles.error}
                name="employmentType"
                component="div"
              />
              <div className={styles.input_main}>
                <div className={styles.input_wrapper}>
                  <p className={styles.label}>Responsibilities</p>
                  <Field
                    as="textarea"
                    rows={5}
                    type="text"
                    name="responsibilities"
                  />
                  <ErrorMessage
                    className={styles.error}
                    name="responsibilities"
                    component="div"
                  />
                </div>
              </div>
              <div className={styles.input_main}>
                <div className={styles.input_wrapper}>
                  <p className={styles.label}>Qualification</p>
                  <Field
                    as="textarea"
                    rows={5}
                    type="text"
                    name="qualification"
                  />
                  <ErrorMessage
                    className={styles.error}
                    name="qualification"
                    component="div"
                  />
                </div>
              </div>
              <div className={styles.input_main}>
                <div className={styles.input_wrapper}>
                  <p className={styles.label}>Description</p>
                  <Field
                    as="textarea"
                    rows={5}
                    type="text"
                    name="description"
                  />
                  <ErrorMessage
                    className={styles.error}
                    name="description"
                    component="div"
                  />
                </div>
              </div>
              <div className={styles.input_main}>
                <div className={styles.input_wrapper}>
                  <p className={styles.label}>Free Words</p>
                  <Field as="textarea" rows={5} type="text" name="freeWords" />
                  <ErrorMessage
                    className={styles.error}
                    name="freeWords"
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
