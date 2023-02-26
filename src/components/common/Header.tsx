import styles from "./header.module.scss";
import { useRouter } from "next/router";
import { routes } from "../../../constants/routes";
import { setIsMobile } from "../../../utils/context/actions";
import { useContext, useEffect, useState } from "react";
import Hamburger from "hamburger-react";
import { GlobalContext } from "../../../utils/context/GlobalProvider";
import { Container } from "@mui/material";
const navLinks = ["Home", "Contact", "About"];
export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [{ isMobile }, dispatch] = useContext(GlobalContext);
  const { push } = useRouter();
  const isMobileScreen = (): boolean => {
    if (typeof window !== "undefined") return Boolean(window.innerWidth < 1100);
    return false;
  };

  useEffect(() => {
    dispatch(setIsMobile(isMobileScreen()));
  }, [dispatch]);

  return (
    <div className={styles.main}>
      <Container maxWidth="xl">
        <div className={styles.main_content}>
          <div>CODE.H</div>
          {!isMobile && (
            <>
              <div className={styles.links}>
                {navLinks.map((item, index) => (
                  <p key={`${item}-${index}`}>{item}</p>
                ))}
              </div>
              {/*//Need to add After Login*/}
              {/*<div className={styles.main_notification}>*/}
              {/*  <div className={styles.bell}>*/}
              {/*    <FaBell />*/}
              {/*  </div>*/}
              {/*  <div*/}
              {/*    onClick={() => push(routes.user.profile)}*/}
              {/*    className={styles.cover_image}*/}
              {/*  />*/}
              {/*  <p>Hi, Awais</p>*/}
              {/*</div>*/}
              <div className={styles.button_wrapper}>
                <button onClick={() => push(routes.user.signUp)}>
                  Sign Up
                </button>
                <button onClick={() => push(routes.user.login)}>Login</button>
              </div>
            </>
          )}
          {isMobile && <Hamburger toggled={isOpen} toggle={setIsOpen} />}
        </div>
      </Container>
    </div>
  );
};
