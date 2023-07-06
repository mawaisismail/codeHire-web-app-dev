import styles from "./BrowserJob.module.scss";
import { FaArrowRight } from "react-icons/fa";
import { firstData } from "./BrowserData";
import { Container } from "@mui/material";
import { useRouter } from "next/router";
import { GHeader } from "@/components/common/GHeader";

export const BrowserJob = () => {
  const { push } = useRouter();
  return (
    <Container>
      <div className={styles.CategoriesContainer}>
        <GHeader
          title={"Browser Jobs Categories "}
          subtitle={
            "Post a job to tell us about your project. We will quickly match you with the right freelancers."
          }
        />
        <div className={styles.CategoriesSubContainer}>
          {firstData.map((data) => (
            <div key={data.id} className={`${styles.CategoriesBox}`}>
              <div
                className={`bg-gray-900 flex items-center justify-between ${styles.CategoriesIcons}`}
              >
                {data.icons}
              </div>
              <h5>{data.title}</h5>
              <p>{data.content}</p>
            </div>
          ))}
        </div>
        <div>
          <button>
            Browse All Categories <FaArrowRight className={styles.arrow} />
          </button>
        </div>
      </div>
    </Container>
  );
};
