import { HeroSection } from "@/components/HearoSection/HeroSection";
import { HowItWork } from "@/components/howItWork/JobWork";
import { Client } from "@/components/Browse/Client";
import { GGetInTouch } from "@/components/common/getInTouch/g-getInTouch";
import { Footer } from "@/components/mainLayout/Footer/Footer";
import { useContext } from "react";
import { GlobalContext } from "../../../utils/context/GlobalProvider";
import { NewUsers } from "@/components/company/newusers/newUsers";

const Company = () => {
  const [{ baseUser }] = useContext(GlobalContext);
  return (
    <div>
      <HeroSection />
      {baseUser?.uid ? (
        <>
          <NewUsers />
        </>
      ) : (
        <>
          <Client />
          <GGetInTouch />
        </>
      )}
      <HowItWork />
      <Footer />
    </div>
  );
};

export default Company;
