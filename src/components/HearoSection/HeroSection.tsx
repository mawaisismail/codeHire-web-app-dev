import React, { useState } from "react";
import style from "./HeroSection.module.scss";
import { Container } from "@mui/material";

interface Location {
  id: number;
  name: string;
}

interface Props {}

export const HeroSection: React.FC<Props> = () => {
  const [selectedLocation, setSelectedLocation] = useState<Location>({
    id: 1,
    name: "New York",
  });

  const locations: Location[] = [
    { id: 1, name: "New York" },
    { id: 2, name: "Los Angeles" },
    { id: 3, name: "San Francisco" },
    { id: 4, name: "Chicago" },
    { id: 5, name: "Houston" },
  ];

  const handleLocationChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    const locationId = parseInt(e.target.value);
    const location = locations.find((l) => l.id === locationId);
    if (location) {
      setSelectedLocation(location);
    }
  };

  return (
    <Container maxWidth="xl">
      <section className={style.heroSection}>
        <div className={style.container}>
          <div className={style.row}>
            <div className={style.colMd6}>
              <h3 className={style.subTitle}>WE HAVE 150,000+ LIVE JOBS</h3>
              <h1 className={style.title}>
                Find your dream jobs with <span>Jobcy</span>
              </h1>
              <p className={style.description}>
                Find jobs, create trackable resumes and enrich your
                applications. Carefully crafted after analyzing the needs of
                different industries.
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
                  <select
                    className={style.formControl}
                    value={selectedLocation.id}
                    onChange={handleLocationChange}
                  >
                    {locations.map((location) => (
                      <option key={location.id} value={location.id}>
                        {location.name}
                      </option>
                    ))}
                  </select>
                </div>
                <button className={style.btnPrimary} type="submit">
                  Search
                </button>
              </form>
            </div>
            <div className={style.colMd66}>
              <div className={style.logo}>
                <p className={style.img}></p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};
