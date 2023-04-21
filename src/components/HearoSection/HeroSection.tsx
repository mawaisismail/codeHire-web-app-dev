import React, { FC, useContext } from "react";
import style from "./HeroSection.module.scss";
import { Container } from "@mui/material";
import { GlobalContext } from "../../../utils/context/GlobalProvider";

export const HeroSection: FC = () => {
  const [{ baseUser }] = useContext(GlobalContext);
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
          {baseUser?.uid && (
            <div className={style.searchForm}>
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
              <button className={style.btnPrimary}>Search</button>
            </div>
          )}
        </div>
        <div className={style.img}></div>
      </div>
    </Container>
  );
};
