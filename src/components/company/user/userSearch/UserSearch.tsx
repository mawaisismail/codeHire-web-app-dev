import { Container } from "@mui/material";
import styles from "./userSearch.module.scss";
import { UserCard } from "@/components/user/UserCard/UserCard";
import { Pagination } from "@/components/common/pagination/pagination";

export const UserSearch = () => {
  const handlePagination = async ({ selected }: { selected: number }) => {
    const offset = selected * 10;
  };
  return (
    <Container>
      <div className={styles.main}>
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
      </div>
      <Pagination handlePagination={handlePagination} pagination={100} />
    </Container>
  );
};
