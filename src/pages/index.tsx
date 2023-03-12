import { HeroSection } from "@/components/HearoSection/HeroSection";
import { BrowserJob } from "@/components/BrowserJob/BrowserJob";
import { JobNav } from "@/components/JobNavbar/JobNav";
import { UserJob } from "@/components/UserJob/UserJob";
import { GGetInTouch } from "@/components/common/getInTouch/g-getInTouch";
import { Maps } from "@/components/GMaps/Maps";
const Pages = () => {
  return (
    <div>
      <HeroSection />
      <GGetInTouch />
      <BrowserJob />
      <UserJob />
      <JobNav />
      <Maps />
    </div>
  );
};
export default Pages;
