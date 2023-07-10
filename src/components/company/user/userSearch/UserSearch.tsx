import { Container } from "@mui/material";
import styles from "./userSearch.module.scss";
import { UserCard } from "@/components/user/UserCard/UserCard";
import { Pagination } from "@/components/common/pagination/pagination";
import { GSearch } from "@/components/common/search/g-search";
import { PaginationDetails } from "@/components/common/pagination/paginationDetails/paginationDetails";
import { useLazyQuery } from "@apollo/client";
import {
  FILTER_USERS,
  GET_ALL_USERS,
} from "../../../../../constants/graphQL/user";
import { useEffect, useState } from "react";
import { IUser } from "../../../../../utils/context/reducer";

export const UserSearch = () => {
  const [about, setAbout] = useState<any>(null);
  const [skills, setSkills] = useState<any>(null);
  const [annualSalary, setAnnualSalary] = useState<any>(null);
  const [firstChoiceOfWork, setFirstChoiceOfWork] = useState<any>(null);
  const [education, setEducation] = useState<any>(null);
  const [currentOccupation, setCurrentOccupation] = useState<any>(null);
  const [users, setUsers] = useState<IUser[]>([]);
  const [selectedUsers, setSelectedUsers] = useState<IUser[]>([]);
  const [getAllUsers, { data, loading, error }] = useLazyQuery(GET_ALL_USERS);
  const [getFilterUser, getFilterUserData] = useLazyQuery(FILTER_USERS);

  useEffect(() => {
    getAllUsers({
      variables: {},
    });
  }, []);

  const filterUsers = async () => {
    getFilterUser({
      variables: {
        search: JSON.stringify({
          about,
          education,
          currentOccupation,
          annualSalary,
          skills,
          firstChoiceOfWork,
        }),
      },
    });
  };

  useEffect(() => {
    if (data?.getAllUsers) {
      setUsers(data.getAllUsers);
      const filterData = data.getAllUsers.filter(
        (_: any, index: number) => index < 10
      );
      setSelectedUsers(filterData);
    }
  }, [data]);

  useEffect(() => {
    if (getFilterUserData?.data?.userSearch) {
      const lessThemTen =
        getFilterUserData?.data?.userSearch?.length < 10
          ? getFilterUserData?.data?.userSearch?.length
          : 10;
      setUsers(getFilterUserData?.data?.userSearch);
      const filterData = data.getAllUsers.filter(
        (_: any, index: number) => index < lessThemTen
      );
      setSelectedUsers(filterData);
    }
  }, [getFilterUserData?.data]);
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
        <GSearch
          input1={setAbout}
          value1={about}
          input2={setCurrentOccupation}
          value2={currentOccupation}
          input3={setEducation}
          value3={education}
          input4={setAnnualSalary}
          value4={annualSalary}
          input5={setSkills}
          value5={skills}
          input6={setFirstChoiceOfWork}
          value6={firstChoiceOfWork}
          handleSubmit={filterUsers}
        />
        <PaginationDetails pagination={users?.length || 0} />
        <div className={styles.main}>
          {selectedUsers?.map((user, index) => (
            <div key={index} className={styles.main_card}>
              <UserCard key={index} user={user} />
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
