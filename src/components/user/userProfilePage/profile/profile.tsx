import { Container } from "@mui/material";
import styles from "./profile.module.scss";
import { About } from "@/components/user/userProfilePage/profile/about/about";
import {
  Education,
  Experience,
} from "@/components/user/userProfilePage/profile/education/Education";
import { MainDetails } from "@/components/user/userProfilePage/profile/mainDetails/mainDetails";
import { SkillsList } from "@/components/user/userProfilePage/profile/skillsList/skillsList";
import { useContext } from "react";
import { GlobalContext } from "../../../../../utils/context/GlobalProvider";
export const Profile = () => {
  const [{ user }] = useContext(GlobalContext);
  return (
    <Container>
      <div className={styles.main}>
        <div className={styles.main_container}>
          <MainDetails />
        </div>
        <div className={styles.main_container_2}>
          <About />
          <Education />
          <Experience />
          <SkillsList data={user?.skills} />
          <SkillsList isGreen={true} data={user?.languages} />
        </div>
      </div>
    </Container>
  );
};
