import styles from "./UserCard.module.scss";
import { FaStar } from "react-icons/fa";
import { routes } from "../../../../constants/routes";
import { useRouter } from "next/router";
import { FC } from "react";
import { IUser } from "../../../../utils/context/reducer";

export const UserCard: FC<IUser> = ({
  about,
  currentOccupation,
  first_name,
  desire,
  last_name,
  uid,
}) => {
  const { push } = useRouter();
  return (
    <div className={styles.main}>
      <div className={styles.sec1}>
        <div className={styles.coverImages} />
        <div>
          <p className={styles.profile}>
            {first_name ?? "A"}.{last_name ?? "B"}
          </p>
          <p className={styles.amount}>{desire?.annualSalary}/Year</p>
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
        <p>{currentOccupation}</p>
      </div>
      <p className="line-clamp-3 h-[120px]">{about ?? ""}</p>
      <div className={styles.button_wrapper}>
        <button>Hire Now</button>
        <button onClick={() => push(`${routes.company.users}/${uid}`)}>
          View Profile
        </button>
      </div>
    </div>
  );
};
