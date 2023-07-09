import styles from "./skillsList.module.scss";
import { FC, useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../../../../../utils/context/GlobalProvider";
import {
  jsFrameworks,
  spokenLanguages,
} from "../../../../../../constants/utils/signUp";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useMutation } from "@apollo/client";
import { UPDATE_USER } from "../../../../../../constants/graphQL/user";
import {
  setBaseUser,
  setUserData,
} from "../../../../../../utils/context/actions";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

interface ISkillsList {
  data: string[] | null | undefined;
  disabledEdit?: boolean;
}
export const skillsValidationSchema = Yup.object({
  skills: Yup.array()
    .min(1, "Please select at least one option")
    .required("skills are required"),
});

export const languagesValidationSchema = Yup.object({
  languages: Yup.array()
    .min(1, "Please select at least one option")
    .required("skills are required"),
});

export const SkillsList: FC<ISkillsList> = ({ data, disabledEdit = false }) => {
  const { asPath } = useRouter();
  const [updateUser, updateUserData] = useMutation(UPDATE_USER);
  const [edit, setEdit] = useState(false);
  const [{ user }, dispatch] = useContext(GlobalContext);
  const [skills, setSkills] = useState<string[]>([]);

  useEffect(() => {
    setSkills(user?.skills || []);
  }, [user]);

  const updateUserInfo = (skills: string[]) => {
    updateUser({
      variables: {
        userInputType: {
          userInfo: JSON.stringify({
            ...user,
            skills,
          }),
        },
      },
    }).catch((e) => {
      console.log(e.error);
    });
  };

  useEffect(() => {
    if (updateUserData?.data?.updateUser) {
      toast.success("Success");
      dispatch(setBaseUser(updateUserData.data.updateUser));
      dispatch(setUserData(updateUserData.data.updateUser) as any);
      setEdit(false);
    }
  }, [updateUserData?.data?.updateUser]);

  return (
    <div className={styles.main}>
      <div className="flex justify-between items-center">
        <p className={styles.heading}>Skills</p>
        {!asPath.includes("company") && !disabledEdit && (
          <button
            onClick={() => setEdit(!edit)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded-full"
          >
            Edit
          </button>
        )}
      </div>
      {!edit ? (
        <div className={styles.content}>
          {data?.map((value) => (
            <span className={styles.blue_label} key={value}>
              {value}
            </span>
          ))}
        </div>
      ) : (
        <Formik
          initialValues={{ skills: skills }}
          validationSchema={skillsValidationSchema}
          onSubmit={(value) => {
            updateUserInfo(value.skills);
            setEdit(false);
          }}
        >
          <Form>
            <div className="flex flex-wrap">
              {jsFrameworks.map((name) => (
                <div
                  key={`profile-checkbox-${name}`}
                  className="flex items-center mr-4 mb-4"
                >
                  <Field
                    type="checkbox"
                    name="skills"
                    value={name}
                    // checked={skills.includes(name)}
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
            <div className="flex justify-between items-center py-2 mb-4">
              <button
                onClick={() => setEdit(false)}
                className="bg-red-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded-md"
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
      )}
    </div>
  );
};

export const LanguagesList: FC<ISkillsList> = ({ data }) => {
  const { asPath } = useRouter();
  const [updateUser, updateUserData] = useMutation(UPDATE_USER);
  const [edit, setEdit] = useState(false);
  const [{ user }, dispatch] = useContext(GlobalContext);
  const [languages, setLanguages] = useState<string[]>([]);

  useEffect(() => {
    setLanguages(user?.languages || []);
  }, [user]);

  const updateUserInfo = (languages: string[]) => {
    updateUser({
      variables: {
        userInputType: {
          userInfo: JSON.stringify({
            ...user,
            languages,
          }),
        },
      },
    }).catch((e) => {
      console.log(e.error);
    });
  };

  useEffect(() => {
    if (updateUserData?.data?.updateUser) {
      toast.success("Success");
      dispatch(setBaseUser(updateUserData.data.updateUser));
      dispatch(setUserData(updateUserData.data.updateUser) as any);
      setEdit(false);
    }
  }, [updateUserData?.data?.updateUser]);

  return (
    <div className={styles.main}>
      <div className="flex justify-between items-center">
        <p className={styles.heading}>Spoken languages</p>
        {!asPath.includes("company") && (
          <button
            onClick={() => setEdit(!edit)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded-full"
          >
            Edit
          </button>
        )}
      </div>
      {!edit ? (
        <div className={styles.content}>
          {data?.map((value) => (
            <span className={styles.green_label} key={value}>
              {value}
            </span>
          ))}
        </div>
      ) : (
        <Formik
          initialValues={{ languages }}
          validationSchema={languagesValidationSchema}
          onSubmit={(value) => {
            updateUserInfo(value.languages);
            setEdit(false);
          }}
        >
          <Form>
            <div className="flex flex-wrap">
              {spokenLanguages.map((name) => (
                <div
                  key={`profile-checkbox-${name}`}
                  className="flex items-center mr-4 mb-4"
                >
                  <Field type="checkbox" name="languages" value={name} />
                  <label htmlFor={`check-${name}`}>{name}</label>
                </div>
              ))}
              <ErrorMessage
                className={styles.input_error}
                name="languages"
                component="div"
              />
            </div>
            <div className="flex justify-between items-center py-2 mb-4">
              <button
                onClick={() => setEdit(false)}
                className="bg-red-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded-md"
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
      )}
    </div>
  );
};
