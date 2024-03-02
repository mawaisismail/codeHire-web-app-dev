import styles from "./jobCard.module.scss";
import { useRouter } from "next/router";
import { routes } from "../../../../../constants/routes";
import { FC, useContext, useState } from "react";
import { GlobalContext } from "../../../../../utils/context/GlobalProvider";
import { GConfirm } from "@/components/common/g-confirm";
import { IJob } from "../../../../../constants/interfaces/jobs";
import { formatDate } from "../../../../../utils/common";
import { toast } from "react-toastify";
import { useMutation } from "@apollo/client";
import { CANCELED_HIRE_USER } from "../../../../../constants/graphQL/job";

interface IJobProps extends IJob {
  hideSave?: boolean;
  hideApply?: boolean;
  apply_id?: string;
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
  apply_id,
}) => {
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const [{ baseUser }] = useContext(GlobalContext);
  const { push, asPath } = useRouter();
  const [cancelHire] = useMutation(CANCELED_HIRE_USER, {
    fetchPolicy: "network-only",
  });
  const applyJob = () => {
    if (baseUser?.uid) {
      push(`${routes.user.applyJob}/${id}`);
    } else {
      setIsConfirmOpen(true);
    }
  };

  const cancelHired = async () => {
    if (id) {
      try {
        await cancelHire({
          variables: {
            id: apply_id,
          },
        });
        toast("User Terminated successfully");
        push(routes.company.save);
      } catch (e) {
        toast.error("User does not exit saved");
      }
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
        <p className={styles.salary}>${offer_salary ?? ""} Price</p>
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
              Buy Now
            </button>
          </GConfirm>
        )}
        {baseUser?.uid && (
          <button
            className="disabled:bg-blue-400"
            disabled={hideApply}
            onClick={applyJob}
          >
            Buy Now
          </button>
        )}
        {/*{asPath.includes("request") && (*/}
        {/*  <button*/}
        {/*    style={{ background: "red", border: "red" }}*/}
        {/*    onClick={cancelHired}*/}
        {/*  >*/}
        {/*    Terminate*/}
        {/*  </button>*/}
        {/*)}*/}

        <button
          onClick={() =>
            push(
              asPath.includes("company")
                ? `${routes.company.jobs}/${id}`
                : `${routes.user.jobs}/${id}`
            )
          }
        >
          View Details
        </button>
      </div>
    </div>
  );
};
