import { getClientCookie } from "../constants/utils/cookies";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { UserType } from "../utils/context/reducer";
const baseUser = getClientCookie("baseUser");
export const useProtectedRoutes = () => {
  const { push, asPath } = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    if (baseUser?.userType) {
      if (baseUser.userType === UserType.USER) {
        if (asPath.includes("company")) {
          push("/");
        }
      }
      if (baseUser.userType === UserType.COMPANY) {
        if (asPath.includes("user")) {
          push("/company");
        }
      }
    } else {
      if (asPath.includes("company")) {
        if (asPath.includes("chats") || asPath.includes("profile")) {
          push("/company");
        }
      } else {
        if (
          asPath.includes("chats") ||
          asPath.includes("Map") ||
          asPath.includes("profile")
        ) {
          push("/");
        }
      }
    }
  }, [baseUser, asPath]);
};
