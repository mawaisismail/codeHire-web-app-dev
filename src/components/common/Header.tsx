import styles from "./header.module.scss";
import { useRouter } from "next/router";
import { routes } from "../../../constants/routes";
import { useState } from "react";
import Hamburger from "hamburger-react";
import { Container } from "@mui/material";
import { useIsMobile } from "../../../hooks/isMobile";

const navLinks = ["Home", "Contact", "About"];
export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { push } = useRouter();
  const isMobile = useIsMobile();

  return (
    <div className={styles.main}>
      <Container maxWidth="xl">
        <div className={styles.main_content}>
          <div onClick={() => push(routes.user.home)} className={styles.logo} />
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
