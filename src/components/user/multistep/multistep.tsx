import { useState } from "react";
import { ProfileForm } from "@/components/user/multistep/ProfileForm";
import { Desired } from "@/components/user/multistep/desire/Desired";
import styles from "./multistep.module.scss";

export const UserMultistep = () => {
  const [userInfo, setUserInfo] = useState({});
  const [currentStep, setCurrentStep] = useState(0);
  return (
    <div className={styles.main}>
      {currentStep === 0 ? (
        <ProfileForm
          setCurrentStep={setCurrentStep}
          setUserInfo={setUserInfo}
        />
      ) : (
        <Desired setUserInfo={setUserInfo} info={userInfo} />
      )}
    </div>
  );
};
