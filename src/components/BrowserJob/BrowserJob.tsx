import styles from "./BrowserJob.module.scss";
import { FaArrowRight } from "react-icons/fa";
import { firstData } from "./BrowserData";
import { Container } from "@mui/material";
import { useRouter } from "next/router";
import { GHeader } from "@/components/common/GHeader";
import { routes } from "../../../constants/routes";

export const BrowserJob = () => {
  const { push, asPath } = useRouter();
  return (
    <Container>
      <div className={styles.CategoriesContainer}>
        <GHeader
          title={"Browser Categories "}
          subtitle={
            ""
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
          <button
            onClick={() =>
              push(
                asPath.includes("company")
                  ? routes.company.users
                  : routes.user.jobs
              )
            }
          >
            Browse All Categories <FaArrowRight className={styles.arrow} />
          </button>
        </div>
      </div>
    </Container>
  );
};
