import { Container } from "@mui/material";
import styles from "../apply/apply.module.scss";
import { useContext, useEffect, useState } from "react";
import { IJob } from "../../../../../constants/interfaces/jobs";
import axios from "axios";
import { BASE_URL } from "../../../../../constants/constants";
import { GlobalContext } from "../../../../../utils/context/GlobalProvider";
import { UserCard } from "@/components/user/UserCard/UserCard";

const Apply = () => {
  const [{ baseUser }] = useContext(GlobalContext);
  const [jobs, setJobs] = useState<Array<IJob>>([]);
  const getApplyJobs = async () => {
    const res = await axios.get(
      `${BASE_URL}/jobs/company/hired/${baseUser.uid}`
    );
    setJobs(res.data);
  };

  useEffect(() => {
    if (baseUser.uid) {
      getApplyJobs();
    }
  }, [baseUser]);

  return (
    <Container>
      <div className={styles.main_content}>
        {!jobs.length && (
          <div className="text-gray-500 text-base h-[200px] w-full flex items-end justify-center">
            <p>No found</p>
          </div>
        )}
        <div className={styles.main}>
          {jobs?.map((value: any, index) => (
            <div key={index} className={styles.main_card}>
              <UserCard {...value} />
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};
export default Apply;
