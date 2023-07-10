import styles from "./companyMainDetails.module.scss";
import { FaStar } from "react-icons/fa";
import { FC, useContext, useEffect, useState } from "react";
import { ICompany } from "../../../../../constants/interfaces/company";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { GlobalContext } from "../../../../../utils/context/GlobalProvider";
import { useMutation } from "@apollo/client";
import { UPDATE_COMPANY_INFO } from "../../../../../constants/graphQL/company";
import { toast } from "react-toastify";
import { setBaseUser, setCompany } from "../../../../../utils/context/actions";
import { uploadFile } from "../../../../../utils/file-upload-service";
import { useRouter } from "next/router";

const workingHoursValidationSchema = Yup.object({
  monday: Yup.string().required("Field required"),
  tuesday: Yup.string().required("Field required"),
  wednesday: Yup.string().required("Field required"),
  thursday: Yup.string().required("Field required"),
  friday: Yup.string().required("Field required"),
  saturday: Yup.string().required("Field required"),
  sunday: Yup.string().required("Field required"),
});

const profileValidationSchema = Yup.object({
  owner: Yup.string().required("Owner name is required"),
  location: Yup.string().required("Location is required"),
  website: Yup.string().required("Website is required"),
  established: Yup.string().required("Established is required"),
  total_employee: Yup.string().required("Total employee is required"),
});

const personaInfoValidationSchema = Yup.object({
  name: Yup.string().required(" name is required"),
});

