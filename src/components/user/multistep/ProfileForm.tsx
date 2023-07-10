import { Dispatch, FC } from "react";
import styles from "./profile.module.scss";
import { Container } from "@mui/material";
import {
  jsFrameworks,
  spokenLanguages,
} from "../../../../constants/utils/signUp";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

interface IProfileForm {
  setCurrentStep: Dispatch<number>;
  setUserInfo: Dispatch<object>;
}

export const profileInitialValues = {
  first_name: "",
  last_name: "",
  otherEmail: "",
  languages: "",
  country: "",
  postalCode: "",
  building: "",
  phone: "",
  other: "",
  birthday: "",
  gender: "",
  about: "",
  profession: "",
  otherOccupation: [],
  skills: [],
};

export const profileValidationSchema = Yup.object({
  first_name: Yup.string().required("First name is required"),
  last_name: Yup.string().required("Last name is required"),
  about: Yup.string().required("about is required"),
  otherEmail: Yup.string().required("Other email is required"),
  languages: Yup.array()
    .min(1, "Please select at least one option")
    .required("skills are required"),
  country: Yup.string().required("Country is required"),
  postalCode: Yup.string().required("Postal code is required"),
  building: Yup.string().required("Building is required"),
  phone: Yup.string().required("Phone is required"),
  other: Yup.string().required("Other is required"),
  birthday: Yup.date().required("Birthday is required"),
  gender: Yup.string().required("Gender is required"),
  profession: Yup.string().required("Profession is required"),
  otherOccupation: Yup.array()
    .min(1, "Please select at least one option")
    .required("Other occupation is required"),
  skills: Yup.array()
    .min(1, "Please select at least one option")
    .required("skills are required"),
});

