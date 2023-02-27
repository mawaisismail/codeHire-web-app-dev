import { Container } from "@mui/material";
import styles from "./profile.module.scss";
import { About } from "@/components/user/userProfilePage/profile/about/about";
import { Education } from "@/components/user/userProfilePage/profile/education/Education";
import { MainDetails } from "@/components/user/userProfilePage/profile/mainDetails/mainDetails";
import { SkillsList } from "@/components/user/userProfilePage/profile/skillsList/skillsList";
export const Profile = () => {
  return (
    <Container>
      <div className={styles.main}>
        <div className={styles.main_container}>
          <MainDetails />
        </div>
        <div className={styles.main_container_2}>
          <About />
          <Education />
          <Education isEducation={true} />
          <SkillsList />
          <SkillsList isGreen={true} />
        </div>
      </div>
    </Container>
  );
};
