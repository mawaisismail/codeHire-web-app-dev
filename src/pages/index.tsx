import { HeroSection } from "@/components/HearoSection/HeroSection";
import { BrowserJob } from "@/components/BrowserJob/BrowserJob";
import { JobNav } from "@/components/JobNavbar/JobNav";
import { UserJob } from "@/components/UserJob/UserJob";
import { GGetInTouch } from "@/components/common/getInTouch/g-getInTouch";
import { Footer } from "@/components/Footer/Footer";
import { Subscribe } from "@/components/Subscribe/Subscribe";
import { Card } from "@/components/Card/Card";
import { JobWork } from "@/components/JobWork/JobWork";
import { Slide } from "@/components/Slide/Slide";
import { NavComp } from "@/components/Nav_Com/NavComp";
import { Client } from "@/components/Browse/Client";
const Pages = () => {
  return (
    <div>
      <HeroSection />
      <BrowserJob />
      <JobNav />
      <NavComp />
      <JobWork />
      <Client />
      <Slide />
      <Card />
      <UserJob />
      <GGetInTouch />
      <Subscribe />
      <Footer />
    </div>
  );
};
export default Pages;
