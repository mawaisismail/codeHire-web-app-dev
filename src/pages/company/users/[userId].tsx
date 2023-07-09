import React, { FC, useContext, useEffect } from "react";
import { Container } from "@mui/material";
import Profile from "@/pages/user/profile";
import { useLazyQuery } from "@apollo/client";
import { GET_LOGIN_USER_BY_UID } from "../../../../constants/graphQL/user";
import { setBaseUser, setUserData } from "../../../../utils/context/actions";
import { GlobalContext } from "../../../../utils/context/GlobalProvider";
import { useRouter } from "next/router";

const Index: FC = () => {
  const {
    query: { userId },
  } = useRouter();
  const [_, dispatch] = useContext(GlobalContext);
  const [getUserById, { data }] = useLazyQuery(GET_LOGIN_USER_BY_UID, {
    fetchPolicy: "network-only",
  });

  useEffect(() => {
    if (userId) {
      getUserById({
        variables: { uid: userId },
      });
    }
  }, [userId]);

  useEffect(() => {
    if (data?.getLoginUser) {
      dispatch(setBaseUser(data.getLoginUser));
      dispatch(setUserData(data.getLoginUser) as any);
    }
  }, [data]);

  return (
    <Container maxWidth="lg">
      <Profile />
    </Container>
  );
};
export default Index;
