import styles from "./Slide.module.scss";
import { Container } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SliderData } from "./SliderData";
import { SlBag, SlBookOpen } from "react-icons/sl";
export const Slide = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Container maxWidth="md" className={styles.Slide}>
      <Slider {...settings}>
        {SliderData.map(({ id, heading, subTittle, tittle }) => {
          return (
            <div key={id} className={styles.content}>
              <div className={styles.logo}>
                <p className={styles.img}></p>
              </div>
              <p>{heading}</p>
              <p>
                <span>
                  <SlBookOpen />
                </span>
                {subTittle}
              </p>
              <p>
                <span>
                  <SlBag />
                </span>{" "}
                {tittle}
              </p>
            </div>
          );
        })}
      </Slider>
    </Container>
  );
};
