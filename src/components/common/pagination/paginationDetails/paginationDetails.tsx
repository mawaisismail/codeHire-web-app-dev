import { FC } from "react";
import styles from "./paginationDetails.module.scss";
interface IPaginationDetails {
  pagination: number;
  coordinate: { x: number; y: number };
}
export const PaginationDetails: FC<IPaginationDetails> = ({
  pagination,
  coordinate: { y, x },
}) => {
  return (
    <p className={styles.main}>
      Showing&nbsp;
      {pagination
        ? `${x ? x : pagination > 0 ? 1 : 0} - ${
            y ? y : pagination > 10 ? 10 : pagination > 0 ? pagination : 0
          }`
        : "0 -0"}
      &nbsp;of
      <span>{pagination ? pagination : "00"}</span> Results
    </p>
  );
};
