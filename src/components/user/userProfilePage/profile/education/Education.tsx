import styles from "./education.module.scss";
import { Dispatch, FC, useContext, useEffect, useState } from "react";
import { useMutation } from "@apollo/client";
import { UPDATE_USER } from "../../../../../../constants/graphQL/user";
import { GlobalContext } from "../../../../../../utils/context/GlobalProvider";
import {
  setBaseUser,
  setUserData,
} from "../../../../../../utils/context/actions";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { routes } from "../../../../../../constants/routes";
import { GConfirm } from "@/components/common/g-confirm";
import { push } from "@firebase/database";
import {
  IEducationList,
  IExperienceList,
} from "../../../../../../utils/context/reducer";

export const EducationList: FC<IEducationList> = ({
  degree,
  year,
  institute,
  info,
}) => {
  return (
    <div>
      <p className={styles.heading}>{degree ?? ""}</p>
      <p>
        {institute ?? ""} - {year ?? ""}
      </p>
      <p>{info ?? ""}</p>
    </div>
  );
};

export const EducationForm = ({ setEdit }: { setEdit: Dispatch<boolean> }) => {
  const [updateUser, updateUserData] = useMutation(UPDATE_USER);
  const [{ user }, dispatch] = useContext(GlobalContext);
  const initialValues = {
    degree: "",
    institute: "",
    year: "",
    info: "",
  };

  const educationValidationSchema = Yup.object({
    degree: Yup.string().required("Degree is required"),
    institute: Yup.string().required("Institute is required"),
    year: Yup.string().required("Year required"),
    info: Yup.string().required("Details is required"),
  });
  const updateUserInfo = async (education: Array<any>) => {
    await updateUser({
      variables: {
        userInputType: {
          userInfo: JSON.stringify({
            ...user,
            education,
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
      setEdit(false);
    }
  }, [updateUserData?.data?.updateUser]);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={educationValidationSchema}
      onSubmit={async (values) => {
        const oldData = user?.education || [];
        const data = [values, ...oldData];
        await updateUserInfo(data);
      }}
    >
      <Form>
        <div className={"py-2"}>
          <label
            htmlFor="degree"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Degree name
          </label>

          <Field
            name={"degree"}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />
          <ErrorMessage
            className="text-red-500 text-sm pt-2"
            name="degree"
            component="div"
          />
        </div>{" "}
        <div className={"py-2"}>
          <label
            htmlFor="institute"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Institute name
          </label>

          <Field
            name={"institute"}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />
          <ErrorMessage
            className="text-red-500 text-sm pt-2"
            name="institute"
            component="div"
          />
        </div>
        <div className={"py-2"}>
          <label
            htmlFor="year"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Year From - TO
          </label>

          <Field
            name={"year"}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />
          <ErrorMessage
            className="text-red-500 text-sm pt-2"
            name="year"
            component="div"
          />
        </div>
        <Field
          as="textarea"
          rows={10}
          className="mt-2 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          name="info"
        />
        <ErrorMessage
          className="text-red-500 text-sm pt-2"
          name="info"
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
  );
};

export const ExperienceForm = ({ setEdit }: { setEdit: Dispatch<boolean> }) => {
  const [updateUser, updateUserData] = useMutation(UPDATE_USER);
  const [{ user }, dispatch] = useContext(GlobalContext);
  const initialValues: IExperienceList = {
    info: "",
    year: "",
    position: "",
    institute: "",
  };

  const educationValidationSchema = Yup.object({
    institute: Yup.string().required("institute is required"),
    position: Yup.string().required("position is required"),
    year: Yup.string().required("Year required"),
    info: Yup.string().required("Details is required"),
  });
  const updateUserInfo = async (experiences: Array<any>) => {
    await updateUser({
      variables: {
        userInputType: {
          userInfo: JSON.stringify({
            ...user,
            experiences,
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
      setEdit(false);
    }
  }, [updateUserData?.data?.updateUser]);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={educationValidationSchema}
      onSubmit={async (values) => {
        const oldData = user?.experiences || [];
        const data = [values, ...oldData];
        await updateUserInfo(data);
      }}
    >
      <Form>
        <div className={"py-2"}>
          <label
            htmlFor="Position"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Position
          </label>

          <Field
            name={"position"}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />
          <ErrorMessage
            className="text-red-500 text-sm pt-2"
            name="position"
            component="div"
          />
        </div>{" "}
        <div className={"py-2"}>
          <label
            htmlFor="institute"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Institute name
          </label>

          <Field
            name={"institute"}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />
          <ErrorMessage
            className="text-red-500 text-sm pt-2"
            name="institute"
            component="div"
          />
        </div>
        <div className={"py-2"}>
          <label
            htmlFor="year"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Year From - TO
          </label>

          <Field
            name={"year"}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />
          <ErrorMessage
            className="text-red-500 text-sm pt-2"
            name="year"
            component="div"
          />
        </div>
        <Field
          as="textarea"
          rows={10}
          className="mt-2 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          name="info"
        />
        <ErrorMessage
          className="text-red-500 text-sm pt-2"
          name="info"
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
  );
};

export const ExperienceList: FC<IExperienceList> = ({
  position,
  info,
  institute,
  year,
}) => {
  return (
    <div>
      <p className={styles.heading}>{institute ?? ""}</p>
      <p>
        {position}
        {"-"}
        {year}
      </p>
      <p>{info ?? ""}</p>
    </div>
  );
};

interface IEducation {
  isEducation?: boolean;
}

export const Education: FC = () => {
  const [edit, setEdit] = useState(false);
  const [data, dispatch] = useContext(GlobalContext);
  const [educationData, setEducationData] = useState<IEducationList[]>([]);
  useEffect(() => {
    setEducationData(data?.user?.education || []);
  }, [data]);

  return (
    <div className={styles.main}>
      <div className="flex justify-between items-center">
        <p className={styles.heading}>Education</p>
        <button
          onClick={() => setEdit(!edit)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded-full"
        >
          Add
        </button>
      </div>
      {edit && <EducationForm setEdit={setEdit} />}
      {educationData.map((education, index) => (
        <EducationList key={index} {...education} />
      ))}
      {!educationData.length && (
        <div className="flex justify-center items-center h-[150px]">
          <p className="text-gray-500">No Education Added</p>
        </div>
      )}
    </div>
  );
};

export const Experience: FC = () => {
  const [edit, setEdit] = useState(false);
  const [data, dispatch] = useContext(GlobalContext);
  const [experience, setExperienceData] = useState<IExperienceList[]>([]);
  useEffect(() => {
    setExperienceData(data?.user?.experiences || []);
  }, [data]);
  return (
    <div className={styles.main}>
      <div className="flex justify-between items-center">
        <p className={styles.heading}>Experience</p>
        <button
          onClick={() => setEdit(!edit)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded-full"
        >
          Add
        </button>
      </div>
      {edit && <ExperienceForm setEdit={setEdit} />}
      {experience.map((education, index) => (
        <ExperienceList key={index} {...education} />
      ))}
      {!experience.length && (
        <div className="flex justify-center items-center h-[150px]">
          <p className="text-gray-500">No Experience Added</p>
        </div>
      )}
    </div>
  );
};
