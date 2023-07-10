import styles from "./UserCard.module.scss";
import { FaStar } from "react-icons/fa";
import { routes } from "../../../../constants/routes";
import { useRouter } from "next/router";
import { FC, useContext } from "react";
import { IUser } from "../../../../utils/context/reducer";
import { useMutation } from "@apollo/client";
import { HIRE_USER } from "../../../../constants/graphQL/job";
import { GlobalContext } from "../../../../utils/context/GlobalProvider";
import { IJob } from "../../../../constants/interfaces/jobs";

interface IUserProps {
  user: IUser;
  job?: IJob;
}

export const UserCard: FC<IUserProps> = ({ job, user }) => {
  const [{ baseUser }] = useContext(GlobalContext);
  const { push, asPath } = useRouter();
  const [applyJob] = useMutation(HIRE_USER, {
    fetchPolicy: "network-only",
  });

  const handleApply = async () => {
    await applyJob({
      variables: {
        job_id: job?.id,
        user_id: user?.uid || "",
      },
    });
  };

  return (
    <div className={styles.main}>
      <div className={styles.sec1}>
        <div className={styles.coverImages} />
        <div>
          <p className={styles.profile}>
            {user?.first_name ?? "A"}.{user?.last_name ?? "B"}
          </p>
          <p className={styles.amount}>{user?.desire?.annualSalary}/Year</p>
        </div>
      </div>
      <p className={styles.rating}>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </p>
      <div className={styles.occupation}>
        <p>Exp : {Math.trunc(Math.random() * 10)} Years</p>
        <p>{user?.currentOccupation}</p>
      </div>
      <p className="line-clamp-3 h-[120px]">{user?.about ?? ""}</p>
      <div className={styles.button_wrapper}>
        {asPath.includes("company") && asPath.includes("request") && (
          <button onClick={handleApply}>Hire Now</button>
        )}
        <button style={{ background: "red", border: "red" }}>
          Cancel hire
        </button>
        <button onClick={() => push(`${routes.company.users}/${user?.uid}`)}>
          View Profile
        </button>
      </div>
    </div>
  );
};
