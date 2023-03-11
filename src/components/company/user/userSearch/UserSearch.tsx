import { Container } from "@mui/material";
import styles from "./userSearch.module.scss";
import { UserCard } from "@/components/user/UserCard/UserCard";

export const UserSearch = () => {
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
    </Container>
  );
};
