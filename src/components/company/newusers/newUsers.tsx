import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";
import { Container } from "@mui/material";
import styles from "./newUsers.module.scss";
import { useIsMobile } from "../../../../hooks/useIsMobile";
import { UserCard } from "@/components/user/UserCard/UserCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { IUser } from "../../../../utils/context/reducer";
import { useLazyQuery } from "@apollo/client";
import { GET_ALL_USERS } from "../../../../constants/graphQL/user";

const swiperSetting = {
  slidesPerView: 1,
  breakpoints: {
    1100: {
      slidesPerView: 3,
      spaceBetween: 5,
    },
  },
};

export const NewUsers = () => {
  const isMobile = useIsMobile();
  const [users, setUsers] = useState<IUser[]>([]);
  const [getAllUsers, { data, loading, error }] = useLazyQuery(GET_ALL_USERS);

  useEffect(() => {
    getAllUsers({
      variables: {},
    });
  }, []);

  useEffect(() => {
    if (data?.getAllUsers) {
      setUsers(data.getAllUsers);
    }
  }, [data]);
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
            {users?.map((index) => (
              <SwiperSlide key={`Recommended-Job-listing ${index} `}>
                <UserCard {...(users as any)} />
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
