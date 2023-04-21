import { useState } from "react";
import { ProfileForm } from "@/components/user/multistep/ProfileForm";
import { Desired } from "@/components/user/multistep/desire/Desired";
import styles from "./multistep.module.scss";
import { Signup } from "@/components/signUp/signUp";

export const UserMultistep = () => {
  const [userInfo, setUserInfo] = useState({});
  const [currentStep, setCurrentStep] = useState(0);
  return (
    <div className={styles.main}>
      {currentStep === 0 ? (
        <Signup setCurrentStep={setCurrentStep} />
      ) : currentStep === 1 ? (
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
