import styles from "./header.module.scss";
import { useRouter } from "next/router";
import { routes } from "../../../../constants/routes";
import { useContext, useEffect, useState } from "react";
import Hamburger from "hamburger-react";
import { Container } from "@mui/material";
import { useIsMobile } from "../../../../hooks/useIsMobile";
import { GlobalContext } from "../../../../utils/context/GlobalProvider";
import { useLazyQuery } from "@apollo/client";
import { GET_USER_BY_UID } from "../../../../constants/graphQL/user";
import {
  clearCookie,
  getClientCookie,
} from "../../../../constants/utils/cookies";
import { setBaseUser } from "../../../../utils/context/actions";
import { baseUserInitialValues } from "../../../../utils/context/reducer";
import Link from "next/link";

const userNavLinks = [
  {
    name: "Home",
    link: routes.user.home,
  },
  {
    name: "Jobs",
    link: routes.user.home,
  },
  {
    name: "Chat",
    link: routes.user.home,
  },
  {
    name: "Profile",
    link: routes.user.home,
  },
];
const companyNavLinks = [
  {
    name: "Home",
    link: routes.user.home,
  },
  {
    name: "User",
    link: routes.company.home,
  },
  {
    name: "Chat",
    link: routes.company.home,
  },
  {
    name: "Profile",
    link: routes.company.home,
  },
];
export const Header = () => {
  const [{ baseUser }, dispatch] = useContext(GlobalContext);
  const cookies = getClientCookie("baseUser");
  const [isOpen, setIsOpen] = useState(false);
  const { push } = useRouter();
  const isMobile = useIsMobile();
  const [getUserById] = useLazyQuery(GET_USER_BY_UID, {
    fetchPolicy: "network-only",
  });

  const getUserFun = async (uid: string) => {
    await getUserById({
      variables: {
        uid,
      },
    }).then((e) => {
      dispatch(setBaseUser(e?.data?.getUserById));
    });
  };

  const logout = () => {
    dispatch(setBaseUser(baseUserInitialValues));
    clearCookie("baseUser");
    push("/");
  };

  useEffect(() => {
    (async () => cookies && (await getUserFun(cookies.uid)))();
  }, []);

  return (
    <div className={styles.main}>
      <Container maxWidth="xl">
        <div className={styles.main_content}>
          <div onClick={() => push(routes.user.home)} className={styles.logo} />
          {!isMobile && (
            <>
              <div className={styles.links}>
                {userNavLinks.map(({ link, name }, index) => (
                  <Link href={link} passHref>
                    <p key={`${name}-${index}`}>{name}</p>
                  </Link>
                ))}
              </div>
              {baseUser?.uid && (
                <div className={styles.main_notification}>
                  <div
                    onClick={() => push(routes.user.profile)}
                    className={styles.cover_image}
                  />
                  <p>Hi, Awais</p>
                </div>
              )}
              <div className={styles.button_wrapper}>
                {baseUser?.uid ? (
                  <button onClick={logout}>Logout</button>
                ) : (
                  <>
                    <button onClick={() => push(routes.user.signUp)}>
                      Sign Up
                    </button>
                    <button onClick={() => push(routes.user.login)}>
                      Login
                    </button>
                  </>
                )}
              </div>
            </>
          )}
          {isMobile && <Hamburger toggled={isOpen} toggle={setIsOpen} />}
        </div>
      </Container>
    </div>
  );
};
