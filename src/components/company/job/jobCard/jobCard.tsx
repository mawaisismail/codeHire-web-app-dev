import styles from "./jobCard.module.scss";
import { useRouter } from "next/router";
import { routes } from "../../../../../constants/routes";
import { FC, useContext, useState } from "react";
import { GlobalContext } from "../../../../../utils/context/GlobalProvider";
import { GConfirm } from "@/components/common/g-confirm";
import { IJob } from "../../../../../constants/interfaces/jobs";

interface IJobProps extends IJob {
  hideSave?: boolean;
  hideApply?: boolean;
}

export const JobCard: FC<IJobProps> = ({
  title,
  skills,
  description,
  coverImg,
  employmentType,
  experience,
  location,
  freeWords,
  position,
  qualification,
  responsibilities,
  offer_salary,
  id,
  company,
  companyID,
  updatedAt,
  createdAt,
  hideApply = false,
  hideSave = false,
}) => {
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const [{ baseUser }] = useContext(GlobalContext);
  const { push, asPath } = useRouter();
  const applyJob = () => {
    if (baseUser?.uid) {
      push(`${routes.user.applyJob}/${id}`);
    } else {
      setIsConfirmOpen(true);
    }
  };
  return (
    <div className={styles.main}>
      <div className={styles.sec1}>
        <div
          style={
            coverImg
              ? {
                  backgroundImage: `url(${coverImg})`,
                }
              : {}
          }
          className={styles.coverImages}
        />
        <div>
          <p className={styles.profile}>{title ?? ""}</p>
          <p className={styles.amount}>{company?.name ?? ""}</p>
        </div>
      </div>
      <div className={styles.occupation}>
        <p className={styles.salary}>${offer_salary ?? ""}/ month</p>
        <p className={styles.other}>{experience ?? ""} Year</p>
        <p className={styles.other}>{position ?? ""}</p>
      </div>
      <p className="line-clamp-4 h-[100px]">{description ?? ""}</p>
      <p className={styles.time}>{createdAt ?? ""}</p>
      <div className={styles.button_wrapper}>
        <GConfirm
          title="Apple for this job"
          description="You’re not logged in. Please login to apply for this job."
          open={!hideApply && isConfirmOpen}
          setOpen={() => setIsConfirmOpen(!isConfirmOpen)}
          onConfirm={() => push(routes.user.login)}
        >
          <button
            className="disabled:bg-blue-400"
            disabled={hideApply}
            onClick={applyJob}
          >
            Apply Now
          </button>
        </GConfirm>
        <button
          onClick={() =>
            push(
              asPath.includes("company")
                ? `${routes.user.jobs}/${id}`
                : `${routes.company.jobs}/${id}`
            )
          }
        >
          View Job
        </button>
      </div>
    </div>
  );
};
