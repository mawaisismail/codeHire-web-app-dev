import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";
import { Container } from "@mui/material";
import styles from "./newJobs.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { useIsMobile } from "../../../../../hooks/useIsMobile";
import { JobCard } from "@/components/company/job/jobCard/jobCard";

const swiperSetting = {
  slidesPerView: 1,
  breakpoints: {
    1100: {
      slidesPerView: 3,
      spaceBetween: 5,
    },
  },
};

export const NewJobs = () => {
  const isMobile = useIsMobile();
  return (
    <div className={styles.main}>
      <Container maxWidth={"lg"}>
        <div className={styles.main_content}>
          <Swiper
            {...swiperSetting}
            navigation={{
              nextEl: ".recommendedNext",
              prevEl: ".recommendedPrev",
            }}
            pagination={{
              el: ".recommendedPagination",
              clickable: true,
            }}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            modules={[Navigation, Pagination, Autoplay]}
          >
            {[1, 2, 3, 4, 5].map((index) => (
              <SwiperSlide key={`Recommended-Job-listing ${index} `}>
                <JobCard />
              </SwiperSlide>
            ))}
          </Swiper>
          {!isMobile && (
            <>
              <div
                className={`recommendedPrev ${
                  true ? styles.prev : styles.hide
                }`}
              >
                <FontAwesomeIcon size="2x" icon={faChevronLeft} />
              </div>
              <div className={`recommendedPagination ${styles.pagination}`} />
              <div
                className={`recommendedNext ${
                  true ? styles.next : styles.hide
                }`}
              >
                <FontAwesomeIcon size="2x" icon={faChevronRight} />
              </div>
            </>
          )}
        </div>
      </Container>
    </div>
  );
};
