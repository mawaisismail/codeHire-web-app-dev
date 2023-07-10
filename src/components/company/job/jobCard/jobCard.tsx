import styles from "./jobCard.module.scss";
import { useRouter } from "next/router";
import { routes } from "../../../../../constants/routes";
import { FC, useContext, useState } from "react";
import { GlobalContext } from "../../../../../utils/context/GlobalProvider";
import { GConfirm } from "@/components/common/g-confirm";
import { IJob } from "../../../../../constants/interfaces/jobs";
import { formatDate } from "../../../../../utils/common";

interface IJobProps extends IJob {
  hideSave?: boolean;
  hideApply?: boolean;
}

export const JobCard: FC<IJobProps> = ({
  title,
  skills,
  description,
  coverImg,
  experience,
  position,
  id,
  offer_salary,
  company,
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
      <div className="flex gap-2 flex-wrap py-4">
        {skills?.map(
          (skill: string, index: number) =>
            index < 3 && (
              <span
                key={index}
                className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300"
              >
                {skill}
              </span>
            )
        )}{" "}
      </div>
      <p className="line-clamp-4 h-[100px]">{description ?? ""}</p>
      <p className={styles.time}>{formatDate(new Date()) ?? ""}</p>
      <div className={styles.button_wrapper}>
        {!baseUser?.uid && (
          <GConfirm
            title="Apple for this job"
            description="You’re not logged in. Please login to apply for this job."
            open={!hideApply && isConfirmOpen}
            setOpen={() => setIsConfirmOpen(!isConfirmOpen)}
            onConfirm={() => push(routes.user.login)}
          >
            <button className="disabled:bg-blue-400" disabled={hideApply}>
              Apply Now
            </button>
          </GConfirm>
        )}
        {baseUser?.uid && (
          <button
            className="disabled:bg-blue-400"
            disabled={hideApply}
            onClick={applyJob}
          >
            Apply Now
          </button>
        )}

        <button
          onClick={() =>
            push(
              asPath.includes("company")
                ? `${routes.company.jobs}/${id}`
                : `${routes.user.jobs}/${id}`
            )
          }
        >
          View Job
        </button>
      </div>
    </div>
  );
};
