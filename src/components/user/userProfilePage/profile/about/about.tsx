import styles from "./about.module.scss";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../../../../../utils/context/GlobalProvider";
import { ErrorMessage, Field, Form, Formik } from "formik";
import invariant from "ts-invariant";

export const aboutValidationSchema = Yup.object({
  about: Yup.string().required("Please enter about yourself"),
});
import log = invariant.log;
import * as Yup from "yup";
import { GTooltip } from "@/components/common/g-tooltip";
import { useMutation } from "@apollo/client";
import { UPDATE_USER } from "../../../../../../constants/graphQL/user";
import { routes } from "../../../../../../constants/routes";
import {
  setBaseUser,
  setUserData,
} from "../../../../../../utils/context/actions";
export const About = () => {
  const [updateUser, updateUserData] = useMutation(UPDATE_USER);
  const [edit, setEdit] = useState(false);
  const [{ user }, dispatch] = useContext(GlobalContext);

  const updateUserInfo = (about: string) => {
    updateUser({
      variables: {
        userInputType: {
          userInfo: JSON.stringify({
            ...user,
            about,
          }),
        },
      },
    }).catch((e) => {
      console.log(e.error);
    });
  };

  useEffect(() => {
    if (updateUserData?.data?.updateUser) {
      dispatch(setBaseUser(updateUserData.data.updateUser));
      dispatch(setUserData(updateUserData.data.updateUser) as any);
    }
  }, [updateUserData?.data?.updateUser]);

  return (
    <div className={styles.main}>
      <div className="flex justify-between items-center py-6">
        <p className={styles.heading}>About</p>
        <button
          onClick={() => setEdit(!edit)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded-full"
        >
          Edit
        </button>
      </div>
      {!edit ? (
        <p className="min-h-[100px]">
          {user?.about
            ? user?.about
            : ` Developer with over 5 years experience working in both the public and
            private sectors. Diplomatic, personable, and adept at managing
            sensitive situations. Highly organized, self-motivated, and proficient
            with computers. Looking to boost students’ satisfactions scores for
            International University. Bachelors degree in communications.`}
          <br />
          <br />
        </p>
      ) : (
        <>
          <Formik
            // enableReinitialize={true}
            initialValues={{ about: user?.about || "" }}
            validationSchema={aboutValidationSchema}
            onSubmit={(value) => {
              updateUserInfo(value.about);
              setEdit(false);
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

              <div className="flex justify-between items-center py-2">
                <button
                  onClick={() => setEdit(false)}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded-md"
                >
                  Close
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded-md"
                >
                  Save
                </button>
              </div>
            </Form>
          </Formik>
        </>
      )}
    </div>
  );
};
