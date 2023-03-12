import { HeroSection } from "@/components/HearoSection/HeroSection";
import { BrowserJob } from "@/components/BrowserJob/BrowserJob";
import { JobNav } from "@/components/JobNavbar/JobNav";
import { UserJob } from "@/components/UserJob/UserJob";
import { GGetInTouch } from "@/components/common/getInTouch/g-getInTouch";
import { NavComp } from "@/components/Nav_Com/NavComp";
import { JobWork } from "@/components/JobWork/JobWork";
import { Client } from "@/components/Browse/Client";
import { Slide } from "@/components/Slide/Slide";
import { Subscribe } from "@/components/Subscribe/Subscribe";

const Pages = () => {
  return (
    <div>
      <HeroSection />
      <GGetInTouch />
      <BrowserJob />
      <JobNav />
      <NavComp />
      <JobWork />
      <Client />
      <UserJob />
      <Slide />
      <Subscribe />
    </div>
  );
};
export default Pages;
