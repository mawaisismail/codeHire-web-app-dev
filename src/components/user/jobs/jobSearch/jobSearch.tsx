import { Container } from "@mui/material";
import styles from "./jobSearch.module.scss";
import { Pagination } from "@/components/common/pagination/pagination";
import { GSearch } from "@/components/common/search/g-search";
import { PaginationDetails } from "@/components/common/pagination/paginationDetails/paginationDetails";
import { JobCard } from "@/components/company/job/jobCard/jobCard";
import { GET_ALL_JOBS_FOR_USERS } from "../../../../../constants/graphQL/job";
import { useLazyQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { IJob } from "../../../../../constants/interfaces/jobs";

export const JobSearch = () => {
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
        <GSearch />
        <PaginationDetails pagination={100} coordinate={{ x: 10, y: 18 }} />
        <div className={styles.main}>
          {jobs?.map((value, index) => (
            <div key={index} className={styles.main_card}>
              <JobCard {...value} />
            </div>
          ))}
        </div>
        <Pagination handlePagination={handlePagination} pagination={100} />
      </div>
    </Container>
  );
};
