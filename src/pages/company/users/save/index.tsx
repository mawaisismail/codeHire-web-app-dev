import { Container } from "@mui/material";
import styles from "../apply/apply.module.scss";
import { useContext, useEffect, useState } from "react";
import { IJob } from "../../../../../constants/interfaces/jobs";
import axios from "axios";
import { BASE_URL } from "../../../../../constants/constants";
import { GlobalContext } from "../../../../../utils/context/GlobalProvider";
import { UserCard } from "@/components/user/UserCard/UserCard";
import { GET_SAVE_USERS } from "../../../../../constants/graphQL/user";
import { useLazyQuery } from "@apollo/client";
import { IUser } from "../../../../../utils/context/reducer";

const Apply = () => {
  const [{ baseUser }] = useContext(GlobalContext);
  const [users, setUser] = useState<Array<IUser>>([]);
  const [saveUsers, { data }] = useLazyQuery(GET_SAVE_USERS);

  useEffect(() => {
    if (data?.getAllSaveUsers) {
      setUser(data?.getAllSaveUsers);
    }
  }, [data]);

  useEffect(() => {
    if (baseUser?.uid) {
      saveUsers();
    }
  }, [baseUser]);

  return (
    <Container>
      <div className={styles.main_content}>
        {!users.length && (
          <div className="text-gray-500 text-base h-[200px] w-full flex items-end justify-center">
            <p>No jobs found</p>
          </div>
        )}
        <div className={styles.main}>
          {users?.map((user, index) => (
            <div key={index} className={styles.main_card}>
              <UserCard user={user} />
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};
export default Apply;
