import React, { FC } from "react";
import style from "./HeroSection.module.scss";
import { Container } from "@mui/material";

export const HeroSection: FC = () => {
  return (
    <Container maxWidth="xl">
      <div className={style.container}>
        <div className={style.section1}>
          <h3 className={style.subTitle}>WE HAVE 150,000+ LIVE JOBS</h3>
          <h1 className={style.title}>
            Find your dream jobs with <span>Jobcy</span>
          </h1>
          <p className={style.description}>
            Find jobs, create trackable resumes and enrich your applications.
            Carefully crafted after analyzing the needs of different industries.
          </p>
          <form className={style.searchForm}>
            <div className={style.formGroup}>
              <input
                type="text"
                className={style.formControl}
                placeholder="Search for jobs"
              />
            </div>
            <div className={style.formGroup}>
              <input
                type="text"
                className={style.formControl}
                placeholder="Location ..."
              />
            </div>
            <button className={style.btnPrimary} type="submit">
              Search
            </button>
          </form>
        </div>
        <div className={style.img}></div>
      </div>
    </Container>
  );
};
