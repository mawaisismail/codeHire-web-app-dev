import { useState } from "react";
import styles from "./multistep.module.scss";
import { PersonalInfoForm } from "@/components/company/Multistep/personalInfo/PersonalInfoForm";
import { CompanySignup } from "@/components/company/Multistep/signUp/signUp";

export const CompanyMultiStep = () => {
  const [currentStep, setCurrentStep] = useState(0);
  return (
    <div className={styles.main}>
      {currentStep === 0 ? (
        <CompanySignup setCurrentStep={setCurrentStep} />
      ) : (
        <PersonalInfoForm />
      )}
    </div>
  );
};
