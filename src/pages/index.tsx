import { HeroSection } from "@/components/HearoSection/HeroSection";
import { BrowserJob } from "@/components/BrowserJob/BrowserJob";
import { HowItWork } from "@/components/howItWork/JobWork";
import { Footer } from "@/components/mainLayout/Footer/Footer";
import { useContext } from "react";
import { GlobalContext } from "../../utils/context/GlobalProvider";
import { NewJobs } from "@/components/user/jobs/newJobs/newJobs";
import { OurTeam } from "@/components/owners/OurTeam";
import { AnimatedCounter } from "@/components/AnimatedCounter/AnimatedCounter";
import { Testimonials } from "@/components/owners/testimonials";
import UploadFileForm from "@/components/uploadtest1";

const Pages = () => {
  const [{ baseUser }] = useContext(GlobalContext);
  return (
    <div>
      <HeroSection />
      <BrowserJob />
      <AnimatedCounter />
      <NewJobs />
      <OurTeam />
      <HowItWork />
      <Testimonials />
      <UploadFileForm />
      {/*<GGetInTouch />*/}
      <Footer />
    </div>
  );
};
export default Pages;
