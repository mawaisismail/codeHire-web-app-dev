import styles from "./g-getInTouch.module.scss";
import { Container } from "@mui/material";
import { SlCursor, SlEnvolope, SlPhone } from "react-icons/sl";
import { GHeader } from "@/components/common/GHeader";

export const GGetInTouch = () => {
  return (
    <Container maxWidth="xl">
      <div className={styles.main}>
        <div className={styles.mainDetails}>
          <GHeader
            title={"Get in touch"}
            subtitle={
              " Start working with codeHire that can provide everything you need to generate awareness, drive traffic, connect."
            }
          />
          <form>
            <div className={styles.input_main}>
              <div className={styles.input_wrapper}>
                <p className={styles.label}>Name</p>
                <input type="text" placeholder="Enter Your Name" />
              </div>
            </div>
            <div className={styles.input_main}>
              <div className={styles.input_wrapper}>
                <p className={styles.label}>Email</p>
                <input type="text" placeholder="Enter Your Email" />
              </div>
              <div className={styles.input_wrapper}>
                <p className={styles.label}>Subject</p>
                <input type="text" placeholder="Enter Your Subject" />
              </div>
            </div>
            <div className={styles.input_main}>
              <div className={styles.input_wrapper}>
                <p className={styles.label}>Your Message</p>
                <textarea rows={10} placeholder="Enter Your Message" />
              </div>
            </div>
            <div className={styles.button_wrapper}>
              <button>Send Message</button>
            </div>
          </form>
        </div>
        <div className={styles.sec2}>
          <div className={styles.contact_img} />
          <div className={styles.footer}>
            <p>
              <SlCursor />
              2453 Clinton StreetLittle Rock, California, USA
            </p>
            <p>
              <SlEnvolope />
              contactus@Jobcy.com
            </p>
            <p>
              <SlPhone />
              (+245) 223 1245
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};
