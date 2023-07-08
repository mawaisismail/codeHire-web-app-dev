import styles from "./mainDetails.module.scss";
import { FaStar } from "react-icons/fa";
import { Documents } from "@/components/user/userProfilePage/profile/documents/documents";
import { UserLocation } from "@/components/user/userProfilePage/profile/UserLocation/UserLocation"
import { useContext } from "react";
import { GlobalContext } from "../../../../../../utils/context/GlobalProvider";

export const MainDetails = () => {
  const [{ user }] = useContext(GlobalContext);
  return (
    <div className={styles.main}>
      <div className={styles.about}>
        <div className={styles.profileImage} />
        <p className={styles.profession}>
          <span className="py-2">
            {user?.first_name ?? "A"}.{user?.last_name?.charAt(0) ?? "B"}
          </span>
          <span>{user?.currentOccupation ?? ""}</span>
        </p>
        <p className={styles.rating}>
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </p>
      </div>
      <div className={styles.documents}>
        <p className={styles.heading}>Documents</p>
        <Documents />
        <Documents />
      </div>
      <div className={styles.contact}>
        <p className={styles.heading}>Contact</p>
        <div className={styles.main_content}>
          <div className={styles.headings}>
            <p>Email</p>
            <p>Phone</p>
            <p>Location</p>
          </div>
          <div className={styles.heading_data}>
            <p>{user?.email ?? ""}</p>
            <p>{user?.phone ?? ""}</p>
            <p>{user?.address?.Country ?? ""}</p>
          </div>
        </div>
      </div>
      <UserLocation/>
    </div>
  );
};
