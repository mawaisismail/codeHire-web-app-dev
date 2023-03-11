import { HeroSection } from "@/components/HearoSection/HeroSection";
import { BrowserJob } from "@/components/BrowserJob/BrowserJob";
import { JobNav } from "@/components/JobNavbar/JobNav";
import { UserJob } from "@/components/UserJob/UserJob";
const Pages = () => {
  return (
    <div>
      <HeroSection />
      <BrowserJob />
      <UserJob />
      <JobNav />
    </div>
  );
};
export default Pages;
