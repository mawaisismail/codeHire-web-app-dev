import { HeroSection } from "@/components/HearoSection/HeroSection";
import { BrowserJob } from "@/components/BrowserJob/BrowserJob";
import { GGetInTouch } from "@/components/common/getInTouch/g-getInTouch";
import { HowItWork } from "@/components/howItWork/JobWork";
import { Client } from "@/components/Browse/Client";
import { Footer } from "@/components/mainLayout/Footer/Footer";
import { useContext } from "react";
import { GlobalContext } from "../../utils/context/GlobalProvider";
import { NewJobs } from "@/components/user/jobs/newJobs/newJobs";

const Pages = () => {
  const [{ baseUser }] = useContext(GlobalContext);
  return (
    <div>
      <HeroSection />
      {baseUser?.uid ? (
        <>
          <BrowserJob />
          <NewJobs />
        </>
      ) : (
        <>
          <HowItWork />
          <Client />
          <GGetInTouch />
        </>
      )}
      <Footer />
    </div>
  );
};
export default Pages;