export const ProfileForm: FC<IProfileForm> = ({
  setCurrentStep,
  setUserInfo,
}) => {
  return (
    <>
      <Container maxWidth="md">
        <div className={styles.main}>
          <Formik
            initialValues={profileInitialValues}
            validationSchema={profileValidationSchema}
            onSubmit={async (values) => {
              setUserInfo({
                ...values,
                address: {
                  Country: values.country,
                  postalCode: values.postalCode,
                  building: values.building,
                },
              });
              setCurrentStep(2);
            }}
          >
            <Form>
              <div className={styles.input_main}>
                <div className={styles.input_wrapper}>
                  <p className={styles.label}>First Name</p>
                  <Field type="text" name="first_name" placeholder="Joe" />
                  <ErrorMessage
                    className={styles.input_error}
                    name="first_name"
                    component="div"
                  />
                </div>
                <div className={styles.input_wrapper}>
                  <p className={styles.label}>Last Name</p>
                  <Field type="text" name="last_name" placeholder="Doe" />
                  <ErrorMessage
                    className={styles.input_error}
                    name="last_name"
                    component="div"
                  />
                </div>
              </div>
              <div className={styles.input_main}>
                <div className={styles.input_wrapper}>
                  <p className={styles.label}>Email</p>
                  <Field
                    type="text"
                    name="otherEmail"
                    placeholder="abcs@gmail.com  "
                  />
                  <ErrorMessage
                    className={styles.input_error}
                    name="otherEmail"
                    component="div"
                  />
                </div>
              </div>
              <div className={styles.input_main}>
                <div className={styles.input_wrapper}>
                  <p className={styles.label}>Introduce Yourself</p>
                  <Field
                    as="textarea"
                    name="about"
                    rows={10}
                    placeholder="Developer with over 5 years' experience working ...."
                  />
                  <ErrorMessage
                    className={styles.input_error}
                    name="about"
                    component="div"
                  />
                </div>
              </div>
              <div className={styles.input_main}>
                {/*<div className={styles.input_wrapper}>*/}
                {/*  <p className={styles.label}>Languages</p>*/}
                {/*  <Field type="text" name="languages" placeholder="English" />*/}
                {/*  <ErrorMessage*/}
                {/*    className={styles.input_error}*/}
                {/*    name="languages"*/}
                {/*    component="div"*/}
                {/*  />*/}
                {/*</div>*/}
                <div className={styles.input_wrapper}>
                  <p className={styles.label}>Country</p>
                  <Field type="text" name="country" placeholder="Pakistan" />
                  <ErrorMessage
                    className={styles.input_error}
                    name="country"
                    component="div"
                  />
                </div>
              </div>
              <div className={styles.input_main}>
                <div className={styles.input_wrapper}>
                  <p className={styles.label}>Postal Code</p>
                  <Field type="number" name="postalCode" placeholder="54000" />
                  <ErrorMessage
                    className={styles.input_error}
                    name="postalCode"
                    component="div"
                  />
                </div>
                <div className={styles.input_wrapper}>
                  <p className={styles.label}>Building number</p>
                  <Field type="text" name="building" placeholder="001/C1" />
                  <ErrorMessage
                    className={styles.input_error}
                    name="building"
                    component="div"
                  />
                </div>
              </div>
              <div className={styles.input_main}>
                <div className={styles.input_wrapper}>
                  <p className={styles.label}>Phone</p>
                  <Field
                    type="number"
                    name="phone"
                    placeholder="03xx-xxxxxxxx"
                  />
                  <ErrorMessage
                    className={styles.input_error}
                    name="phone"
                    component="div"
                  />
                </div>
                <div className={styles.input_wrapper}>
                  <p className={styles.label}>Other</p>
                  <Field type="number" name="other" placeholder="042-xxxxxxx" />
                  <ErrorMessage
                    className={styles.input_error}
                    name="other"
                    component="div"
                  />
                </div>
              </div>
              <div className={styles.input_main}>
                <div className={styles.input_wrapper}>
                  <p className={styles.label}>Date of Birth</p>
                  <Field type="date" name="birthday" />
                  <ErrorMessage
                    className={styles.input_error}
                    name="birthday"
                    component="div"
                  />
                </div>
                <div className={styles.input_wrapper}>
                  <p className={styles.label}>Gender</p>
                  <Field as="select" name="gender">
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </Field>
                  <ErrorMessage
                    className={styles.input_error}
                    name="gender"
                    component="div"
                  />
                </div>
              </div>
              <div className={styles.input_main}>
                <div className={styles.input_wrapper}>
                  <p className={styles.label}>Profession</p>
                  <Field
                    type="text"
                    name="profession"
                    placeholder="Javascript Developer"
                  />
                  <ErrorMessage
                    className={styles.input_error}
                    name="profession"
                    component="div"
                  />
                </div>
              </div>
              <p className={styles.label}>Languages</p>
              <div className={styles.checkbox_main}>
                {spokenLanguages.map((name) => (
                  <div
                    key={`profile-checkbox-${name}`}
                    className={styles.checkbox_content}
                  >
                    <Field
                      type="checkbox"
                      name="languages"
                      value={name}
                      // checked={formik.values.otherOccupation.includes(name)}
                    />
                    <label htmlFor={`check-${name}`}>{name}</label>
                  </div>
                ))}
                <ErrorMessage
                  className={styles.input_error}
                  name="languages"
                  component="div"
                />
              </div>
              <p className={styles.label}>Other Experience</p>
              <div className={styles.checkbox_main}>
                {jsFrameworks.map((name) => (
                  <div
                    key={`profile-checkbox-${name}`}
                    className={styles.checkbox_content}
                  >
                    <Field
                      type="checkbox"
                      name="otherOccupation"
                      value={name}
                      // checked={formik.values.otherOccupation.includes(name)}
                    />
                    <label htmlFor={`check-${name}`}>{name}</label>
                  </div>
                ))}
                <ErrorMessage
                  className={styles.input_error}
                  name="otherOccupation"
                  component="div"
                />
              </div>
              <p className={styles.label}>Skills</p>
              <div className={styles.checkbox_main}>
                {jsFrameworks.map((name) => (
                  <div
                    key={`profile-checkbox-${name}`}
                    className={styles.checkbox_content}
                  >
                    <Field
                      type="checkbox"
                      name="skills"
                      value={name}
                      // checked={formik.values.otherOccupation.includes(name)}
                    />
                    <label htmlFor={`check-${name}`}>{name}</label>
                  </div>
                ))}
                <ErrorMessage
                  className={styles.input_error}
                  name="skills"
                  component="div"
                />
              </div>
              <div className={styles.button_wrapper}>
                <button type="submit">Next</button>
              </div>
            </Form>
          </Formik>
        </div>
      </Container>
    </>
  );
};
