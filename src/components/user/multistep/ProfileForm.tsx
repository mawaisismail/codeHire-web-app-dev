import { Dispatch, FC } from "react";
import styles from "./profile.module.scss";
import { Container } from "@mui/material";
import { jsFrameworks } from "../../../../constants/utils/signUp";
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
  about: "",
  languages: "",
  country: "",
  postalCode: "",
  building: "",
  phone: "",
  other: "",
  birthday: "",
  gender: "",
  profession: "",
  otherOccupation: [],
};

export const profileValidationSchema = Yup.object({
  first_name: Yup.string().required(),
  last_name: Yup.string().required(),
  otherEmail: Yup.string().required(),
  about: Yup.string().required(),
  languages: Yup.string().required(),
  country: Yup.string().required(),
  postalCode: Yup.string().required(),
  building: Yup.string().required(),
  phone: Yup.string().required(),
  other: Yup.string().required(),
  birthday: Yup.date().required(),
  gender: Yup.string().required(),
  profession: Yup.string().required(),
  otherOccupation: Yup.array().min(1).required(),
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
                  <ErrorMessage name="first_name" component="div" />
                </div>
                <div className={styles.input_wrapper}>
                  <p className={styles.label}>Last Name</p>
                  <Field type="text" name="last_name" placeholder="Doe" />
                  <ErrorMessage name="last_name" component="div" />
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
                  <ErrorMessage name="otherEmail" component="div" />
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
                  <ErrorMessage name="about" component="div" />
                </div>
              </div>
              <div className={styles.input_main}>
                <div className={styles.input_wrapper}>
                  <p className={styles.label}>Languages</p>
                  <Field type="text" name="languages" placeholder="English" />
                  <ErrorMessage name="languages" component="div" />
                </div>
                <div className={styles.input_wrapper}>
                  <p className={styles.label}>Country</p>
                  <Field type="text" name="country" placeholder="Pakistan" />
                  <ErrorMessage name="country" component="div" />
                </div>
              </div>
              <div className={styles.input_main}>
                <div className={styles.input_wrapper}>
                  <p className={styles.label}>Postal Code</p>
                  <Field type="text" name="postalCode" placeholder="54000" />
                  <ErrorMessage name="postalCode" component="div" />
                </div>
                <div className={styles.input_wrapper}>
                  <p className={styles.label}>Building number</p>
                  <Field type="text" name="building" placeholder="001/C1" />
                  <ErrorMessage name="building" component="div" />
                </div>
              </div>
              <div className={styles.input_main}>
                <div className={styles.input_wrapper}>
                  <p className={styles.label}>Phone</p>
                  <Field type="text" name="phone" placeholder="03xx-xxxxxxxx" />
                  <ErrorMessage name="phone" component="div" />
                </div>
                <div className={styles.input_wrapper}>
                  <p className={styles.label}>Other</p>
                  <Field type="text" name="other" placeholder="042-xxxxxxx" />
                  <ErrorMessage name="other" component="div" />
                </div>
              </div>
              <div className={styles.input_main}>
                <div className={styles.input_wrapper}>
                  <p className={styles.label}>Date of Birth</p>
                  <Field type="date" name="birthday" />
                  <ErrorMessage name="birthday" component="div" />
                </div>
                <div className={styles.input_wrapper}>
                  <p className={styles.label}>Gender</p>
                  <Field as="select" name="gender">
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </Field>
                  <ErrorMessage name="gender" component="div" />
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
                  <ErrorMessage name="profession" component="div" />
                </div>
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
                <ErrorMessage name="otherOccupation" component="div" />
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
