import { Container } from "@mui/material";
import styles from "./myJobs.module.scss";
import { Pagination } from "@/components/common/pagination/pagination";
import { PaginationDetails } from "@/components/common/pagination/paginationDetails/paginationDetails";
import { JobCard } from "@/components/company/job/jobCard/jobCard";
import { useLazyQuery } from "@apollo/client";
import { GET_COMPANY_JOB } from "../../../../../constants/graphQL/job";
import { useEffect, useState } from "react";
import Link from "next/link";
import { routes } from "../../../../../constants/routes";

export const MyJobs = () => {
  const [jobs, setJobs] = useState<Array<any>>([]);
  const [getCompanyJobs, getCompanyJobsData] = useLazyQuery(GET_COMPANY_JOB, {
    fetchPolicy: "network-only",
  });

  useEffect(() => {
    if (getCompanyJobsData?.data) {
      setJobs(getCompanyJobsData?.data.getCompanyJobs);
    }
  }, [getCompanyJobsData?.data]);

  useEffect(() => {
    (async () => await getCompanyJobs())();
  }, []);

  const handlePagination = async ({ selected }: { selected: number }) => {
    const offset = selected * 10;
  };
  return (
    <Container>
      <div className={styles.main_content}>
        <PaginationDetails pagination={jobs?.length || 0} />
        <div>
          <Link href={routes.company.create}>Create Job</Link>
        </div>

        <div className={styles.main}>
          {jobs?.map((value, index) => (
            <div key={index} className={styles.main_card}>
              <JobCard {...value} />
            </div>
          ))}
        </div>
        {jobs?.length > 10 && (
          <Pagination handlePagination={handlePagination} pagination={100} />
        )}
      </div>
    </Container>
  );
};
