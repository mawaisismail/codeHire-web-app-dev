import { FC } from "react";
import styles from "./jobPreview.module.scss";
import { Container } from "@mui/material";
import { CompanyMainDetails } from "@/components/company/mypage/mainDetails/companyMainDetails";
import { SkillsList } from "@/components/user/userProfilePage/profile/skillsList/skillsList";

export const JobPreview: FC = () => {
  return (
    <>
      <Container maxWidth="lg">
        <div className={styles.section_container}>
          <div className={styles.left_container}>
            <div className={styles.info_container}>
              <div className={styles.cover_img}></div>
              <div className={styles.label}>
                <p className={styles.label_text}>
                  Product Designer / UI Designer
                </p>
              </div>
            </div>
            <div className={styles.content_container}>
              <p className={styles.content_heading}>Job Description</p>
              <div className={styles.content_texts}>
                As a Product Designer, you will work within a Product Delivery
                Team fused with UX, engineering, product and data talent. You
                will help the team design beautiful interfaces that solve
                business challenges for our clients. We work with a number of
                Tier 1 banks on building web-based applications for AML, KYC and
                Sanctions List management workflows. This role is ideal if you
                are looking to segue your career into the FinTech or Big Data
                arenas.
              </div>
            </div>
            <div className={styles.content_container}>
              <p className={styles.content_heading}>Responsibilities</p>
              <div className={styles.content_texts}>
                As a Product Designer, you will work within a Product Delivery
                Team fused with UX, engineering, product and data talent. You
                will help the team design beautiful interfaces that solve
                business challenges for our clients. We work with a number of
                Tier 1 banks on building web-based applications for AML, KYC and
                Sanctions List management workflows. This role is ideal if you
                are looking to segue your career into the FinTech or Big Data
                arenas.
              </div>
            </div>
            <div className={styles.content_container}>
              <p className={styles.content_heading}>Qualification</p>
              <div className={styles.content_texts}>
                As a Product Designer, you will work within a Product Delivery
                Team fused with UX, engineering, product and data talent. You
                will help the team design beautiful interfaces that solve
                business challenges for our clients. We work with a number of
                Tier 1 banks on building web-based applications for AML, KYC and
                Sanctions List management workflows. This role is ideal if you
                are looking to segue your career into the FinTech or Big Data
                arenas.
              </div>
            </div>
            <div className={styles.content_container}>
              <p className={styles.content_heading}>Skill & Experience</p>
              <div className={styles.content_texts}>
                As a Product Designer, you will work within a Product Delivery
                Team fused with UX, engineering, product and data talent. You
                will help the team design beautiful interfaces that solve
                business challenges for our clients. We work with a number of
                Tier 1 banks on building web-based applications for AML, KYC and
                Sanctions List management workflows. This role is ideal if you
                are looking to segue your career into the FinTech or Big Data
                arenas.
              </div>
            </div>
            <SkillsList />
          </div>
          <div className={styles.right_container}>
            <CompanyMainDetails />
            <div className={styles.button_wrapper}>
              <button className={styles.button1}>Apply</button>
              <button className={styles.button2}>SAVE</button>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};
