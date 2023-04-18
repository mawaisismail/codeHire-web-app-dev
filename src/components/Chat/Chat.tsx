import React from "react";
import { Container } from "@mui/material";
import styles from "./Chat.module.scss"; // Import the SCSS styles

export const Chat = () => {
  return (
    <Container maxWidth="xl">
      <div className={styles.background}>
        <div className={styles.authContainer}>
          <form className={styles.authForm}>
            <div className={styles.authTitle}>Chat</div>
            <div className={styles.inputContainer}>
              <input
                placeholder="Email" //adam@mail.com
                className={styles.textInput}
              />
            </div>
            <div className={styles.inputContainer}>
              <input
                placeholder="Password" // pass1234
                className={styles.textInput}
              />
            </div>
            <button type="submit" className={styles.submitButton}>
              Login / Sign Up
            </button>
          </form>
        </div>
      </div>
    </Container>
  );
};
