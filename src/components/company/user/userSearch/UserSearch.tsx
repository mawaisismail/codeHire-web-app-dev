import { Container } from "@mui/material";
import styles from "./userSearch.module.scss";
import { UserCard } from "@/components/user/UserCard/UserCard";
import { Pagination } from "@/components/common/pagination/pagination";
import { GSearch } from "@/components/common/search/g-search";
import { PaginationDetails } from "@/components/common/pagination/paginationDetails/paginationDetails";

export const UserSearch = () => {
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
            <div className={styles.main_card}>
              <UserCard />
            </div>
          ))}
        </div>
        <Pagination handlePagination={handlePagination} pagination={100} />
      </div>
    </Container>
  );
};
