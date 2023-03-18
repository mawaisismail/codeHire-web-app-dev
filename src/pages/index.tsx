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
import { Footer } from "@/components/Footer/Footer";
import { ProfileForm } from "@/components/user/multistep/ProfileForm";

const Pages = () => {
  return (
    <div>
      <HeroSection />
      <GGetInTouch />
      <ProfileForm />
      <BrowserJob />
      <JobNav />
      <NavComp />
      <JobWork />
      <Client />
      <UserJob />
      <Slide />
      <Subscribe />
      <Footer />
    </div>
  );
};
export default Pages;
