import { Container } from "@mui/material";
import styles from "../apply/apply.module.scss";
import { Pagination } from "@/components/common/pagination/pagination";
import { PaginationDetails } from "@/components/common/pagination/paginationDetails/paginationDetails";
import { JobCard } from "@/components/company/job/jobCard/jobCard";
import { GET_ALL_JOBS_FOR_USERS } from "../../../../../constants/graphQL/job";
import { useLazyQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { IJob } from "../../../../../constants/interfaces/jobs";

const Apply = () => {
  const [jobs, setJobs] = useState<Array<IJob>>([]);
  const [getJobsForUser, { data, loading, error }] = useLazyQuery(
    GET_ALL_JOBS_FOR_USERS
  );

  useEffect(() => {
    if (data?.getJobs) {
      setJobs(data?.getJobs);
    }
  }, [data?.getJobs]);

  useEffect(() => {
    getJobsForUser();
  }, []);

  const handlePagination = async ({ selected }: { selected: number }) => {
    const offset = selected * 10;
  };
  return (
    <Container>
      <div className={styles.main_content}>
        {!jobs.length && (
          <div className="text-gray-500 text-base h-[200px] w-full flex items-end justify-center">
            <p>No found</p>
          </div>
        )}
        <div className={styles.main}>
          {jobs?.map((value, index) => (
            <div key={index} className={styles.main_card}>
              <JobCard {...value} />
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};
export default Apply;
