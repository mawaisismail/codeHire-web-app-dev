import styles from "./mainDetails.module.scss";
import { FaStar } from "react-icons/fa";
import { Documents } from "@/components/user/userProfilePage/profile/documents/documents";
import { UserLocation } from "@/components/user/userProfilePage/profile/UserLocation/UserLocation";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../../../../../utils/context/GlobalProvider";
import { useMutation } from "@apollo/client";
import { UPDATE_USER } from "../../../../../../constants/graphQL/user";
import { toast } from "react-toastify";
import {
  setBaseUser,
  setUserData,
} from "../../../../../../utils/context/actions";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { uploadFile } from "../../../../../../utils/file-upload-service";
import { useRouter } from "next/router";
import { UserAvatar } from "@/components/common/UserAvatar";

const initialValues = {
  first_name: "",
  last_name: "",
  currentOccupation: "",
};

const profileValidationSchema = Yup.object({
  first_name: Yup.string().required("First name is required"),
  last_name: Yup.string().required("Last name is required"),
  currentOccupation: Yup.string().required("currentOccupation is required"),
});

export const MainDetails = () => {
  const { asPath } = useRouter();
  const [updateUser, updateUserData] = useMutation(UPDATE_USER);
  const [edit, setEdit] = useState(false);
  const [{ user }, dispatch] = useContext(GlobalContext);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const initialValues = {
    first_name: user?.first_name || "",
    last_name: user?.last_name || "",
    currentOccupation: user?.currentOccupation || "",
  };

  const check=(lan:number,long:number)=>{
    console.log(lan,long)
  }

  const updateUserInfo = async (values: typeof initialValues) => {
    let file = null;
    if (selectedFile) {
      file = await uploadFile(selectedFile);
    }
    updateUser({
      variables: {
        userInputType: {
          userInfo: JSON.stringify({
            ...user,
            first_name: values.first_name,
            last_name: values.last_name,
            currentOccupation: values.currentOccupation,
            profileImageURL: file || user?.profileImageURL,
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
      <div className="flex justify-between items-center py-6">
        <p className={styles.heading}>Personal</p>
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
        <div className={styles.about}>
          <div
            style={
              user?.profileImageURL
                ? {
                    backgroundImage: `url(${user?.profileImageURL})`,
                  }
                : {}
            }
            className={`relative ${styles.profileImage}`}
          />
          <p className={styles.profession}>
            <span className="py-2">
              {user?.first_name ?? "A"}.{user?.last_name?.charAt(0) ?? "B"}
            </span>
            <span>{user?.currentOccupation ?? ""}</span>
          </p>
          <p className={styles.rating}>
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </p>
        </div>
      ) : (
        <>
          <div className="flex justify-center items-center">
            <div
              style={
                selectedFile
                  ? {
                      backgroundImage: `url(${URL.createObjectURL(
                        selectedFile
                      )})`,
                    }
                  : user?.profileImageURL
                  ? {
                      backgroundImage: `url(${user?.profileImageURL})`,
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
            initialValues={initialValues}
            validationSchema={profileValidationSchema}
            onSubmit={(value) => {
              updateUserInfo(value);
            }}
          >
            <Form>
              <div className={"py-2"}>
                <label
                  htmlFor="first_name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  First Name
                </label>

                <Field
                  name={"first_name"}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                />
                <ErrorMessage
                  className="text-red-500 text-sm pt-2"
                  name="first_name"
                  component="div"
                />
              </div>{" "}
              <div className={"py-2"}>
                <label
                  htmlFor="last_name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Last Name
                </label>

                <Field
                  name={"last_name"}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                />
                <ErrorMessage
                  className="text-red-500 text-sm pt-2"
                  name="last_name"
                  component="div"
                />
              </div>{" "}
              <div className={"py-2"}>
                <label
                  htmlFor="currentOccupation"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Current Occupation
                </label>

                <Field
                  name={"currentOccupation"}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                />
                <ErrorMessage
                  className="text-red-500 text-sm pt-2"
                  name="currentOccupation"
                  component="div"
                />
              </div>
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
      <div className={styles.documents}>
        <p className={styles.heading}>Documents</p>
        <Documents />
        <Documents />
      </div>
      <div className={styles.contact}>
        <p className={styles.heading}>Contact</p>
        <div className={styles.main_content}>
          <div className={styles.headings}>
            <p>Email</p>
            <p>Phone</p>
            <p>Location</p>
          </div>
          <div className={styles.heading_data}>
            <p>{user?.email ?? ""}</p>
            <p>{user?.phone ?? ""}</p>
            <p>{user?.address?.Country ?? ""}</p>
          </div>
        </div>
      </div>
      <UserLocation check={check}/>
    </div>
  );
};
