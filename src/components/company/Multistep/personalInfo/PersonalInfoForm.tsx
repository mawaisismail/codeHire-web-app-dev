import { FC } from "react";
import styles from "./PersonalInfoForm.module.scss";
import { Container } from "@mui/material";
import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useMutation } from "@apollo/client";
import { UPDATE_COMPANY_INFO } from "../../../../../constants/graphQL/company";
import { toast } from "react-toastify";
import { routes } from "../../../../../constants/routes";
import { useRouter } from "next/router";

export const desireInitialValues = {
  name: "",
  owner: "",
  total_employee: "",
  location: "",
  website: "",
  phone: "",
  established: "",
};

export const desireValidationSchema = Yup.object({
  name: Yup.string().required("please enter company name"),
  owner: Yup.string().required("please enter owner name"),
  total_employee: Yup.string().required(
    "Please enter total no of employee in your company"
  ),
  location: Yup.string().required("please enter your company location"),
  website: Yup.string().required("please enter your company website"),
  phone: Yup.number().required("Please enter your phone number"),
  established: Yup.string().required("company established year is required"),
});

export const PersonalInfoForm: FC = () => {
  const { push } = useRouter();
  const [updateCompany] = useMutation(UPDATE_COMPANY_INFO, {
    fetchPolicy: "network-only",
  });
  return (
    <>
      <Container maxWidth="sm">
        <div className={styles.main}>
          <Formik
            initialValues={desireInitialValues}
            validationSchema={desireValidationSchema}
            onSubmit={async (values) => {
              await updateCompany({
                variables: {
                  createCompanyArgs: {
                    companyInfo: JSON.stringify({
                      ...values,
                    }),
                  },
                },
              })
                .catch((e) => {
                  console.log(e.error);
                })
                .then((e) => {
                  push(routes.company.home);
                  toast("Success");
                });
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
                  <ErrorMessage
                    className={styles.input_error}
                    name="name"
                    component="div"
                  />
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
                  <Field
                    type="text"
                    name="total_employee"
                    placeholder="Awais"
                  />
                  <ErrorMessage
                    className={styles.input_error}
                    name="total_employee"
                    component="div"
                  />
                </div>
              </div>
              <div className={styles.input_main}>
                <div className={styles.input_wrapper}>
                  <p className={styles.label}>Location</p>
                  <Field type="text" name="location" placeholder="Lahore" />
                  <ErrorMessage
                    className={styles.input_error}
                    name="location"
                    component="div"
                  />
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
                  <ErrorMessage
                    className={styles.input_error}
                    name="website"
                    component="div"
                  />
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
                  <ErrorMessage
                    className={styles.input_error}
                    name="phone"
                    component="div"
                  />
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
                  <ErrorMessage
                    className={styles.input_error}
                    name="established"
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
