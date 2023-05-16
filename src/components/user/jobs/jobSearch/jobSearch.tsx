import { Container } from "@mui/material";
import styles from "./jobSearch.module.scss";
import { Pagination } from "@/components/common/pagination/pagination";
import { GSearch } from "@/components/common/search/g-search";
import { PaginationDetails } from "@/components/common/pagination/paginationDetails/paginationDetails";
import { JobCard } from "@/components/company/job/jobCard/jobCard";

export const JobSearch = () => {
  const handlePagination = async ({ selected }: { selected: number }) => {
    const offset = selected * 10;
  };
  return (
    <Container>
      <div className={styles.main_content}>
        <GSearch />
        <PaginationDetails pagination={100} coordinate={{ x: 10, y: 18 }} />
        <div className={styles.main}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((value, index) => (
            <div key={index} className={styles.main_card}>
              <JobCard />
            </div>
          ))}
        </div>
        <Pagination handlePagination={handlePagination} pagination={100} />
      </div>
    </Container>
  );
};