export const CompanyMainDetails: FC<ICompany> = ({
  about,
  profileImageURL,
  coverImage,
  email,
  name,
  owner,
  phone,
  userName,
  token,
  location,
  total_employee,
  established,
  website,
  workingHours,
}) => {
  const { asPath } = useRouter();
  const [{ company }, dispatch] = useContext(GlobalContext);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [edit, setEdit] = useState(false);
  const [editWorkingHour, setEditWorkingHour] = useState(false);
  const [editPersonalInfo, setEditPersonalInfo] = useState(false);
  const [updateCompany, { data, loading, error }] =
    useMutation(UPDATE_COMPANY_INFO);
  const updateUserInfo = (vales: typeof initialValues) => {
    updateCompany({
      variables: {
        createCompanyArgs: {
          companyInfo: JSON.stringify({
            ...company,
            ...vales,
          }),
        },
      },
    }).catch((e) => {
      console.log(e.error);
    });
  };

  const updateCompanyPersonalInfo = async (
    vales: typeof personalInfoInitialValues
  ) => {
    let file = null;
    if (selectedFile) {
      file = await uploadFile(selectedFile);
    }
    updateCompany({
      variables: {
        createCompanyArgs: {
          companyInfo: JSON.stringify({
            ...company,
            name: vales.name,
            profileImageURL: file ?? profileImageURL,
          }),
        },
      },
    }).catch((e) => {
      console.log(e.error);
    });
  };

  const updateWorkingInfo = (vales: typeof workingHoursInitialValues) => {
    updateCompany({
      variables: {
        createCompanyArgs: {
          companyInfo: JSON.stringify({
            ...company,
            workingHours: vales,
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
      setEditWorkingHour(false);
      setEditPersonalInfo(false);
    }
  }, [data]);

  const initialValues = {
    owner: owner ?? "",
    location: location ?? "",
    website: website ?? "",
    established: established ?? "",
    total_employee: total_employee ?? "",
  };
  const workingHoursInitialValues = {
    monday: workingHours?.monday ?? "",
    tuesday: workingHours?.tuesday ?? "",
    wednesday: workingHours?.wednesday ?? "",
    thursday: workingHours?.thursday ?? "",
    friday: workingHours?.friday ?? "",
    saturday: workingHours?.saturday ?? "",
    sunday: workingHours?.sunday ?? "",
  };

  const personalInfoInitialValues = {
    name: name ?? "",
  };

  return (
    <div className={styles.main}>
      <div className="flex justify-between items-center py-6">
        <p className={styles.heading}>Personal</p>
        {asPath.includes("company") && !asPath.includes("job") && (
          <button
            onClick={() => setEditPersonalInfo(!edit)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded-full"
          >
            Edit
          </button>
        )}
      </div>
      {!editPersonalInfo ? (
        <div className={styles.about}>
          <div className={styles.profileImage} />
          <p className={styles.profession}>
            <span>{name ?? ""}</span>
            <span>Since {established ?? ""}</span>
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
                  : company?.profileImageURL
                  ? {
                      backgroundImage: `url(${company?.profileImageURL})`,
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
            initialValues={personalInfoInitialValues}
            validationSchema={personaInfoValidationSchema}
            onSubmit={(value) => {
              updateCompanyPersonalInfo(value);
            }}
          >
            <Form>
              <div className={"py-2"}>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Name
                </label>

                <Field
                  name={"name"}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                />
                <ErrorMessage
                  className="text-red-500 text-sm pt-2"
                  name="name"
                  component="div"
                />
              </div>{" "}
              <div className="flex justify-between items-center py-2 mb-4">
                <button
                  onClick={() => setEditPersonalInfo(false)}
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
      <div className={styles.contact}>
        <div className="flex justify-between items-center py-6">
          <p className={styles.heading}>Company Profile</p>
          {asPath.includes("company") && !asPath.includes("job") && (
            <button
              onClick={() => setEdit(!edit)}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded-full"
            >
              Edit
            </button>
          )}
        </div>
        {!edit ? (
          <div className={styles.main_content}>
            <div className={styles.headings}>
              <p>Owner Name</p>
              <p>Employees</p>
              <p>Location</p>
              <p>Website</p>
              <p>Established</p>
            </div>
            <div className={styles.heading_data}>
              <p>{owner ?? ""}</p>
              <p>{total_employee ?? ""}</p>
              <p>{location ?? ""}</p>
              <p>{website ?? ""}</p>
              <p>{established ?? ""}</p>
            </div>
          </div>
        ) : (
          <>
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
                    htmlFor="owner"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Owner
                  </label>

                  <Field
                    name={"owner"}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  />
                  <ErrorMessage
                    className="text-red-500 text-sm pt-2"
                    name="owner"
                    component="div"
                  />
                </div>{" "}
                <div className={"py-2"}>
                  <label
                    htmlFor="employees"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    No.Employees
                  </label>

                  <Field
                    name={"total_employee"}
                    type={"number"}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  />
                  <ErrorMessage
                    className="text-red-500 text-sm pt-2"
                    name="total_employee"
                    component="div"
                  />
                </div>{" "}
                <div className={"py-2"}>
                  <label
                    htmlFor="location"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Location
                  </label>

                  <Field
                    name={"location"}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  />
                  <ErrorMessage
                    className="text-red-500 text-sm pt-2"
                    name="location"
                    component="div"
                  />
                </div>
                <div className={"py-2"}>
                  <label
                    htmlFor="website"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Website
                  </label>

                  <Field
                    name={"website"}
                    type={"url"}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  />
                  <ErrorMessage
                    className="text-red-500 text-sm pt-2"
                    name="website"
                    component="div"
                  />
                </div>
                <div className={"py-2"}>
                  <label
                    htmlFor="established"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Established
                  </label>

                  <Field
                    type={"date"}
                    name={"established"}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  />
                  <ErrorMessage
                    className="text-red-500 text-sm pt-2"
                    name="established"
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
        <div>
          <a
            href="tel:555-555-5555"
            className="w-full flex justify-center items-center"
          >
            <button className={styles.button_contact}>Contact</button>
          </a>
        </div>
      </div>
      <div className={styles.office_time}>
        <div className="flex justify-between items-center py-6">
          <p className={styles.heading}>Working Days</p>
          {asPath.includes("company") && !asPath.includes("job") && (
            <button
              onClick={() => setEditWorkingHour(!edit)}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded-full"
            >
              Edit
            </button>
          )}
        </div>
        {!editWorkingHour ? (
          <div className={styles.main_content}>
            <div className={styles.headings}>
              <p>Monday</p>
              <p>Tuesday</p>
              <p>Wednesday</p>
              <p>Thursday</p>
              <p>Friday</p>
              <p>Saturday</p>
              <p>Sunday</p>
            </div>
            <div className={styles.heading_data}>
              <p>{workingHours?.monday ?? "9AM - 5PM"}</p>
              <p>{workingHours?.tuesday ?? "9AM - 5PM"}</p>
              <p>{workingHours?.wednesday ?? "9AM - 5PM"}</p>
              <p>{workingHours?.thursday ?? "9AM - 5PM"}</p>
              <p>{workingHours?.friday ?? "9AM - 5PM"}</p>
              <p>{workingHours?.saturday ?? "9AM - 5PM"}</p>
              <p>{workingHours?.sunday ?? "9AM - 5PM"}</p>
            </div>
          </div>
        ) : (
          <>
            <Formik
              initialValues={workingHoursInitialValues}
              validationSchema={workingHoursValidationSchema}
              onSubmit={(value) => {
                updateWorkingInfo(value);
              }}
            >
              <Form>
                <div className={"py-2"}>
                  <label
                    htmlFor="monday"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Monday
                  </label>

                  <Field
                    name={"monday"}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  />
                  <ErrorMessage
                    className="text-red-500 text-sm pt-2"
                    name="monday"
                    component="div"
                  />
                </div>{" "}
                <div className={"py-2"}>
                  <label
                    htmlFor="tuesday"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Tuesday
                  </label>

                  <Field
                    name={"tuesday"}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  />
                  <ErrorMessage
                    className="text-red-500 text-sm pt-2"
                    name="tuesday"
                    component="div"
                  />
                </div>{" "}
                <div className={"py-2"}>
                  <label
                    htmlFor="wednesday"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Wednesday
                  </label>

                  <Field
                    name={"wednesday"}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  />
                  <ErrorMessage
                    className="text-red-500 text-sm pt-2"
                    name="wednesday"
                    component="div"
                  />
                </div>
                <div className={"py-2"}>
                  <label
                    htmlFor="thursday"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Thursday
                  </label>

                  <Field
                    name={"thursday"}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  />
                  <ErrorMessage
                    className="text-red-500 text-sm pt-2"
                    name="thursday"
                    component="div"
                  />
                </div>
                <div className={"py-2"}>
                  <label
                    htmlFor="friday"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Friday
                  </label>

                  <Field
                    name={"friday"}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  />
                  <ErrorMessage
                    className="text-red-500 text-sm pt-2"
                    name="friday"
                    component="div"
                  />
                </div>
                <div className={"py-2"}>
                  <label
                    htmlFor="saturday"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    saturday
                  </label>

                  <Field
                    name={"saturday"}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  />
                  <ErrorMessage
                    className="text-red-500 text-sm pt-2"
                    name="saturday"
                    component="div"
                  />
                </div>
                <div className={"py-2"}>
                  <label
                    htmlFor="sunday"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Sunday
                  </label>

                  <Field
                    name={"sunday"}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  />
                  <ErrorMessage
                    className="text-red-500 text-sm pt-2"
                    name="sunday"
                    component="div"
                  />
                </div>
                <div className="flex justify-between items-center py-2 mb-4">
                  <button
                    onClick={() => setEditWorkingHour(false)}
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
  );
};
