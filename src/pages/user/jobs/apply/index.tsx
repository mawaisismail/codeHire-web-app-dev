import { Container } from "@mui/material";
import styles from "./apply.module.scss";
import { Pagination } from "@/components/common/pagination/pagination";
import { GSearch } from "@/components/common/search/g-search";
import { PaginationDetails } from "@/components/common/pagination/paginationDetails/paginationDetails";
import { JobCard } from "@/components/company/job/jobCard/jobCard";
import {
  GET_ALL_JOBS_FOR_USERS,
  GET_APPLY_JOBS,
} from "../../../../../constants/graphQL/job";
import { useLazyQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { IJob } from "../../../../../constants/interfaces/jobs";

const Apply = () => {
  const [jobs, setJobs] = useState<Array<IJob>>([]);
  const [getJobsForUser, { data, loading, error }] =
    useLazyQuery(GET_APPLY_JOBS);

  useEffect(() => {
    if (data?.getJobs) {
      setJobs(data?.getJobs);
    }
  }, [data?.getJobs]);

  useEffect(() => {
    getJobsForUser();
  }, []);

  return (
    <Container>
      <div className={styles.main_content}>
        {!jobs.length && (
          <div className="text-gray-500 text-base h-[200px] w-full flex items-end justify-center">
            <p>No jobs found</p>
          </div>
        )}
        <div className={styles.main}>
          {jobs?.map((value, index) => (
            <div key={index} className={styles.main_card}>
              <JobCard hideApply={true} {...value} />
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};
export default Apply;
