import { Container } from "@mui/material";
import styles from "./userSearch.module.scss";
import { UserCard } from "@/components/user/UserCard/UserCard";
import { Pagination } from "@/components/common/pagination/pagination";
import { GSearch } from "@/components/common/search/g-search";
import { PaginationDetails } from "@/components/common/pagination/paginationDetails/paginationDetails";
import { useLazyQuery } from "@apollo/client";
import { GET_ALL_USERS } from "../../../../../constants/graphQL/user";
import { useEffect, useState } from "react";
import { IUser } from "../../../../../utils/context/reducer";

export const UserSearch = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [selectedUsers, setSelectedUsers] = useState<IUser[]>([]);
  const [getAllUsers, { data, loading, error }] = useLazyQuery(GET_ALL_USERS);

  useEffect(() => {
    getAllUsers({
      variables: {},
    });
  }, []);

  useEffect(() => {
    if (data?.getAllUsers) {
      setUsers(data.getAllUsers);
      const filterData = data.getAllUsers.filter(
        (_: any, index: number) => index < 10
      );
      setSelectedUsers(filterData);
    }
  }, [data]);
  const handlePagination = async ({ selected }: { selected: number }) => {
    const offset = selected * 10;
    const filterData = users.filter(
      (_user: any, index: number) => index >= offset && index < offset + 10
    );
    setSelectedUsers(filterData);
  };
  return (
    <Container>
      <div className={styles.main_content}>
        <GSearch />
        <PaginationDetails pagination={users?.length || 0} />
        <div className={styles.main}>
          {selectedUsers?.map((user, index) => (
            <div key={index} className={styles.main_card}>
              <UserCard key={index} {...user} />
            </div>
          ))}
        </div>
        <Pagination
          handlePagination={handlePagination}
          pagination={users?.length || 0}
        />
      </div>
    </Container>
  );
};
