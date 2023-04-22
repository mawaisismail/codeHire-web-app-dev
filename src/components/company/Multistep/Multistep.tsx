import { useState } from "react";
import styles from "./multistep.module.scss";
import { PersonalInfoForm } from "@/components/company/Multistep/personalInfo/PersonalInfoForm";
import { Signup } from "@/components/signUp/signUp";

export const CompanyMultiStep = () => {
  const [currentStep, setCurrentStep] = useState(0);
  return (
    <div className={styles.main}>
      {currentStep === 0 ? (
        <Signup setCurrentStep={setCurrentStep} />
      ) : (
        <PersonalInfoForm />
      )}
    </div>
  );
};
