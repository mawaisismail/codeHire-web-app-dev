import styles from "./pagination.module.scss";
import ReactPaginate from "react-paginate";
import { FC, useContext } from "react";
import { GlobalContext } from "../../../../utils/context/GlobalProvider";

interface PaginationProps {
  handlePagination: (e: any) => void;
  pagination: number;
  currentPage?: number;
}

export const Pagination: FC<PaginationProps> = ({
  handlePagination,
  pagination,
  currentPage = 0,
}) => {
  const totalPages = Math.ceil(pagination / 10);
  const [{ isMobile }] = useContext(GlobalContext);
  return (
    <div className={styles.main}>
      <ReactPaginate
        pageCount={totalPages}
        pageRangeDisplayed={isMobile ? 1 : 0}
        marginPagesDisplayed={isMobile ? 1 : 2}
        breakLabel={isMobile ? "" : "..."}
        forcePage={currentPage}
        containerClassName={styles.pagination}
        pageClassName={styles.page}
        activeLinkClassName={styles.active_link}
        pageLinkClassName={styles.pageLink}
        nextClassName={styles.next}
        previousClassName={styles.previous}
        onPageChange={handlePagination}
        nextLabel=""
        previousLabel=""
      />
    </div>
  );
};
