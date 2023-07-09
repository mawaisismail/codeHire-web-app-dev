import styles from "./companyProfile.module.scss";
import { CompanyMainDetails } from "@/components/company/mypage/mainDetails/companyMainDetails";
import { Container } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../../../utils/context/GlobalProvider";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { aboutValidationSchema } from "@/components/user/userProfilePage/profile/about/about";
import { useMutation } from "@apollo/client";
import { UPDATE_COMPANY_INFO } from "../../../../constants/graphQL/company";
import { toast } from "react-toastify";
import {
  setBaseUser,
  setCompany,
  setUserData,
} from "../../../../utils/context/actions";
import { useRouter } from "next/router";
export const CompanyProfile = () => {
  const { asPath } = useRouter();
  const [{ company }, dispatch] = useContext(GlobalContext);
  const [edit, setEdit] = useState(false);
  const [updateCompany, { data, loading, error }] =
    useMutation(UPDATE_COMPANY_INFO);
  const updateUserInfo = (about: string) => {
    updateCompany({
      variables: {
        createCompanyArgs: {
          companyInfo: JSON.stringify({
            ...company,
            about,
          }),
        },
      },
    }).catch((e) => {
      console.log(e.error);
    });
  };

  useEffect(() => {
    if (data?.updateCompany) {
      toast.success("Success");
      dispatch(setBaseUser(data.updateCompany));
      dispatch(setCompany(data.updateCompany) as any);
      setEdit(false);
    }
  }, [data]);

  return (
    <Container>
      <div className={styles.main}>
        <div className={styles.section_1}>
          <CompanyMainDetails {...(company as any)} />
        </div>
        <div className={styles.section_2}>
          <div className="flex justify-between items-center py-6">
            <p className={styles.heading}>About</p>
            {asPath.includes("company") && (
              <button
                onClick={() => setEdit(!edit)}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded-full"
              >
                Edit
              </button>
            )}
          </div>
          {!edit ? (
            <p>{company?.about || ""}</p>
          ) : (
            <>
              <Formik
                // enableReinitialize={true}
                initialValues={{ about: company?.about || "" }}
                validationSchema={aboutValidationSchema}
                onSubmit={(value) => {
                  updateUserInfo(value.about);
                }}
              >
                <Form>
                  <Field
                    as="textarea"
                    rows={10}
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    name="about"
                  />
                  <ErrorMessage
                    className="text-red-500 text-sm pt-2"
                    name="about"
                    component="div"
                  />

                  <div className="flex justify-between items-center py-2 mb-4">
                    <button
                      onClick={() => setEdit(false)}
                      className="bg-red-500 text-white font-bold py-1 px-4 rounded-md"
                    >
                      Close
                    </button>
                    <button
                      type="submit"
                      className="border-blue-700 border text-blue-500 font-bold py-1 px-4 rounded-md"
                    >
                      Save
                    </button>
                  </div>
                </Form>
              </Formik>
            </>
          )}
        </div>
      </div>
    </Container>
  );
};
