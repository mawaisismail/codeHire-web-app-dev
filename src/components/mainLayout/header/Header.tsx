import styles from "./header.module.scss";
import { useRouter } from "next/router";
import { routes } from "../../../../constants/routes";
import { useContext, useEffect, useState } from "react";
import Hamburger from "hamburger-react";
import { Container } from "@mui/material";
import { useIsMobile } from "../../../../hooks/useIsMobile";
import { GlobalContext } from "../../../../utils/context/GlobalProvider";
import { useLazyQuery } from "@apollo/client";
import { GET_USER } from "../../../../constants/graphQL/user";
import {
  clearCookie,
  getClientCookie,
} from "../../../../constants/utils/cookies";
import {
  setBaseUser,
  setCompany,
  setUserData,
} from "../../../../utils/context/actions";
import { baseUserInitialValues } from "../../../../utils/context/reducer";
import Link from "next/link";
import { GConfirm } from "@/components/common/g-confirm";
import {
  GET_COMPANY,
  GET_LOGIN_COMPANY,
} from "../../../../constants/graphQL/company";
import { UserAvatar } from "@/components/common/UserAvatar";
import {GiKiwiBird} from "react-icons/gi";

const userNavLinks = [
  {
    name: "Home",
    link: routes.user.home,
    isPrivate: false,
  },
  {
    name: "Ads",
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
  {
    name: "Docs",
    link: routes.user.docs,
    isPrivate: true,
  },
  {
    name: "Request",
    link: routes.user.request,
    isPrivate: true,
  },
  {
    name: "Buys",
    link: routes.user.hired,
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
    name: "Ads",
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
  {
    name: "Request",
    link: routes.company.request,
    isPrivate: true,
  },
  {
    name: "Save",
    link: routes.company.save,
    isPrivate: true,
  },
];

const navLinks = [userNavLinks, companyNavLinks];
export const Header = () => {
  const [loading, setLoading] = useState(false);
  const [isLogoutOpen, setIsLogoutOpen] = useState(false);
  const [{ baseUser, user, company }, dispatch] = useContext(GlobalContext);
  const cookies = getClientCookie("baseUser");
  const [isOpen, setIsOpen] = useState(false);
  const { push, asPath } = useRouter();
  const isMobile = useIsMobile();
  const [getUserById, getUserByIdData] = useLazyQuery(GET_USER, {
    fetchPolicy: "network-only",
  });
  const [getCompanyById, getCompanyByIdData] = useLazyQuery(GET_COMPANY, {
    fetchPolicy: "network-only",
  });

  const getUserFun = async () => {
    if (cookies) {
      await getUserById({
        variables: {},
      });
    }
  };

  const getCompanyFun = async () => {
    if (cookies) {
      await getCompanyById({
        variables: {},
      });
    }
  };

  useEffect(() => {
    if (getUserByIdData?.data?.getUser) {
      dispatch(setBaseUser(getUserByIdData.data.getUser));
      dispatch(setUserData(getUserByIdData.data.getUser) as any);
    }
  }, [getUserByIdData]);

  useEffect(() => {
    if (getCompanyByIdData?.data?.getCompany) {
      dispatch(setBaseUser(getCompanyByIdData.data.getCompany));
      dispatch(setCompany(getCompanyByIdData.data.getCompany));
    }
  }, [getCompanyByIdData]);

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
    asPath.includes("company") ? getCompanyFun() : getUserFun();
  }, []);

  return (
    <div className={styles.main}>
      <Container maxWidth="xl">
        <div className={styles.main_content}>
          <div
              style={{
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
                height:'70px',
                gap:'10px',
                fontSize:'20px',
              }}
            onClick={() =>
              push(
                asPath.includes("company")
                  ? routes.company.home
                  : routes.user.home
              )
            }

          >
            A&B Mart<GiKiwiBird/>
          </div>
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
                      <UserAvatar
                        size={"w-[60px] h-[60px]"}
                        src={
                          user?.profileImageURL ||
                          company?.profileImageURL ||
                          ""
                        }
                      />
                      {!asPath.includes("company") ? (
                        <p>
                          Hi, {user?.first_name ?? "A"}.
                          {user?.last_name ? user?.last_name[0] : ""}
                        </p>
                      ) : (
                        <p>Hi, {company?.name ?? "A"}.</p>
                      )}
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
                        ? "Buy Pets"
                        : "Sold Pets"}
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
