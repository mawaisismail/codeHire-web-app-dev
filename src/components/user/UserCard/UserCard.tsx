import styles from "./UserCard.module.scss";
import { FaStar } from "react-icons/fa";
import { routes } from "../../../../constants/routes";
import { useRouter } from "next/router";
import { FC, useContext, useEffect, useState } from "react";
import { IUser } from "../../../../utils/context/reducer";
import { useLazyQuery, useMutation } from "@apollo/client";
import { GET_COMPANY_JOB, HIRE_USER } from "../../../../constants/graphQL/job";
import { GlobalContext } from "../../../../utils/context/GlobalProvider";
import { IJob } from "../../../../constants/interfaces/jobs";
import { GConfirm } from "@/components/common/g-confirm";
import {
  CANCEL_SAVE_USER_BY_ID,
  SAVE_USER_BY_ID,
} from "../../../../constants/graphQL/user";
import { toast } from "react-toastify";

interface IUserProps {
  user: IUser;
  job?: IJob;
}

export const UserCard: FC<IUserProps> = ({ job, user }) => {
  const [getJob, setGetJob] = useState<IJob | null>(null);
  const [error, setError] = useState<string>("");
  const [jobs, setJobs] = useState<IJob[]>([]);
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const [jobId, setJobId] = useState("");
  const [getCompanyJobs, getCompanyJobsData] = useLazyQuery(GET_COMPANY_JOB, {
    fetchPolicy: "network-only",
  });
  const [saveUsers, saveUserData] = useMutation(SAVE_USER_BY_ID, {
    fetchPolicy: "network-only",
  });
  const [cancelSaveUser] = useMutation(CANCEL_SAVE_USER_BY_ID, {
    fetchPolicy: "network-only",
  });

  const saveUser = async () => {
    if (user?.uid) {
      try {
        await saveUsers({
          variables: {
            id: user?.uid,
          },
        });
        toast("User saved successfully");
        push(routes.company.save);
      } catch (e) {
        toast.error("User already saved");
      }
    }
  };

  const cancelSaveUserFunction = async () => {
    if (user?.uid) {
      try {
        await cancelSaveUser({
          variables: {
            id: user?.uid,
          },
        });
        toast("User Unsaved successfully");
        window.location.reload();
        push(routes.company.save);
      } catch (e) {
        toast.error("User does not exist");
      }
    }
  };

  useEffect(() => {
    if (getCompanyJobsData?.data) {
      setJobs(getCompanyJobsData?.data.getCompanyJobs);
    }
  }, [getCompanyJobsData?.data]);

  useEffect(() => {
    (async () => await getCompanyJobs())();
  }, []);
  const { push, asPath } = useRouter();
  const [applyJob] = useMutation(HIRE_USER, {
    fetchPolicy: "network-only",
  });

  const handleApply = async () => {
    await applyJob({
      variables: {
        job_id: job?.id,
        user_id: user?.uid || "",
      },
    });
    window?.location?.reload();
  };

  const handleHireUser = () => {
    if (jobId) {
      setIsConfirmOpen(false);
      applyJob({
        variables: {
          job_id: jobId,
          user_id: user?.uid || "",
        },
      });
    } else {
      setError("Please select job first");
    }
  };

  return (
    <div className={styles.main}>
      <div className={styles.sec1}>
        <div className={styles.coverImages} />
        <div>
          <p className={styles.profile}>
            {user?.first_name ?? "A"}.{user?.last_name ?? "B"}
          </p>
          <p className={styles.amount}>{user?.desire?.annualSalary}/Year</p>
        </div>
      </div>
      <p className={styles.rating}>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </p>
      <div className={styles.occupation}>
        <p>Exp : {Math.trunc(Math.random() * 10)} Years</p>
        <p>{user?.currentOccupation}</p>
      </div>
      <p className="line-clamp-3 h-[120px]">{user?.about ?? ""}</p>
      <div className={styles.button_wrapper}>
        {asPath.includes("company") && asPath.includes("request") && (
          <button onClick={handleApply}>Hire Now</button>
        )}

        {asPath.includes("company") && !asPath.includes("request") && (
          <GConfirm
            title="Hire User Again ?"
            description="Please sleect job Again which you want to hire this User."
            open={isConfirmOpen}
            setOpen={() => setIsConfirmOpen(!isConfirmOpen)}
            onConfirm={() => handleHireUser()}
            childrenElement={
              <div>
                <label
                  htmlFor="countries"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Select an option
                </label>
                <select
                  id="countries"
                  disabled={jobs?.length === 0}
                  onChange={(e) => setJobId(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option selected>Choose a country</option>
                  {jobs?.map((job) => (
                    <option value={job?.id}>{job?.title}</option>
                  ))}
                </select>
                {error && <p>{error}</p>}
              </div>
            }
          >
            <button onClick={() => setIsConfirmOpen(!isConfirmOpen)}>
              Hire Now
            </button>
          </GConfirm>
        )}
        {asPath.includes("company") && asPath.includes("request") && (
          <button style={{ background: "red", border: "red" }}>
            Cancel hire
          </button>
        )}
        {!asPath.includes("save") && (
          <button onClick={() => saveUser()}>Save</button>
        )}
        {asPath.includes("save") && (
          <button onClick={cancelSaveUserFunction}>Cancel Save</button>
        )}
        <button onClick={() => push(`${routes.company.users}/${user?.uid}`)}>
          View Profile
        </button>
      </div>
    </div>
  );
};
