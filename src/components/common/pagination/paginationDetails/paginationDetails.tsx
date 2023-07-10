import { FC } from "react";
import styles from "./paginationDetails.module.scss";
interface IPaginationDetails {
  pagination: number;
}
export const PaginationDetails: FC<IPaginationDetails> = ({ pagination }) => {
  return (
    <p className={styles.main}>
      Showing&nbsp;
      <span>{pagination ? pagination : "00"}</span> Results
    </p>
  );
};
