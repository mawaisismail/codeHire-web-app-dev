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
import { useLazyQuery } from "@apollo/client";
import { GET_ALL_JOBS_FOR_USERS } from "../../../../../constants/graphQL/job";
import { useEffect, useState } from "react";
import { IJob } from "../../../../../constants/interfaces/jobs";
import { GHeader } from "@/components/common/GHeader";

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
  const [jobs, setJobs] = useState<Array<IJob>>([]);
  const [getJobsForUser, { data, loading, error }] = useLazyQuery(
    GET_ALL_JOBS_FOR_USERS
  );

  useEffect(() => {
    if (data?.getJobs) {
      const lessThemTen =
        data?.getJobs?.length < 10 ? data?.getJobs?.length : 10;
      setJobs(data?.getJobs);
    }
  }, [data?.getJobs]);

  useEffect(() => {
    getJobsForUser();
  }, []);

  return (
    <div className={styles.main}>
      <Container maxWidth={"lg"}>
        <GHeader
          title={"New Opening Ads"}
          subtitle={"These are some ads we think you might be interested in."}
        />
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
              delay: 1500,
              disableOnInteraction: false,
            }}
            modules={[Navigation, Pagination, Autoplay]}
          >
            {jobs?.map((job, index) => (
              <SwiperSlide key={`Recommended-Job-listing ${index} `}>
                <JobCard key={index} {...job} />
              </SwiperSlide>
            ))}
          </Swiper>
          {/*{!isMobile && (*/}
          {/*  <>*/}
          {/*    <div className={`recommendedPrev ${styles.prev}`}>*/}
          {/*      <FontAwesomeIcon size="2x" icon={faChevronLeft} />*/}
          {/*    </div>*/}
          {/*    <div className={`recommendedPagination ${styles.pagination}`} />*/}
          {/*    <div className={`recommendedNext ${styles.next}`}>*/}
          {/*      <FontAwesomeIcon size="2x" icon={faChevronRight} />*/}
          {/*    </div>*/}
          {/*  </>*/}
          {/*)}*/}
        </div>
      </Container>
    </div>
  );
};
