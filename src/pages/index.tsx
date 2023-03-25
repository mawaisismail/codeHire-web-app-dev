import { HeroSection } from "@/components/HearoSection/HeroSection";
import { BrowserJob } from "@/components/BrowserJob/BrowserJob";
import { GGetInTouch } from "@/components/common/getInTouch/g-getInTouch";
import { JobWork } from "@/components/JobWork/JobWork";
import { Client } from "@/components/Browse/Client";
import { Footer } from "@/components/Footer/Footer";
import { NewJobs } from "@/components/user/newJobs/newJobs";

const Pages = () => {
  return (
    <div>
      <HeroSection />
      <BrowserJob />
      <JobWork />
      <Client />
      <NewJobs />
      <GGetInTouch />
      <Footer />
    </div>
  );
};
export default Pages;
