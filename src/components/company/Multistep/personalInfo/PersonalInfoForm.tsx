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
  name: Yup.string().required("Name is Required"),
  owner: Yup.string().required("Owner is Required"),
  total_employee: Yup.string().required("This field Required"),
  location: Yup.string().required("Location is Required"),
  website: Yup.string().required("Website is Required"),
  phone: Yup.number().required("Phone is Required"),
  established: Yup.string().required("EST is Required"),
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
                  <Field
                    type="text"
                    name="total_employee"
                    placeholder="Awais"
                  />
                  <ErrorMessage name="total_employee" component="div" />
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
