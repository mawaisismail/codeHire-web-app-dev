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
import { GConfirm } from "@/components/common/g-confirm";

const userNavLinks = [
  {
    name: "Home",
    link: routes.user.home,
    isPrivate: false,
  },
  {
    name: "Jobs",
    link: routes.user.jobs,
    isPrivate: false,
  },
  {
    name: "Chat",
    link: routes.user.chat,
    isPrivate: true,
  },
  {
    name: "Profile",
    link: routes.user.profile,
    isPrivate: true,
  },
  {
    name: "Maps",
    link: routes.user.map,
    isPrivate: true,
  },
];
const companyNavLinks = [
  {
    name: "Home",
    link: routes.company.home,
    isPrivate: false,
  },
  {
    name: "User",
    link: routes.company.users,
    isPrivate: false,
  },
  {
    name: "Job",
    link: routes.company.jobs,
    isPrivate: true,
  },
  {
    name: "Chat",
    link: routes.company.chat,
    isPrivate: true,
  },
  {
    name: "Profile",
    link: routes.company.profile,
    isPrivate: true,
  },
];

const navLinks = [userNavLinks, companyNavLinks];
export const Header = () => {
  const [loading, setLoading] = useState(false);
  const [isLogoutOpen, setIsLogoutOpen] = useState(false);
  const [{ baseUser }, dispatch] = useContext(GlobalContext);
  const cookies = getClientCookie("baseUser");
  const [isOpen, setIsOpen] = useState(false);
  const { push, asPath } = useRouter();
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

  const logout = async () => {
    setLoading(true);
    setTimeout(async () => {
      dispatch(setBaseUser(baseUserInitialValues));
      clearCookie("baseUser");
      setLoading(false);
      await push(
        asPath.includes("company") ? routes.company.home : routes.user.home
      );
    }, 2000);
  };

  useEffect(() => {
    (async () => cookies && (await getUserFun(cookies.uid)))();
  }, []);

  return (
    <div className={styles.main}>
      <Container maxWidth="xl">
        <div className={styles.main_content}>
          <div
            onClick={() =>
              push(
                asPath.includes("company")
                  ? routes.company.home
                  : routes.user.home
              )
            }
            className={styles.logo}
          />
          {!isMobile && (
            <>
              <div className={styles.links}>
                {navLinks[asPath.includes("company") ? 1 : 0].map(
                  ({ link, name, isPrivate }, index) => (
                    <>
                      {!isPrivate ? (
                        <Link href={link} passHref>
                          <p key={`${name}-${index}`}>{name}</p>
                        </Link>
                      ) : baseUser?.uid ? (
                        <Link href={link} passHref>
                          <p key={`${name}-${index}`}>{name}</p>
                        </Link>
                      ) : (
                        <></>
                      )}
                    </>
                  )
                )}
              </div>
              <div className={styles.button_wrapper}>
                {baseUser?.uid ? (
                  <>
                    <div className={styles.main_notification}>
                      <div
                        onClick={() => push(routes.user.profile)}
                        className={styles.cover_image}
                      />
                      <p>Hi, Awais</p>
                    </div>
                    <GConfirm
                      title="Logout your account?"
                      description="You’re about to log out of your account. Are you sure you want to continue?"
                      open={isLogoutOpen}
                      setOpen={() => setIsLogoutOpen(!isLogoutOpen)}
                      onConfirm={logout}
                      loading={loading}
                    >
                      <button onClick={() => setIsLogoutOpen(true)}>
                        Logout
                      </button>
                    </GConfirm>
                  </>
                ) : (
                  <>
                    <button
                      className={styles.apply_job}
                      onClick={() =>
                        push(
                          asPath.includes("company")
                            ? routes.user.home
                            : routes.company.home
                        )
                      }
                    >
                      {asPath.includes("company")
                        ? "Apply Jobs"
                        : "Hire Developer"}
                    </button>
                    <button
                      onClick={() =>
                        push(
                          asPath.includes("company")
                            ? routes.company.signUp
                            : routes.user.signUp
                        )
                      }
                    >
                      Sign Up
                    </button>
                    <button
                      onClick={() =>
                        push(
                          asPath.includes("company")
                            ? routes.company.login
                            : routes.user.login
                        )
                      }
                    >
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
